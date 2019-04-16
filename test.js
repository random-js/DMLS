//recommended way to use
const Login = require("./main.njsp2").internal;  //require module
Login.configStart("./config.json");              //start module

Login.signIn("root1","root");         //sign in as "root1"
console.log("Now logged in: ");
console.log(Login.conc());            //list signed in users
Login.signOut("root1");               //sign out "root1"
console.log("Now logged in: ");
console.log(Login.conc());            //list signed in users
