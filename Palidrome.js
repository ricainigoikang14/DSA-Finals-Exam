//declare two variables to store user input using prompt
let word1 = prompt("Enter first word:");  //user enters "RACECAR"
let word2 = prompt("Enter second word:"); //user enters "RECORDER"

//function to reverse a string
function reverseString(str) {
    //split the string into an array of characters, reverse it,then join back to string
    return str.split('').reverse().join('');
}

//reverse both words
let reversedWord1 = reverseString(word1);
let reversedWord2 = reverseString(word2);

//log original and reversed strings
console.log("Original Word 1:", word1);
console.log("Reversed Word 1:", reversedWord1);
console.log("Original Word 2:", word2);
console.log("Reversed Word 2:", reversedWord2);

//check if original strings match their reversed versions
console.log("Is", word1, "a palindrome?", word1 === reversedWord1);
console.log("Is", word2, "a palindrome?", word2 === reversedWord2);
