#!/usr/bin/env python3
"""Module de création de fonctions multiplicatrices."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Retourne une fonction qui multiplie par le multiplicateur donné."""
    def multiply(n: float) -> float:
        """Multiplie n par le multiplicateur."""
        return n * multiplier
    return multiply
