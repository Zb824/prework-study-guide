// Assignment code here
var finalPassword = ""
var numChars
var includeNumbers

// finish these values
var allPossibleNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ];
var allPossible

function generatePassword(){
  askUserHowManyChars()
}


function askUserHowManyChars(){
  var answer = prompt("How many characters should be in the password?");
  numChars = parseInt(answer)
  askIncludeNumbers()
}

function askIncludeNumbers(){
  includeNumbers = confirm("Include numbers?");
}

// include small case letters, upper case letters, special chars


function startBuildingPassword(){
  // for loop from 0 to numChars; each time through we grab a value from one of the allowed data types

  //finalPassword += 

  var passwordText = document.querySelector("#password");
  passwordText.value = finalPassword;
}





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/*
  1. Ask the us



*/