// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var plength = prompt("How many characters would you like your password to be?")

if (plength < 8 || plength > 128){
    alert("Length must be 8-128 characters")
}

if (plength >= 8 && plength <= 128){
var cuppercase = confirm("Would you like to use uppercase letters?")
var clowercase = confirm("Would you like to use lowercase letters?")
var cnumbers = confirm("would you like to use numbers?")
var csymbols = confirm("would you like to use special characters?")
}    

if (cuppercase != true && clowercase != true && cnumbers != true && csymbols != true){
    alert("You must select at least one character type!")
}
var password = generatePassword();

function generatePassword()  {


  var allowed = {};
  if (uppers) password += rando(allowed.uppers = "QWERTYUIOPASDFGHJKLZXCVBNM");
  if (lowers) password += rando(allowed.lowers = "qwertyuiopasdfghjklzxcvbnm");
  if (numbers) password += rando(allowed.numbers = "1234567890");
  if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");

  for (var i = password.plength; i < plength; i++) password += rando(rando(allowed).value);


}
  
   var passwordText = document.querySelector("#password");
    passwordText.value = password;

}

// PSEUDO_CODE!!
// array of numbers, letters, special characters; upper and lowercase
//use random function
//math.random, math.floor, 8-128 
//get random character from array using math.random
//variable to hold password 
//add strings together
//convert integers into strings
//repeat for each case (ie. uppercase, lowercase, characters)



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
