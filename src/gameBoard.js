/**
 * Logic for the 8x8 Chessboard coordinates and move validation.
 */

export const BOARD_SIZE = 8;

export const GameBoard = {
  // Check if a coordinate exists on the board
  isValid([x, y]) {
    return x >= 0 && x < BOARD_SIZE && y >= 0 && y < BOARD_SIZE;
  },

  // Get all legal knight moves from a specific square
  getNeighbors([x, y]) {
    const knightMoves = [
      [x + 2, y + 1], [x + 2, y - 1],
      [x - 2, y + 1], [x - 2, y - 1],
      [x + 1, y + 2], [x + 1, y - 2],
      [x - 1, y + 2], [x - 1, y - 2]
    ];

    // Filter out moves that go off the board
    return knightMoves.filter(square => this.isValid(square));
  }
};