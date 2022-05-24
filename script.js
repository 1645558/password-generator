// Assignment Code
var generateBtn = document.querySelector("#generate");
  var lowercase = "abcdefghjklmnopqrstuvwxyz"
  var numbers = "123456789"
  var special = "#$%&()*+,-./:;<=>?"
  var uppercase = lowercase.toUpperCase();
  var choices = ''
//Instructor Provided Template: Anthony Cooper
function generatePassword() {
  
  var input = Number(prompt("Choose a length between 8 and 128 characters"));
  
  if (input >= 8 && input <= 128) {
    //GOOD CODE GOES HERE
    console.log(input);
  } else {
    alert('Please enter a valid amount of characters');
  }

  var lowercase = confirm('Do you want to include lowercase letters?');

  if (lowercase) {
    choices += lowercase
  }
  console.log(lowercase);
  
  var uppercase = confirm('Do you want to include any uppercase letters?')
  
  if (uppercase) {
    choices += uppercase
  }
  console.log(uppercase)
  
  var numbers = confirm('Do you want to include numbers?')
  
  if (numbers) {
    choices += numbers
  }
  console.log(numbers)
  
  var special = confirm('Do you want to include any special characters?')
  
  if (special) {
    choices += special
  }
  console.log(special)

  var newPassword = ''
  for (var i = 0; i < input; i++) {
    let choices = (Math.floor(Math.random) * lowercase.length)
  }

  return newPassword;

}

// Write password to the #password input
function writePassword(lowercase, numbers, special, uppercase) {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
