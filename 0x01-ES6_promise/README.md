# 0x01. ES6 Promises

This project focuses on learning and implementing ES6 Promises in JavaScript. It includes tasks and exercises related to Promises, asynchronous programming, and error handling.

## Table of Contents

- [Task Descriptions](#task-descriptions)
- [Overview Concepts](#overview-concepts)
- [Requirements](#requirements)
- [Setup](#setup)
- [Usage](#usage)

## Task Descriptions

- **Task 0: [0-promise.js](0-promise.js)** - Return a Promise using the prototype function `getResponseFromAPI()`. Verify that the returned value is an instance of a Promise.
- **Task 1: [1-promise.js](1-promise.js)** - Implement a function that resolves or rejects a Promise based on a given boolean parameter.
- **Task 2: [2-then.js](2-then.js)** - Implement a function that returns a Promise, using the `then` method to handle successful resolution.
- **Task 3: [3-all.js](3-all.js)** - Implement a function that uses `Promise.all` to handle multiple promises concurrently.
- **Task 4: [4-user-promise.js](4-user-promise.js)** - Create a function that returns a Promise using `resolve` and `reject` to handle success and failure.
- **Task 5: [5-photo-reject.js](5-photo-reject.js)** - Modify a function to handle Promise rejection using `reject` with a specified error message.
- **Task 6: [6-pending-promise.js](6-pending-promise.js)** - Create a function that returns a pending Promise.
- **Task 7: [7-load-balancer.js](7-load-balancer.js)** - Implement a function that distributes tasks among several workers using Promise.race.
- **Task 8: [8-try-reject-handle.js](8-try-reject-handle.js)** - Create a function that returns a Promise and handles errors using `try`, `catch`, and `finally`.
- **Task 9: [9-try-reject-handle-promise.js](9-try-reject-handle-promise.js)** - Modify a function to return a Promise and handle errors using `try`, `catch`, and `finally`.
- **Task 10: [10-promise-me.js](10-promise-me.js)** - Use `setTimeout` to delay the resolution of a Promise.

## Overview Concepts

The tasks in this directory cover the following ES6 concepts:

- Classes
- Inheritance
- Getters and Setters
- Abstract Classes
- Static Methods
- Class Extensions

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
