# API
Endpoint: https://paperclip.link/api


## Messages
- Get messages
    - Request: 
        - Type: GET
        - Endpoint: /messages
        - Params: userId
    
    - Response:
        - Type: Array
        - Example:
        [
            {
                "sender_id": 0,
                "recipient_id": 1,
                "date": "2017-06-10_11:38:14",
                "message": "Thought four loss better out. Policy hair place. Guy only attack per have at various.",
                "sender_username": "Thomas_0",
                "recipient_username": "Bianca_1"
            },
        ]


- Post a new message
    - Request: 
        - Type: POST
        - Endpoint: /messages
        - Body: {
            senderId: integer,
            recipientId: integer,
            date: "YYYY-MM-DD HH:MM:SS",
            message: text
        }
        



