    /*----- constants -----*/

    /*----- state variables -----*/
//declare the section (cards are located)
const section = document.querySelector('section');

  /*----- cached elements  -----*/
//need play button
const playAgainButton = document.querySelector('button');

//declare the wrong count
const playerWrongCount = document.querySelector('span');

//max number of wrongs player can have let becuase need to modify the value
let playerWrong = 8;

//change text of the #
playerWrongCount.innerHTML = playerWrong;

/*----- event listeners -----*/
//add event listener / get element by ID


/*----- functions -----*/

//generate array of objects
const animals = [
  { imgSrc: "./images/game img/bunny.jpg", name: "bunny" },
  { imgSrc: "./images/game img/cat.jpg", name: "cat" },
  { imgSrc: "./images/game img/cow.jpg", name: "cow" },
  { imgSrc: "./images/game img/duck.jpg", name: "duck" },
  { imgSrc: "./images/game img/goat.jpg", name: "goat" },
  { imgSrc: "./images/game img/horse.jpg", name: "horse" },
  { imgSrc: "./images/game img/rooster.jpg", name: "rooster" },
  { imgSrc: "./images/game img/sheep.jpg", name: "sheep" },
  { imgSrc: "./images/game img/bunny.jpg", name: "bunny" },
  { imgSrc: "./images/game img/cat.jpg", name: "cat" },
  { imgSrc: "./images/game img/cow.jpg", name: "cow" },
  { imgSrc: "./images/game img/duck.jpg", name: "duck" },
  { imgSrc: "./images/game img/goat.jpg", name: "goat" },
  { imgSrc: "./images/game img/horse.jpg", name: "horse" },
  { imgSrc: "./images/game img/rooster.jpg", name: "rooster" },
  { imgSrc: "./images/game img/sheep.jpg", name: "sheep" }
];

// put array animals into a function to then use in randomize 
function getData() {
  return animals
};

//create the randomize
const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() -0.5);  
  console.log(cardData);
  return cardData;
};

// //card generator function
const cardGenerator = () => {
  let cardsHtml = ''
  const cardData = randomize();
  //generate html for ALL of the cards so run through the array using .forEach()
  cardData.forEach(animals => {
    //use document.createElement() to create the html div 
    cardsHtml += `<div class="flip-card">
                        <div class="flip-card-inner">
                          <div class="flip-card-front">
                            <!-- Front side content here -->
                            <img src= "${animals.imgSrc}"
                          </div>
                          <div class="flip-card-back">
                            <!-- Back side content here -->
                            <img src= "./images/game img/card.jpg">
                          </div>
                        </div>
                      </div>`   
});
section.innerHTML = cardsHtml
};

cardGenerator();

const flipCard = document.querySelector('.flip-card-inner');
flipCard.addEventListener('click', function() {
  flipCard.classList.toggle('is-flipped');
});

//check cards if they match 

//time delay for card flip back if not a match use setTimeout

//card flip

//if the match they stay and cannot be clicked on anymore

//count/display the number of 'wrongs'  --> add one each time  (h1 tag w/class playerWrongCount)

//check to see if the game is won --> if all cards show face --> win 

//create restart when 8 wrong flip all cards back 

//reset player lives 

//reset game/randomize cards by clicking play again 









