// SECTION 1 – Date Object Tasks

// TASK 1 – Custom Digital Clock
// setInterval(() => {
//  let now = new Date();
//  let hours = now.getHours();
//  let minutes = now.getMinutes();
//  let seconds = now.getSeconds();
//  hours = hours < 10 ? "0" + hours : hours;
//  minutes = minutes < 10 ? "0" + minutes : minutes;
//  seconds = seconds < 10 ? "0" + seconds : seconds;
//  console.log(`Current Time: ${hours} : ${minutes} : ${seconds}`);
// }, 1000);

// TASK 2 – Find Current Day Name
// let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// let today = new Date().getDay();
// console.log(`Today is ${days[today]}`); 

// TASK 3 – Age Calculator (Basic)
// let birthYear = 2002;
// let currentYear = new Date().getFullYear();
// let age = currentYear - birthYear;
// console.log(`Your age is ${age}`);

// TASK 4 – Create Specific Date
// let date = new Date();
// date.setFullYear(2020);
// date.setMonth(7);       
// date.setDate(15);
// date.setHours(10);
// date.setMinutes(30);
// date.setSeconds(45);
// console.log(date.toLocaleString());

// SECTION 2 – setTimeout & setInterval
// TASK 5 – Delayed Message
// setTimeout(() => {
//    console.log("Welcome Naveen");
// }, 3000);

// TASK 6 – Stop Interval After 5 Seconds
// let count = 1;
// let interval = setInterval(() => {
//  console.log(count);
//  count++;
// if (count > 5) {
//  clearInterval(interval);
//  console.log("Stopped");
// }
// }, 1000);

// SECTION 3 – Promise Practice
// TASK 7 – Simple Promise
// function checkNumber(num) {
//  return new Promise((resolve, reject) => {
//   if (num > 10) {
//     resolve("Valid number");
//   } else {
//    reject("Invalid number");
//   }
// });
// }
//checkNumber(12)
//.then(result => console.log(result))
//.catch(error => console.log(error))
//.finally(() => console.log("Check completed"));

// SECTION 4 – Fetch API Task
// TASK 8 – Fetch Product Prices
//fetch("https://fakestoreapi.com/products")
//  .then(res => res.json())
//    data.forEach(p => {
//      console.log(`Product: ${p.title}`);
//      console.log(`Price: ${p.price}`);
//      console.log("-----------------");
//    });
//  })
//  .catch(err => console.log(err));

const products = [
  { title: "Bag", price: 1200 },
  { title: "Shoes", price: 2500 }
];
products.forEach(p => {
  console.log(`Product: ${p.title}`);
  console.log(`Price: ${p.price}`);
  console.log("-----------------");
});

// SECTION 5 – Execution Order Task
// TASK 9 – Predict Output
function one(){
  console.log("one");
}
function two(){
 console.log("two");
}
function three(){
  console.log("three");
}
one();
setTimeout(two, 0);
three();

// Output :-
// one
// three
// two

// Explanation :-
// one() runs immediately
// setTimeout(two, 0) goes to the callback queue
// three() runs immediately
// After call stack is empty, two() executes
