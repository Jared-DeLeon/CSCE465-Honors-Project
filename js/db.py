import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="temporary",
  database = "mydatabase"
)

mycursor = mydb.cursor()

# mycursor.execute("CREATE TABLE Passwords (Password varchar(255))")

 # asdf' OR 1 = 1; INSERT INTO Passwords VALUES ('Room6HasGotSomeTricks!');Select * from Passwords where Password = '
# mycursor.execute("SELECT * FROM passwords")
# mycursor.execute("SELECT * from Passwords")
mycursor.execute("DROP TABLE Passwords")
mycursor.execute("CREATE TABLE Passwords (Password varchar(255))")
mycursor.execute("INSERT INTO passwords VALUES ('asdf')")
# mycursor.execute("SELECT * from Passwords")

# for x in mycursor:
# 	print(x)
