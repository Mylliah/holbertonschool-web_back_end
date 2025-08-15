#!/usr/bin/env python3
"""Module to print statistics about Nginx logs stored in MongoDB."""

from pymongo import MongoClient


def main():
    """Prints statistics about Nginx logs from the MongoDB collection."""
    client = MongoClient('mongodb://127.0.0.1:27017')
    collect = client.logs.nginx

    total = collect.count_documents({})
    print(f"{total} logs")

    print("Methods:")
    for m in ["GET", "POST", "PUT", "PATCH", "DELETE"]:
        n = collect.count_documents({"method": m})
        print(f"\tmethod {m}: {n}")

    status = collect.count_documents({"method": "GET", "path": "/status"})
    print(f"{status} status check")


if __name__ == "__main__":
    main()
