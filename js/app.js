/*----- constants -----*/
//generate array of objects
const animals = [
  { imgSrc: "./images/game-img/bunny.jpg", name: "bunny", number: "1"},
  { imgSrc: "./images/game-img/cat.jpg", name: "cat", number: "2"},
  { imgSrc: "./images/game-img/cow.jpg", name: "cow", number: "3"},
  { imgSrc: "./images/game-img/duck.jpg", name: "duck", number: "4"},
  { imgSrc: "./images/game-img/goat.jpg", name: "goat", number: "5"},
  { imgSrc: "./images/game-img/horse.jpg", name: "horse", number: "6"},
  { imgSrc: "./images/game-img/rooster.jpg", name: "rooster", number: "7"},
  { imgSrc: "./images/game-img/sheep.jpg", name: "sheep", number: "8"},
  { imgSrc: "./images/game-img/bunny.jpg", name: "bunny", number: "2"},
  { imgSrc: "./images/game-img/cat.jpg", name: "cat", number: "3"},
  { imgSrc: "./images/game-img/cow.jpg", name: "cow", number: "4"},
  { imgSrc: "./images/game-img/duck.jpg", name: "duck", number: "5"},
  { imgSrc: "./images/game-img/goat.jpg", name: "goat", number: "6"},
  { imgSrc: "./images/game-img/horse.jpg", name: "horse", number: "7"},
  { imgSrc: "./images/game-img/rooster.jpg", name: "rooster", number:"8"},
  { imgSrc: "./images/game-img/sheep.jpg", name: "sheep", number: "9"}
];

/*----- state variables -----*/
//declare the section (cards are located)
const section = document.querySelector('section');
let lastClicked = '';
let firstCard;
let secondCard;
let playerWrong = 3;
let match;

/*----- cached elements  -----*/
const playAgainButton = document.querySelector('button');
const messageEl = document.querySelector('h2');
//declare the wrong count
const playerWrongCount = document.querySelector('span');
//change text of the #
playerWrongCount.innerHTML = playerWrong;

/*----- event listeners -----*/
playAgainButton.addEventListener('click', initialize);

/*----- functions -----*/
function initialize(){
  winner = '';
  render();
}

//create the randomize:
const randomize = () => {
  animals.sort(() => Math.random() -0.5);
  return animals;
};

//card generator function:
const cardGenerator = () => {
  const cardData = randomize();
  //generate html for ALL of the cards so run through the array using .forEach()
  const handleClick = function (evt){
    if (!firstCard){
      firstCard = evt.target
    } else {
      secondCard = evt.target
    };
    // console.log(firstCard);
    // console.log(secondCard);
    evt.target.classList.toggle('toggleCard');
    if (firstCard && secondCard) {
      checkCards(evt, handleClick);
    };
  };
  cardData.forEach((item) => {
    //use document.createElement() to create the html div:
    const card = document.createElement('div');
    //since card has two faces create the front with the image of the card:
    const face = document.createElement('img');
    //back side of card & since it's blank use a div to create white face:
    const backSide = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('number', item.number);
    card.setAttribute('name', item.name);
    backSide.classList ='back-side';
    //attach the informaiton to the cards by grabbing section/ array: 
    face.src = item.imgSrc;
    // attach the cards to the section:
    card.appendChild(backSide);
    card.appendChild(face);
    section.appendChild(card);
    //card flip by grabbing card: //source: https://jefferson-cuartas.medium.com/how-to-create-a-flip-card-effect-using-javascript-767dd945210c
    card.addEventListener('click', handleClick);
  });
};

//check cards if they match:
function checkCards(evt, handleClick) {
  let firstAnimal = firstCard.parentElement.getAttribute('name');
  let secondAnimal = secondCard.parentElement.getAttribute('name');
  console.log('first', firstCard.parentElement);
  console.log('second', secondCard.parentElement);
  //if two cards have been flipped then check if faces match with 'name' if they do return match & cards stay face up and cannot be clicked on anymore, if they don't reutrn wrong & flip card back (use setTimeout):
  if (firstAnimal === secondAnimal){
    console.log('match');
    match++;
    //stay facing up:
    firstCard.parentElement.removeEventListener('click', handleClick);
    secondCard.parentElement.removeEventListener('click', handleClick);
    // render winner: 
    // if (toggle.length === 16){
    // restart('you win');
    //   alert('you win');
    // }
  } else {
    console.log('incorrect');
    playerWrong--;
    //wrong cards flip back / add timeout:
    firstCard.parentElement.classList.toggle('toggleCard');
    secondCard.parentElement.classList.toggle('toggleCard');
  }
  //logs out the # of wrong 
  playerWrongCount.textContent = playerWrong;
  if (playerWrong === 0){
    // restart('you lose');
    alert('you lose');
  };
  firstCard = null;
  secondCard = null;
};
    
//restart the game: 
const restart = (text) => {
  let cardData = randomize();
  let faces = document.querySelectorAll('.face');
  let cards = document.querySelectorAll('.card');
  section.style.pointerEvents = 'none';
  cardData.forEach((item, index) => {
    cards[index].classList.remove('toggleCard');
    //randomize cards after lose:
    setTimeout(() => {
    cards[index].style.pointerEvents = 'all';
    faces[index].src = item.imgSrc;
    cards[index].setAttribute('name', item.name);
    section.style.pointerEvents = 'all';
    }, 1000);
  });
  playerWrong = 3;
  playerWrongCount.textContent = playerWrong;
};

//visualize all state in the DOM
function render() {
  renderMessage();
  // renderControls();
  //hiding/showing play again button 
  playAgainButton.disabled = !winner;
}

//Handle a player clicking the replay button:
//Mesage of who wins but this would be seperate?: 
function renderMessage() {
  if (winner === null) {
    messageEl.innerText = 'loose';
  }else if (winner) { 
    messageEl.innerText = 'win!';
  }else {
    messageEl.innerHTML = 'keep trying';
  };
};

//makes button hide:
// function renderControls() {
//   playAgainButton.style.visibility = winner? 'visible':'hidden';
// }

cardGenerator();
  
  
// check to see if the game is won --> if all cards are face up --> win:
// create restart--> when 8 wrong flip all cards back:
// function resetBoard() {}