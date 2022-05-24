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
    console.log(input)
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

  var lowercase = prompt('Do you want to include lowercase letters?');

  if (lowercase === 'yes') {
    alert('Sounds good!');
  } else if (lowercase === 'no') {
    alert('No problem!')
  }
  console.log(lowercase);
  
  var uppercase = prompt('Do you want to include any uppercase letters?')

  if (uppercase === 'yes') {
    alert('Awesome!')
  } else if (uppercase === 'no') {
    alert('No worries!')
  }
console.log(uppercase)



}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
