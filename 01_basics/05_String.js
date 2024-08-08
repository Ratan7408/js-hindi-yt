"hello" + "world"  // helloworld

const name = "ratan"
const repoCount = 50

//console.log(name + repoCount + "Value");  dont use this syntax its an old type 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // string interpulation method modern way of using

const gameName = new String('Ratan')
console.log(gameName);    //String

console.log(gameName[0]); //R
console.log(gameName.__proto__);   //object => {}
console.log(gameName.length); //5
console.log(gameName.toLocaleUpperCase());   // Ratan
console.log(gameName.charAt('2'));   //t
console.log(gameName.indexOf('t'));  //2

const newString = gameName.substring(0,4)
console.log(newString);  // Ratan


const anotherString = gameName.slice(-5,4)    //slice negative value allowed .. output Rata
console.log(anotherString);



const newStringOne = "  Ratan  "
console.log(newStringOne);    //spce space then it will print Ratan
console.log(newStringOne.trim());  //Ratan

const url = "https://ratan.com/ratan%20srivastav"
console.log(url.replace('%20','-'))   //https://ratan.com/ratan-srivastav
console.log(gameName.split('-'));  //[ 'Ratan' ]







    







