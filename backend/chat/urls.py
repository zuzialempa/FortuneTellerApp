from django.urls import path

from . import views

urlpatterns = [
    path('<str:ftId>/<str:userId>', views.chat, name='chat'),
    path('<str:ftId>', views.chats, name='chats'),
]