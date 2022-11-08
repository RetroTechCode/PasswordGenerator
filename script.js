// Assignment code here
// All possible characters from each userInput choice are stored here
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "]", ";", ":", "'", '"', "\\", "|", ",", "<", ".", ">", "/", "?", "`", "~"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// User input function
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

  return userSelection;
}

// Apply user input function
function randomize(x) {
  var randomNumber = Math.floor(Math.random() * x.length);
  var randomResult = x[randomNumber];
  return randomResult;
}

// Generate password function
function generatePassword() {
  // Start by declaring variables
  var choice = userInput();
  var selectedCharacters = [];
  var criteriaCheck = [];
  var finalPassword = [];

  // Go through and run all possible character types into the possible finalPassword
  if (choice.uppercaseChoice) {
    selectedCharacters = selectedCharacters.concat(uppercase);
    criteriaCheck.push(randomize(uppercase));
  }

  if (choice.lowercaseChoice) {
    selectedCharacters = selectedCharacters.concat(lowercase);
    criteriaCheck.push(randomize(lowercase));
  }

  if (choice.numbersChoice) {
    selectedCharacters = selectedCharacters.concat(numbers);
    criteriaCheck.push(randomize(numbers));
  }

  if (choice.specialChoice) {
    selectedCharacters = selectedCharacters.concat(special);
    criteriaCheck.push(randomize(special));
  }

  // Forming of the finalPassword happens here
  for (var i = 0; i < choice.length; i++) {
    var randomCharacter = randomize(selectedCharacters);
    finalPassword.push(randomCharacter);
  }

  for (var i = 0; i < criteriaCheck.length; i++) {
    finalPassword[i] = criteriaCheck[i];
  }

  return finalPassword.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Note for myself to look back on, hopefully I don't lose points for this! If this is not okay please comment in the grade and let me know :)
// The user first clicks the button, which runs the writePassword function.
// That then leads the program to run the generatePassword function in order to fill the 'password' variable.
// The generatePassword function then runs the userInput function in order to fill the 'choice' variable with the returned 'userSelection' object.
// The 'userInput' function adds the user's final password properties, and verifies that their input is a valid request.
// The 'userSelection' object is filled with properties containing the results of the user's inputs to the prompts.
// Back at the generatePassword function, 'choice' is now the same as 'userSelection' and the properties can now be accessed through the 'choice' var.
// Then the if statements begin running inside of generatePassword, testing if the user selected those options. If not, that statement is skipped.
// While the choices are being checked, the selectedCharacters var is combing all of the possible characters from the selected types into a single array.
// At the same time, it is adding that a single random character from the respective character type to another array called criteriaCheck.
// Once all of the choices have been checked for, a for statement runs and pushes one random character from the selectedCharacters array, 
// which now contains all possible characters, using the 'randomize' function, into the finalPassword array.
// After that is done, the next for statement then replaces the respective character within the finalPassword array with the random character set
// earlier that is now stored in the criteriaCheck array.
// Now the finalPassword is changed from an array to a string using the .join() method.
// Back in the writePassword function the 'password' variable now = finalPassword.
// The javascript now calls the #password ID from the HTML and replaces the text within that field from "Your Secure Password" with the
// final generated password.
// I spent some time reading through and trying to understand the reference code as I went through this challenge. These notes are a result of my
// time spent double checking myself and making sure I understood each process as I was going through this challenge.