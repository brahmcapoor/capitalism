const suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];


function card(suit, value, stringvalue) {
  this.suit = suit;
  this.value = value;
  this.stringvalue = stringvalue;
}

export default function dealCards(nplayers) {

  var deck = shuffleDeck();
  var hands = new Array(nplayers);

  for(let i = 0; i < nplayers; i++) {
    hands[i] = [];
  }
  for(let i = 0; i < deck.length; i++) {
    hands[i % nplayers].push(deck[i]);
  }

  return hands;
}

function shuffleDeck() {
  let deck = [];
  suits.forEach(function(suit) {
    for (let i = 1; i <= 13; i++) {
      let newCard = new card(suit, i, numToStrCard(i));
      deck.push(newCard);
    }
  });
  return shuffle(deck);
}

function shuffle(array) {
  for(let i = array.length; i; i--) {
    let j = Math.floor(Math.random()*i);
    [array[i-1], array[j]] = [array[j], array[i-1]];
  }
  return array
}

function numToStrCard(i) {
  if (i === 1) {
    return "Ace";
  } else if (i === 11) {
    return "Jack";
  } else if (i === 12) {
    return "Queen";
  } else if (i === 13) {
    return "King";
  }
  return i;
}
