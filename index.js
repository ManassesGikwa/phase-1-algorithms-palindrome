function isPalindrome(word) {
  // Write your algorithm here


/* 
  Add your pseudocode here
  if empty return "String cannot be empty"
if datatype != string return "Only strings allowed"
looping in reverse order
store charachacters in a variable
check if the reversed string is same as original word
*/

if(word.length == 0){
  return  "String cannot be empty"
}

if(typeof word != "string"){
  return "Only strings allowed"
}

let reversed_str = ""
for(let i = word.length - 1; i >= 0; i--){
  reversed_str = reversed_str + word[i]
}

return reversed_str

let isPalindrom;

if (reversed_str ==word)
{
  isPalindrom = true
}
else{
  isPalindrom= false;
}
return isPalindrom;
}


/*
  Add written explanation of your solution here
*/
//we are supposed to first check that the string being put is not empty, then proceed to loop
//through he string forming a reverse string with the letters we are looping through.
//then finally compare the reversed and original strings if they are similar
// You can run `node index.js` to view these console logs

  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));


module.exports = isPalindrome;
