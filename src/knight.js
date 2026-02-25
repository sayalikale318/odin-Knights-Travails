import { GameBoard } from './gameBoard.js';

/**
 * BFS algorithm to find the shortest path.
 */
export function knightMoves(start, end) {
  if (!GameBoard.isValid(start) || !GameBoard.isValid(end)) return null;

  const queue = [[start]];
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const path = queue.shift();
    const currentSquare = path[path.length - 1];

    // Success condition
    if (currentSquare[0] === end[0] && currentSquare[1] === end[1]) {
      return path;
    }

    // Ask the GameBoard for legal next moves
    const neighbors = GameBoard.getNeighbors(currentSquare);

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor.toString())) {
        visited.add(neighbor.toString());
        queue.push([...path, neighbor]);
      }
    }
  }
}