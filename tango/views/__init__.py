# -*- coding: utf-8 -*-

from flask import make_response
from tango import app
from tango.services import util


@app.route('/')
def hello_world():
    return 'Hello, World!'


class InvalidUsage(Exception):
    status_code = 400


@app.errorhandler(InvalidUsage)
def handle_invalid_usage(error):
    return make_response(str(error), error.status_code)


util.import_submodules(__package__)
