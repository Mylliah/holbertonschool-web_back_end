#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """Returns a data page resilient to item deletion."""
        assert isinstance(page_size, int) and page_size > 0

        # on récupère le dataset indexé
        # pour détecter facilement si un index manque (ligne supp)

        idx_dataset = self.indexed_dataset()
        # si aucun index de départ n'est donné, on commence au 1er élément
        if index is None:
            index = 0

        # on vérifie que index est un entier et dans une plage valide
        assert isinstance(index, int) and index >= 0

        # on trie les clés pour parcourir les index ds l'ordre croissant
        keys = sorted(idx_dataset.keys())
        # si le dataset indexé est vide, on renvoie une page vide
        if not idx_dataset:
            start_index = 0 if (index is None) else index
            return {
                "index": start_index,
                "next_index": None,
                "page_size": 0,
                "data": []
            }

        # Trouver le premier index existant >= index
        current = index
        while current not in idx_dataset and current <= keys[-1]:
            current += 1
        start_index = current
        # construction de la page de données
        data = []
        collected = 0
        # On collecte jusqu'à page_size éléments existants
        # en sautant les index supprimés
        while collected < page_size and current <= keys[-1]:
            if current in idx_dataset:
                data.append(idx_dataset[current])
                collected += 1
            current += 1
        # calcul du prochain index
        next_index = current if current <= keys[-1] else None
        return {
            'index': index,
            'data': data,
            'page_size': len(data),
            'next_index': next_index
        }
