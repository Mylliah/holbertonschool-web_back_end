#!/usr/bin/env python3
"""Async generator module for random numbers."""

import asyncio
import random


async def async_generator():
    """Yields 10 random numbers between 0-10 with 1s delay."""
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
