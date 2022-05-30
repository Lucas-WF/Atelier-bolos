from flask import Flask
from flask_restful import Api
from modules.login.resource.login import Login
from modules.root.resource.root import Root
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///project.db'
api = Api(app)
CORS(app, expose_headers=['Allow'])
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['CORS_ENABLED'] = True
db = SQLAlchemy(app)

@app.before_first_request
def create_tables():
    db.create_all()

api.add_resource(Root, '/', )
api.add_resource(Login, "/login",)

if __name__ == "__main__":
    app.run(debug=True)
