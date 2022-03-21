// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passwordCriteria = "";
  var characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    /* need to add quotes */
    specialCharacters: " !#$%&()*+,-./:;<=>?@[\]^_`{|}~" + "'" + '"',
    numbers: "0123456789"
  }

  /* Checks to make sure the password is the correct length */
  var passwordLength = window.prompt("Please enter the length of your password: ");

  if (Number(passwordLength).toString() === "NaN") {
    window.alert("You entered an incorrect input, this generator only uses whole numbers. Please try again.");
  } else if (Number(passwordLength) % 1 !== 0) {
    window.alert("You entered a decimal number, this generator only uses whole numbers. Please try again.");
  } else if (Math.floor(passwordLength) < 8) {
    window.alert("Password must be equal to or longer than 8 characters. Please try again.");
  } else if (Math.floor(passwordLength) > 128) {
    window.alert("Password must be equal to or smaller than 128 characters. Please try again.");
  } else {
      /* Finds out which portions should be included in the base string from prompts to the user */
    var numberConfirm = window.confirm("Do you want lowercase letters in your password?");
    var lowerConfirm = window.confirm("Do you want uppercase letters in your password?");
    var upperConfirm = window.confirm("Do you want numbers in your password?");
    var specialConfirm = window.confirm("Do you want special characters in your password?");
    if (!(numberConfirm || lowerConfirm || upperConfirm || specialConfirm)) {
      window.alert("You need to choose at least one criteria for your password, please try again.");
    } else {
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
      var password = generateString(passwordCriteria, passwordLength);
      var allPresent = {numberConfirm, lowerConfirm, upperConfirm, specialConfirm};
  
      /* Checks to make sure that all user requirements are present in the randomized password */
      while (!checkIfAllPresent(allPresent, password, characters)) {
        password = generateString(passwordCriteria, passwordLength);
      }
      
      return password;
    }
  }
}

function checkIfAllPresent(allPresent, password, characters) {
  var afterCheckPresent = true;
  var checkArray = {numberConfirm: false, lowerConfirm: false, upperConfirm: false, specialConfirm: false};

  // Check if numbers are present in the password
  if (allPresent.numberConfirm) {
    for (var i=0; i<password.length; i++) {
      if (characters.numbers.includes(password[i])) {
        checkArray.numberConfirm = true;
      }
    }
  }

  // Check if lowercase are present in the password
  if (allPresent.lowerConfirm) {
    for (var i=0; i<password.length; i++) {
      if (characters.lowercase.includes(password[i])) {
        checkArray.lowerConfirm = true;
      }
    }
  }

  // Check if uppercase are present in the password
  if (allPresent.upperConfirm) {
    for (var i=0; i<password.length; i++) {
      if (characters.uppercase.includes(password[i])) {
        checkArray.upperConfirm = true;
      }
    }
  }

  // Check if uppercase are present in the password
  if (allPresent.specialConfirm) {
    for (var i=0; i<password.length; i++) {
      if (characters.specialCharacters.includes(password[i])) {
        checkArray.specialConfirm = true;
      }
    }
  }
    
  // This checks the two boolean maps
  var i=0;
  while (afterCheckPresent && i<Object.values(allPresent).length) {
    if (Object.values(allPresent)[i] !== Object.values(checkArray)[i]) {
      afterCheckPresent = false;
    }
    i++;
  }

  return afterCheckPresent;
}

// Generates the password string using random integers
function generateString(criteria, passwordLength) {
  var password="";
  for (var i=0; i<passwordLength; i++) {
    var randomInt = Math.floor(Math.random() * criteria.length);
    password += criteria[randomInt];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);