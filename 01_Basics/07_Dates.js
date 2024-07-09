// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); //object

let myCreateDate = new Date(2024,1,12,10,5);

// console.log(myCreateDate.toDateString()); //Mon Feb 12 2024
// console.log(myCreateDate.toLocaleString()); //2/12/2024. 10:05:00 AM


let myCreateDate2 = new Date("2024-01-16");
// console.log(myCreateDate2.toLocaleString()); //1/16/2024, 5:30;00 AM


let myCreateDate3 = new Date("01-18-2024");
// console.log(myCreateDate3.toLocaleString()); // 1/18/2024, 5:30;00 AM


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay()+1);

console.log(newDate.toLocaleString('default',{
    weekday : "long"
})); //Tuesday