// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var passwordProperties = {

    characterAmount: Number,
    lowerChoice: Boolean,
    capitalChoice: Boolean,
    numberChoice: Boolean,
    specialCharacterChoice: Boolean,

  }



  function generateCharacterAmount() {

    var choosenAmount = prompt("How many characters would you like your password to be?")
    if (isNaN(choosenAmount)) {
      alert("Character amount must be a number!")
      choosenAmount = prompt("How many characters would you like your password to be?")
    }
    else if (choosenAmount < 8 || choosenAmount > 128) {
      alert("Character amount must be between 8 and 128!")
      choosenAmount = prompt("How many characters would you like your password to be?")
    }
    return choosenAmount

  }



  passwordProperties.characterAmount = generateCharacterAmount();
  passwordProperties.capitalChoice = confirm("Would you like capital letters?");
  passwordProperties.lowerChoice = confirm("Would you like lower case letters?");
  passwordProperties.numberChoice = confirm("Would you like numbers?");
  passwordProperties.specialCharacterChoice = confirm("Would you like special characters?");

  console.log(passwordProperties);

  function generatePassword() {

    var choosenCharacters = [];
    const capitalCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCharacers = 'abcdefghijklmnopqrstuvwxyz'
    const numberCharacters = '0123456789';
    const specialCharacters = '!@#$%^&*()';

    if (passwordProperties.capitalChoice) { choosenCharacters.push(capitalCharacters) };
    if (passwordProperties.lowerChoice) { choosenCharacters.push(lowerCharacers) };
    if (passwordProperties.numberChoice) { choosenCharacters.push(numberCharacters) };
    if (passwordProperties.specialCharacterChoice) { choosenCharacters.push(specialCharacters) };

    var parsedCharacters = choosenCharacters.toString().replaceAll(',', '');

    function parsePassword(length) {
      let result = '';
      const characters = parsedCharacters;
      const charactersLength = parsedCharacters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return result;
    }

    return parsePassword(passwordProperties.characterAmount);

  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
