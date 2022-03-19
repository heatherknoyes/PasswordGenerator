// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    /* need to add quotes */
    specialCharacters: " !#$%&()*+,-./:;<=>?@[\]^_`{|}~",
    numbers: "0123456789"
  }

  var passwordCriteria = "";

  /* Checks to make sure the password is the correct length */
  var passwordLength = window.prompt("Please enter the length of your password: ");
  if (passwordLength < 8) {
    window.alert("Password must be equal to or longer than 8 characters. Please try again.");
  } else if (passwordLength > 128) {
    window.alert("Password must be equal to or smaller than 128 characters. Please try again.");
  }

  /* Finds out which portions should be included in the base string from prompts to the user */
  var numberConfirm = window.confirm("Do you want lowercase letters in your password?");
  var lowerConfirm = window.confirm("Do you want uppercase letters in your password?");
  var upperConfirm = window.confirm("Do you want numbers in your password?");
  var specialConfirm = window.confirm("Do you want special characters in your password?");

  /* Builds the base string where you will get characters from */
  if (numberConfirm) {
    passwordCriteria += characters.numbers;
  }
  if (lowerConfirm) {
    passwordCriteria += characters.lowercase;
  }
  if (upperConfirm) {
    passwordCriteria += characters.uppercase;
  }
  if (specialConfirm) {
    passwordCriteria += characters.specialCharacters;
  }

  /* Generates the random password */
  var password="";
  for (var i=0; i<passwordLength; i++) {
    var randomInt = getRandomInt(passwordCriteria.length);
    password += passwordCriteria[randomInt];
  }

  return password;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





