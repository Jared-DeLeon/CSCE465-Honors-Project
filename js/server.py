from flask import Flask, redirect, url_for, request, render_template
from flask_mysqldb import MySQL

app = Flask(__name__, template_folder='../Rooms',static_folder='../css')
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'temporary'
app.config['MYSQL_DB'] = 'mydatabase'

mysql = MySQL(app)

@app.route('/login',methods = ['POST'])
def login():
	mycursor = mysql.connection.cursor()
	pwd = request.form['Password']
	if(pwd == "Room6HasGotSomeTricks!"):
		return render_template("index.html")

	s = "Select * from Passwords where Password = '" + pwd + "'"

	mycursor.execute(s)
	mycursor.execute("SELECT * from Passwords")

	for x in mycursor:
		if (pwd == x[0]):
			return render_template("Room1.html")

	return render_template("Room6.html", passwords = mycursor)

if __name__ == '__main__':
   app.run(debug = True)