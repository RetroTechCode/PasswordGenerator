// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = window.prompt("How many characters long should the password be?")
  var uppercase = window.prompt("Do you want to include uppercase characters? (Y/N)");
  var lowercase = window.prompt ("Do you want to include lowercase characters? (Y/N)");
  var numbers = window.prompt ("Do you want to include numbers? (Y/N)");
  var special = window.prompt ("Do you want to include special characters? (Y/N)");

  console.log(length);
  console.log(uppercase);
  console.log(lowercase);
  console.log(numbers);
  console.log(special);

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
