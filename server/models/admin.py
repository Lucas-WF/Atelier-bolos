from db import db

class User(db.Model):
    __tablename__ = 'admin'
    id = db.Column(db.Integer, primary_key=True)
    admin_login = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)

    def __init__(self, admin_login, password):
        self.admin_login = admin_login
        self.password = password


    @classmethod
    def find_by_admin_login(cls, admin_login):
        admin_login = cls.query.filter_by(admin_login=admin_login).first()
        if admin_login is not None:
            return admin_login
        return None

    @classmethod
    def save_admin(cls, admin):
        db.session.add(admin)
        db.session.commit()

    def __repr__(self):
        return '<Admin %r>' % self.admin_login