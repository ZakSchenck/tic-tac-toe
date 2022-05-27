# Tic Tac Toe
Livd site: https://zakschenck.github.io/tic-tac-toe/

## Technologies used:
• HTML5 <br />
• CSS3 <br />
• Javascript

## Project Hurtles
The biggest issue I had during this project was setting up the logic on the game knowing when a player wins. I solved this by having separate arrays within an array of every win condition based on the cell index. I then used the ``` array.every ``` array method on each win condition to tell whether they're filled with the classList of "O" or "X". <br />
### This is my code for the win conditions
```
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
```
### This is my code for the ```array.every``` method
```
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
``` 
While it looks a little bulky, this was the clear winner of all the methods I used in terms of code length. I have my previous code commented out so you can compare each thought process!



