# 0x05. NodeJS Basics

This directory contains projects related to Node.js basics. Each task focuses on different aspects of Node.js development, including creating HTTP servers, working with Express.js, handling file I/O operations, and more.

## Table of Contents

- [Task Descriptions](#task-descriptions)
- [Overview Concepts](#overview-concepts)
- [Requirements](#requirements)
- [Setup](#setup)
- [Usage](#usage)

## Task Descriptions

- **Task 0: [0-console.js](0x05-Node_JS_basic/0-console.js)** - Create a function to display a message in the console.

- **Task 1: [1-stdin.js](0x05-Node_JS_basic/1-stdin.js)** - Create a program that reads input from the user.

- **Task 2: [2-read_file.js](0x05-Node_JS_basic/2-read_file.js)** - Create a function to count students from a database file synchronously.

- **Task 3: [3-read_file_async.js](0x05-Node_JS_basic/3-read_file_async.js)** - Create a function to count students from a database file asynchronously.

- **Task 4: [4-http.js](0x05-Node_JS_basic/4-http.js)** - Create a small HTTP server using the http module.

- **Task 5: [5-http.js](0x05-Node_JS_basic/5-http.js)** - Create a small HTTP server using the http module, returning plain text with different responses based on the URL path.

- **Task 6: [6-http_express.js](0x05-Node_JS_basic/6-http_express.js)** - Create a small HTTP server using Express.js.

- **Task 7: [7-http_express.js](0x05-Node_JS_basic/7-http_express.js)** - Enhance the Express.js server to handle different routes and responses.

- **Task 8: [full_server](0x05-Node_JS_basic/full_server)** - Create a full server structure with controllers, routes, and utils files.

## Overview Concepts

The tasks in this directory cover the following Node.js concepts:

- Working with the HTTP module
- Handling asynchronous file operations
- Creating HTTP servers with Express.js
- Structuring a full server application
- Handling different routes and responses

## Requirements

- Node (version 12.x.x)
- Ubuntu 18.04

## Setup

1. Clone the repository:

```bash
git clone https://github.com/lebogangolifant/alx-backend-javascript.git
```

2. Navigate to the project directory:

```bash
cd 0x05-Node_JS_basic
```

3. Install dependencies:

```bash
npm install
```

## Usage


1. To run full server

- start server in terminal 1:

```bash
npm run dev
```

- In terminal 2:

```bash
curl localhost:1245 && echo ""
```

```bash
curl localhost:1245/students && echo ""
```

```bash
curl localhost:1245/students/SWE && echo ""
```
