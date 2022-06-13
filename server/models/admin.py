from db import db

class Admins(db.Model):
    __tablename__ = 'admins'
    id = db.Column(db.Integer, primary_key=True)
    admin_login = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)

    def __init__(self, admin_login, password):
        self.admin_login = admin_login
        self.password = password


    @classmethod
    def find_by_admin_login(cls, admin_login):
        login = cls.query.filter_by(admin_login=admin_login).first()
        if login is not None:
            return login
        return None

    @classmethod
    def save_admin(cls, admin):
        db.session.add(admin)
        db.session.commit()

    def __repr__(self) -> str:
        return f'<Admin {self.admin_login}>'
