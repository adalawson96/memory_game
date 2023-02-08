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
    card.setAttribute('number', item.number);
    // card.classList.add(item.name);
    card.setAttribute('name', item.name);
    // face.classList.add('face');
    backSide.classList ='back-side';
    //attach the informaiton to the cards by grabbing section/ array: 
    face.src = item.imgSrc;
    // attach the cards to the section:
    card.appendChild(backSide);
    card.appendChild(face);
    section.appendChild(card);
    //card flip by grabbing card: //source: https://jefferson-cuartas.medium.com/how-to-create-a-flip-card-effect-using-javascript-767dd945210c
    card.addEventListener('click', function(evt){
      evt.target.classList.toggle('toggleCard');
      matchingCards(evt)
    });
  });
};

//check cards if they match:
function matchingCards(evt) {
  const clickedCard = evt.target;
  // console.log(evt.target);
  console.log(clickedCard.parentElement.getAttribute('name'));
  const flippedCards = document.querySelectorAll('.flipped');
  clickedCard.classList.add('flipped');
  console.log(clickedCard.parentElement);
  
  //if two cards have been flipped then check if faces match with 'name' if they do return match, if they don't reutrn wrong the cards stay face up and cannot be clicked on anymore:
  if (lastClicked != '' && 
  lastClicked.parentElement.getAttribute('name') === clickedCard.parentElement.getAttribute('name') && 
  lastClicked.parentElement.getAttribute('number') != clickedCard.parentElement.getAttribute('number')) {
    console.log('match');
    // flippedCards.forEach((card) => {
    //   card.classList.remove('flipped');
    //   card.getElementsByClassName.pointerEvents = "none";
    // });
  } else {
    console.log('incorrect');
    // flippedCards.forEach((card) => {
    //   card.classList.remove('flipped');
    //   setTimeout(() => card.classList.remove('toggleCard'), 1000);
    // });
    lastClicked = clickedCard;
  }
    //if the card faces match the cards stay face up and cannot be clicked on anymore // //if the card faces do not match //time delay for card flip back if not a match use setTimeout:
};

// function unflipCards() {
  
  // };
  
  // setTimeout(function () {
    //   wrongMatch.play();
    //   toggle.classList.remove('flipped');
    // }, 1000
    
    
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
        // function resetWrong() {};
        
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
      
      
      //restart
      const restart = () => {
        let cardData = randomize();
        let faces = document.querySelectorAll('.face');
        let cards = document.querySelectorAll('.card');
        cardData.forEach((item, index) => {
          cards[index].classList.remove('toggleCard');

        });
      };
      
      cardGenerator();