const score = 400
console.log(score); //400


const balance = new Number(100)
console.log(balance);  //[Number: 100]

console.log(balance.toString().length); //3
console.log(balance.toFixed(1));   //100.0

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));  //23.9


const hundreads = 10000
console.log(hundreads.toLocaleString()); //10,000

//***************** Maths ************************/

console.log(Math);      //Object [Math] {}
console.log(Math.abs(-4));  //4
console.log(Math.round(4.6)); //5
console.log(Math.sqrt(4));  ///2
console.log(Math.max(4,2,8,6,3)); //8

console.log(Math.random()); // 0.51
console.log(Math.floor(Math.random()*10)+1);  //8.95


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1)) + min);  //15














