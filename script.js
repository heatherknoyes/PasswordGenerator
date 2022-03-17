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

  var passwordLength = window.prompt("Please enter the length of your password: ");
  if (passwordLength < 8) {
    window.alert("Password must be equal to or longer than 8 characters. Please try again.");
  } else if (passwordLength > 128) {
    window.alert("Password must be equal to or smaller than 128 characters. Please try again.");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





