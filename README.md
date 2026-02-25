# ♞ Knight Travails
A solution to the classic shortest path problem on a chessboard, built as part of **The Odin Project's** JavaScript Curriculum.

## 📝 Description
This project demonstrates the application of graph theory and search algorithms in JavaScript. The goal is to create a function `knightMoves` that shows the shortest possible way for a knight to get from one square to another on a standard 8x8 chessboard.
Because a knight's moves can be represented as an unweighted graph, this solution utilizes a **Breadth-First Search (BFS)** algorithm to guarantee the shortest path is found efficiently.

## 🚀 Features
- **Modular Architecture**: Logic is separated into `GameBoard` (environment) and `Knight` (algorithm) modules.
- **Shortest Path Guarantee**: Uses BFS to explore the board level-by-level.
- **Coordinate Validation**: Ensures all inputs and moves stay within the 0-7 coordinate bounds.
- **Clean Console Output**: Clearly formatted path reporting in the browser developer tools.

## 🛠️ Project Structure
```text
knights-travails/
├── src/
│   ├── gameBoard.js   # Handles board boundaries and legal move generation
│   └── knight.js      # Core BFS search algorithm
├── main.js            # Entry point and test cases
├── index.html         # Browser interface for execution
└── README.md          # Project documentation

```

## ⚙️ How It Works
1. **The Graph**: The chessboard is treated as an implicit graph where every square is a node and every legal knight move is an edge.
2. **The Queue**: BFS uses a queue to track the next squares to visit.
3. **The Path**: Each item in the queue stores the full history of moves taken to reach that square.
4. **Visited Set**: A `Set` tracks visited coordinates to prevent infinite loops and redundant processing.

## 💻 Installation & Usage
1. **Clone the repository:**
```bash
git clone [https://github.com/sayalikale318/knights-travails.git](https://github.com/sayalikale318/knights-travails.git)

```


2. **Navigate to the directory:**
```bash
cd knights-travails

```


3. **Run the project:**
Simply open `index.html` in your favorite web browser.
4. **View Results:**
Open the **Developer Tools (F12)** and navigate to the **Console** tab to see the knight's path output.

## 🧪 Example Output

```javascript
knightMoves([3,3], [4,3]);
// Output:
// => You made it in 3 moves! Here's your path:
//   [3, 3]
//   [4, 5]
//   [2, 4]
//   [4, 3]

```

## 🎓 Acknowledgments

* [The Odin Project](https://www.theodinproject.com/) for the project brief.
* CS50 and Khan Academy for graph traversal concepts.

``
---

### One Final Step for your Git Deployment:
To make this look perfect on GitHub:
1. Save this content as `README.md` in your root folder.
2. Run:
   bash
   git add README.md
   git commit -m "Add professional documentation"
   git push origin main
