from pymongo import MongoClient
from bson.objectid import ObjectId
import json

client = MongoClient('mongodb://localhost:27017')
db = client.admin
db = client.fortuneTellersApp


def getFortuneTellers():
    result = list(db.reviews.find({}, {
        "name": 1,
        "descriptionShort": 1,
        "descriptionLong": 1,
        "tags": 1,
        "image": 1
    }))
    print(result[0])
    return result


def getFortuneTeller(id):
    result = db.reviews.find_one({"_id": ObjectId(id)}, {
        "name": 1,
        "descriptionShort": 1,
        "descriptionLong": 1,
        "tags": 1,
        "image": 1
    })
    return result


def getChats(ftId, userId):
    result = db.reviews.find_one({
        "_id": ObjectId(ftId),
        "chats": {
            "$elemMatch": {"userId": userId}
        }
    }, { "chats" })
    return result

def checkUser(authData):
    data = json.loads(authData)
    print(data)
    result = db.reviews.find_one(
        {
            "authData.password": data['password'], 
            "authData.login": data['login']
        }
    )
    print(result)
    print(result != None)
    if (result == None):
        return {
            "logged": False
        }
    return {
        "logged": True,
        "id": result["_id"]
    }
