# 0x06. Unittests in JS

This directory contains projects related to unit testing in JavaScript using Mocha, Chai, and Sinon. Each task focuses on different aspects of unit testing, providing practical exercises for JavaScript developers.

## Table of Contents

- [Task Descriptions](#task-descriptions)
- [Overview Concepts](#overview-concepts)
- [Requirements](#requirements)
- [Setup](#setup)
- [Usage](#usage)

## Task Descriptions

- **Task 0: [0-calcul.js](0x06-unittests_in_js/0-calcul.js)** - Create a function to round two numbers and return their sum.
- **Task 1: [1-calcul.js](0x06-unittests_in_js/1-calcul.js)** - Extend the previous function to support different arithmetic operations based on a type parameter.
- **Task 2: [2-calcul_chai.js](0x06-unittests_in_js/2-calcul_chai.js)** - Rewrite the tests for Task 1 using Chai's expect syntax.
- **Task 3: [3-payment.js](0x06-unittests_in_js/3-payment.js)** - Implement a function to send payment requests and stub the calculation method.
- **Task 4: [4-payment.js](0x06-unittests_in_js/4-payment.js)** - Stub the calculation method and verify its invocation and response.
- **Task 5: [5-payment.js](0x06-unittests_in_js/5-payment.js)** - Add hooks to execute setup and teardown actions before and after tests.
- **Task 6: [6-payment_token.js](0x06-unittests_in_js/6-payment_token.js)** - Implement an asynchronous function and test its behavior using the done callback.
- **Task 7: [7-skip.test.js](0x06-unittests_in_js/7-skip.test.js)** - Skip failing tests to avoid breaking the test suite.
- **Task 8: [8-api](0x06-unittests_in_js/8-api)** - Create an Express API with endpoints for available payments and login.
- **Task 9: [9-api](0x06-unittests_in_js/9-api)** - Add an endpoint for cart with ID validation and corresponding tests.
- **Task 10: [10-api](0x06-unittests_in_js/10-api)** - Extend the API with endpoints for available payments and login.

## Overview Concepts

The tasks in this directory cover the following concepts:

- Writing unit tests in JavaScript using Mocha, Chai, and Sinon.
- Test-driven development (TDD) principles.
- Stubbing and mocking with Sinon.
- Asynchronous testing and handling async functions.
- Test suites organization and management.
- Integration testing with Express.js APIs.
- Skipping tests to prevent failures.
- Error handling and debugging in tests.

## Requirements

- Node.js 12.x
- npm
- Ubuntu 18.04 LTS

## Setup

1. Clone the repository:

```bash
git clone https://github.com/lebogangolifant/alx-backend-javascript.git
```

2. Navigate to the project directory:

```bash
cd alx-backend-javascript/0x06-unittests_in_js
```

3. Install dependencies:

```bash
npm install
```

## Usage

To run the tests for a specific task, use the following command:

```bash
npm test path/to/testfile.js
```

For example, to run the tests for Task 1, use:

```bash
npm test 1-calcul.test.js
```

Ensure that all tests pass without any warnings.
