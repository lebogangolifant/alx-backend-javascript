# 0x00. ES6 Basics

This directory contains projects related to ES6 (ECMAScript 2015) basics. Each task focuses on specific ES6 features, providing a hands-on learning experience for JavaScript developers.

## Table of Contents

- [Task Descriptions](#task-descriptions)
- [Overview Concepts](#overview-concepts)
- [Requirements](#requirements)
- [Setup](#setup)
- [Usage](#usage)

## Task Descriptions

- **Task 0: [0-constants.js](0-constants.js)** - Modify variable instantiation using const and let.
- **Task 1: [1-block-scoped.js](1-block-scoped.js)** - Modify variables to avoid overwriting inside the conditional block.
- **Task 2: [2-arrow.js](2-arrow.js)** - Rewrite a standard function using ES6's arrow syntax.
- **Task 3: [3-default-parameter.js](3-default-parameter.js)** - Condense function internals to one line using default parameter values.
- **Task 4: [4-rest-parameter.js](4-rest-parameter.js)** - Modify a function to return the number of arguments using the rest parameter syntax.
- **Task 5: [5-spread-operator.js](5-spread-operator.js)** - Concatenate arrays and string characters using spread syntax.
- **Task 6: [6-string-interpolation.js](6-string-interpolation.js)** - Rewrite a function's return statement using template literals.
- **Task 7: [7-getBudgetObject.js](7-getBudgetObject.js)** - Modify a function to use keynames for the budget object.
- **Task 8: [8-getBudgetCurrentYear.js](8-getBudgetCurrentYear.js)** - Rewrite a function using ES6 computed property names for the budget object.
- **Task 9: [9-getFullBudget.js](9-getFullBudget.js)** - Rewrite a function to use ES6 method properties in the fullBudget object.
- **Task 10: [10-loops.js](10-loops.js)** - Rewrite a function to use ES6's for...of operator.
- **Task 11: [11-createEmployeesObject.js](11-createEmployeesObject.js)** - Create an object mapping department names to employees.
- **Task 12: [12-createReportObject.js](12-createReportObject.js)** - Create an object with allEmployees and a method to get the number of departments.
- **Task 13: [100-createIteratorObject.js](100-createIteratorObject.js)** - Create an iterator to go through every employee in every department.
- **Task 14: [101-iterateThroughObject.js](101-iterateThroughObject.js)** - Return every employee name in a string, separated by |.

## Overview Concepts

The tasks in this directory cover the following ES6 concepts:

- Modern JavaScript features introduced in ECMAScript 2015 (ES6).
- Block-scoped variables using const and let.
- Arrow functions and default parameters.
- Rest and spread function parameters.
- String templating using template literals.
- Object creation and property manipulation in ES6.
- Iterators and for...of loops.
- Computed property names and method properties.
- Usage of the for...of loop.
- ...

## Requirements

- Node.js 12.11.x
- npm 6.11.3
- Ubuntu 18.04 LTS

## Setup

Install Node.js 12.11.x using the following commands:

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Install Jest, Babel, and ESLint in your project directory:

```bash
npm install
```

## Usage

To run the tasks, use the provided test file. For example:

- Task 0

```bash
npm run dev 0-main.js 
```
