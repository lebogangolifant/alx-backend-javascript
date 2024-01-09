# 0x03. ES6 Data Manipulation

This directory contains projects related to ES6 (ECMAScript 2015) data manipulation. Each task focuses on specific ES6 features, providing hands-on experience with JavaScript's array manipulation, typed arrays, and data structures.

## Table of Contents

- [Task Descriptions](#task-descriptions)
- [Overview Concepts](#overview-concepts)
- [Requirements](#requirements)
- [Setup](#setup)
- [Usage](#usage)

## Task Descriptions

- **Task 0: [0-get_list_students.js](0-get_list_students.js)** - Create a function to return an array of student objects.
- **Task 1: [1-get_list_student_ids.js](1-get_list_student_ids.js)** - Create a function to return an array of student IDs from a list of objects.
- **Task 2: [2-get_students_by_loc.js](2-get_students_by_loc.js)** - Create a function to filter students based on location.
- **Task 3: [3-get_ids_sum.js](3-get_ids_sum.js)** - Create a function to return the sum of all student IDs.
- **Task 4: [4-update_grade_by_city.js](4-update_grade_by_city.js)** - Create a function to update student grades for a specific city.
- **Task 5: [5-typed_arrays.js](5-typed_arrays.js)** - Create a function to return a new ArrayBuffer with an Int8 value at a specific position.
- **Task 6: [6-set.js](6-set.js)** - Create a function to return a Set from an array.
- **Task 7: [7-has_array_values.js](7-has_array_values.js)** - Create a function to check if all elements in an array exist within a Set.
- **Task 8: [8-clean_set.js](8-clean_set.js)** - Create a function to return a string of set values that start with a specific string.
- **Task 9: [9-groceries_list.js](9-groceries_list.js)** - Create a function to return a map of groceries with quantities.
- **Task 10: [10-update_uniq_items.js](10-update_uniq_items.js)** - Create a function to update a map for items with an initial quantity of 1.
- **Task 11: [100-weak.js](100-weak.js)** - Export a const instance of WeakMap and create a function to track API query counts.

## Overview Concepts

The tasks in this directory cover the following ES6 data manipulation concepts:

- Array manipulation using map, filter, and reduce.
- Typed arrays for low-level binary data handling.
- Set, Map, and WeakMap data structures.
- Iteration and data transformation.
- Error handling and tracking API query counts.

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

To run the tasks, use the provided test files. For example:

- Task 0

```bash
npm run dev 0-main.js
```

Feel free to follow similar patterns for other tasks.
