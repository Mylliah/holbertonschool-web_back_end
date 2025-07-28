### Task 0 :

Write a type-annotated function `add` that takes a float `a` and a float `b` as arguments and returns their sum as a float :
```
# expected output :
True
{'a':  <class 'float'>, 'b': <class 'float'>, 'return': <class 'float'>}
```

program [0-add.py](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/python_variable_annotations/0-add.py)


### Task 1 :

Write a type-annotated function `concat` that takes a string `str1` and a string `str2` as arguments and returns a concatenated string :

```
# expected output :
True
{'str1': <class 'str'>, 'str2': <class 'str'>, 'return': <class 'str'>}
```

program [1-concat.py](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/python_variable_annotations/1-concat.py)


### Task 2 :

Write a type-annotated function `floor` which takes a float `n` as argument and returns the floor of the float :

```
# expected output :
True
{'n': <class 'float'>, 'return': <class 'int'>}
floor(3.14) returns 3, which is a <class 'int'>
```

program [2-floor.py](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/python_variable_annotations/2-floor.py)


### Task 3 :

Write a type-annotated function `to_str` that takes a float `n` as argument and returns the string representation of the float :

```
# expected output :
True
{'n': <class 'float'>, 'return': <class 'str'>}
to_str(3.14) returns 3.14, which is a <class 'str'>
```

program [3-to_str.py](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/python_variable_annotations/3-to_str.py)


### Task 4 :

Define and annotate the following variables with the specified values:
- `a`, an integer with a value of 1
- `pi`, a float with a value of 3.14
- `i_understand_annotations`, a boolean with a value of True
- `school`, a string with a value of “Holberton”

```
# expected output :
a is a <class 'int'> with a value of 1
pi is a <class 'float'> with a value of 3.14
i_understand_annotations is a <class 'bool'> with a value of True
school is a <class 'str'> with a value of Holberton
```

program [4-define_variables.py](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/python_variable_annotations/4-define_variables.py)


### Task 5 :

Write a type-annotated function `sum_list` which takes a list `input_list` of floats as argument and returns their sum as a float :

```
# expected output :
True
{'input_list': typing.List[float], 'return': <class 'float'>}
sum_list(floats) returns 6.470000000000001 which is a <class 'float'>
```

program [5-sum_list.py](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/python_variable_annotations/5-sum_list.py)


### Task 6 :

Write a type-annotated function `sum_mixed_list` which takes a `list mxd_lst` of integers and floats and returns their sum as a float :

```
# expected output :
{'mxd_lst': typing.List[typing.Union[int, float]], 'return': <class 'float'>}
True
sum_mixed_list(mixed) returns 679.13 which is a <class 'float'>
```

program [6-sum_mixed_list.py](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/python_variable_annotations/6-sum_mixed_list.py)


### Task 7 :

Write a type-annotated function `to_kv` that takes a string `k` and an int OR float `v` as arguments and returns a tuple. The first element of the tuple is the string `k`. The second element is the square of the int/float `v` and should be annotated as a float :

```
# expected output :
{'k': <class 'str'>, 'v': typing.Union[int, float], 'return': typing.Tuple[str, float]}
('eggs', 9)
('school', 0.0004)
```

program [7-to_kv.py](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/python_variable_annotations/7-to_kv.py)


### Task 8 :

Write a type-annotated function `make_multiplier` that takes a float `multiplier` as argument and returns a function that multiplies a float by `multiplier` :

```
# expected output :
{'multiplier': <class 'float'>, 'return': typing.Callable[[float], float]}
4.928400000000001
```

program [8-make_multiplier.py](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/python_variable_annotations/8-make_multiplier.py)


### Task 9 :

Annotate the below function’s parameters and return values with the appropriate types :

```
# expected output :
{'lst': typing.Iterable[typing.Sequence], 'return': typing.List[typing.Tuple[typing.Sequence, int]]}
```

program [9-element_length.py](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/python_variable_annotations/9-element_length.py)
