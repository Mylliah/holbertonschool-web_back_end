#!/usr/bin/env python3
"""Module for creating asyncio tasks."""

import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """Create and return an asyncio Task for wait_random."""
    task = asyncio.create_task(wait_random(max_delay))
    return task
