from pymongo import MongoClient
client = MongoClient('mongodb://localhost:27017')
db = client.admin
db = client.fortuneTellersApp

fortuneTellersSamples = [
    {
        "name": "Wróżka Sabrina",
        "descriptionShort": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "descriptionLong": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "tags": ["miłość", "kariera", "rodzina"],
        "image": "https://material.angular.io/assets/img/examples/shiba2.jpg",
        "authData": {
            "password":"test",
            "login": "Sabrinka"
        },
        "chats":[
            {
                "userId": "11",
                "messages": [
                    {
                        "message": "test test test",
                        "author": "Wróżka Sabrina"
                    },
                    {
                        "message": "test test test",
                        "author": "User"
                    }
                ]
            }
        ]
    },
    {
        "name": "Wróżka Gabriela",
        "descriptionShort": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "descriptionLong": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "tags": ["miłość", "rodzina"],
        "image": "https://material.angular.io/assets/img/examples/shiba2.jpg",
        "authData": {
            "password":"test",
            "login": "Gabi"
        },
        "chats":[]
    },
    {
        "name": "Wróżka Sabrina",
        "descriptionShort": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "descriptionLong": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "tags": ["miłość", "kariera", "rodzina"],
        "image": "https://material.angular.io/assets/img/examples/shiba2.jpg",
        "authData": {
            "password":"test",
            "login": "Sabi"
        },
        "chats":[]
    },
    {
        "name": "Wróżka Gabriela2",
        "descriptionShort": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "descriptionLong": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "tags": ["miłość", "rodzina"],
        "image": "https://material.angular.io/assets/img/examples/shiba2.jpg",
        "authData": {
            "password":"test",
            "login": "Gabus"
        },
        "chats":[]
    }
]

result = db.reviews.insert_many(fortuneTellersSamples)
print(result)

result = list(db.reviews.find())
print(result)