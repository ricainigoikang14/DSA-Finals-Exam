// get numbers input
let input = prompt("Enter numbers (comma separated):") || "42,25,12,63,48,10,16,5,30,78";
let numbers = input.split(',').map(Number);

function bubbleSort(arr) {
    let len = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            console.log(`Comparing ${arr[i]} and ${arr[i+1]}`);
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
                console.log(`Swapped: ${arr[i]} and ${arr[i+1]}`);
            }
        }
    } while (swapped);
    return arr;
}
console.log("Original array:", numbers);
let sorted = bubbleSort([...numbers]);
console.log("Sorted array:", sorted);
