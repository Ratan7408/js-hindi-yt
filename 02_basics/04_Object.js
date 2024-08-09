//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser);  //{}

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "ratan",
            lastname : "lala"
        }
    }
}
console.log(regularUser.fullname.userfullname);  //{ firstname: 'ratan', lastname: 'lala' }
// we can access the object like this


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = { obj1, obj2 }
const obj3 = Object.assign({},obj1, obj2)
console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


