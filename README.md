# FortuneTellerApp

You can run application with docker, just run
```
docker-compose up
```
It will build images for backend, frontend and databases.

Or you can try to run it locally:

## FrontEnd from angular

### Run frontend app:
1. Install dependencies with ```npm i```
2. Run application ```ng serve```

### Configuration:

## Backend

### Libraries:
```
python -m pip install -U channels django pymongo channels_redis django-cors-headers channels_redis
```
or use
``` 
pip install -r requirements.txt
```

### Run server
```python manage.py runserver 8000```

### Databases

```docker run -p 6379:6379 -d redis:5```
```docker run -p 27017:27017 -d mongo```
