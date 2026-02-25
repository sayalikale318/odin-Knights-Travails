import { knightMoves } from './src/knight.js';

function displayResult(path) {
    if (!path) {
        console.error("No path found or invalid coordinates.");
        return;
    }
    console.log(`=> You made it in ${path.length - 1} moves! Here's your path:`);
    path.forEach(pos => console.log(`  [${pos[0]}, ${pos[1]}]`));
}

// Assignment Test Cases
console.log("--- Test Case 1 ---");
displayResult(knightMoves([0,0], [1,2]));

console.log("\n--- Test Case 2 ---");
displayResult(knightMoves([0,0], [3,3]));

console.log("\n--- Test Case 3 ---");
displayResult(knightMoves([3,3], [0,0]));

console.log("\n--- Test Case 4 (Longer Path) ---");
displayResult(knightMoves([0,0], [7,7]));