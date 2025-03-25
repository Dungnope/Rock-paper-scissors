// plan

//Create bot function random rock, paper, scissors


const ComputerChoice = function getComputerChoice()
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

//Create youHur choice

const Humanchoice = () => {
    let choose = prompt("Rock, Paper, Scissors: ");
    let ans = choose.toLowerCase();
    let first = ans.at(0);
    first = first.toUpperCase();
    ans = ans.replace(ans.at(0), first);
    return ans;
};
let Humanpoint = 0, machinepoint = 0;

//Play round

function Play_round(computer, human)
{
    if(computer == human)
    {
        console.log("It's draw");
    }
    else if(computer == `Rock` && human == `Paper`)
    {
        console.log("You win!");
        ++Humanpoint;
    }
    else if(computer == `Paper` && human == `Scissors`)
    {
        console.log("You win!");
        ++Humanpoint;
    }
    else if(computer == `Scissors`&& human == `Rock`)
    {
        console.log("You win!");
        ++Humanpoint;
    }

    else 
    {
        console.log(`You lose, ${computer} beats ${human}`);
        ++machinepoint;
    }
}

//create number time to play
let times = prompt("Your times want to play: ")
for(let i = 0; i < times; i++)
{
    Play_round(ComputerChoice(), Humanchoice());
}

if(Humanpoint > machinepoint)
{
    console.log(`You win with ${Humanpoint} - ${machinepoint}`);
}
else {
    console.log(`You lose ${machinepoint} - ${Humanpoint}!`);
}

//check result