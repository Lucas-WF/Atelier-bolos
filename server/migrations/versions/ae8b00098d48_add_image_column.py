"""Add image column

Revision ID: ae8b00098d48
Revises: 69c3f2ee2765
Create Date: 2022-06-20 16:49:33.232711

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ae8b00098d48'
down_revision = '69c3f2ee2765'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('products', sa.Column('image', sa.BLOB(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('products', 'image')
    # ### end Alembic commands ###
