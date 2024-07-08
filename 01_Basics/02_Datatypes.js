"use strict"; //treal all JS code as newer version

// alert(1+2); // we are using nodejs not browser 

let name = "Divya"
let age =100
let loggedIn = true;

//primitive - 7types

//number => range - 2 to power 53
//bigint
//sting => "";
//boolean => true/false
//null => standalone value 
//undefined => value is not yet assigned
//symbol => unique

// console.log(typeof null); //object
// console.log(typeof undefined); //undefined

// reference (non primitive)
//object , arrays, functions,

const id = Symbol('12');
const anotherid = Symbol('12');

//console.log(id === anotherid); // false
//console.log(typeof id); //symbol

const bigNumber = 36746252728637n;

console.log(typeof bigNumber); // bigInt

const myFunction = {
    name: 'Divya',
};

console.log(typeof myFunction); // object /function-object



