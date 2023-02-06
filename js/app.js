    /*----- constants -----*/

    /*----- state variables -----*/
//declare the section (cards are located)
const section = document.querySelector('section');

  /*----- cached elements  -----*/
//need play button
const playAgainButton = document.querySelector('button');

//declare the wrong count
const playerWrongCount = document.querySelector('span');
//max number of wrongs player can have let because need to modify the value
let playerWrong = 8;
//change text of the #
playerWrongCount.innerHTML = playerWrong;

/*----- event listeners -----*/
//add event listener / get element by ID
// playAgainButton.addEventListener('click', initialize);
// initialize();

/*----- functions -----*/
// function initialize(){
//   winner = null;
//   render();
// }

//generate array of objects
const animals = [
  { imgSrc: "./images/game-img/bunny.jpg", name: "bunny" },
  { imgSrc: "./images/game-img/cat.jpg", name: "cat" },
  { imgSrc: "./images/game-img/cow.jpg", name: "cow" },
  { imgSrc: "./images/game-img/duck.jpg", name: "duck" },
  { imgSrc: "./images/game-img/goat.jpg", name: "goat" },
  { imgSrc: "./images/game-img/horse.jpg", name: "horse" },
  { imgSrc: "./images/game-img/rooster.jpg", name: "rooster" },
  { imgSrc: "./images/game-img/sheep.jpg", name: "sheep" },
  { imgSrc: "./images/game-img/bunny.jpg", name: "bunny" },
  { imgSrc: "./images/game-img/cat.jpg", name: "cat" },
  { imgSrc: "./images/game-img/cow.jpg", name: "cow" },
  { imgSrc: "./images/game-img/duck.jpg", name: "duck" },
  { imgSrc: "./images/game-img/goat.jpg", name: "goat" },
  { imgSrc: "./images/game-img/horse.jpg", name: "horse" },
  { imgSrc: "./images/game-img/rooster.jpg", name: "rooster" },
  { imgSrc: "./images/game-img/sheep.jpg", name: "sheep" }
];

//create the randomize
const randomize = () => {
  animals.sort(() => Math.random() -0.5);
  return animals;
};

//card generator function
const cardGenerator = () => {
  const cardData = randomize();
  //generate html for ALL of the cards so run through the array using .forEach()
  cardData.forEach((item) => {
    //use document.createElement() to create the html div:
    const card = document.createElement('div');
    //since card has two faces create the front with the image of the card:
    const face = document.createElement('img');
    //back side of card & since it's blank use a div to create white face:
    const backSide = document.createElement('div');
    card.classList.add('card');
    // card.classList.add(item.name);
    card.setAttribute('name', item.name);
    // face.classList.add('face');
    backSide.classList ='back-side';
    //attach the informaiton to the cards by grabbing section/ array: 
    face.src = item.imgSrc;
    card.appendChild(backSide);
    card.appendChild(face);
    // attach the cards to the section:
    section.appendChild(card);
    //card flip by grabbing card: //source: https://jefferson-cuartas.medium.com/how-to-create-a-flip-card-effect-using-javascript-767dd945210c
    // card.addEventListener('click', function(evt) {
    // card.classList.toggle('toggleCard');
    // matchingCards(evt)
    // });
  });

  section.addEventListener('click', function(evt){
    evt.target.classList.toggle('toggleCard');
    matchingCards(evt)
  });
};
//check cards if they match  name === name :
function matchingCards(evt) {
  const clickedCard = evt.target;
  console.log(evt.target)
  console.log(clickedCard.parentElement.getAttribute('name'));
  clickedCard.classList.add('flipped')
  const flippedCards = clickedCard.getAttribute('name');
  console.log(flippedCards);
  // const flippedCards = document.querySelectorAll('.flipped')
  //if the card faces match the cards stay face up and cannot be clicked on anymore:


  // if (flippedCards.length === 2) {
  //   console.log(flippedCards.length)
  //   if (flippedCards.getAttribute('name') === flippedCards.getAttribute('name'))
  //     console.log('match');
  //   } else {
  //     console.log('wrong');
  //   }
};

//if the card faces match the cards stay face up and cannot be clicked on anymore:
// if ('match')


// function disableClick() {

// };



//if the card faces do not match //time delay for card flip back if not a match use setTimeout:
// function unflipCards() {
  
  // };
  
  // setTimeout(function () {
    //   wrongMatch.play();
    //   elCard.classList.remove('flipped');
    //   elPreviousCard.classList.remove('flipped');
    //   elPreviousCard = null;
    // }, 1000
    
cardGenerator();

//count/display/ RENDER the number of 'wrongs'  --> add one each time  (h1 tag w/class playerWrongCount):
// function render (){
//   renderMessage();
// //hiding/showing play again button 
//   playAgainBtn.disabled = !winner;
// }

//check to see if the game is won --> if all cards are face up --> win:

//create restart--> when 8 wrong flip all cards back:
// function resetBoard() {

// };

//reset player lives:
// function resetWrong() {

// };

// reset game/randomize cards by clicking play again:
// // function renderMessage (){
// //   if (winner < '8'){
// //     messageEl.innerText = "you win!";
// //   } else { 
  //       (loser > '8'){
// //     messageEl.innerText = "you loose";
//      } else {
// //   //Game is in play in this condition
// //   messageEl.innerHTML = `<span innerText="wrong: 
// //   ${playerWrong['']}">${playerWrongCount[playerWrong].toUpperCase()}</span>'s Wrong`;
// //   }
//      }
