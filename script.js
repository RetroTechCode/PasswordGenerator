// Assignment code here
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "]", ";", ":", "'", '"', "|", ",", "<", ".", ">", "/", "?", "`", "~"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// User input function
// TODO:
//       Store the user selections to apply in later functions
function userInput() {
  var length = window.prompt("How many characters long should the password be? \nPlease choose a number between 8 and 128.");

  if (length < 8 || length > 128 || isNaN(length)) {
    window.alert("Error! Please try again and choose a number between 8 and 128.")
  } else {
    var uppercaseChoice = window.confirm("Do you want to include uppercase characters? \nPress OK for Yes \nPress Cancel for No");
    var lowercaseChoice = window.confirm("Do you want to include lowercase characters? \nPress OK for Yes \nPress Cancel for No");
    var numbersChoice = window.confirm("Do you want to include numbers? \nPress OK for Yes \nPress Cancel for No");
    var specialChoice = window.confirm("Do you want to include special characters? \nPress OK for Yes \nPress Cancel for No");

    if (uppercaseChoice === false && lowercaseChoice === false && numbersChoice === false && specialChoice === false) {
      window.alert("Error! Please select at least one character type.")
    }
  }

  // Creating object to contain all of the user selections as properties
  var userSelection = {
    length: length,
    uppercaseChoice: uppercaseChoice,
    lowercaseChoice: lowercaseChoice,
    numbersChoice: numbersChoice,
    specialChoice: specialChoice,
  }

}

// Apply user input function
// TODO: Find out how to randomize the possible selections
//       Apply stored user selections to randomizer
function userSelection() {
  var test2 = userInput();
}

// Generate password function
// TODO: Find a way to finalize the password from the given user selections and display it on the page
function generatePassword() {
  var test = userSelection();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
