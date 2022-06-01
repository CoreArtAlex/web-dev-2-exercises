const functions = require('./promise-generator');

const returnPromise = functions.returnPromise;
const returnRejectedPromise = functions.returnRejectedPromise;

const promiseOne = returnRejectedPromise('one', 1500);
const promiseTwo = returnPromise('two', 4000);
const promiseThree = returnPromise('three', 2000);
const promiseFour = returnPromise('four', 3000);

const promises = [promiseOne, promiseFour, promiseThree, promiseTwo];

Promise.all(promises)
  .then((data) => {
    console.log('data:', data);
  })
  .catch((err) => {
    console.log('something was rejected!:', err);
  });
