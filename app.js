const cells = document.querySelectorAll(".cell");
let player1 = "X";
let player2 = "O";
let currentPlayer = player2;
let turnText = document.getElementById("turn-text");
const restartButton = document.querySelector(".restart");
let playsCount = 0;
let boardConditions = [
  [cells[0], cells[1], cells[2]],
  [cells[3], cells[4], cells[5]],
  [cells[6], cells[7], cells[8]],
  [cells[0], cells[3], cells[6]],
  [cells[1], cells[4], cells[7]],
  [cells[2], cells[5], cells[8]],
  [cells[0], cells[4], cells[8]],
  [cells[2], cells[4], cells[6]],
];
const gameContainer = document.querySelector(".game-container");

cells.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (currentPlayer === player1) {
      e.target.classList.add("O");
      currentPlayer = player2;
      element.innerText = player2;
      turnText.innerText = "It's player one's turn";
    } else {
      e.target.classList.add("X");
      currentPlayer = player1;
      element.innerText = player1;
      turnText.innerText = "It's player two's turn";
    }

    e.target.style.pointerEvents = "none";
    playsCount++;
    checkWinner();
  });
});

const restartGame = () => {
  cells.forEach(cell => {
    cell.innerText = "";
    cell.style.pointerEvents = "auto";
    turnText.innerText = "Ready? Start!";
    currentPlayer = player2;
    cell.classList.remove("X");
    cell.classList.remove("O");
    playsCount = 0;
  });
};

restartButton.addEventListener("click", restartGame);

const checkWinner = () => {
  let playerOneWins = (currentValue) => currentValue.classList.contains("X");
  let playerTwoWins = (currentValue) => currentValue.classList.contains("O");
  if (
    boardConditions[0].every(playerOneWins) || boardConditions[0].every(playerTwoWins) ||
    boardConditions[1].every(playerOneWins) || boardConditions[1].every(playerTwoWins) ||
    boardConditions[2].every(playerOneWins) || boardConditions[2].every(playerTwoWins) ||
    boardConditions[3].every(playerOneWins) || boardConditions[3].every(playerTwoWins) ||
    boardConditions[4].every(playerOneWins) || boardConditions[4].every(playerTwoWins) ||
    boardConditions[5].every(playerOneWins) || boardConditions[5].every(playerTwoWins) ||
    boardConditions[6].every(playerOneWins) || boardConditions[6].every(playerTwoWins) ||
    boardConditions[7].every(playerOneWins) || boardConditions[7].every(playerTwoWins))
   {
    turnText.innerText = `${currentPlayer} is the winner!`;
    cells.forEach(cell => {
        cell.style.pointerEvents = 'none';
    })
  } else {
    if (playsCount === 9) {
      turnText.innerText = "It's a draw! Press restart";
    }
  }
};

function play() {
  var audio = document.getElementById("audio");
  audio.play();
}

// cell.forEach(element => {
//     element.addEventListener('click', function () {
//         const id = element.id;
//         if (currentPlayer === player1) {
//             element.innerText = player1;
//             element.style.color = '#f55442';
//             currentPlayer = player2;
//             turnText.innerText = "It's player two's turn!";
//         } else {
//             currentPlayer = player1;
//             element.innerText = player2;
//             element.style.color = 'white';
//             turnText.innerText = "It's player one's turn!";
//         }
//         playsCount++;
//         evaluateGame();
//         element.style.pointerEvents = 'none';

//         restartButton.addEventListener('click', function () {
//             turnText.innerText = "It's player one's turn!"
//             element.innerText = '';
//             element.style.pointerEvents = 'auto';
//             currentPlayer = player1;
//             playsCount = 0;
//             board = [
//                 [null, null, null],
//                 [null, null, null],
//                 [null, null, null]
//             ];
//         })
//     })
// });

// console.log (boardConditions[0])
// function evaluateGame() {
//     // let play, horz, diag, vert, middleVert, bottomHorz, bottomDiag, middleHorz;
//     // if (board[0][0]) {
//     //     play = board[0][0]
//     //     horz = board[0][1] === play && board[0][2] === play;
//     //     diag = board[1][1] === play && board[2][2] === play;
//     //     vert = board[1][0] === play && board[2][0] === play;
//     // }
//     // if (board[0][1]) {
//     //     play = board[0][1]
//     //     middleVert = board[1][1] === play && board[2][1] === play;
//     // }
//     // if (board[2][0]) {
//     //     play = board[2][0]
//     //     bottomHorz = board[2][1] === play && board[2][2] === play;
//     //     bottomDiag = board[1][1] === play && board[0][2] === play;
//     // }
//     // if (board[1][0]) {
//     //     play = board[1][0]
//     //     middleHorz = board[1][1] === play && board[1][2] === play;
//     // }
//     // if (horz || diag || vert || middleVert || bottomHorz || bottomDiag || middleHorz) {
//     //     turnText.innerText = `${play} WINS. Press Restart to play again!`
//     //     gameContainer.style.pointerEvents = 'none';
//     //     playsCount = 0;
//     // }
//     // else if (playsCount === 9) {
//     //     turnText.innerText = 'DRAW! Press restart to play again.'
//     //     gameContainer.style.pointerEvents = 'none';
//     //     playsCount = 0;
//     // }
//     let b = [cell[0], cell[1], cell[2]];
//     let g = b.every(function (c) {
//         return c = 'O';
//     })

//     console.log(g)

// };
