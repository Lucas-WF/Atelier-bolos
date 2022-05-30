from flask_restful import Resource

class Users(Resource):
    def get(self):
        return {
            "id": "<some-id>",
            "name": "John Doe",
            "email": "johndoe@gmail.com"
        }