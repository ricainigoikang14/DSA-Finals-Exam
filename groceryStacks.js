let groceryStack = [];

function peek() {
    if (groceryStack.length === 0) {
        console.log("Stack is empty");
        return null;
    }
    return groceryStack[groceryStack.length - 1];
}

function push(item) {
    console.log("Before push:", peek());
    groceryStack.push(item);
    console.log("After push:", peek());
    console.log("Current stack:", groceryStack);
}

function pop() {
    console.log("Before pop:", peek());
    let item = groceryStack.pop();
    console.log("After pop:", peek());
    console.log("Current stack:", groceryStack);
    return item;
}
// add 5 items
for (let i = 1; i <= 5; i++) {
    let item = prompt(`Enter grocery item ${i}:`);
    push(item);
}

// demonstrate pop
pop();
