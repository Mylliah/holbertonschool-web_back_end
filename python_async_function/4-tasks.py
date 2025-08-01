#!/usr/bin/env python3
"""Module for concurrent tasks."""

import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Execute task_wait_random n times concurrently, return sorted delays."""
    task = [task_wait_random(max_delay) for _ in range(n)]  # créé n tâches
    delays = await asyncio.gather(*task)  # les éxecute de manière concurrente
    return sorted(delays)  # les retourne triées
