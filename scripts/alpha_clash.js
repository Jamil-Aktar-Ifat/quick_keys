// function play() {
//   // Step - 1: hide the home screen. to hide the home screeen add the hidden class to the home screen
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   // Step - 2: show the playground
//   const playgroundSection = document.getElementById("play-ground");
//   playgroundSection.classList.remove("hidden");
// }

function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;
  // console.log("Player pressed: ", playerPressed);

  // get the expected to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  // console.log(playerPressed, expectedAlphabet);

  // check if matched or not
  if (playerPressed === expectedAlphabet) {
    console.log("You got a point!");
    console.log("You have pressed correctly", expectedAlphabet);

    // score update
    // 1. get the current score
    const currentScoreElement = document.getElementById("current-score");
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    console.log(currentScore);
    // 2. increase the score by 1
    const newScore = currentScore + 1;
    // 3. display the updated score
    currentScoreElement.innerText = newScore;
    // start a new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    console.log("You missed a life!");

    // life update
    // 1. get the current life
    const currentLifeElement = document.getElementById("current-life");
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);
    // 2. decrease the life count
    const newLife = currentLife - 1;
    // 3. display the updated life
    currentLifeElement.innerText = newLife;
  }
}

// keyboard key press
document.addEventListener("keyup", handleKeyboardButtonPress);

function continueGame() {
  // step - 1: generate a random alphabet
  const alphabet = getRandomAlphabet();
  // console.log("Your random alphabet:", alphabet);

  //   set randomly generated alphabet
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  // set background color
  setBackgroundColorById(alphabet);
}

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}
