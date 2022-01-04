from django.http.response import Http404
from django.shortcuts import render
from django.http import JsonResponse
import requests
from  .config import api_key
from .models import UUID,Favorite
from .utils import remove_fields,current_version
from rest_framework import generics,status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import FavoriteSerializer

# Create your views here.

def current_champtions(request):
    r=requests.get(f'http://ddragon.leagueoflegends.com/cdn/{current_version()}/data/en_US/champion.json')
    return JsonResponse(r.json())

def certain_chamption(request,id):
    r =requests.get(f'http://ddragon.leagueoflegends.com/cdn/{current_version()}/data/en_US/champion/{id}.json')
    return JsonResponse(r.json(),safe=False)

def data_for_user(request,user):

    platforms=["BR1","EUN1","EUW1","JP1","KR","LA1","LA2","NA1","OC1","TR1","RU"]
    result_user=[]
    for platform in platforms:
        user_data = requests.get(f'https://{platform.lower()}.api.riotgames.com/lol/summoner/v4/summoners/by-name/{user}?api_key={api_key}')
        if user_data.status_code == 200:
            UUID.objects.get_or_create(UUID=user_data.json()["puuid"],Platform=platform)
            result_user.append({"user":user_data.json(),"platform":platform})     
    if len(result_user)==0:
        return JsonResponse({"users": result_user,"version":current_version(),"message":"No user found"},safe=False)
    return JsonResponse({"users": result_user,"version":current_version()},safe=False)

@api_view(['GET'])
def matches_for_user(request,puuid):

    print(request)
    regions=["AMERICAS","ASIA","EUROPE"]
    platform=UUID.objects.get(UUID=puuid)

    user_region,user_data="",""
    matches=[]
    detailed_matches=[]
    for region in regions:
        match=requests.get(f"https://{region.lower()}.api.riotgames.com/lol/match/v5/matches/by-puuid/{puuid}/ids?start=0&count=5&api_key={api_key}")
        if len(match.json()) != 0:
            matches=match.json()
            user_region=region
    for match in matches:
        match=requests.get(f"https://{user_region.lower()}.api.riotgames.com/lol/match/v5/matches/{match}?api_key={api_key}")
        match.json()["metadata"]['participants'].index(puuid)
        user_index=match.json()["metadata"]['participants'].index(puuid)
        wantedkey=["championId",
        "championName",
        "champLevel",
        "deaths",
        "doubleKills",
        "firstBloodKill",
        "item0",
        "item1",
        "item2",
        "item3",
        "item4",
        "item5",
        "item6",
        "kills",
        "lane",
        "pentaKills",
        "summonerName",
        "tripleKills",
        "win",
        "assists",
        "quadraKills"]
        detailed_matches.append(remove_fields(match.json()["info"]['participants'][user_index],wantedkey))
    
    user_data=requests.get(f"https://{platform.Platform.lower()}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/{puuid}?api_key={api_key}").json()
    if request.user.is_authenticated:
        print(Favorite.objects.filter(User=request.user,FavoriteUUID=platform).exists())
        if Favorite.objects.filter(User=request.user,FavoriteUUID=platform).exists():
            return JsonResponse({"match":detailed_matches,'favorite':True,"user_info":user_data,"version":current_version()},safe=False)
    return JsonResponse({"match":detailed_matches,'favorite':False,"user_info":user_data,"version":current_version()},safe=False)

class FavoriteAPIView(generics.GenericAPIView):
    premission_classes=[IsAuthenticated]
    serializer_class=FavoriteSerializer
    def get_object(self,user):
        try:
            if user.is_authenticated:
                return Favorite.objects.get(User=user)
            return Http404
        except:
            return Favorite.objects.create(User=user)        
    
    def get(self,request):
        result_user=[]
        data=self.get_object(request.user)
        serializer=self.serializer_class(data)
        if not serializer.data:
            return Response({"message":'No data found'},status=status.HTTP_400_BAD_REQUEST)
        for favorite in serializer.data['FavoriteUUID']:
            user_data=requests.get(f"https://{favorite['Platform'].lower()}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/{favorite['UUID']}?api_key={api_key}")
            if user_data.status_code == 200:
                user_data=user_data.json()
                user_data['status']='Success'
            else:
                user_data=user_data.json()
                user_data['status']='Fail'
            user_data['version']=current_version()
            user_data['platform']=favorite['Platform']
            result_user.append(user_data)    
        return Response({'data':result_user},status=status.HTTP_200_OK)
    
    def put(self,request):
        data= self.get_object(request.user)
        id=UUID.objects.get(UUID=request.data["UUID"])
        if not Favorite.objects.filter(User=request.user,FavoriteUUID=id).exists():   
            data=data.FavoriteUUID.add(id)
            return Response({"message":"Added Successfully"},status=status.HTTP_200_OK)
        data=data.FavoriteUUID.remove(id)
        return Response({"message":"Removed Successfully"},status=status.HTTP_200_OK)

# def add_favorite(request,puuid):
    
#     pass