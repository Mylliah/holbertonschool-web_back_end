### Task 0 :

Return a Promise using this prototype `function getResponseFromAPI()`

```
# expected output
bob@dylan:~$ npm run dev 0-main.js 
true
bob@dylan:~$
```

program [0-promise.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_promise/0-promise.js)


### Task 1 :

Using the prototype below, return a `promise`. The parameter is a `boolean`.

```
getFullResponseFromAPI(success)
```

When the argument is:

* `true`
    * resolve the promise by passing an object with 2 attributes:
            - `status`: `200`
            - `body`: `'Success'`
* `false`
    * reject the promise with an error object with the message `The fake API is not working currently`
Try testing it out for yourself

```
# expected output
bob@dylan:~$ npm run dev 1-main.js 
Promise { { status: 200, body: 'Success' } }
Promise {
  <rejected> Error: The fake API is not working currently
    ...
    ...
bob@dylan:~$ 
```

program [1-promise.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_promise/1-promise.js)


### Task 2 :

Using the function prototype below

```
function handleResponseFromAPI(promise)
```

Append three handlers to the function:
* When the Promise resolves, return an object with the following attributes
        - `status`: `200`
        - `body`: `success`
* When the Promise rejects, return an empty `Error` object
* For every resolution, log `Got a response from the API` to the console

```
# expected output
bob@dylan:~$ npm run dev 2-main.js 
Got a response from the API
bob@dylan:~$
```

program [2-then.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_promise/2-then.js)


### Task 3 :

In this file, import `uploadPhoto` and `createUser` from `utils.js`

Knowing that the functions in `utils.js` return promises, use the prototype below to collectively resolve all promises and log `body firstName` lastName to the console.

```
function handleProfileSignup()
```

In the event of an error, log `Signup system offline` to the console


```
# expected output
bob@dylan:~$ npm run dev 3-main.js 
photo-profile-1 Guillaume Salva
bob@dylan:~$ 
```

program [3-all.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_promise/3-all.js)


### Task 4 :

Using the following prototype
```
function signUpUser(firstName, lastName) {
}
```

That returns a resolved promise with this object:
```
{
  firstName: value,
  lastName: value,
}
```

```
# expected output
bob@dylan:~$ npm run dev 4-main.js 
Promise { { firstName: 'Bob', lastName: 'Dylan' } }
bob@dylan:~$
```

program [4-user-promise.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_promise/4-user-promise.js)


### Task 5 :

Write and export a function named `uploadPhoto`. It should accept one argument `fileName` (string).

The function should return a Promise rejecting with an Error and the string `$fileName cannot be processed`
```
export default function uploadPhoto(filename) {

}
```

```
# expected output
bob@dylan:~$ npm run dev 5-main.js 
Promise {
  <rejected> Error: guillaume.jpg cannot be processed
  ..
    ..
bob@dylan:~$
```

program [5-photo-reject.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_promise/5-photo-reject.js)


### Task 6 :

Import `signUpUser` from `4-user-promise.js` and `uploadPhoto` from `5-photo-reject.js`.

Write and export a function named `handleProfileSignup`. It should accept three arguments `firstName` (string), `lastName` (string), and `fileName` (string). The function should call the two other functions. When the promises are all settled it should return an array with the following structure:
```
[
    {
      status: status_of_the_promise,
      value: value or error returned by the Promise
    },
    ...
  ]
```


```
# expected output
bob@dylan:~$ npm run dev 6-main.js 
Promise { <pending> }
bob@dylan:~$
```

program [6-final-user.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_promise/6-final-user.js)


### Task 7 :

Write and export a function named `loadBalancer`. It should accept two arguments `chinaDownload` (Promise) and `USDownload` (Promise).

The function should return the value returned by the promise that resolved the first.
```
export default function loadBalancer(chinaDownload, USDownload) {

}
```

```
# expected output
bob@dylan:~$ npm run dev 7-main.js 
Downloading from UK is faster
Downloading from FR is faster
bob@dylan:~$
```

program [7-load_balancer.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_promise/7-load_balancer.js)


### Task 8 :

Write a function named `divideFunction` that will accept two arguments: `numerator` (Number) and `denominator` (Number).

When the `denominator` argument is equal to 0, the function should throw a new error with the message `cannot divide by 0`. Otherwise it should return the numerator divided by the denominator.
```
export default function divideFunction(numerator, denominator) {

}
```

```
# expected output
bob@dylan:~$ npm run dev 8-main.js 
5
..../8-try.js:15
  throw Error('cannot divide by 0');
  ^
.....

bob@dylan:~$
```

program [8-try.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_promise/8-try.js)


### Task 9 :

Write a function named `guardrail` that will accept one argument `mathFunction` (Function).

This function should create and return an array named `queue`.

When the `mathFunction` function is executed, the value returned by the function should be appended to the queue. If this function throws an error, the error message should be appended to the queue. In every case, the message `Guardrail was processed` should be added to the queue.

Example:
```
[
  1000,
  'Guardrail was processed',
]
```

```
# expected output
bob@dylan:~$ npm run dev 9-main.js 
[ 5, 'Guardrail was processed' ]
[ 'Error: cannot divide by 0', 'Guardrail was processed' ]
bob@dylan:~$
```

program [9-try.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_promise/9-try.js)


### Task 10 (100):

Import `uploadPhoto` and `createUser` from `utils.js`

Write an async function named `asyncUploadUser` that will call these two functions and return an object with the following format:
```
{
  photo: response_from_uploadPhoto_function,
  user: response_from_createUser_function,
}
```

If one of the async function fails, return an empty object. Example:
```
{
  photo: null,
  user: null,
}
```

```
# expected output
bob@dylan:~$ npm run dev 100-main.js 
{
  photo: { status: 200, body: 'photo-profile-1' },
  user: { firstName: 'Guillaume', lastName: 'Salva' }
}
bob@dylan:~$
```

program [100-await.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_promise/100-await.js)
