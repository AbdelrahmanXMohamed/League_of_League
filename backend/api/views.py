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

@csrf_exempt
def data_for_user(request):
    if request.method == "POST":
        body=json.loads(request.body)
        user = requests.get(f'https://{body["region"]}.api.riotgames.com/lol/summoner/v4/summoners/by-name/{body["user"]}?api_key={api_key}')
        match=requests.get(f"https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/{user.json()['puuid']}/ids?start=0&count=100&api_key={api_key}")
        return JsonResponse({"user":user.json(),"match":match.json()},safe=False)
