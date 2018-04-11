//FUNCTIONS

var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");

greet(firstName, lastName);


function greet(first, last) {
    alert("Hi there, " + first + " " + last + "!");
}