### Task 0 :

Write a coroutine called `async_generator` that takes no arguments.

The coroutine will loop 10 times, each time asynchronously wait 1 second, then yield a random number between 0 and 10. Use the `random` module.

```
# expected output :
[4.403136952967102, 6.9092712604587465, 6.293445466782645, 4.549663490048418, 4.1326571686139015, 9.99058525304903, 6.726734105473811, 9.84331704602206, 1.0067279479988345, 1.3783306401737838]
```

program [0-async_generator.py](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/python_async_comprehension/0-async_generator.py)


### Task 1 :

Import `async_generator` from the previous task and then write a coroutine called `async_comprehension` that takes no arguments.

The coroutine will collect 10 random numbers using an async comprehensing over `async_generator`, then return the 10 random numbers.

```
# expected output :
[9.861842105071727, 8.572355293354995, 1.7467182056248265, 4.0724372912858575, 0.5524750922145316, 8.084266576021555, 8.387128918690468, 1.5486451376520916, 7.713335177885325, 7.673533267041574]

```

program [1-async_comprehension.py](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/python_async_comprehension/1-async_comprehension.py)


### Task 2 :

Import `async_comprehension` from the previous file and write a `measure_runtime` coroutine that will execute `async_comprehension` four times in parallel using asyncio.gather.

`measure_runtime` should measure the total runtime and return it.

Notice that the total runtime is roughly 10 seconds, explain it to yourself.

```
# expected output :
10.021936893463135

```

program [2-measure_runtime.py](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/python_async_comprehension/2-measure_runtime.py)