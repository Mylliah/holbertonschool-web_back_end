#!/usr/bin/env python3
"""Module de calcul de longueur d'éléments."""

from typing import List, Tuple, Iterable, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Retourne une liste de tuples avec chaque élément et sa longueur."""
    return [(i, len(i)) for i in lst]
