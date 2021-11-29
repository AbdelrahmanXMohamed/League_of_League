from django.shortcuts import render
from django.http import JsonResponse
import requests
import config
# Create your views here.

def test(request,user):
    r = requests.get(f'https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/{user}?api_key={confing.api_key}')
    print(r.json())
    return JsonResponse({"massage": "hello world" },safe=False)

