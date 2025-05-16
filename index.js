
const options = ["Rock", "Paper", "Scissors"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");


const backSound = document.getElementById("backgroundMusic");
const clickSound = document.getElementById("clickSound");
const gameOver = document.getElementById("gameOver");

let playerScore = 0;
let computerScore = 0;

window.addEventListener("DOMContentLoaded", () =>{
    backSound.play();
});



function playGame(playerChoice){
    document.querySelectorAll("button").forEach(button =>{
    button.addEventListener("click", ()=>{
        clickSound.play();
        clickSound.volume = 0.5;
    });
});
    const computerChoice = options[Math.floor(Math.random()*3)];
    let result = "";

    if (playerChoice === computerChoice){
        result = "IT'S A TIE!"
    }
    else{
        switch(playerChoice){
            case "Rock":
                result = (computerChoice === "Scissors") ? "YOU WIN!": "YOU LOSE!";
                break;
            case "Paper":
                result = (computerChoice === "Rock") ? "YOU WIN!": "YOU LOSE!"; 
                break;
            case "Scissors":
                result = (computerChoice === "Paper") ? "YOU WIN!": "YOU LOSE!"; 
                break;      
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    switch(result){
        case "YOU WIN!":
            playerScore++;
            playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
            break;
        case "YOU LOSE!":
            computerScore++;
            computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
            break;    
    }
}

function reset(){
    clickSound.play();
    clickSound.volume = 0.5;
    playerScore = 0;
    computerScore = 0;
    playerDisplay.textContent = "Player: ";
    computerDisplay.textContent = "Computer: ";
    playerScoreDisplay.textContent = "Player Score: 0";
    computerScoreDisplay.textContent = "Computer Score: 0";
    resultDisplay.textContent = "";
}
 
function end(){
    gameOver.volume = 1;
    gameOver.play();

    gameOver.onended = ()=>{
        window.location.href = "index.html";
    };

    setTimeout(() =>{
        window.location.href = "index.html";
    }, 3000);
}
