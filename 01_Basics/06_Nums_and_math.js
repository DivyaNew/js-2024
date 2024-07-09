const score =400;
// console.log(score); //400

const balance = new Number (100);
// console.log(balance); //[Number: 100]

// console.log(balance.toFixed(2)); //100.00


const otherNum = 126.943;
// console.log(otherNum.toPrecision(3)); //127

const otherNum2 = 126.943;
// console.log(otherNum2.toPrecision(1)); //1e+2

const otherNum3 = 1126.943;
// console.log(otherNum3.toPrecision(4)); //1127

const hundreds = 100000;
// console.log(hundreds.toLocaleString('en-IN')); //1,00,000

//*******MATH*******/

// console.log(Math.abs(-6)); //6
// console.log(Math.round(-6.6)); //7
// console.log(Math.ceil(6.1)); //7
// console.log(Math.floor(6.1)); //6 
// console.log(Math.min(-6,3,2,1,5,6)); //-6

console.log((Math.random()*10)+1);

const min=10;
const max=20;

console.log(Math.floor(Math.random() * (max-min+1))+min);


