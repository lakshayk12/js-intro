var user = {
    name: "lakshay",
    role: "admin",
    logInCount: 0,
    getLogInCount: function () { return this.logInCount; }
}; // an object

console.log(user);
console.log(user.name); // accessing members
console.log(user["name"]);
console.log(user.getLogInCount());

//type
let i = 0;
if(typeof i == "string"){

}