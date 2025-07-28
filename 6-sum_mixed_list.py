#!/usr/bin/env python3
"""Module de calcul sur listes mixtes."""

from typing import List, Union


def sum_mixed_list(mxd_list: List[Union[int, float]]) -> float:
    """Retourne la somme d'une liste mixte int/float."""
    return sum(mxd_list)
