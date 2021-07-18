from sqlalchemy import Column, Integer, String, ForeignKey, Table, MetaData, Sequence
from sqlalchemy.orm import create_engine
import uuid

db_string = "postgresql://OrangeB0lt_demo_db_connection:9p54_McAnEACjE9R6KsC99jxXs3i@db.bit.io"

db = create_engine(db_string)

# Create Table: Users
# user_id: "int", username: "str",  password_hash: "str"
 
meta = MetaData(db)  
user_table = Table('Users', meta,  
                       Column('user_id', Integer, primary_key=True, autoincrement=True, notnull=True),
                       Column('username', String, notnull=True),
                       Column('password', String, notnull=True))

def UserPost(usrnm, pswrd):
    USER_ID = Sequence('user_id_seq', start=1000)
    with db.connect() as conn:
        user_table.create()
        create_user = user_table.insert().values(user_id=USER_ID, username=usrnm, password=pswrd)