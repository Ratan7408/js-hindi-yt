const user = {
    username : "ratan",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this);
        
    }
}
// user.welcomeMessage() //ratan, welcome to website
// user.username = "sam"

console.log(this);  // {} 
