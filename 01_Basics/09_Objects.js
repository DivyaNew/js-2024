//singleton

//object literals

const mySym = Symbol("Key1");
const mySym2 = Symbol("Key2");
const JsUser = {
    name: "Divya",
    "full name": "Divya H",
    location : "Bengaluru",
    age:0,
    isLoggedIn: false,
    email:"divya@gmail.com",
    mySym:"mykey1",
    [mySym2]:"mykey2"
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// //console.log(JsUser.full name) //doesnt work bcz of spaces
// console.log(JsUser.mySym); //mykey1
// console.log(typeof JsUser.mySym); //string
// console.log(JsUser[mySym2]); //mykey2
// console.log(typeof JsUser["mySym2"]); //undefined

JsUser.email ="divyaa@gmail.com";
//Object.freeze(JsUser);
JsUser.email ="divyaa@google.com";
//console.log(JsUser);

//output
/*
{
name: 'Divya',
  'full name': 'Divya H',
  location: 'Bengaluru',
  age: 0,
  isLoggedIn: false,
  email: 'divyaa@gmail.com',
  mySym: 'mykey1',
  [Symbol(Key2)]: 'mykey2'
  }
*/

JsUser.greeting = function (){
    console.log("Hello JS User!")
}
JsUser.greetingTwo = function (){
    console.log(`Hello JS User, ${this["full name"]}`)
}

console.log(JsUser.greeting); //[Function (anonymous)]
console.log(JsUser.greeting()); //Hello JS User!
console.log(JsUser.greetingTwo()); //Hello JS User, Divya H