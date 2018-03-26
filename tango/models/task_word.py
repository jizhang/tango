# -*- coding: utf-8 -*-

from tango import db


class TaskWord(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    task_id = db.Column(db.Integer)
    word = db.Column(db.String)
    word_description = db.Column(db.String)
    word_translate = db.Column(db.String)
