import re
from django.shortcuts import render
from django.http import JsonResponse
import requests
from  .config import api_key
from django.views.decorators.csrf import csrf_exempt
import json
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
    regions=["AMERICAS","ASIA","EUROPE"]
    result_user=[]
    for platform in platforms:
        user_data = requests.get(f'https://{platform.lower()}.api.riotgames.com/lol/summoner/v4/summoners/by-name/{user}?api_key={api_key}')
        if user_data.status_code == 200:
           result_user.append({"user":user_data.json(),"platform":platform}) 
    print(result_user)
    if len(result_user)==0:
        return JsonResponse({"users": result_user,"version":current_version(),"message":"No user found"},safe=False)
           # match=requests.get(f"https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/{user.json()['puuid']}/ids?start=0&count=100&api_key={api_key}")
        # https://europe.api.riotgames.com/lol/match/v5/matches/EUN1_2993294973?api_key=RGAPI-f464767e-dfda-4733-bd0a-b4ed0bc65df3
    '''"match":match.json()'''
    return JsonResponse({"users": result_user,"version":current_version()},safe=False)
