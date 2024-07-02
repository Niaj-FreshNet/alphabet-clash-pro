// // hide the home screen, to hide the home screen add the class hidden to the home section.
// function play() {
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classlist);
//     // continueGame();

//     // show the playground, to show the playground remove the class hidden to the playground section.
//     const playgroundSection = document.getElementById('playground-screen');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList);
// }

// function continueGame() {
//     // Generate a random alphabet
//     const alphabet = getARandomAlphabet();
//     // console.log('Your random alphabet is', alphabets);

//     // set randomly generated alphabet to the screen (show it).
//     const currentAlphabetElement = document.getElementById('current-alphabet');
//     currentAlphabetElement.innerText = alphabet;

//     // Set background color
//     setBackgroundColorById(alphabet);
// }
// function getARandomAlphabet() {
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     // console.log(alphabets);

//     const randomNumber = Math.random() * 25;
//     const index = Math.round(randomNumber);
//     console.log(index);
// }
// function setBackgroundColorById(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.add('bg-orange-400');
// }
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log('Player Pressed', playerPressed);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabate = currentAlphabetElement.innerText;
    const expectedAlphabate = currentAlphabate.toLowerCase();
    // console.log('Expected Alphabate', expectedAlphabate);

    if (playerPressed === expectedAlphabate) {
        // console.log('you have pressed correctly', expectedAlphabate);
        // console.log('You got a point');


        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);

        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore + 1;
        setTextElementValueById('current-score', newScore);
        console.log('Right Key Pressed AND Score increased to', newScore);

        // currentScoreElement.innerText = newScore;

        removeBackgroundColorById(expectedAlphabate);
        continueGame();
    }
    else {
        // console.log('You lost a life!');

        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // console.log(currentLife);

        const currentLife = getTextElementValueById('current-life');
        const newLife = currentLife - 1;
        setTextElementValueById('current-life', newLife);
        console.log('Wrong Key Pressed AND Life reduced to', newLife);

        // currentLifeElement.innerText = newLife;

        if (newLife === 0) {
            gameOver();
            // console.log('Game over');

            const finalScore = getTextElementValueById('current-score');
            setTextElementValueById('final-score', finalScore);

            setTextElementValueById('current-life', 5);
            setTextElementValueById('current-score', 0);

            const currentAlphabate = getTextElementValueById('current-alphabet');
            // console.log(currentAlphabate);
            removeBackgroundColorById(currentAlphabate);
            
        }
    }
}





function play() {
    hideElementById('home-screen');
    hideElementById('score-screen');
    showElementById('playground-screen');
    continueGame();
}
function continueGame() {
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet', alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);

}

function gameOver() {
    hideElementById('playground-screen');
    showElementById('score-screen');
}