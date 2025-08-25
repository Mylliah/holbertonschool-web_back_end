### Task 0:

Create a function named getListStudents that returns an array of objects.
Each object should have three attributes: id (Number), firstName (String), and location (String).
The array contains the following students in order:
* `Guillaume`, id: `1`, in `San Francisco`
* `James`, id: `2`, in `Columbia`
* `Serena`, id: `5`, in `San Francisco`

```
# expexted output
bob@dylan:~$ npm run dev 0-main.js 
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
bob@dylan:~$
```

program [0-get_list_students.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_data_manipulation/0-get_list_students.js)


### Task 1 :

Create a function `getListStudentIds` that returns an array of ids from a list of object.
This function is taking one argument which is an array of objects - and this array is the same format as `getListStudents` from the previous task.
If the argument is not an array, the function is returning an empty array.
You must use the `map` function on the array.

```
# expexted output
bob@dylan:~$ npm run dev 1-main.js 
[]
[ 1, 2, 5 ]
bob@dylan:~$
```

program [1-get_list_student_ids.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_data_manipulation/1-get_list_student_ids.js)


### Task 2 :

Create a function `getStudentsByLocation` that returns an array of objects who are located in a specific city.
It should accept a list of students (from `getListStudents`) and a `city` (string) as parameters.
You must use the `filter` function on the array.

```
# expexted output
bob@dylan:~$ npm run dev 2-main.js 
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
bob@dylan:~$ 
```

program [2-get_students_by_loc.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_data_manipulation/2-get_students_by_loc.js)


### Task 3 :

Create a function getStudentIdsSum that returns the sum of all the student ids.
It should accept a list of students (from getListStudents) as a parameter.
You must use the reduce function on the array.

```
# expexted output
bob@dylan:~$ npm run dev 3-main.js 
8
bob@dylan:~$ 
```

program [3-get_ids_sum.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_data_manipulation/3-get_ids_sum.js)


### Task 4 :

Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade
It should accept a list of students (from `getListStudents`), a `city` (String), and `newGrades` (Array of “grade” objects) as parameters.
`newGrades` is an array of objects with this format:

```
# expexted output
bob@dylan:~$ npm run dev 4-main.js 
[
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
    grade: 86
  },
  { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
]
[
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
    grade: 'N/A'
  },
  { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
]
bob@dylan:~$
```

program [4-update_grade_by_city.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_data_manipulation/4-update_grade_by_city.js)


### Task 5 :

Create a function named `createInt8TypedArray` that returns a new `ArrayBuffer` with an `Int8` value at a specific position.
It should accept three arguments: `length` (Number), `position` (Number), and `value` (Number).
If adding the value is not possible the error `Position outside range` should be thrown.

```
# expexted output
bob@dylan:~$ npm run dev 5-main.js 
DataView {
  byteLength: 10,
  byteOffset: 0,
  buffer: ArrayBuffer {
    [Uint8Contents]: <00 00 59 00 00 00 00 00 00 00>,
    byteLength: 10
  }
}
bob@dylan:~$
```

program [5-typed_arrays.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_data_manipulation/5-typed_arrays.js)


### Task 6 :

Create a function named `setFromArray` that returns a `Set` from an array.
It accepts an argument (Array, of any kind of element).

```
# expexted output
bob@dylan:~$ npm run dev 6-main.js 
Set { 12, 32, 15, 78, 98 }
bob@dylan:~$
```

program [6-set.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_data_manipulation/6-set.js)


### Task 7 :

Create a function named `hasValuesFromArray` that returns a boolean if all the elements in the array exist within the set.
It accepts two arguments: a `set` (Set) and an `array` (Array).

```
# expexted output
bob@dylan:~$ npm run dev 7-main.js 
true
false
false
bob@dylan:~$
```

program [7-has_array_values.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_data_manipulation/7-has_array_values.js)


### Task 8 :

Create a function named `cleanSet` that returns a string of all the set values that start with a specific string (startString).
It accepts two arguments: a `set` (Set) and a `startString` (String).
When a value starts with `startString` you only append the rest of the string. The string contains all the values of the set separated by -.

```
# expexted output
bob@dylan:~$ npm run dev 8-main.js 
jovi-aparte-appetit

bob@dylan:~$
```

program [8-clean_set.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_data_manipulation/8-clean_set.js)


### Task 9 :

Create a function named `groceriesList` that returns a map of groceries with the following items (name, quantity):

```
Apples, 10
Tomatoes, 10
Pasta, 1
Rice, 1
Banana, 5
```

```
# expexted output
bob@dylan:~$ npm run dev 9-main.js 
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 1,
  'Rice' => 1,
  'Banana' => 5
}
bob@dylan:~$
```

program [9-groceries_list.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_data_manipulation/9-groceries_list.js)


### Task 10 :

Create a function named `updateUniqueItems` that returns an updated map for all items with initial quantity at 1.
It should accept a map as an argument. The map it accepts for argument is similar to the map you create in the previous task.
For each entry of the map where the quantity is 1, update the quantity to 100. If updating the quantity is not possible (argument is not a map) the error `Cannot process` should be thrown.

```
# expexted output
bob@dylan:~$ npm run dev 10-main.js 
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 1,
  'Rice' => 1,
  'Banana' => 5
}
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 100,
  'Rice' => 100,
  'Banana' => 5
}
bob@dylan:~$ 
```

program [10-update_uniq_items.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_data_manipulation/10-update_uniq_items.js)
