const accountId = 144553
let accountEmail = "ratan74082@gmail.com"
var accountPassword = "12345"
accountCity = "jaippur"
let accountState;  // this will print undefined
//accountId = 2  // not allowed to change

console.log(accountId);
console.log(accountEmail);


/*
prefer not use var because of issue
in block scope and functional scope
*/
// to d call in a single line use table 
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])
