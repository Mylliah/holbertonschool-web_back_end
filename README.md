## Project 1 : Python - Variable Annotations
        - Type annotations in Python 3
        - How you can use type annotations to specify function signatures and variable types
        - Duck typing
        - How to validate your code with mypy

## Project 2 : Python - Async
        - async and await syntax
        - How to execute an async program with asyncio
        - How to run concurrent coroutines
        - How to create asyncio tasks
        - How to use the random module

## Project 3 : Python - Async Comprehension
        - How to write an asynchronous generator
        - How to use async comprehensions
        - How to type-annotate generators

## Project 4 : Pagination
        - How to paginate a dataset with simple page and page_size parameters
        - How to paginate a dataset with hypermedia metadata
        - How to paginate in a deletion-resilient manner

## Project 5 : NoSQL
        - What NoSQL means
        - What is difference between SQL and NoSQL
        - What is ACID
        - What is a document storage
        - What are NoSQL types
        - What are benefits of a NoSQL database
        - How to query information from a NoSQL database
        - How to insert/update/delete information from a NoSQL database
        - How to use MongoDB

## Project 6 : ES6 Basics *
        - What ES6 is
        - New features introduced in ES6
        - The difference between a constant and a variable
        - Block-scoped variables
        - Arrow functions and function parameters default to them
        - Rest and spread function parameters
        - String templating in ES6
        - Object creation and their properties in ES6
        - Iterators and for-of loops

## Project 7 : ES6 classes *
        - How to define a Class
        - How to add methods to a class
        - Why and how to add a static method to a class
        - How to extend a class from another
        - Metaprogramming and symbols

## Project 8 : ES6 data manipulation *
        - How to use map, filter and reduce on arrays
        - Typed arrays
        - The Set, Map, and Weak link data structures

## Project 9 : ES6 data manipulation *
        - How to use map, filter and reduce on arrays
        - Typed arrays
        - The Set, Map, and Weak link data structures

## Project 10 : ES6 Promises *
        - Promises (how, why, and what)
        - How to use the `then`, `resolve`, `catch` methods
        - How to use every method of the Promise object
        - Throw / Try
        - The await operator
        - How to use an `async` function

## Project 11 : NodeJS Basics **
        - run javascript using NodeJS
        - use NodeJS modules
        - use specific Node JS module to read files
        - use `process` to access command line arguments and the environment
        - create a small HTTP server using Node JS
        - create a small HTTP server using Express JS
        - create advanced routes with Express JS
        - use ES6 with Node JS with Babel-node
        - use Nodemon to develop faster

### Requirements
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `node` (version 20.x.x)
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `js` extension
- Your code will be tested using `Jest` and the command `npm run test`
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
- All of your functions/classes must be exported by using this format: `module.exports = myFunction;`
- You must also send the following files to your repository: `package.json`, `babel.config.js`, `.eslintrc.js` and `database.csv`

## * SETUP :

### Install NodeJS 20.x.x
(in your home directory):
```
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```
```
$ nodejs -v
v20.15.1
$ npm -v
10.7.0
```
### Install Jest, Babel, and ESLint
in your project directory:
- Install Jest using: `npm install --save-dev jest`
- Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env`
- Install ESLint using: `npm install --save-dev eslint`


### Configuration files

<details>
    <summary><b>package.json</b></summary>
```
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.8.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```
</details>


<details>
    <summary><b>babel.config.js</b></summary>
```
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```
</details>

<details>
    <summary><b>.eslintrc.js</b></summary>
```
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```
</details>

### and…
Don’t forget to run `$ npm install` when you have the `package.json`

--

## ** SETUP :
[...]

### Configuration files

<details>
    <summary><b>database.csv</b></summary>
```
firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS
```
</details>

<details>
    <summary><b>package.json</b></summary>
```
{
  "name": "node_js_basics",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "test": "./node_modules/mocha/bin/mocha --require babel-register --exit",
    "dev": "nodemon --exec babel-node --presets babel-preset-env ./server.js ./database.csv"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "chai-http": "^4.3.0",
    "express": "^4.17.1"
  },
  "devDependencies": {
      "babel-cli": "^6.26.0",
      "babel-preset-env": "^1.7.0",
      "lint": "*",
      "eslint": "^6.8.0",
      "eslint-config-airbnb-base": "^14.2.1",
      "eslint-plugin-import": "^2.29.1",
      "eslint-plugin-jest": "^22.21.0",
      "nodemon": "^2.0.22",
      "chai": "^4.4.1",
      "mocha": "^6.2.3",
      "request": "^2.88.2",
      "sinon": "^7.5.0"
  }
}
```
</details>

<details>
    <summary><b>babel.config.js</b></summary>
```
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```
</details>

<details>
    <summary><b>.eslintrc.js</b></summary>
```
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```
</details>

### and…
Don’t forget to run `$ npm install` when you have the `package.json`
