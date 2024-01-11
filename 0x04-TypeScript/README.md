# 0x04. Typescript

This directory contains projects related to TypeScript, a superset of JavaScript that adds static typing to the language. Each task focuses on specific TypeScript concepts, providing hands-on experience with types, interfaces, classes, namespaces, and more.

## Table of Contents

- [Task Descriptions](#task-descriptions)
- [Overview Concepts](#overview-concepts)
- [Requirements](#requirements)
- [Setup](#setup)
- [Usage](#usage)

## Task Descriptions

- **Task 0: [0-main.ts](task_0/js/main.ts)** - Define a TypeScript interface, create objects, and render a table using Vanilla JavaScript. Create a Student interface and an array of students, then render a table with their information.

- **Task 1: [1-main.ts](task_1/js/main.ts)** - Define and implement a TypeScript interface for a Teacher with specific attributes. Create objects of teachers and demonstrate object creation restrictions.

- **Task 2: [2-main.ts](task_1/js/main.ts)** - Extend the Teacher interface to create a Directors interface and implement a class. Demonstrate class inheritance and method implementation. Create an object of a Director.

- **Task 3: [3-main.ts](task_1/js/main.ts)** - Create a function and an interface for a teacher, demonstrating nominal typing. Implement basic nominal typing with TypeScript.

- **Task 4: [main.ts](task_1/js/main.ts), [Teacher.ts](task_1/js/Teacher.ts), [Subject.ts](task_1/js/Subject.ts), [Cpp.ts](task_1/js/Cpp.ts), [React.ts](task_1/js/React.ts), [Java.ts](task_1/js/Java.ts)** - Create classes and interfaces in a namespace named Subjects. Implement classes for Cpp, React, and Java subjects, each with specific requirements and available teachers.

- **Task 5: [main.ts](task_5/js/main.ts)** - Create interfaces named MajorCredits and MinorCredits. Write functions sumMajorCredits and sumMinorCredits that sum the credits of two subjects.

- **Task 6: [main.ts](task_2/js/main.ts)** - Write a function isDirector that serves as a type predicate. Write a function executeWork that calls different methods based on the type of employee.

- **Task 7: [main.ts](task_2/js/main.ts)** - Write a String literal type named Subjects allowing a variable to have the value Math or History only. Write a function teachClass that returns a string based on the input subject.

- **Task 8: [main.ts](task_3/js/main.ts), [crud.js](task_3/js/crud.js), [crud.d.ts](task_3/js/crud.d.ts)** - Create an ambient file with type declarations for CRUD functions. Use the types in the main file to interact with CRUD functions.

- **Task 9: [main.ts](task_4/js/main.ts), [Teacher.ts](task_4/js/subjects/Teacher.ts), [Subject.ts](task_4/js/subjects/Subject.ts), [Cpp.ts](task_4/js/subjects/Cpp.ts), [React.ts](task_4/js/subjects/React.ts), [Java.ts](task_4/js/subjects/Java.ts)** - Create and export constants for Cpp, Java, and React subjects. Create and export a Teacher object. Log information for each subject using the teacher object.

- **Task 10: [main.ts](task_5/js/main.ts)** - Create and export constants for MajorCredits and MinorCredits. Write functions sumMajorCredits and sumMinorCredits that sum the credits of two subjects.

- **Task 11: [main.ts](task_5/js/main.ts)** - Create a directory task_5 with configuration files. Create two interfaces MajorCredits and MinorCredits. Write two functions sumMajorCredits and sumMinorCredits that sum the credits of two subjects.


## Overview Concepts

The tasks in this directory cover the following TypeScript concepts:

- Basic types in TypeScript: Understand TypeScript's basic types such as number, string, boolean, etc.
- Interfaces, Classes, and functions
- Working with the DOM and TypeScript.
- Generic types
- Namespaces
- Merge declarations
- Ambient Namespace
- Basic nominal typing

## Requirements

- Node.js 12.11.x
- npm 6.11.3
- Ubuntu 18.04 LTS
- Configuration files provided: [package.json](task_0/package.json), [.eslintrc.js](task_0/.eslintrc.js), [tsconfig.json](task_0/tsconfig.json), [webpack.config.js](task_0/webpack.config.js)

## Setup

Install Node.js and TypeScript:

```bash
# Install Node.js 12.x
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install TypeScript globally
npm install -g typescript
```

Install project dependencies:

```bash
# Navigate to task_0 directory
cd task_0

# Install project dependencies
npm install
```

## Usage

Run TypeScript files using Webpack:

```bash
# Build TypeScript files
npm run build
or
npx webpack --mode development
```

```bash
# Start development server
npm start-dev
or
npx webpack serve --mode development
```
