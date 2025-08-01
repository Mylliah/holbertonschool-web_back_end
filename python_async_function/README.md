### Task 0 :

Write an asynchronous coroutine that takes in an integer argument (`max_delay`, with a default value of 10) named `wait_random` that waits for a random delay between 0 and `max_delay` (included and float value) seconds and eventually returns it.

Use the `random` module.

```
# expected output :
9.034261504534394
1.6216525464615306
10.634589756751769
```

program [0-basic_async_syntax.py](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/python_async_function/0-basic_async_syntax.py)


### Task 1 :

Import `wait_random` from the previous python file that you’ve written and write an async routine called `wait_n` that takes in 2 int arguments (in this order): `n` and `max_delay`. You will spawn `wait_random` `n` times with the specified `max_delay`.

`wait_n` should return the list of all the delays (float values). The list of the delays should be in ascending order without using `sort()` because of concurrency.

```
# expected output :
[0.9693881173832269, 1.0264573845731002, 1.7992690129519855, 3.641373003434587, 4.500011569340617]
[0.07256214141415429, 1.518551245602588, 3.355762808432721, 3.7032593997182923, 3.7796178143655546, 4.744537840582318, 5.50781365463315, 5.758942587637626, 6.109707751654879, 6.831351588271327]
[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
```

program [1-concurrent_coroutines.py](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/python_async_function/1-concurrent_coroutines.py)


### Task 2 :

From the previous file, import `wait_n` into `2-measure_runtime.py`.

Create a `measure_time` function with integers `n` and `max_delay` as arguments that measures the total execution time for `wait_n(n, max_delay)`, and returns `total_time / n`. Your function should return a float.

Use the `time` module to measure an approximate elapsed time.

```
# expected output :
1.759705400466919
```

program [2-measure_runtime.py](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/python_async_function/2-measure_runtime.py)


### Task 3 :

Import `wait_random` from `0-basic_async_syntax`.

Write a function (do not create an async function, use the regular function syntax to do this) `task_wait_random` that takes an integer `max_delay` and returns a `asyncio.Task`.

```
# expected output :
<class '_asyncio.Task'>
```

program [3-tasks.py](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/python_async_function/3-tasks.py)


### Task 4 :

Take the code from `wait_n` and alter it into a new function `task_wait_n`. The code is nearly identical to `wait_n` except `task_wait_random` is being called.

```
# expected output :
[0.2261658205652346, 1.1942770588220557, 1.8410422186086628, 2.1457353803430523, 4.002505454641153]
```

program [4-tasks.py](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/python_async_function/4-tasks.py)
