function rockPaperScissors(player1, player2) {
  if (player1 === player2) {
    return "draw" ;   
  } else if ((player1 === "paper" && player2 === "rock") || // - '||' is a js operator
           (player1 ==="scissors" && player2 === "paper") || // - '===' is used when 2 objects are being compared
           (player1 ==="rock" && player2 === "scissors") ||
           (player1 ==="scissors" && player2 === "lizard") ||
           (player1 ==="lizard" && player2 === "paper") ||
           (player1 ==="spock" && player2 === "rock") ||
           (player1 === "lizard" && player2 === "spock") ||
           (player1 === "spock" && player2 === "scissors") ||
           (player1 === "rock" && player2 === "lizard") ||
           (player1 ==="spock" && player2 === "scissors") ||
           (player1 === "paper" && player2 === "spock") 

           ){
            return "player1"
          } else {
            return "player2"
          }
}
console.log(rockPaperScissors());

//if (player1 => player2);{
 // return("player1 wins");











// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}