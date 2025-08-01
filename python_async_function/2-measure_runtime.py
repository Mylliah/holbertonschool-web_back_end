#!/usr/bin/env python3
"""Module to measure runtime of concurrent coroutines."""

import asyncio
import time

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Measure the total execution time of the function wait_n."""
    time_before = time.time()
    asyncio.run(wait_n(n, max_delay))
    time_after = time.time()
    total_time = time_after - time_before
    return total_time / n
