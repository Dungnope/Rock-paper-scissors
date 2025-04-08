const button_choice = document.querySelectorAll("button");
const display = document.querySelector("#result");
let humanPoint = 0;
let machinePoint = 0;
let humanChoice;
let botChoice;
//check result

function getComputerChoice()
{
let randomchoice = Math.floor(Math.random() * 3) + 1;

    switch(randomchoice)
    {
        case 1:
            return `Rock`;
        case 2:
            return `Paper`;
        case 3:
            return `Scissors`;
    }
};

function Play_round(human, computer)
{
    if(computer === human)
    {
        let drawAttention = document.createElement("p");
        drawAttention.textContent = "It's a draw";
        display.append(drawAttention);
    }
    else if(computer === `Rock` && human === `Paper`)
    {
        ++humanPoint;
    }
    else if(computer === `Paper` && human === `Scissors`)
    {
        ++humanPoint;
    }
    else if(computer === `Scissors`&& human === `Rock`)
    {
        ++humanPoint;
    }

    else 
    {
        ++machinePoint;
    }
}
    button_choice.forEach((button) => {
        button.addEventListener('click', () => {
        humanChoice = button.id;
        botChoice = getComputerChoice();
        display.textContent = `Your choice: ${humanChoice} - Bot choice: ${botChoice}`;
        Play_round(humanChoice, botChoice);
        const scoreBoard = document.createElement("p");
        scoreBoard.textContent = `Your score: ${humanPoint} - Bot score: ${machinePoint}`;
        display.appendChild(scoreBoard);
        if(humanPoint == 5 || machinePoint == 5)
            {
                if(humanPoint > machinePoint)
                {
                    display.textContent = `You win! ${humanPoint} - ${machinePoint}`;
                    humanPoint = 0;
                    machinePoint = 0;
                }
                else
                {
                    display.textContent = `Computer win, you lose! ${humanPoint} - ${machinePoint}`;
                    humanPoint = 0;
                    machinePoint = 0;
                }
            }
        })    
    });