from flask import Flask
from flask_restful import Api
from modules.root.root import Root
from modules.users.users import Users

app = Flask(__name__)
api = Api(app)

api.add_resource(Root, "/",)
api.add_resource(Users, "/users/",)

if __name__ == "__main__":
    app.run(debug=True)
