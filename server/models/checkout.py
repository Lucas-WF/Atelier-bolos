from db import db

class Products(db.Model):
    __tablename__ = 'products'
    id = db.Column(db.Integer, primary_key=True)
    value = db.Column(db.Integer, nullable=False, unique=False)
    message = db.Column(db.String(80), nullable=True, unique=False)



    def as_dict(self):
       return {c.name: getattr(self, c.name) for c in self.__table__.columns}
    
    def __repr__(self) -> str:
        return f'<Product {self.name}>'
