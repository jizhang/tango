create table task_collection (
  id integer primary key
  ,collection_name varchar(255)
);

create table task (
  id integer primary key
  ,collection_id int
  ,task_name varchar(255)
);

create table task_learn (
  id integer primary key
  ,user_id int
  ,task_id int
  ,learn datetime
  ,recall_1 datetime
  ,recall_2 datetime
  ,recall_4 datetime
  ,recall_7 datetime
  ,recall_15 datetime
);

create table task_word (
  id integer primary key
  ,task_id int
  ,word varchar(255)
  ,word_description varchar(255)
  ,word_translate varchar(255)
);
