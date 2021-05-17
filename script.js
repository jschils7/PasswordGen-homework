// Assignment Code. Started with the variables I know that  I will need
var generateBtn = document.querySelector("#generate");
var length = document. querySelector("length");
var lowercase = document. getElementById ("lowercase");
var uppercase = document. getElementById ("uppercase");
var symbols = document. getElementById ("symbols");
var number = document.getElementById ("number");
var passwordLength;

//These are the var values:
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var number =[1, 2, 3, 4, 5, 6, 7, 8, 9];
var uppercase= ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//have to make a function to generate the password

function determineLength(){

    userInput =parseInt("you must have 8 to 128 characters");
    if (isNaN(userInput) || (userInput <8 || userInput > 128) )
    alert("PUT A NUMBER!");
}

function uppercase(){
    uppercaseCheck = prompt("Do you want to include uppercase letters in your password? (Yes or No)");
      uppercaseCheck = uppercaseCheck.toLowerCase();
  
      if (uppercaseCheck === null || uppercaseCheck === ""){
        alert("Please answer Yes or No");
        determineuppercase();
  
      }else if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){
        uppercaseCheck = true;
        return uppercaseCheck;
  
      }else if (uppercaseCheck === "no" || uppercaseCheck ==="n"){
        uppercaseCheck = false;
        return uppercaseCheck;
      
      }else {
        alert("Please answer Yes or No");
        uppercase();
      }
      return uppercaseCheck;
  }
  
  //Function used to determine whether the user wants to include numbers in the password
  function number(){
    numberCheck = prompt("Do you want to include numbers in your password? (Yes or No)");
      numberCheck = numberCheck.tolowercase();
  
      if (numberCheck === null || numberCheck === ""){
        alert("Please answer Yes or No");
        determinenumbers();
  
      }else if (numberCheck === "yes" || numberCheck ==="y"){
        numberCheck = true;
        return numberCheck;
  
      }else if (numberCheck === "no" || numberCheck ==="n"){
        numberCheck = false;
        return numberCheck;
      
      }else {
        alert("Please answer Yes or No");
        determinenumbers();
      }
      return numberCheck;
  }
  
  //Function used to determine whether the user wants to include symbols in the password
  function symbols(){
    symbolsCheck = prompt("Do you want to include special characters in your password? (Yes or No)");
      symbolsCheck = symbolsCheck.tolowercase();
  
      if (symbolCheck === null || symbolCheck === ""){
        alert(" answer Yes or No");
        symbols();
  
      }else if (symbolsCheck === "yes" || symbolsCheck ==="y"){
        symbolsCheck = true;
        return symbolsCheck;
  
      }else if (symbolsCheck === "no" || symbolsCheck ==="n"){
        symbolsCheck = false;
        return symbolsCheck;
      
      }else {
        alert("Please answer Yes or No");
        symbols();
      }
      return symbolsCheck;
  }
  
  
   //Function used to take all the input from the previous functions and generate a password using a random number generator and 
   //the charAt method I googled this charAt method
  function generatePassword(){
    determineLength();
    console.log(passwordLength);
    determineUppercase();
    console.log(uppercaseCheck);
    determineNumbers();
    console.log(numberCheck);
    determineSpecial();
    console.log(specialCheck);
  
  var characters = lowercaseChar;
  var password = "";
  if (uppercaseCheck && numberCheck && specialCheck){
    characters += uppercaseChar + numberChar + specialChar;
  
  }else if (uppercaseCheck && numberCheck){
    characters += uppercaseChar + numberChar;
  
  }else if (numberCheck && specialCheck){
    characters += numberChar + specialChar;
  
  }else if (uppercaseCheck && specialCheck){
    characters += uppercaseChar + specialChar;
  
  }else if (uppercaseCheck){
    characters += uppercaseChar;
  
  }else if(numberCheck){
    characters += numberChar;
  
  }else if (specialCheck){
    characters += specialChar;
  
  }else{
    characters === lowercaseChar;
  }
  
    for(var i = 0; i < passwordLength; i++){
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
  }
  
  // Write password to the #password input
  function writePassword() {
    var password1 = "";
    password1 = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password1;
  }
  
  // function resetText(){
  //   document.getElementById("password").value = "Your Secure Password";
  // }


// generate it!


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


