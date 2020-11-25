from pymongo import MongoClient
from bson.objectid import ObjectId

client = MongoClient('mongodb://localhost:27017')
db = client.admin
db = client.fortuneTellersApp

def getFortuneTellers():
    result = list(db.reviews.find())
    print(result[0])
    return result

def getFortuneTeller(id):
    result = db.reviews.find_one({"_id": ObjectId(id)})
    return result