from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("/index.html")

@app.route("/sign_up")
def signup_page():
    return render_template("/sign_up.html") # tells Flask to load the login sign-up page. Ask front-end what they named the html file

@app.route("/login")
def login_page():
    return render_template("/login.html") # tells Flask to load the login sign-up page. Ask front-end what they named the html file

@app.route("/authenticated")
def authenticated():
    return render_template("/authenticated.html") # tells Flask to load the login sign-up page. Ask front-end what they named the html file

if __name__ == '__main__':
    app.run(debug=True)