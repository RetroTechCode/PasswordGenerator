// Assignment code here
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "]", ";", ":", "'", '"', "|", ",", "<", ".", ">", "/", "?", "`", "~"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = window.prompt("How many characters long should the password be?")
  var uppercaseChoice = window.prompt("Do you want to include uppercase characters? (Y/N)");
  var lowercaseChoice = window.prompt ("Do you want to include lowercase characters? (Y/N)");
  var numbersChoice = window.prompt ("Do you want to include numbers? (Y/N)");
  var specialChoice = window.prompt ("Do you want to include special characters? (Y/N)");

if (length > 8 && length < 128) {
  console.log("Continue")
} else {
  console.log ("Failure")
}
  return "Generated Password Test";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
