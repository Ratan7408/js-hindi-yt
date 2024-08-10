// //var c = 300
// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30
// }



// console.log(a); //10
// //console.log(b); //20
// //console.log(c); // 30



function one(){
    const username = "ratan"

    function two(){
        const website = "youtube"
        console.log(username);   // ratan one func two is running
        
    }
    //console.log(website);  // error 

    two()
}
    
one()

// kis curly bracket h wahi print hoga baki ka access nhi milega


// *************   interesting ************* //

console.log(addone(5));

function addone(num){
    return num + 1

}


const addTWo = function(num){
    return num + 2
}

addTWo(5)