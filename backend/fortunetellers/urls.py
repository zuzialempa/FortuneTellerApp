from django.urls import path

from . import views

urlpatterns = [
    path('', views.list, name='list'),
    path('test/login', views.login, name='login'),
    path('<str:id>', views.specific, name='specific'),
]