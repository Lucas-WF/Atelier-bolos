from modules.login.resource.login import Login
from modules.root.resource.root import Root
from modules.register.resource.register import Register
from modules.admin.resource.admin import Admin
from modules.products.resource.single.product import Product
from modules.products.resource.multi.all_products import AllProducts

from flask import Flask
from flask_restful import Api
from db import db
from flask_cors import CORS
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///project.db'
api = Api(app)

CORS(app, expose_headers=['Allow'])
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['CORS_ENABLED'] = True

db.init_app(app)
migrate = Migrate(app, db)


@app.before_first_request
def create_tables():
    db.create_all()


api.add_resource(Root, '/', )
api.add_resource(Login, "/login", )
api.add_resource(Register, "/register", )
api.add_resource(Admin, "/admin", )
api.add_resource(AllProducts, "/product/", )
api.add_resource(Product, "/product/<int:product_id>", )

if __name__ == "__main__":
    app.run(debug=True)
