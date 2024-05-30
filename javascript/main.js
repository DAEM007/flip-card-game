document.addEventListener("DOMContentLoaded", () => {
  // store all cards option
  const cardArray = [
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
  ];

  // shuffle the cards with fisher-yates algorithm
  function shuffle() {
    for (let i = cardArray.length - 1; i >= 0; i--) {
      let swap = Math.floor(Math.random() * (i + 1));
      [cardArray[i], cardArray[swap]] = [cardArray[swap], cardArray[i]];
    }
  }

  shuffle();

  // Get DOM reference
  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector(".result");

  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  //   create board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "./images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard); // TODO: try using the index as an argument later
      grid.appendChild(card);
    }
  }

  // check for cards match
  function checkCardsMatch() {
    const cards = document.querySelectorAll("img");
    let optionOneId = cardsChosenId[0];
    let optionTwoId = cardsChosenId[1];

    console.log(optionOneId);
    console.log(optionTwoId);
    console.log(cardsChosen[0]);
    console.log(cardsChosen[1]);

    if (optionOneId === optionTwoId) {
      cards[optionOneId].setAttribute("src", "./images/blank.png");
      cards[optionTwoId].setAttribute("src", "./images/blank.png");
      alert("You have clicked the same card twice!");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute("src", "./images/white.png");
      cards[optionTwoId].setAttribute("src", "./images/white.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
      alert("Awesome, You have found a match!");
    } else {
      cards[optionOneId].setAttribute("src", "./images/blank.png");
      cards[optionTwoId].setAttribute("src", "./images/blank.png");
      alert("Sorry, try again!");
    }

    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You have found all match";
    }
  }

  // flip the card
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkCardsMatch, 500);
    }
  }

  createBoard();
});
