from django.conf.urls import include
from django.urls import path
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('fortuneteller/', include('fortunetellers.urls')),
    path('chat/', include('chat.urls')),
]
