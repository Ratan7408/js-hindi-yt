// console.log("H");
// console.log("d");
// console.log("S");

function sayMyName(){
    console.log("H");
console.log("d");
console.log("S");
}

//sayMyName()

function addTwoNumbers(number1, Number2){
   let result = number1+Number2;
   console.log("ratan");
   
   return result
   console.log("ratan"); // after return console.log will never be printed
   
   
}
addTwoNumbers(3, 4) //7
addTwoNumbers(3 ,"4") //34

function loginudermessage(username){
    return `${username} just logged in`
}

console.log(loginudermessage("hitesh"))  //hitesh just logged in


//adding parameters

function  calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,300,500)); // [ 200, 300, 500 ]  start adding values in array iy will add in future

const user = {
    username: "nitesh",
    price: 1999
}
function handleObject(anyobject){
    console.log(`username id ${anyobject.username} and price is ${anyobject}`);
    
}
console.log(handleObject(user));





