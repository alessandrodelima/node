//function statement
function greet() {
 console.log('Hi. Hello World!'); 
}
greet();

// functions are first-class 
function logGreeting (fn) {
  fn();
}
//logGreeting(greet);
logGreeting(greet);

// function expression 
let greetMe = function() {
  console.log('Hi Alessandro');
}

greetMe();

//it's first-class
logGreeting(greetMe);

// use a function expression on  the fly
logGreeting(function () {
  console.log("Hello Alessandro. How are you?");
});