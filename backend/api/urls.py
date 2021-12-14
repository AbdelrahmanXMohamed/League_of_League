from django.urls import path,include
from  . import views
urlpatterns = [
path("", views.test,name="index"),
path("currentChampions", views.current_champtions,name="current_champtions"),
path("dataOfCertainUser/<str:user>",views.data_for_user,name="data_for_user"),
path("certainChamption/<str:id>",views.certain_chamption,name="certain_chamption"),
path("matchesForUser/<str:puuid>",views.matches_for_user,name="matches_for_user"),
path("users",views.user_list.as_view(),)
# path("auth/",include('djoser.urls')),
# path("auth/",include('djoser.urls.jwt'))
]
