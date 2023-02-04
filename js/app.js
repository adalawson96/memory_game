  
    /*----- state variables -----*/
//declare the section (cards are located)
const section = document.querySelector('section');

//declare the wrong count
const playerWrongCount = document.querySelector('span');

//max number of wrongs player can have 
const playerWrong = 8;

//change text of the #
playerWrongCount.innerHTML = playerWrong;

  /*----- constants -----*/

//generate array of objects --> was previously a getData function 
const animals = [
    { imgSrc: "./images/bunny.jpg", name: "bunny" },
    { imgSrc: "./images/cat.jpg", name: "cat" },
    { imgSrc: "./images/cow.jpg", name: "cow" },
    { imgSrc: "./images/duck.jpg", name: "duck" },
    { imgSrc: "./images/goat.jpg", name: "goat" },
    { imgSrc: "./images/horse.jpg", name: "horse" },
    { imgSrc: "./images/rooster.jpg", name: "rooster" },
    { imgSrc: "./images/sheep.jpg", name: "sheep" },
    { imgSrc: "./images/bunny.jpg", name: "bunny" },
    { imgSrc: "./images/cat.jpg", name: "cat" },
    { imgSrc: "./images/cow.jpg", name: "cow" },
    { imgSrc: "./images/duck.jpg", name: "duck" },
    { imgSrc: "./images/goat.jpg", name: "goat" },
    { imgSrc: "./images/horse.jpg", name: "horse" },
    { imgSrc: "./images/rooster.jpg", name: "rooster" },
    { imgSrc: "./images/sheep.jpg", name: "sheep" }
  ];

// put array animals into a function to then use in randomize 
function getData() {
  return animals
};
console.log(getData);

//create the randomize
const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() -0.5);
  console.log(cardData);
}

randomize();


//   /*----- state variables -----*/
// //declare the section (cards are located)
// const section = document.querySelector('section');

// //declare the wrong count
// const playerWrongCount = document.querySelector('span');

// //max number of wrongs player can have 
// const playerWrong = 8;
// playerWrongCount.innerHTML = playerWrong;

  /*----- cached elements  -----*/
//need numbers to change for the # of wrong

//need play button
// const playAgainButton = document.querySelector('button');

  /*----- event listeners -----*/
//add event listener / get element by ID

  /*----- functions -----*/

  //turn card over

  //timer on card 

  //click play again 

  //count/display the number of 'wrongs' in the h1 tag w/ class playerWrongCount

  //
