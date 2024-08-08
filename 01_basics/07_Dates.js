// calculate from jan 1 1970, UTC yahi se date calcuate hota hai
// Temporal api used to change the dates
let myDate = new Date()
console.log(myDate);  //2024-08-08T10:00:09.014Z
console.log(myDate.toString()); // Thu Aug 08 2024 10:00:53 GMT+0000 
console.log(myDate.toLocaleString()); // 8/8/2024, 10:01:47 AM
console.log(myDate.toDateString()); // Thu Aug 08 2024
console.log(myDate.toTimeString()); // 10:04:37 GMT+0000 (Coordinated Universal Time)


