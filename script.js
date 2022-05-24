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

  var hasLowercase = confirm('Do you want to include lowercase letters?');

  if (hasLowercase) {
    choices += lowercase
  } else if (!hasLowercase) {
    alert('No Problem!')
  }
  console.log(lowercase);
  
  var hasUppercase = confirm('Do you want to include any uppercase letters?')
  
  if (hasUppercase) {
    choices += uppercase
  } else if (!hasUppercase) {
    alert('No worries!')
  }
  console.log(uppercase)
  
var hasNumbers = confirm('Do you want to include numbers?')

  if (hasNumbers) {
    choices += numbers
  } else if (!hasNumbers) {
    alert('Gotcha')
  }
  console.log(numbers)
  
var hasSpecial = confirm('Do you want to include any special characters?')

  if (hasSpecial) {
    choices += special
  } else if (!hasSpecial) {
    alert('This would have made it a lot stronger!')
  }
  console.log(special)
  console.log(input)

  var newPassword = ''
  console.log(choices)

  for (var i = 0; i < input; i++) {
     newPassword += choices[Math.floor(Math.random()*choices.length)]
    console.log(choices)
  }
  
  return newPassword;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
