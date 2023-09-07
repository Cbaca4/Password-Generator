// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  
  var passwordLength = parseInt(prompt("password Length"))
  if (passwordLength < 8 || passwordLength > 128) {
    alert("sorry! this an invalid length, please retry.")
    return generatePassword ()
  }

var uppercase = confirm("Your password should have an uppercase letter. Click OK to continue.");
var lowercase = confirm("Your password should have a lowercase letter. Click OK to continue.");
var symbols = confirm("Your password should have a symbol. Click OK to continue.");
var numbers = confirm("Your password must have numbers. Click OK to continue.");
var passwordLength = confirm("Your password must be between 8 and 128 characters. Click OK to continue.");

//Variables for allowed passowrd characters
var uppercaseABC = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
var lowercaseABC = "abcdefghijklmnopqrstuvwxyz";
var specialSymbols = "!@#$%^&*()?.</>|=+:;,[-_]";
var numeric = "0123456789";
var multiSelect =[];

if (uppercaseABC === false && specialSymbols=== false && numberic === false) {
 alert("Your password does not meet the password criteria.");
};

if (lowercaseABC) {multiSelect += lowercase;}
if (uppercaseABC) {multiSelect += uppercase;}
if (numeric) {multiSelect += numbers;}
if (specialSymbols) {multiSelect += symbols;}

var finalPassword = ""
for (var i = 0; i <passwordLength; i++) {
  var rng =[Math.floor(Math.random() * multiSelect)];
  finalPassword = finalPassword + multiSelect[rng];
}
return finalPassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
//added other variables
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);