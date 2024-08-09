// // singleton

// //object literals
// //Object.create

const JsUser = {
    name: "Ratan",
    "full name": lalaji,
    age:  21,
    [mySym] : "myKey1",
    location: "bansi",
    email: "ratan74082@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email);  //ratan74082@gmail.com
console.log(JsUser["email"]);  ////ratan74082@gmail.com 
console.log(JsUser[mySym]);
Object.freeze(JsUser)  // object will be freeze it cant change

JsUser.greeting =  function(){
    console.log("Hello js user")
}
console.log(JsUser.greeting());







