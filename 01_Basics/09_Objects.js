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

//part 2
//const instaUser = new Object(); //singleton

const instaUser ={} //non-singleton
//console.log(instaUser);//{}

instaUser.id="Sam123";
instaUser.name="Sam";
instaUser.isLoggedIn = true;
//console.log(instaUser);//{id="Sam123",name="Sam",isLoggedIn = true}

const regularUser = {
    email:"reg@gmail.com",
    fullname:{
        userfullname :{
            fname:"Divya",
            lname:"H"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.fname);

const obj1 ={ 1:"a", 2:"b"};
const obj2 ={ 3:"a", 4:"b"};

//const obj3 = {obj1,obj2};
//console.log(obj3);

//const obj3 = Object.assign({}, obj1,obj2); //assign({target,source})
//console.log(obj3);//{1:"a", 2:"b",3:"a", 4:"b"}

const obj3 = {...obj1,...obj2};
//console.log(obj3);

console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));

console.log(instaUser.hasOwnProperty('isLoggedIn')); //true
console.log(instaUser.hasOwnProperty('isLogged')); //false


//destructuring

// const course ={
//     cname:"Javascript",
//     price:999,
//     courseInstructor: "Hitesh"
// }

// const {courseInstructor} = course;
// console.log(courseInstructor);

// const {courseInstructor : CI} = course;
// console.log(CI);

//JSON format

// {
//     "cname":"JS",
//     "fees":"free"
//     "courseInstructor": "HC"
// }

// [
//     {},
//     {},
//     {}
// ]