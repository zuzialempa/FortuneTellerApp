from pymongo import MongoClient
from bson.objectid import ObjectId
import json

client = MongoClient('mongodb://localhost:27017')
db = client.admin
db = client.fortuneTellersApp


def saveMessage(ftId, newMessage):
    result = db.chats.update({'ftId': ftId, 'userId': newMessage['userId']},
                             {'$addToSet': {'messages': {
                                 'message': newMessage['message'], 'author': newMessage['author']}}},
                              True)


def getChat(ftId, userId):
    result = db.chats.find_one({
        "ftId": ftId,
        "userId": userId,
    })
    print("getchat - ", result)
    return result

def getChats(ftId):
    result = list(db.chats.find({"ftId": ftId}))
    print("getchats - ", result)
    return result