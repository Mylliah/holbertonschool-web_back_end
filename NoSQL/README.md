### Task 0 :

Write a script that lists all databases in MongoDB.

```
# expected output
guillaume@ubuntu:~/$ cat 0-list_databases | mongo
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.6.3
admin        0.000GB
config       0.000GB
local        0.000GB
logs         0.005GB
bye
guillaume@ubuntu:~/$
```

program [0-list_databases](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/NoSQL/0-list_databases)


### Task 1 :

Write a script that creates or uses the database `my_db`:

```
# expected output
guillaume@ubuntu:~/$ cat 0-list_databases | mongo
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.6.3
admin        0.000GB
config       0.000GB
local        0.000GB
logs         0.005GB
bye
guillaume@ubuntu:~/$
guillaume@ubuntu:~/$ cat 1-use_or_create_database | mongo
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.6.3
switched to db my_db
bye
guillaume@ubuntu:~/$
```

program [1-use_or_create_database](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/NoSQL/1-use_or_create_database)


### Task 2 :

Write a script that inserts a document in the collection `school`:
- The document must have one attribute `name` with value “Holberton school”
- The database name will be passed as option of `mongo` command

```
# expected output
guillaume@ubuntu:~/$ cat 2-insert | mongo my_db
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017/my_db
MongoDB server version: 3.6.3
WriteResult({ "nInserted" : 1 })
bye
guillaume@ubuntu:~/$
```

program [2-insert](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/NoSQL/2-insert)


### Task 3 :

Write a script that lists all documents in the collection `school`:
- The database name will be passed as option of `mongo` command


```
# expected output
guillaume@ubuntu:~/$ cat 3-all | mongo my_db
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017/my_db
MongoDB server version: 3.6.3
{ "_id" : ObjectId("5a8fad532b69437b63252406"), "name" : "Holberton school" }
bye
guillaume@ubuntu:~/$
```

program [3-all](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/NoSQL/3-all)


### Task 4 :

Write a script that lists all documents with `name="Holberton school"` in the collection `school`:
- The database name will be passed as option of `mongo` command

```
# expected output
guillaume@ubuntu:~/$ cat 4-match | mongo my_db
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017/my_db
MongoDB server version: 3.6.3
{ "_id" : ObjectId("5a8fad532b69437b63252406"), "name" : "Holberton school" }
bye
guillaume@ubuntu:~/$
```

program [4-match](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/NoSQL/4-match)


### Task 5 :

Write a script that displays the number of documents in the collection `school`:
- The database name will be passed as option of `mongo` command

```
# expected output
guillaume@ubuntu:~/$ cat 5-count | mongo my_db
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017/my_db
MongoDB server version: 3.6.3
1
bye
guillaume@ubuntu:~/$
```

program [5-count](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/NoSQL/5-count)


### Task 6 :

Write a script that adds a new attribute to a document in the collection `school`:
- The script should update only document with `name="Holberton school"` (all of them)
- The update should add the attribute `address` with the value “972 Mission street”
- The database name will be passed as option of `mongo` command

```
# expected output
guillaume@ubuntu:~/$ cat 6-update | mongo my_db
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017/my_db
MongoDB server version: 3.6.3
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
bye
guillaume@ubuntu:~/$ 
guillaume@ubuntu:~/$ cat 4-match | mongo my_db
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017/my_db
MongoDB server version: 3.6.3
{ "_id" : ObjectId("5a8fad532b69437b63252406"), "name" : "Holberton school", "address" : "972 Mission street" }
bye
guillaume@ubuntu:~/$
```

program [6-update](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/NoSQL/6-update)


### Task 7 :

Write a script that deletes all documents with `name="Holberton school"` in the collection `school`:
- The database name will be passed as option of `mongo` command

```
# expected output
guillaume@ubuntu:~/$ cat 7-delete | mongo my_db
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017/my_db
MongoDB server version: 3.6.3
{ "acknowledged" : true, "deletedCount" : 1 }
bye
guillaume@ubuntu:~/$ 
guillaume@ubuntu:~/$ cat 4-match | mongo my_db
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017/my_db
MongoDB server version: 3.6.3
bye
guillaume@ubuntu:~/$ 
```

program [7-delete](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/NoSQL/7-delete)


### Task 8 :

Write a Python function that lists all documents in a collection:
- Prototype: `def list_all(mongo_collection):`
- Return an empty list if no document in the collection
- `mongo_collection` will be the `pymongo` collection object

```
# expected output
guillaume@ubuntu:~/$ ./8-main.py
[5a8f60cfd4321e1403ba7ab9] Holberton school
[5a8f60cfd4321e1403ba7aba] UCSD
guillaume@ubuntu:~/$ 
```

program [8-all.py](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/NoSQL/8-all.py)


### Task 9 :

Write a Python function that inserts a new document in a collection based on kwargs:
- Prototype: `def insert_school(mongo_collection, **kwargs):`
- `mongo_collection` will be the `pymongo` collection object
- Returns the new `_id`

```
# expected output
guillaume@ubuntu:~/$ ./9-main.py
New school created: 5a8f60cfd4321e1403ba7abb
[5a8f60cfd4321e1403ba7ab9] Holberton school
[5a8f60cfd4321e1403ba7aba] UCSD
[5a8f60cfd4321e1403ba7abb] UCSF 505 Parnassus Ave
guillaume@ubuntu:~/$
```

program [9-insert_school.py](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/NoSQL/9-insert_school.py)


### Task 10 :

Write a Python function that changes all topics of a school document based on the name:
- Prototype: `def update_topics(mongo_collection, name, topics):`
- `mongo_collection` will be the `pymongo` collection object
- `name` (string) will be the school name to update
- `topics` (list of strings) will be the list of topics approached in the school

```
# expected output
guillaume@ubuntu:~/$ ./10-main.py
[5a8f60cfd4321e1403ba7abb] UCSF 
[5a8f60cfd4321e1403ba7aba] UCSD 
[5a8f60cfd4321e1403ba7ab9] Holberton school ['Sys admin', 'AI', 'Algorithm']
[5a8f60cfd4321e1403ba7abb] UCSF 
[5a8f60cfd4321e1403ba7aba] UCSD 
[5a8f60cfd4321e1403ba7ab9] Holberton school ['iOS']
guillaume@ubuntu:~/$
```

program [10-update_topics.py](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/NoSQL/10-update_topics.py)


### Task 11 :

Write a Python function that returns the list of school having a specific topic:
- Prototype: `def schools_by_topic(mongo_collection, topic):`
- `mongo_collection` will be the `pymongo` collection object
- `topic` (string) will be topic searched

```
# expected output
guillaume@ubuntu:~/$ ./11-main.py
[5a90731fd4321e1e5a3f53e3] Holberton school ['Algo', 'C', 'Python', 'React']
[5a90731fd4321e1e5a3f53e5] UCLA ['C', 'Python']
guillaume@ubuntu:~/$
```

program [11-schools_by_topic.py](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/NoSQL/11-schools_by_topic.py)


### Task 12 :

Write a Python script that provides some stats about Nginx logs stored in MongoDB:
- Database: `logs`
- Collection: `nginx`
- Display (same as the example):
-   - first line: `x logs` where `x` is the number of documents in this collection
    - second line: `Methods:`
    - 5 lines with the number of documents with the `method` = `["GET", "POST", "PUT", "PATCH", "DELETE"]` in this order (see example below - warning: it’s a tabulation before each line)
    - one line with the number of documents with:
        - `method=GET`
        - `path=/status`
You can use this dump as data sample: dump.zip(https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/misc/2020/6/645541f867bb79ae47b7a80922e9a48604a569b9.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250815%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20250815T132416Z&X-Amz-Expires=345600&X-Amz-SignedHeaders=host&X-Amz-Signature=f54438edb497f19f8dbb2563fc736ec0ec02533d1c8520b27f6f788354df6153)
The output of your script must be exactly the same as the example

```
# expected output
guillaume@ubuntu:~/$ curl -o dump.zip -s "https://s3.eu-west-3.amazonaws.com/hbtn.intranet.project.files/holbertonschool-webstack/411/dump.zip"
guillaume@ubuntu:~/$ 
guillaume@ubuntu:~/$ unzip dump.zip
Archive:  dump.zip
   creating: dump/
   creating: dump/logs/
  inflating: dump/logs/nginx.metadata.json  
  inflating: dump/logs/nginx.bson    
guillaume@ubuntu:~/$ 
guillaume@ubuntu:~/$ mongorestore dump
2018-02-23T20:12:37.807+0000    preparing collections to restore from
2018-02-23T20:12:37.816+0000    reading metadata for logs.nginx from dump/logs/nginx.metadata.json
2018-02-23T20:12:37.825+0000    restoring logs.nginx from dump/logs/nginx.bson
2018-02-23T20:12:40.804+0000    [##......................]  logs.nginx  1.21MB/13.4MB  (9.0%)
2018-02-23T20:12:43.803+0000    [#####...................]  logs.nginx  2.88MB/13.4MB  (21.4%)
2018-02-23T20:12:46.803+0000    [#######.................]  logs.nginx  4.22MB/13.4MB  (31.4%)
2018-02-23T20:12:49.803+0000    [##########..............]  logs.nginx  5.73MB/13.4MB  (42.7%)
2018-02-23T20:12:52.803+0000    [############............]  logs.nginx  7.23MB/13.4MB  (53.8%)
2018-02-23T20:12:55.803+0000    [###############.........]  logs.nginx  8.53MB/13.4MB  (63.5%)
2018-02-23T20:12:58.803+0000    [#################.......]  logs.nginx  10.1MB/13.4MB  (74.9%)
2018-02-23T20:13:01.803+0000    [####################....]  logs.nginx  11.3MB/13.4MB  (83.9%)
2018-02-23T20:13:04.803+0000    [######################..]  logs.nginx  12.8MB/13.4MB  (94.9%)
2018-02-23T20:13:06.228+0000    [########################]  logs.nginx  13.4MB/13.4MB  (100.0%)
2018-02-23T20:13:06.230+0000    no indexes to restore
2018-02-23T20:13:06.231+0000    finished restoring logs.nginx (94778 documents)
2018-02-23T20:13:06.232+0000    done
guillaume@ubuntu:~/$ 
guillaume@ubuntu:~/$ ./12-log_stats.py 
94778 logs
Methods:
    method GET: 93842
    method POST: 229
    method PUT: 0
    method PATCH: 0
    method DELETE: 0
47415 status check
guillaume@ubuntu:~/$
```

program [12-log_stats.py](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/NoSQL/12-log_stats.py)
