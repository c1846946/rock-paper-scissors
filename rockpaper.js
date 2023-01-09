
let userScore = 0
let compScore = 0
let numberOfDraws = 0

const userSelDiv = document.querySelector('.user-selection')
const compSelDiv = document.querySelector('.comp-selection')
const userScoreDiv = document.querySelector('.user-score')
const compScoreDiv = document.querySelector('.comp-score')
const draw = document.querySelector('.draw')
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const winnerDiv = document.querySelector('.winner')

userScoreDiv.textContent = "User: " + userScore
compScoreDiv.textContent = "Computer: " + compScore
draw.textContent = "Draws: " + numberOfDraws



 rock.addEventListener('click', playRock);
 paper.addEventListener('click',playPaper);
 scissors.addEventListener('click',playScissors);


//make a function that will randomly return rock paper or scissors
function getComputerChoice() {
    //get an integer 1-3 randomly
    let num = Math.floor(Math.random()*3+1);
    //assign rock paper scissors to 1-3
    let rps
    if (num === 1) {
        rpsComp = "Rock"
    } else if (num === 2){
        rpsComp = "Paper"
    } else {
        rpsComp = "Scissors"
    }
    return rpsComp
}   
function playRock() {
    playOneRound("Rock", getComputerChoice())
}

function playPaper() {
    playOneRound("Paper", getComputerChoice())
}

function playScissors() {
    playOneRound("Scissors", getComputerChoice())
}

function playOneRound(rpsUser,computerSelection) {
    //compare user and computer selection to determine winner
    userSelDiv.textContent = rpsUser
    compSelDiv.textContent = computerSelection
    if (rpsUser === computerSelection) {
        draw.textContent = "Draws: " + ++numberOfDraws
    } else if (rpsUser === "Scissors" && computerSelection === "Paper" || rpsUser === "Paper" && computerSelection === "Rock" || rpsUser === "Rock" && computerSelection === "Scissors") {
        userScoreDiv.textContent = "User: " + ++userScore
        return winner()
    } else {
        compScoreDiv.textContent = "Computer: " + ++compScore
        return winner()
    }
    
}

function winner() {
     if (userScore == 5) {
        removeListeners()
        winnerDiv.innerText = "You Won!!!";
    } else if (compScore == 5) {
        removeListeners()
        winnerDiv.innerText = "Computer Won!!!"
    }   else{
        return
    }
}

function removeListeners() {
    rock.removeEventListener('click', playRock);
    paper.removeEventListener('click', playPaper);
    scissors.removeEventListener('click', playScissors);
    console.log("listeners removed")
}
// function game() {
//     //starting score
//     let userScore = 0
//     let compScore = 0
//     //play five rounds
//     for (let i = 0; i < 5; i++) {
//         //run playOneRound 
//         let winner = playOneRound()
        
//         if (winner === "user") {
//             userScore = ++userScore
//         } else if (winner === "comp") {
//             compScore = ++compScore
//         } else {}
//         //increment whoever won
//         console.log(`User: ${userScore} Computer: ${compScore}`)
//         //show score after this round
//     }
//     //if to declare when a winner reaches 5 points
//     if (userScore > compScore) {
//         return "You won!"
//     } else if (userScore === compScore) {
//         return "It's a draw!"
//     } else {
//         return "You lost! Womp, Womp"
//     }
// }

