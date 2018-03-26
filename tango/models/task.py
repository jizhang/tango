# -*- coding: utf-8 -*-

from tango import db


class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    collection_id = db.Column(db.Integer)
    task_name = db.Column(db.String)
