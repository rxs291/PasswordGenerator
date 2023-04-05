// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
  // need the following variables:
  //variable for the selected length
  //array of lowercase letters
  //array of uppercase letters
  //array of numbers
  //array of special characters
  // use.split("") to creat arrays?
  // array to hold the password we're building
  //array to hold mega array
  //prompt for password length --> sore in a variable
  //validate the user input --> if user chooses <8 or > 128, they're going to need to restart or call teh cunation that prompts for length again.

 
  // PROMPT -----> DO THEY WANT UPPER CASE LETTER?
  // PROMPT -----> DO THEY WANT lower CASE LETTER?
  // PROMPT -----> DO THEY want numbers?
  // PROMPT -----> DO THEY WANT special charaters? 
    //validate that teh user has chosen at least one charcter set --> if not, either have them start over OR recursively call the original function

  //with each of those prompts, you need an arry of those charchter types
  //there needs to be at least one of each selected character type included in the password.
  //randomly generate a charcter from each charcter set it's chosen and add it to the end of the password being built, .push() for an array or .concat() for a string


  //for loop:
  // for(var i = password.length-1; i < passwordLength; i++)
  //either keep the character sets separate or combine them to a mega array to pull the rest of the characters from
  

  // if keeping the character sets separate, randomly generate a number to tell which array you're pulling from, then randomly gernate numbers to pull the character from the array 
  //if pushing to a megar-array randomly generate a number to pull a character from the array 
  //if pushing to a megar-array, rememebr to set the array back to an empty array at the start of the process!
  // then RETURN password.

  console.log('YOOOOOOOOOO!');
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
