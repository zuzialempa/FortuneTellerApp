
# Api description for FortuneTeller backend App

### FortuneTellers
----

#### GET fortuneteller/

This endpoind allow you to list all fortuneTellers which are registered in system.

Example request:
```http://localhost:8000/fortuneteller```

Example response:
```
[
    {
        "name": "Wróżka Sabrina",
        "descriptionShort": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "descriptionLong": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "tags": [
            "miłość",
            "kariera",
            "rodzina"
        ],
        "image": "https://material.angular.io/assets/img/examples/shiba2.jpg",
        "id": "5ff30429ec253ac1c816b830"
    },
    {
        "name": "Wróżka Gabriela",
        "descriptionShort": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "descriptionLong": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "tags": [
            "miłość",
            "rodzina"
        ],
        "image": "https://material.angular.io/assets/img/examples/shiba2.jpg",
        "id": "5ff30429ec253ac1c816b831"
    }
]
```

#### GET fortuneteller/{fortuneTeller_id}

This endpoint return information about fortuneTeller with specified fortuneTeller_id

Example request:
```http://localhost:8000/fortuneteller/5ff30429ec253ac1c816b830```

Example response:
```
{
    "name": "Wróżka Sabrina",
    "descriptionShort": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    "descriptionLong": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    "tags": [
        "miłość",
        "kariera",
        "rodzina"
    ],
    "image": "https://material.angular.io/assets/img/examples/shiba2.jpg",
    "id": "5ff30429ec253ac1c816b830"
}
```

#### POST fortuneteller/test/login

This endpoint allow fortuneTellers registered in system to login

Example request:
``http://localhost:8000/fortuneteller/test/login``
```
{
    "login":"Sabrinka",
    "password":"test"
}
```

Example response:
```
{
    "id": "5ff30429ec253ac1c816b830"
}
```
-------

## Chats
---

#### GET chat/{fortuneTeller_id}

This endpoint return all chats for fortunteller with specified fortuneTeller_id.

Example request:
``http://localhost:8000/chat/5ff30429ec253ac1c816b830``

Example response:
```
[
    {
        "ftId": "5ff30429ec253ac1c816b830",
        "userId": "rc8FdD6U7zVQQ74soU4mTh",
        "messages": [
            {
                "message": "test",
                "author": "rc8FdD6U7zVQQ74soU4mTh"
            }
        ]
    },
    {
        "ftId": "5ff30429ec253ac1c816b830",
        "userId": "rc8FdD6U7zVQQ74soU5omg",
        "messages": [
            {
                "message": "dzień dobry",
                "author": "rc8FdD6U7zVQQ74soU5omg"
            }
        ]
    }
]
```

#### GET chat/{fortuneTeller_id}/{user_id}

This endpoint return chat for specied fortuneTeller and user

Example request:
`` http://localhost:8000/chat/5ff30429ec253ac1c816b830/rc8FdD6U7zVQQ74soU4mTh ``

Example response:
```
{
    "ftId": "5ff30429ec253ac1c816b830",
    "userId": "rc8FdD6U7zVQQ74soU4mTh",
    "messages": [
        {
            "message": "test",
            "author": "rc8FdD6U7zVQQ74soU4mTh"
        }
    ]
}
```

---

# Websockets description

To connect to realtime chat you can use websockets with url ``ws/chat/{fortuneTeller_id}``. 
Below you can find example:

```
this.chatSocket = new WebSocket(`ws://localhost:8000/ws/chat/${ftId}/`);

this.chatSocket.onmessage = (e) => {
    console.log(e.data.message)
};

this.chatSocket.onclose = function (e) {
    console.error('Chat socket closed unexpectedly');
};

this.chatSocket.send(JSON.stringify(newMessage));
```