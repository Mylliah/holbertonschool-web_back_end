### Task 0 :

Implement a class named `ClassRoom`:
* Prototype: `export default class ClassRoom`
* It should accept one attribute named `maxStudentsSize` (Number) and assigned to `_maxStudentsSize`

```
# expected output
bob@dylan:~$ npm run dev 0-main.js 
10
bob@dylan:~$
```

program [0-classroom.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_classes/0-classroom.js)


### Task 1 :

Import the `ClassRoom` class from `0-classroom.js`.
Implement a function named `initializeRooms`. It should return an array of 3 `ClassRoom` objects with the sizes 19, 20, and 34 (in this order).

```
# expected output
bob@dylan:~$ npm run dev 1-main.js 
[
  ClassRoom { _maxStudentsSize: 19 },
  ClassRoom { _maxStudentsSize: 20 },
  ClassRoom { _maxStudentsSize: 34 }
]
bob@dylan:~$
```

program [1-make_classrooms.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_classes/1-make_classrooms.js)


### Task 2 :

Implement a class named `HolbertonCourse`:
* Constructor attributes:
    * `name` (String)
    * `length` (Number)
    * `students` (array of Strings)
* Make sure to verify the type of attributes during object creation
* Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
* Implement a getter and setter for each attribute.

```
# expected output
bob@dylan:~$ npm run dev 2-main.js 
ES6
HolbertonCourse {
  _name: 'Python 101',
  _length: 1,
  _students: [ 'Bob', 'Jane' ]
}
TypeError: Name must be a string
    ...
TypeError: Length must be a number
    ...
bob@dylan:~$
```

program [2-hbtn_course.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_classes/2-hbtn_course.js)


### Task 3 :

Implement a class named `Currency`:
* Constructor attributes:
    * `code` (String)
    * `name` (String)
* Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
* Implement a getter and setter for each attribute.
* Implement a method named `displayFullCurrency` that will return the attributes in the following format `name (code)`.

```
# expected output
bob@dylan:~$ npm run dev 3-main.js 
Dollars ($)
bob@dylan:~$
```

program [3-currency.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_classes/3-currency.js)


### Task 4 :

Import the class `Currency` from `3-currency.js`

Implement a class named `Pricing`:
* Constructor attributes:
    * `amount` (Number)
    * `currency` (Currency)
* Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
* Implement a getter and setter for each attribute.
* Implement a method named `displayFullPrice` that returns the attributes in the following format `amount currency_name (currency_code)`.
* Implement a static method named `convertPrice`. It should accept two arguments: `amount` (Number), `conversionRate` (Number). The function should return the amount multiplied by the conversion rate.


```
# expected output
bob@dylan:~$ npm run dev 4-main.js 
Pricing {
  _amount: 100,
  _currency: Currency { _code: 'EUR', _name: 'Euro' }
}
100 Euro (EUR)
bob@dylan:~$ 
```

program [4-pricing.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_classes/4-pricing.js)


### Task 5 :

Implement a class named `Building`:
* Constructor attributes:
    * `sqft` (Number)
* Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
* Implement a getter for each attribute.
* Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named `evacuationWarningMessage`.
    * If a class that extends from it does not have a `evacuationWarningMessage` method, throw an error with the message `Class extending Building must override evacuationWarningMessage`

```
# expected output
bob@dylan:~$ npm run dev 5-main.js 
Building { _sqft: 100 }
Error: Class extending Building must override evacuationWarningMessage
    ...
bob@dylan:~$
```

program [5-building.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_classes/5-building.js)


### Task 6 :

Import `Building` from `5-building.js`.
Implement a class named `SkyHighBuilding` that extends from `Building`:
* Constructor attributes:
    * `sqft` (Number) (must be assigned to the parent class Building)
    * `floors` (Number)
* Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
* Implement a getter for each attribute.
* Override the method named `evacuationWarningMessage` and return the following string `Evacuate slowly the NUMBER_OF_FLOORS floors`.

```
# expected output
bob@dylan:~$ npm run dev 6-main.js 
140
60
Evacuate slowly the 60 floors
bob@dylan:~$
```

program [6-sky_high.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_classes/6-sky_high.js)


### Task 7 :

Implement a class named Airport:
*  Constructor attributes:
    * name (String)
    * code (String)
* Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
* The default string description of the class should return the airport code (example below).


```
# expected output
bob@dylan:~$ npm run dev 7-main.js 
Airport [SFO] { _name: 'San Francisco Airport', _code: 'SFO' }
[object SFO]
bob@dylan:~$
```

program [7-airport.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_classes/7-airport.js)


### Task 8 :

Implement a class named `HolbertonClass`:
* Constructor attributes:
    * `size` (Number)
    * `location` (String)
* Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
* When the class is cast into a `Number`, it should return the size.
* When the class is cast into a `String`, it should return the location.

```
# expected output
bob@dylan:~$ npm run dev 8-main.js 
12
Mezzanine
bob@dylan:~$ 
```

program [8-hbtn_class.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_classes/8-hbtn_class.js)


### Task 9 :

Fix this code and make it work.

```
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

export class StudentHolberton {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this.holbertonClass;
  }

  get fullStudentDescription() {
    return `${self._firstName} ${self._lastName} - ${self._holbertonClass.year} - ${self._holbertonClass.location}`;
  }
}


export const listOfStudents = [student1, student2, student3, student4, student5];

```

program [9-hoisting.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_classes/9-hoisting.js)


### Task 10 :

Implement a class named `Car`:
* Constructor attributes:
    * `brand` (String)
    * `motor` (String)
    * `color` (String)
* Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
* Add a method named `cloneCar`. This method should return a new object of the class.
Hint: Symbols in ES6

```
# expected output
bob@dylan:~$ npm run dev 8-main.js 
12
Mezzanine
bob@dylan:~$ 
```

program [8-hbtn_class.js](https://github.com/Mylliah/holbertonschool-web_back_end/blob/main/ES6_classes/10-car.js)
