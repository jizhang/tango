# -*- coding: utf-8 -*-

from tango import db


class TaskLearn(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    task_id = db.Column(db.Integer)
    learn = db.Column(db.DateTime)
    recall_1 = db.Column(db.DateTime)
    recall_2 = db.Column(db.DateTime)
    recall_4 = db.Column(db.DateTime)
    recall_7 = db.Column(db.DateTime)
    recall_15 = db.Column(db.DateTime)
