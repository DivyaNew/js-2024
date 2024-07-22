const user = {
    username:"Divya",
    price:999,
    welcomeMsg: function(){
        //console.log(`${this.username} welcome!`);
        //console.log(this)
    }
};

// user.welcomeMsg(); //Divya welcome!
// user.username="Sam";
// user.welcomeMsg(); //Sam welcome!

// console.log(this); //{} in browser this gives window obj //browser global obj-window

// function chai(){
//     username:"D!"
//     console.log(this)
//     console.log(this.username) //undefined
// }
// chai()

// const chai = function (){
//     username:"D!"
//     console.log(this)
//     console.log(this.username) //undefined
// }
// chai()

//arrow functions

// const chai = () =>{
//     username:"D!"
//     console.log(this) //{}
//     console.log(this.username) //undefined
// }
// chai()


// const addTwo = (n1,n2) => { //explicit
//     return n1+n2;
// }

// const addTwo = (n1,n2) =>  n1+n2;

// const addTwo = (n1,n2) =>  (n1+n2);

//console.log(addTwo(1,5)); //9

//Immediately Invoked Function Expressions (IIFE)
//purpose - to avoid polluting global space
( function chai (){
    console.log(`DB Connected`);
})();

( (name) =>{
    console.log(`DB Connected ${name}`);
})("Divya");
