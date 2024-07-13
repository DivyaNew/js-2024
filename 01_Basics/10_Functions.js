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