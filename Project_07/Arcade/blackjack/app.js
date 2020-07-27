const SUITS = ["heart", "diamond", "spade", "club"];
const RANKS = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];

const deck = [];

SUITS.forEach(function (suit) {
  RANKS.forEach(function (rank) {
    deck.push({ suit: suit, rank: rank });
  });
});

function shuffleArray(array) {
  for (let index = 0; index < array.length; index++) {
    const swapIndex = Math.floor((array.length - index) * Math.random()) + index;
    const currentValue = array[index],
      swapValue = array[swapIndex];
    array[index] = swapValue;
    array[swapIndex] = currentValue;
  }
}

shuffleArray(deck); // deck is now shuffled

const compPlayer = {
  cards: [],
};

const realPlayer = {
  cards: [],
  pot: 1000,
  ante: null,
};
