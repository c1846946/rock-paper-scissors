
//make a function that will randomly return rock paper or scissors

function getComputerChoice() {
    //get an integer 1-3 randomly
    let num = Math.floor(Math.random()*3+1);
    //assign rock paper scissors to 1-3
    let rps
    if (num === 1) {
        rpsComp = "rock"
    } else if (num === 2){
        rpsComp = "paper"
    } else {
        rpsComp = "scissors"
    }
    return rpsComp
}   


function playOneRound(rpsUser,computerSelection) {
    //get user input
    //--make user input case insensitive
    rpsUser = prompt('Enter "Rock", "Paper", or "Scissors"',"Rock" ).toLowerCase()
    computerSelection = getComputerChoice()
    let winner

    console.log(rpsUser)
    console.log(computerSelection)
    //use booleans
    if (rpsUser === computerSelection) {
        return "draw"
    } else if (rpsUser === "scissors" && computerSelection === "paper" || rpsUser === "paper" && computerSelection === "rock" || rpsUser === "rock" && computerSelection === "scissors") {
        return "user"
    } else {
        return "comp"
    }
    //---modify to increment scores
    
}

function game() {
    //starting score
    let userScore = 0
    let compScore = 0
    //play five rounds
    for (let i = 0; i < 5; i++) {
        //run playOneRound 
        let winner = playOneRound()
        
        if (winner === "user") {
            userScore = ++userScore
        } else if (winner === "comp") {
            compScore = ++compScore
        } else {}
        //increment whoever won
        console.log(`User: ${userScore} Computer: ${compScore}`)
        //show score after this round
    }
    //if to declare when a winner reaches 5 points
    if (userScore > compScore) {
        return "You won!"
    } else if (userScore === compScore) {
        return "It's a draw!"
    } else {
        return "You lost! Womp, Womp"
    }
}

console.log(game())