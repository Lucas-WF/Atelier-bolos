from flask_restful import Resource
from flask import request

class Login(Resource):
    def post(self):
        data = request.get_json()
        print(data)
        return data, 200