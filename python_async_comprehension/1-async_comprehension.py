#!/usr/bin/env python3
"""Async comprehension module for collecting random numbers."""

from typing import List
import asyncio

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Collects 10 random numbers using async comprehension."""
    numbers = [i async for i in async_generator()]
    return numbers
