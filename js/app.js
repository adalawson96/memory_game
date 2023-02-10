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
let match = 1;

/*----- cached elements  -----*/
const playAgainButton = document.querySelector('button');
// declares the state of the game:
const messageEl = document.querySelector('h2');
//declares the wrong count:
const playerWrongCount = document.querySelector('span');
//changes text of the #:
playerWrongCount.innerHTML = playerWrong;

/*----- event listeners -----*/
playAgainButton.addEventListener('click', initialize);

/*----- functions -----*/
function initialize(){
  winner = '';
  randomize();
  cardGenerator();
  restart();
  render();
};

//create the randomize:
const randomize = () => {
  animals.sort(() => Math.random() -0.5);
  return animals;
};

// setting the cards to compare
const chooseCard = function (evt){
  if (!firstCard){
    firstCard = evt.target
  } else {
    secondCard = evt.target
  };
  evt.target.classList.toggle('toggleCard');
  if (firstCard && secondCard) {
    checkCards();
  };
};

//card generator function:
const cardGenerator = () => {
  const cardData = randomize();
  section.innerHTML = '';
  section.style.pointerEvents = 'auto';
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
    card.setAttribute('src', item.imgSrc);
    backSide.classList ='back-side';
    //attach the informaiton to the cards by grabbing section/ array: 
    face.src = item.imgSrc;
    // attach the cards to the section:
    card.appendChild(backSide);
    card.appendChild(face);
    section.appendChild(card);
    //card flip by grabbing card: //source: https://jefferson-cuartas.medium.com/how-to-create-a-flip-card-effect-using-javascript-767dd945210c
    card.addEventListener('click', chooseCard, {once: true});
  });
};

//check cards if they match:
function checkCards() {
  let firstAnimal = firstCard.parentElement.getAttribute('name');
  let secondAnimal = secondCard.parentElement.getAttribute('name');
  console.log('first', firstCard.parentElement);
  console.log('second', secondCard.parentElement);
  const toggleCard = document.querySelectorAll('.toggleCard');
  //if two cards have been flipped then check if faces match with 'name' if they do return match & cards stay face up and cannot be clicked on anymore, if they don't reutrn wrong & flip card back:
 // render winner: 
  if (match === 8){
    }
  if (firstAnimal === secondAnimal){
    console.log('match');
    match = match + 1;
  } else {
    console.log('incorrect');
    playerWrong--;
    //wrong cards flip back / add timeout:
    firstCard.parentElement.classList.toggle('toggleCard');
    secondCard.parentElement.classList.toggle('toggleCard');
    firstCard.addEventListener('click', chooseCard, {once: true});
    secondCard.addEventListener('click', chooseCard, {once: true});
    if (playerWrong === 0) {
      firstCard.removeEventListener('click', chooseCard);
      secondCard.removeEventListener('click', chooseCard);
    }
  }
  //logs out the # of attempts left: 
  playerWrongCount.textContent = playerWrong;
  if (playerWrong === 0){
    messageEl.innerHTML = 'loose try again!';
  };
  firstCard = null;
  secondCard = null;
  //win condition:
  if (toggleCard.length === 16){
    messageEl.innerHTML = 'win!';
  }   
};

//restart the game:
function restart() { 
  let cardData = randomize();
  let faces = document.querySelectorAll('.face');
  let cards = document.querySelectorAll('.card');
  section.style.pointerEvents = 'all';
  cardData.forEach(function (item, index) {
    cards[index].classList.remove('toggleCard');
  });
  playerWrong = 3;
  playerWrongCount.textContent = playerWrong;
  messageEl.innerHTML = 'you...';
};

//visualize all state in the DOM
function render() {
  // playAgainButton.disabled = !winner;
  if (!winner || playerWrong != 0) {
    playAgainButton.disabled = true;
  }
};
  cardGenerator();
