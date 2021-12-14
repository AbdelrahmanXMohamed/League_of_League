import re
from django.shortcuts import render
from django.http import JsonResponse
import requests

from .serializers import UserSerializer
from  .config import api_key
from .models import UUID, User
import json
from .utils import remove_fields
from rest_framework.generics import ListAPIView
# Create your views here.

def test(request):
    r = requests.get(f'https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/xbenx99?api_key={api_key}')
    return JsonResponse({"massage": "hello world" },safe=False)

def current_version():
    r=requests.get("https://ddragon.leagueoflegends.com/api/versions.json")
    return r.json()[0]

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
            try:
                UUID.objects.get(UUID=user_data.json()["puuid"])
            except:
                UUID.objects.create(UUID=user_data.json()["puuid"])
            result_user.append({"user":user_data.json(),"platform":platform})     
    if len(result_user)==0:
        return JsonResponse({"users": result_user,"version":current_version(),"message":"No user found"},safe=False)
           # match=requests.get(f"https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/{user.json()['puuid']}/ids?start=0&count=100&api_key={api_key}")
    '''"match":match.json()'''
    return JsonResponse({"users": result_user,"version":current_version()},safe=False)

def matches_for_user(request,puuid):

    regions=["AMERICAS","ASIA","EUROPE"]
    user_region=""
    matches=[]
    for region in regions:
        match=requests.get(f"https://{region.lower()}.api.riotgames.com/lol/match/v5/matches/by-puuid/{puuid}/ids?start=0&count=5&api_key={api_key}")
        if len(match.json()) != 0:
            matches=match.json()
            user_region=region
    for match in matches:
        match=requests.get(f"https://{user_region.lower()}.api.riotgames.com/lol/match/v5/matches/{match}?api_key={api_key}")
        match.json()["metadata"]['participants'].index(puuid)
        user_index=match.json()["metadata"]['participants'].index(puuid)
        wantedkey=["champtionId",
        "champtionName",
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
        data=remove_fields(match.json()["info"]['participants'][user_index],wantedkey)
        print(data)
        

    return JsonResponse({"match":matches},safe=False)

class user_list(ListAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerializer