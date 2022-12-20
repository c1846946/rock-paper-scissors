
//make a function that will randomly return rock paper or scissors

function getComputerChoice() {
    //get an integer 1-3 randomly
    let num = Math.floor(Math.random()*3+1);
    //assign rock paper scissors 1-3
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
console.log(getComputerChoice())

