const name = "D";
repocount =10;

//console.log(name+repocount);

//string interpolation

//console.log(`My name is ${name} and repocount is ${repocount}`);

const game =  new String('Divya');
//console.log(game); //[String: 'Divya']

const newString = game.substring(1,2);
//console.log(newString);//i

const anotherString = game.slice(-1,5);
//console.log(anotherString);//a

const newStringOne = '  Divya ';
// console.log(newStringOne);  //  Divya  
// console.log(newStringOne.trim()); //Divya

const url ='https://divya10%h';

console.log(url.replace('10%','-')); //https://divya-h
console.log(url.includes('mad')); //false

console.log(url.split('%')); //[ 'https://divya10', 'h' ]

console.log(game.blink('i'));