from django.urls import path
from  . import views
urlpatterns = [
path("", views.test,name="index"),
path("currentChampions", views.current_champtions,name="current_champtions"),
path("dataOfCertainUser/<str:user>",views.data_for_user,name="data_for_user"),
path("certainChamption/<str:id>",views.certain_chamption,name="certain_chamption")
]
