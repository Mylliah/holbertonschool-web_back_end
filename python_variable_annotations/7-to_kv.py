#!/usr/bin/env python3
"""Module de création de tuples clé-valeur."""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Retourne un tuple avec la clé et le carré de la valeur."""
    return (k, float(v ** 2))
