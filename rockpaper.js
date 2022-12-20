
//make a function that will randomly return rock paper or scissors

function getComputerChoice() {
    //get an integer 1-3 randomly
    let num = Math.floor(Math.random()*3+1);
    //assign rock paper scissors 1-3
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

//get user input
//--make user input case insensitive


function playOneRound(rpsUser,computerSelection) {
    //use a boolean
    //=== draw
    rpsUser = prompt('Enter "Rock", "Paper", or "Scissors"',"Rock" ).toLowerCase()
    computerSelection = getComputerChoice()

    console.log(rpsUser)
    console.log(computerSelection)
    
    if (rpsUser === computerSelection) {
        return "It's a draw!"
    } else if (rpsUser === "rock" && computerSelection === "paper" || rpsUser === "paper" && computerSelection === "rock" || rpsUser === "scissors" && computerSelection === "paper") {
        return `You won! ${rpsUser} beats ${computerSelection}!`
    } else {
        return `You lost! ${computerSelection} beats ${rpsUser}!`
    }
    
    
}
console.log(playOneRound())

