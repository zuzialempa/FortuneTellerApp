# FortuneTellerApp

## FrontEnd from angular

### Uruchomienie aplikacji:
1. instalacja zależności ```npm i```
2. uruchomienie ```ng serve```

### Konfiguracja:
????

## Backend

### Libraries:
```
python -m pip install -U channels django pymongo channels_redis django-cors-headers channels_redis
```

### Run server
```python manage.py runserver 8000```

### Databases

<!-- Redis jest wykorzystywany przez channels -->
```docker run -p 6379:6379 -d redis:5```
<!-- W mongo sa składowane dane -->
```docker run -p 27017:27017 -d mongo```

Or use docker-compose tool, by calling `docker-compose up -d` in root directory of this project.