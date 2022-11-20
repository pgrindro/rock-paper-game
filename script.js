
let playerScoreCount = 0;
let computerScoreCount = 0;
function playRound(comp,player){
    
        if(comp == player) {
            console.log("its a draw.");
        }
        else if(comp == "ROCK" && player == "PAPER"){
            playerScoreCount++;
            return "you win.";
        }
        else if( comp == "ROCK" && player == "SCISSORS"){
            computerScoreCount++;
           return "you lose.";
        }
        else if(comp == "PAPER" && player == "ROCK"){
            computerScoreCount++;
            return "you lose.";
        }
        else if(comp == "PAPER" && player == "SCISSORS"){
            playerScoreCount++;
            return "you win.";
        }
        else if(comp == "SCISSORS" && player == "ROCK"){
            playerScoreCount++;
            return"you win.";
        }
        else if(comp == "SCISSORS" && player == "PAPER"){
            computerScoreCount++;
            return "you lose.";
        }
    }

//console.log(playRound(computerSelection,playerSelection))

function game(){
    for(let round = 0; round < 5; round++){
        function getComputerChoice(arr) {
 
            // get random index value
            const randomIndex = Math.floor(Math.random() * arr.length);
            // get random item
            const item = arr[randomIndex];
            return item
        }
        const array = ['ROCK', 'PAPER', 'SCISSORS'];
        const computerSelection = getComputerChoice(array);
        //console.log(computerSelection);
        
        const originalPlayer = prompt("Choose: Rock, Paper or Scissors");
        const playerSelection = originalPlayer.toUpperCase();
        
        
        console.log(playRound(computerSelection,playerSelection));
       // console.log("Player Score "+playerScoreCount,"Computer Score "+computerScoreCount)
    }
    if(playerScoreCount > computerScoreCount){
        return "Humans Win";
    }
    else if(playerScoreCount < computerScoreCount){
        return "Machines are taking over";
    }
    else{
        return "WE TIE FRIEND";
    }
}
console.log(game())

