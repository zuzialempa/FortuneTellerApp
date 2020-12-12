from django.shortcuts import render
from bson.objectid import ObjectId
from django.http import JsonResponse, HttpResponse, HttpResponseBadRequest, HttpResponseForbidden
from .mongoHelper import getChat, getChats

def chat(request, ftId, userId):
    chat = getChat(ftId, userId)
    del chat["_id"]
    if(chat == None):
        return JsonResponse({})
    else:
        return JsonResponse(chat)

def chats(request, ftId):
    chats = getChats(ftId)
    chatsList = []
    for ch in reversed(chats):
        del ch['_id']
        chatsList.append(ch)
    return JsonResponse(chatsList, safe=False)