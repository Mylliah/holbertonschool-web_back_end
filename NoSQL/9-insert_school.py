#!/usr/bin/env python3
"""Module to insert a document into a MongoDB collection and return its _id."""

def insert_school(mongo_collection, **kwargs):
    """Inserts a new document into the collection and returns its _id."""
    insertions = mongo_collection.insert_one(kwargs)
    return insertions.inserted_id
