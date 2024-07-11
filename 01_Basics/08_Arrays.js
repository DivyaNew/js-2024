const myArr = [0,1,2,3,4];
//console.log(myArr[3])

// myArr.push(5);
// myArr.push(6);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

myArr.unshift(9);
//console.log(myArr); //[9,0,1,2,3,4]

myArr.shift(9);
//console.log(myArr); //[0,1,2,3,4]

const newArr = myArr.join();
//console.log(newArr); //0,1,2,3,4

// console.log(typeof myArr); //object
// console.log(typeof newArr); //string


//splice and slice

const myArr1 = myArr.slice(1,3); //original array is not manipulated
// console.log(myArr1); //[1,2]
// console.log(myArr);//[0,1,2,3,4]

const myArr2= myArr.splice(1,3); //original array is manipulated
// console.log(myArr2);  //[1,2,3]
// console.log(myArr);//[0,4] 


const marvel_heros = ['thor','ironman','spiderman'];
const dc_heros = ['superman','flash','batman'];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);//['thor','ironman','spiderman',['superman','flash','batman']]

const allHeros = marvel_heros.concat(dc_heros);
//console.log(allHeros); //['thor','ironman','spiderman','superman','flash','batman']

const allNewHeros = [...marvel_heros, ...dc_heros]
//console.log(allNewHeros);//['thor','ironman','spiderman','superman','flash','batman']

const anotherArr = [1,2,3,[4,5], 6, [7,[8,9,10]],11];
//console.log(anotherArr.flat(Infinity)); //[1,2,3,4,5,6,7,8,9,10,11]


console.log(Array.isArray("Divya!")); //false
console.log(Array.from("Divya!")); //['D','i','v','y','a','!']
console.log(Array.from({name: "Divya!"})); //[]
console.log(Array.from({name: "Divya!"}).keys); 

const obj ={
    name :'Divya'
}

const newArr2 = Array.from(obj.keys);

console.log(newArr2);
