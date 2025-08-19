### Task 0 : 

Modify before ES6
    - function `taskFirst` to instantiate variables using `const`
    - function `taskNext` to instantiate variables using `let`

```
# expected output 
bob@dylan:~$ npm run dev 0-main.js 
I prefer const when I can. But sometimes let is okay
bob@dylan:~$
```

program [0-constants.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_basic/0-constants.js)


### Task 1 :

Modify before ES6
Given what you’ve read about `var` and hoisting, modify the variables inside the function `taskBlock` so that the variables aren’t overwritten inside the conditional block.

```
# expected output
bob@dylan:~$ npm run dev 1-main.js 
[ false, true ]
[ false, true ]
bob@dylan:~$
```

program [1-block-scoped.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_basic/1-block-scoped.js)


### Task 2 :

Modify before ES6
Rewrite the following standard function to use ES6’s arrow syntax of the function `add` (it will be an anonymous function after)

```
# expected output 
bob@dylan:~$ npm run dev 2-main.js 
[ 'SOMA', 'Union Square', 'Noe Valley' ]
bob@dylan:~$
```

program [2-arrow.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_basic/2-arrow.js)


### Task 3 :

Modify before ES6
Condense the internals of the following function to 1 line - without changing the name of each function/variable.
Hint: The key here to define default parameter values for the function parameters.

```
# expected output 
bob@dylan:~$ npm run dev 3-main.js 
142
56
41
bob@dylan:~$
```
program [3-default-parameter.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_basic/3-default-parameter.js)


### Task 4 :

Modify before ES6
Modify the following function to return the number of arguments passed to it using the rest parameter syntax

```
# expected output
bob@dylan:~$ npm run dev 4-main.js 
1
4
bob@dylan:~$
```

program [4-rest-parameter.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_basic/4-rest-parameter.js)


### Task 5 :

Modify before ES6
Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.

```
# expected output 
bob@dylan:~$ npm run dev 5-main.js 
[
  'a', 'b', 'c',
  'd', 'H', 'e',
  'l', 'l', 'o'
]
bob@dylan:~$
```
program [5-spread-operator.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_basic/5-spread-operator.js)


### Task 6 :

Modify before ES6
Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.

```
# expected output
bob@dylan:~$ npm run dev 6-main.js 
As of 2017, it was the seventh-highest income county in the United States, with a per capita personal income of $119,868. As of 2015, San Francisco proper had a GDP of $154.2 billion, and a GDP per capita of $178,479.
bob@dylan:~$
```

program [6-string-interpolation.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_basic/6-string-interpolation.js)


### Task 7 :

Modify before ES6
Notice how the keys and the variable names are the same?
Modify the following function’s `budget` object to simply use the object property value shorthand syntax instead.

```
# expected output
bob@dylan:~$ npm run dev 7-main.js 
{ income: 400, gdp: 700, capita: 900 }
bob@dylan:~$
```

program [7-getBudgetObject.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_basic/7-getBudgetObject.js)


### Task 8 :

Modify before ES6
Rewrite the `getBudgetForCurrentYear` function to use ES6 computed property names on the `budget` object

```
# expected output 
bob@dylan:~$ npm run dev 8-main.js 
{ 'income-2021': 2100, 'gdp-2021': 5200, 'capita-2021': 1090 }
bob@dylan:~$
```

program [8-getBudgetCurrentYear.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_basic/8-getBudgetCurrentYear.js)


### Task 9 :

Modify before ES6
Rewrite `getFullBudgetObject` to use ES6 method properties in the `fullBudget` object

```
# expected output 
bob@dylan:~$ npm run dev 9-main.js 
$20
20 euros
bob@dylan:~$
```

program [9-getFullBudget.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_basic/9-getFullBudget.js)


### Task 10 :

Modify before ES6
Rewrite the function `appendToEachArrayValue` to use ES6’s `for...of` operator. And don’t forget that `var` is not ES6-friendly.

```
# expected output 
bob@dylan:~$ npm run dev 10-main.js 
[ 'correctly-appended', 'correctly-fixed', 'correctly-displayed' ]
bob@dylan:~$
```

program [10-loops.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_basic/10-loops.js)


### Task 11 :

Modify before ES6
Write a function named `createEmployeesObject` that will receive two arguments:

- `departmentName` (String)
- `employees` (Array of Strings)

The function should return an object with the following format:

```
{
     $departmentName: [
          $employees,
     ],
}
```

```
# expected output 
bob@dylan:~$ npm run dev 11-main.js 
{ Software: [ 'Bob', 'Sylvie' ] }
bob@dylan:~$
```

program [11-createEmployeesObject.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_basic/11-createEmployeesObject.js)


### Task 12 :

Modify before ES6
Write a function named `createReportObject` whose parameter, `employeesList`, is the return value of the previous function `createEmployeesObject`.
`createReportObject` should return an object containing the key `allEmployees` and a method property called `getNumberOfDepartments`.

`allEmployees` is a key that maps to an object containing the department name and a list of all the employees in that department. If you’re having trouble, use the spread syntax.

The method property receives `employeesList` and returns the number of departments. I would suggest suggest thinking back to the ES6 method property syntax.

```
{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
};
```

```
# expected output 
bob@dylan:~$ npm run dev 12-main.js 
{ engineering: [ 'Bob', 'Jane' ], marketing: [ 'Sylvie' ] }
2
bob@dylan:~$
```

program [12-createReportObject.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_basic/12-createReportObject.js)


