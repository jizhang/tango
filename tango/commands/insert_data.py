# -*- coding: utf-8 -*-

from tango import app, db


@app.cli.command()
def insert_data():
    sqls = """
    replace into task_collection values (1, '新编日语第二册');
    replace into task values (1, 1, '第十五課 会社の実習');
    replace into task_word values
    (1, 1, '実習', 'じっしゅう\\n名/他サ', '实习'),
    (2, 1, '学科', 'がっか\\n名', '学科'),
    (3, 1, '面接', 'めんせつ\\n名/自サ', '面试');
    """
    for sql in sqls.split(';'):
        sql = sql.strip()
        if not sql:
            continue
        app.logger.info('execute\n{}'.format(sql))
        db.session.execute(sql)
        db.session.commit()
