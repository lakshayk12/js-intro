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
if (typeof i == "string") {

}

//functional approach of defining an object
var User = function (name, age) {
    this.name = name;
    this.age = age;
}

var lakshay = new User("Lakshay", 100); //kind of, User is a class
console.log(lakshay);

//Injecting user-defined methods in User, by not changing its declaration
User.prototype.getName = function () {
    console.log(this.name);
}

var lakshay2 = new User("Lakshay2", 102); //not its the responsibility of "new" keyword to find all those user-defined injections.
lakshay2.getName();
//we can even set our own constructor, getters or setters etc.