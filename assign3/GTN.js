let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Secret Number =", randomNumber);

let guessed_numbers = [];
let attempts = 0; 

function checkGuess() {
    let userGuess = parseInt(document.getElementById("guess").value);
    let message = document.getElementById("message");

    if (attempts >= 10) {
        message.innerText = `❌ Game Over! You used all 10 attempts. The number was ${randomNumber}`;
        return;
    }

    if (isNaN(userGuess)) {
        message.innerText = "Please enter a valid number!";
        return;
    }

    guessed_numbers.push(userGuess); 
    attempts++;
    
    if (userGuess < randomNumber) {
        message.innerText = `Too low! Try a higher number. Attempts: ${attempts}/10`;
    }
    else if (userGuess > randomNumber) {
        message.innerText = `Too high! Try a lower number. Attempts: ${attempts}/10`;
    }
    else {
        message.innerText = `🎉 Correct! The number was ${randomNumber} in ${attempts} attempts!`;
    }
    
    preguess.innerText =`${guessed_numbers}`;
    console.log("Previous guesses:", guessed_numbers);
}
