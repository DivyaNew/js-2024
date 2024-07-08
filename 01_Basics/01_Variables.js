const accountId = 1234;
let accountEmail = "divya@gmail.com";
var password = 12345;
accountCity ="Jaipur";
let accountState;
// accountId = 2456;
/* do not use var because of issue in block scope and functional scope */
accountEmail ="divyaa@gmail.com"
password = 2222;
accountCity = "Bengaluru";

console.log(accountId);
console.table([accountId,accountEmail,password,accountCity.accountState]);