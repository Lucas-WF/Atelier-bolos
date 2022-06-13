from db import db

class Products(db.Model):
    __tablename__ = 'products'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False, unique=False)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.String(255), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    date_created = db.Column(db.DateTime, nullable=False)
    category = db.Column(db.String(80), nullable=False)
    image_path = db.Column(db.String(255), nullable=True)

    def __init__(self, name, price, description, quantity, date_created, category, image_path=None):
        self.name = name
        self.price = price
        self.description = description
        self.quantity = quantity
        self.date_created = date_created
        self.category = category
        self.image_path = image_path

    @classmethod
    def find_by_name(cls, name):
        return cls.query.filter_by(name=name).first()

    @classmethod
    def find_by_id(cls, id):
        return cls.query.filter_by(id=id).first()

    @classmethod
    def list_all(cls):
        return cls.query.all()

    @classmethod
    def save_product(cls, product):
        db.session.add(product)
        db.session.commit()

    @classmethod
    def update_product(cls, product):
        cls.query.filter_by(id=product.id).update(product.as_dict())
        db.session.commit()

    @classmethod
    def delete_product(cls, product):
        cls.query.filter_by(name=product.name).delete()
        db.session.commit()

    def as_dict(self):
       return {c.name: getattr(self, c.name) for c in self.__table__.columns}
    
    def __repr__(self) -> str:
        return f'<Product {self.name}>'
