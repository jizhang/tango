# -*- coding: utf-8 -*-

from tango import db


class TaskCollection(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    collection_name = db.Column(db.String)
