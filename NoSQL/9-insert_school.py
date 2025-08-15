#!/usr/bin/env python3

def insert_school(mongo_collection, **kwargs):
    insertions = mongo_collection.insert_one(kwargs)
    return insertions.inserted_id
