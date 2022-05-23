// Assignment Code
var generateBtn = document.querySelector("#generate");

//Instructor Provided Template: Anthony Cooper
function generatePassword() {
  var lowercase = "abcdefghjklmnopqrstuvwxyz"
  var numbers = "123456789"
  var special = "#$%&()*+,-./:;<=>?"
  var uppercase = lowercase.toUpperCase();

  var input = Number(prompt("Choose a length between 8 and 128 characters"));

  if (input >= 8 && input <= 128) {
    //GOOD CODE GOES HERE
  } else {
    alert('Please enter a valid amount of characters')
  }

  return "";
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);