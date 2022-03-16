const cell = document.querySelectorAll(".cell");
player1 = "X";
player2 = "O";
let currentPlayer = player2;
let turnText = document.getElementById("turn-text");
const restartButton = document.querySelector(".restart");
let playsCount = 0;
let boardConditions = [
  [cell[0], cell[1], cell[2]],
  [cell[3], cell[4], cell[5]],
  [cell[6], cell[7], cell[8]],
  [cell[0], cell[3], cell[6]],
  [cell[1], cell[4], cell[7]],
  [cell[2], cell[5], cell[8]],
  [cell[0], cell[4], cell[8]],
  [cell[2], cell[4], cell[6]],
];
const gameContainer = document.querySelector(".game-container");

cell.forEach((element) => {
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
  cell.forEach((cells) => {
    cells.innerText = "";
    cells.style.pointerEvents = "auto";
    turnText.innerText = "Ready? Start!";
    currentPlayer = player2;
    cells.classList.remove("X");
    cells.classList.remove("O");
  });
};

restartButton.addEventListener("click", restartGame);

const checkWinner = () => {
  let playerOneWins = (currentValue) => currentValue.classList.contains("X");
  let playerTwoWins = (currentValue) => currentValue.classList.contains("O");
  const winArray1 = boardConditions[0];
  const winArray2 = boardConditions[1];
  const winArray3 = boardConditions[2];
  const winArray4 = boardConditions[3];
  const winArray5 = boardConditions[4];
  const winArray6 = boardConditions[5];
  const winArray7 = boardConditions[6];
  const winArray8 = boardConditions[7];

  if (
    winArray1.every(playerOneWins) || winArray1.every(playerTwoWins) ||
    winArray2.every(playerOneWins) || winArray2.every(playerTwoWins) ||
    winArray3.every(playerOneWins) || winArray3.every(playerTwoWins) ||
    winArray4.every(playerOneWins) || winArray4.every(playerTwoWins) ||
    winArray5.every(playerOneWins) || winArray5.every(playerTwoWins) ||
    winArray6.every(playerOneWins) || winArray6.every(playerTwoWins) ||
    winArray7.every(playerOneWins) || winArray7.every(playerTwoWins) ||
    winArray8.every(playerOneWins || winArray8.every(playerTwoWins))
  ) {
    turnText.innerText = `${currentPlayer} is the winner!`;
    gameContainer.style.pointerEvents = "none";
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
