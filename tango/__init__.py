# -*- coding: utf-8 -*-

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object('tango.default_settings')
app.config.from_envvar('TANGO_SETTINGS', silent=True)

db = SQLAlchemy(app)

import tango.views
import tango.commands
