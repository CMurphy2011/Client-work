from flask import Flask, render_template, request

app = Flask(__name__)

useragent = 0

print("this is for debug only")

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/prices')
def prices():
    return render_template('prices.html')

@app.route('/faqs')
def faqs():
    return render_template('faqs.html')

# Error handling functionality
@app.errorhandler(400)
def handle_bad_request(error):
    return render_template('400.html'), 400


@app.errorhandler(403)
def page_forbidden(error):
    return render_template('403.html'), 403


@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html'), 404


@app.errorhandler(405)
def method_not_allowed(error):
    return render_template('405.html'), 405


@app.errorhandler(500)
def internal_error(error):
    return render_template('500.html'), 500


@app.errorhandler(503)
def service_unavailable(error):
    return render_template('503.html'), 503

if __name__ == '__main__':
    app.run(debug=True)