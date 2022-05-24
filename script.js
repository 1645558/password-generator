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

  var numbers = prompt('Do you want to include numbers?')

  if (numbers === 'yes') {
    alert('Sweet!')
  } else if (numbers === 'no') {
    alert('Unfortunate')
  }

  var special = prompt('Do you want to include any special characters?')

  if (special === 'yes') {
    alert('Makes it strong!')
  } else if (special === 'no') {
    alert('Nooooo pls noooo')
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
