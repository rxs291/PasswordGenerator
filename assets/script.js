// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = '';
var upperCase = '';
var lowerCase = '';
var numbers = '';
var specialChar = '';
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var nums = "0123456789";
var spCHARS = "`~!@#$%^&*()_+|}{“:?><[]\\;',./-="; 

//my arrays
var arrUPPER = alphabet.toUpperCase().split("");
var arrLOWER = alphabet.toLowerCase().split("");
var arrNUMS = nums.split("");
var arrSPCH = spCHARS.split('');


function generatePassword(){
//my resetting variables 
var workingPassword = [];
var finalPassword = '';
var arrMEGA = [];

passwordLength = prompt("How long would you like your password to be? Please choose a number between 8 and 128");

//password length validation
while(passwordLength<8 || passwordLength>128){
    passwordLength = prompt("Please choose a valid length.")
}

upperCase = confirm("Would you like upper case letters?");
lowerCase = confirm("Would you like lower case letter?");
numbers = confirm("Would you like numbers?");
specialChar = confirm("Would you like special characters?");

//password character validation
while(!upperCase && !lowerCase && !numbers && !specialChar){
    alert("You must choose at least ONE of the following criteria:");
    upperCase = confirm("Would you like upper case letters?");
    lowerCase = confirm("Would you like lower case letter?");
    numbers = confirm("Would you like numbers?");
    specialChar = confirm("Would you like special characters?");
}

//augmentations carried out based on user input
if(upperCase){
    workingPassword.push(arrUPPER[Math.floor(Math.random()*arrUPPER.length)])
    passwordLength -= 1;
    arrMEGA = arrMEGA.concat(arrUPPER);
}
if(lowerCase){
    workingPassword.push(arrLOWER[Math.floor(Math.random()*arrLOWER.length)])
    passwordLength -= 1;
    arrMEGA = arrMEGA.concat(arrLOWER);
}
if(numbers){
    workingPassword.push(arrNUMS[Math.floor(Math.random()*arrNUMS.length)])
    passwordLength -= 1;
    arrMEGA = arrMEGA.concat(arrNUMS);
}
if(specialChar){
    workingPassword.push(arrSPCH[Math.floor(Math.random()*arrSPCH.length)])
    passwordLength -= 1;
    arrMEGA = arrMEGA.concat(arrSPCH);
} 

//password generator with adjusted array of characters and passwordLength based on user input
for(let x = 0; x<passwordLength; x++){
    workingPassword.push(arrMEGA[Math.floor(Math.random()*arrMEGA.length)]);
}  

  finalPassword = workingPassword.join("");
  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
