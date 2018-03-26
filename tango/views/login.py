# -*- coding: utf-8 -*-

from flask import request, session, abort, jsonify
from tango import app


@app.route('/login', methods=['POST'])
def login():
    if request.form.get('username') == 'test' \
            and request.form.get('password') == 'test':
        session['username'] = request.form['username']
        return jsonify(username=request.form['username'])
    else:
        abort(403)


@app.route('/login/as')
def login_as():
    if not session.get('username'):
        abort(403)
    return jsonify(username=session['username'])


@app.route('/logout')
def logout():
    if not session.get('username'):
        abort(403)
    del session['username']
    return jsonify()
