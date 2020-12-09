from django.shortcuts import render
from bson.objectid import ObjectId
# from django.views.decorators.csrf import csrf_exempt

# Create your views here.
from django.http import JsonResponse, HttpResponse, HttpResponseBadRequest, HttpResponseForbidden
from .mongoHelper import getFortuneTellers, getFortuneTeller, checkUser

def list(request):
    print("list")
    fortuneTellers = getFortuneTellers()
    ftList = []
    for ft in fortuneTellers:
        ft['id'] = str(ft['_id'])
        del ft['_id']
        ftList.append(ft)
    return JsonResponse(ftList, safe=False)

def specific(request, id):
    print("one fortune teller")
    ft = getFortuneTeller(id)
    ft['id'] = str(ft['_id'])
    del ft['_id']
    return JsonResponse(ft)
    # return HttpResponseBadRequest("FortuneTeller not found in database")

def login(request):
    print("login - fortune teller")
    logged = checkUser(request.body)
    if (logged['logged']):
        return JsonResponse({"id":str(logged['id'])})
    else:
        return HttpResponseForbidden()
