from django.urls import path

from . import views

urlpatterns = [
    path('', views.list, name='list'),
    path('<str:id>', views.specific, name='specific'),
]