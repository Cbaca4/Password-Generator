// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {

  // Function created for password length
  var passwordLength = parseInt(prompt("password Length:"))

  if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    alert("sorry! this an invalid length, please retry.");
  return generatePassword()
  };

  //Variables for allowed passowrd characters
var uppercaseABC = ['A','B','C','D','E','F','G','H','I','J','K','L','M','O','N','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercaseABC = ['a','b','c','d','e','f','g','h','i','j','k','l','m','o','n','p','q','r','s','t','u','v','w','x','y','z'];
var specialSymbols = ['!','@','#','$','%','^','&','*','(',')','?','.','<','>','|','=','+',':',';',',','[','-','_',']'];
var numeric = ['0','1','2','3','4','5','6','7','8','9'];

//Variables created for pop up prompts
var uppercase = confirm("Your password should have an uppercase letter. Click OK to continue.");
var lowercase = confirm("Your password should have a lowercase letter. Click OK to continue.");
var symbols = confirm("Your password should have a symbol. Click OK to continue.");
var numbers = confirm("Your password must have numbers. Click OK to continue.");
var passwordLength = confirm("Your password must be between 8 and 128 characters. Click OK to continue.");

if (!uppercase || !lowercase || !specialSymbols || !numeric) {
 return "Your password does not meet the password criteria.";
};

var possibleCharacters = [];

if (uppercase) {
  possibleCharacters = possibleCharacters.concat(uppercaseABC);
}
if (lowercase) {
  possibleCharacters = possibleCharacters.concat(lowercaseABC);
}
if (symbols) {
  possibleCharacters = possibleCharacters.concat(specialSymbols);
}
if (numbers) {
  possibleCharacters = possibleCharacters.concat(numeric);
}

var finalPassword = "";
for (var i = 0; i < passwordLength; i++) {
  var random = Math.floor(Math.random() * possibleCharacters.length);
  finalPassword = finalPassword + possibleCharacters[random];
}
return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
//added other variables
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);