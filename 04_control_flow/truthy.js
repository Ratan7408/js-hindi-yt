const userEmail = "ratan74082@gmail.com"

if (userEmail) {
    console.log("Got user email");
  
} else {
    console.log("Don't have user email");
}
// for truthy falsy check notes

// Nullisg Coalescing Operator (??): null defined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
//val1 = null ?? 10 ?? 15


console.log(val1);
