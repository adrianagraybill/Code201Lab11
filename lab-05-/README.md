# LAB - 05

### Buffers - Data Modeling With NoSQL Databases

### Author: Adriana Graybill

### Links and Resources
* [submission PR](https://github.com/adriana-401-advanced-javascript/lab-05/pull/1)
* [![Build Status](https://travis-ci.com/adriana-401-advanced-javascript/lab-05.svg?branch=master)](https://travis-ci.com/adriana-401-advanced-javascript/lab-05)

### Modules
categories-schema.js
* creates category schema

products-schema.js
* creates products schema

categories.js
* Class categories that creates a categories constructor with get, create, update, and delete methods

products.js
* Class products that creates a products constructor with get, create, update, and delete methods

### Technology and Libraries Used
jest
mongodb-memory-server
mongoose
supertest
uuid

#### Running the app
* We used tests to confirm our code is functioning the way we want, since we do not have a live database, we are mocking our data within the tests.
  
#### Tests
* How do you run tests?
  * ```npm test```
* What assertions were made?
  * all the methods on the class contructor and products
* What assertions need to be / should be made?
  * need to finish out the tests
