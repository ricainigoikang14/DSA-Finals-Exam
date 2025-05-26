// get names input
let namesInput = prompt("Enter names (comma separated):") || "Genevieve,Juan,Luna,Gabriel,Elise";
let names = namesInput.split(',');

// get ages input
let agesInput = prompt("Enter ages (comma separated):") || "24,65,21,5,9";
let ages = agesInput.split(',').map(Number);

// restructure into [name, age] pairs
let people = [];
for (let i = 0; i < names.length; i++) {
    people.push([names[i], ages[i]]);
}

// output results
console.log("Restructured array:");
people.forEach(person => console.log(person));
