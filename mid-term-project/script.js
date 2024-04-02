const storyStages = {
    start: {
        text: "You wake up in a mysterious forest. There are two paths ahead. Which path do you choose?",
        choices: [
            { 
                text: "Take the left path", 
                nextStage: "leftPath" 
            },
            { 
                text: "Take the right path", 
                nextStage: "rightPath" 
            }
        ],
        image: "forest.jpg" 
    },
    leftPath: {
        text: "You encounter a friendly squirrel who offers to guide you deeper into the forest. Do you follow the squirrel?",
        choices: [
            {
                text: "Follow the squirrel",
                nextStage: "squirrel"
            },
            {
                text: "Ignore the squirrel and continue on your own",
                nextStage: "continueOnOwn"
            }
        ],
        image: "squirrel.jpg"
    },
    rightPath: {
        text: "You find a mysterious ancient ruin. Do you explore the ruin?",
        choices: [
            {
                text: "Enter the ruin",
                nextStage: "enterRuin"
            },
            {
                text: "Avoid the ruin and keep walking",
                nextStage: "keepWalking"
            }
        ],
        image: "ruin.jpg"
    },
    squirrel: {
        text: "You follow the squirrel to a hidden grove where you find a magical fountain. You drink from the fountain and feel rejuvenated. The end.",
        choices: [],
        image: "fountain.jpg"
    },
    continueOnOwn: {
        text: "You decide to continue on your own. As you venture deeper into the forest, you encounter a pack of wolves. What do you do?",
        choices: [
            {
                text: "Run away from the wolves",
                nextStage: "runFromWolves"
            },
            {
                text: "Fight the wolves",
                nextStage: "fightWolves"
            }
        ],
        image: "wolves.jpg"
    },
    runFromWolves: {
        text: "You choose to run away from the wolves. Despite their speed, you manage to escape and find safety. The end.",
        choices: [],
        image: "running.jpg"
    },
    fightWolves: {
        text: "You bravely decide to fight the wolves. After a fierce battle, you emerge victorious but wounded. You continue your journey cautiously. The end.",
        choices: [],
        image: "fighting.jpg"
    },
    enterRuin: {
        text: "As you enter the ruin, you discover a treasure chest filled with gold coins. You become rich and live happily ever after. The end.",
        choices: [],
        image: "treasure.jpg"
    },
    keepWalking: {
        text: "You decide to avoid the ruin and keep walking. Suddenly, you stumble upon a hidden cave. Do you enter the cave?",
        choices: [
            {
                text: "Enter the cave",
                nextStage: "enterCave"
            },
            {
                text: "Keep walking past the cave",
                nextStage: "keepWalkingPastCave"
            }
        ],
        image: "cave.jpg"
    },
    enterCave: {
        text: "You enter the cave and find a sleeping dragon guarding a pile of treasure. What do you do?",
        choices: [
            {
                text: "Run back",
                nextStage: "runBack"
            },
            {
                text: "Awaken the dragon and make friendship",
                nextStage: "makeFriendship"
            }
        ],
        image: "dragon.jpg"
    },
    runBack: {
        text: "You decide to run back out of the cave. The end.",
        choices: [],
        image: "away.jpg"
    },
    makeFriendship: {
        text: "You awaken the dragon and make friendship. The dragon appreciates your gesture and grants you access to the treasure. You become allies and embark on adventures together. The end.",
        choices: [],
        image: "dragon1.jpg"
    },
    keepWalkingPastCave: {
        text: "You decide to keep walking past the cave. Eventually, you find your way out of the forest. You return home safely. The end.",
        choices: [],
        image: "home.jpg"
    }
};

function startGame() {
    currentStage = "start";
    updatePage();
}

function updatePage() {
    const stage = storyStages[currentStage];
    
    document.getElementById("story").innerHTML = "<p>" + stage.text + "</p>";
    
    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";
    stage.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.addEventListener("click", () => {
            currentStage = choice.nextStage;
            updatePage();
        });
        choicesDiv.appendChild(button);
    });
    
    const imageDiv = document.getElementById("image");
    if (stage.image) {
        imageDiv.innerHTML = `<img src="images/${stage.image}" alt="Image related to current stage">`;
    } else {
        imageDiv.innerHTML = ""; 
    }
    
    if (stage.choices.length === 0) {
        const restartButton = document.createElement("button");
        restartButton.textContent = "Restart Game";
        restartButton.addEventListener("click", startGame);
        choicesDiv.appendChild(restartButton);
    }
}

let currentStage;
startGame();
