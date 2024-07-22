// function addNumbers (n1,n2) { //n1,n2 - parameters
//   console.log(n1+n2)
// }

// addNumbers(1,22); //1,22 - arguments

// const result = addNumbers(1,22);
// console.log(result);//undefined 


function addNumbers (n1,n2) { //n1,n2 - parameters
    return  n1+n2;
  }

 const result = addNumbers(1,6);
 //console.log(result); //7

 function userLoginMsg (username = "D!"){
    if(username === undefined){     //if(!username)
        console.log("Please enter username!");
        return;
    }
    return `${username} just logged in!` 
 }

 //console.log(userLoginMsg("Divya"));// Divya just loggen in
 //console.log(userLoginMsg("")); //just loggen in
 console.log(userLoginMsg()); //undefined just loggen in 

 function calculateCartPrice (...num1){
    return num1;
}

console.log(calculateCartPrice(200,300,400)); //[200,300,400]

function calculateCartPrice1 (val1,val2,...num1){
return num1;
}

console.log(calculateCartPrice1(200,300,400,2000)); //[400,2000]

const user ={
name:"Divya",
Price:1999
}

function handleObject(anyObject){
console.log(`username is ${anyObject.name} and price is ${anyObject.Price}`);
}

handleObject(user);

handleObject({
name:"Random",
Price:1000
})


const myNewArray = [100,2000,500,1000];

function returnSecValue(getArray){
return getArray[1];
}

console.log(returnSecValue(myNewArray));
console.log(returnSecValue([1000,200,2000,400]));