// get numbers input
let numbersInput = prompt("Enter numbers (comma separated):") || "24,65,21,5,9,32,42,80,57";
let numbers = numbersInput.split(',').map(Number);

// get names input
let namesInput = prompt("Enter names (comma separated):") || "Zenvo,Erica,Jordie,Alicia,Recon";
let names = namesInput.split(',');

// merge arrays
let merged = [...numbers, ...names];
console.log("Merged array:", merged);

// sort numbers in reverse
let sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("Numbers sorted (reverse):", sortedNumbers);

// sort names alphabetically
let sortedNames = [...names].sort();
console.log("Names sorted (alphabetical):", sortedNames);
