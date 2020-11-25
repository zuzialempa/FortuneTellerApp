from pymongo import MongoClient
client = MongoClient('mongodb://localhost:27017')
db = client.admin
db = client.fortuneTellersApp

fortuneTellersSamples = [
    {
        "name": "Wróżka Sabrina",
        "available": True,
        "descriptionShort": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "descriptionLong": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "tags": ["miłość", "kariera", "rodzina"],
        "image": "https://material.angular.io/assets/img/examples/shiba2.jpg"
    },
    {
        "name": "Wróżka Gabriela",
        "available": False,
        "descriptionShort": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "descriptionLong": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "tags": ["miłość", "rodzina"],
        "image": "https://material.angular.io/assets/img/examples/shiba2.jpg"
    },
    {
        "name": "Wróżka Sabrina",
        "available": True,
        "descriptionShort": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "descriptionLong": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "tags": ["miłość", "kariera", "rodzina"],
        "image": "https://material.angular.io/assets/img/examples/shiba2.jpg"
    },
    {
        "name": "Wróżka Gabriela",
        "available": False,
        "descriptionShort": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "descriptionLong": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "tags": ["miłość", "rodzina"],
        "image": "https://material.angular.io/assets/img/examples/shiba2.jpg"
    }
]

result = db.reviews.insert_many(fortuneTellersSamples)
print(result)

result = list(db.reviews.find())
print(result)