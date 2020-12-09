from django.urls import path

from . import views

websocket = path
urlpatterns = [
    path('', views.list, name='list'),
    path('test/login', views.login, name='login'),
    path('<str:id>', views.specific, name='specific'),
]