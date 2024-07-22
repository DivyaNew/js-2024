let a=100;

if(true){
    let a=  10
    const b=100
    //console.log(`inner a=${a} and b=${b}`); //inner a=10 and b=100
}

//onsole.log(a); //100
//console.log(b); //error - b is not defined


/* ************ */

function one(){
    const username="Divya"

    function two(){
        const website ="youtube"
        console.log(username);
    }
    //console.log(website) error => website is not defined
    two();
}

one(); //Divya

if(true){
    const uname ="Divya"
    if (uname === "Divya"){
        const web = " youtube"
        console.log(uname + web)
    }
    // console.log(web); error : web is not defined
}

//console.log(uname); error : uname is not defined

//+++++++++++++++ hoisting

console.log(addOne(3));
function addOne(num) 
{
    return num+1
}

console.log(addTwo(10)x) // error cann't access before initalization
const addTwo = function(num){
    return num+2;
}
    
console.log(addTwo(6))
