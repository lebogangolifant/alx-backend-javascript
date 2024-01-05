# 0x02. ES6 classes

This directory contains solutions for a series of tasks related to JavaScript adES6 classes.

## Table of Contents

- [Task Descriptions](#task-descriptions)
- [Overview Concepts](#overview-concepts)
- [Requirements](#requirements)
- [Setup](#setup)
- [Usage](#usage)

## Task Descriptions

- **Task 0: [0-classroom.js](0-classroom.js)** - Implement ClassRoom class with maxStudentsSize attribute.
- **Task 1: [1-make_classrooms.js](1-make_classrooms.js)** - Implement initializeRooms function and create ClassRoom objects
- **Task 2: [2-hbtn_course.js](2-hbtn_course.js)** - Implement HolbertonCourse class with getters, setters, and attribute validations.
- **Task 3: [3-currency.js](3-currency.js)** - Implement a class named Currency, Each attribute stored in an “underscore” attribute version
- **Task 4: [4-pricing.js](4-pricing.js)** - Implement Pricing class with attributes 'amount' and 'currency', each stored with an underscore prefix.
- **Task 5: [5-building.js](5-building.js)** - Implement an abstract class named Building.
- **Task 6: [6-sky_high.js](6-sky_high.js)** - Implement a class named SkyHighBuilding that extends Building.
- **Task 7: [7-airport.js](7-airport.js)** - Implement Airport class with toString method
- **Task 8: [8-hbtn_class.js](8-hbtn_class.js)** - Implement HolbertonClass with toString method.
- **Task 9: [9-hoisting.js](9-hoisting.js)** - Implement HolbertonClass and StudentHolberton classes, and listOfStudents array, with corrected export syntax in 9-hoisting.js
- **Task 10: [10-car.js](10-car.js)** - Implement cloneCar method in the Car class to properly set the prototype of the cloned object.
- **Task 11: [100-evcar.js](100-evcar.js)** - Implement EVCar class that extends Car.

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
