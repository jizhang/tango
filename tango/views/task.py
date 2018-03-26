# -*- coding: utf-8 -*-

from flask import request, jsonify
from tango import app, db
from tango.views import InvalidUsage
from tango.models.task import Task
from tango.models.task_collection import TaskCollection
from tango.models.task_word import TaskWord


@app.route('/task/get', methods=['GET'])
def task_get():
    task_id = request.args.get('id')
    if not task_id:
        raise InvalidUsage('id cannot be empty')

    task = db.session.query(Task).get(task_id)
    if task is None:
        raise InvalidUsage('task not found')

    collection = db.session.query(TaskCollection).get(task.collection_id)
    if collection is None:
        raise InvalidUsage('collection not found')

    words = db.session.query(TaskWord).\
        filter_by(task_id=task.id).\
        all()

    if not words:
        raise InvalidUsage('no words found')

    payload = {
        'collection_id': collection.id,
        'collection_name': collection.collection_name,
        'task_id': task.id,
        'task_name': task.task_name,
        'words': []
    }

    for word in words:
        payload['words'].append({
            'word': word.word,
            'desc': word.word_description,
            'translate': word.word_translate,
        })

    return jsonify(payload)
