#!/usr/bin/env python3
"""Runtime measurement module for parallel async comprehensions."""

import time
import asyncio

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime():
    """Measures runtime of 4 parallel async_comprehension executions."""
    start_chrono = time.time()
    tasks = [async_comprehension() for i in range(4)]
    await asyncio.gather(*tasks)
    end_chrono = time.time()
    result = end_chrono - start_chrono
    return result
