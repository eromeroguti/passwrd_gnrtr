// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
    var passwordLength = prompt("How many characters would you like your password to be?");
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password must be between 8 and 128 characters");
        return;
    }
    var passwrdLowerCase = confirm("Would you like to include lowercase letters?");
    var passwrdUpperCase = confirm("Would you like to include uppercase letters?");
    var passwrdNumeric = confirm("Would you like to include numbers?");
    var passwrdSpecial = confirm("Would you like to include special characters?");
    if (passwrdLowerCase === false && passwrdUpperCase === false && passwrdNumeric === false && passwrdSpecial === false) {
        alert("You must select at least one character type");
        return;
    }
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeric = "0123456789";
    var special = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    var password = "";

    if (passwrdLowerCase === true) {
        password += lowerCase;
    }
    if (passwrdUpperCase === true) {
        password += upperCase;
    }
    if (passwrdNumeric === true) {
        password += numeric;
    }
    if (passwrdSpecial === true) {
        password += special;
    }
    if (passwrdLowerCase === true && passwrdUpperCase === true && passwrdNumeric === true && passwrdSpecial === true) {
        password = lowerCase + upperCase + numeric + special;
    }
   
    return password;
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
