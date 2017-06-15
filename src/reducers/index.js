import database from '../config/database'
import { combineReducers } from 'redux';

const initialState = {
    gameCode: {}, //gameCode
    hand: {}, // will be the current player's hand
    isDealer: 0, //whether or not player is Dealer (1 if true)
    currStack: { // describes the current stack being played
      currValue: 0, // describes the value of the card at the top of the stack
      nCards: 0, // number of cards being played (e.g. singles, pairs, triples)
    },
};


function reducers(state = initialState, action) {

  switch(action.type) {

    case 'createNewGame':
      console.log("Creating a new game with dealer " + action.dealerName);

      database.ref().child('games/' + action.gameCode).set({
        numPlayers: action.numPlayers,
        dealer: action.dealerName
      });

      database.ref().child('games/' + action.gameCode + '/players/' + action.dealerName).set({
                                                                                        handsWon: 0});

      return {...state, gameCode: action.gameCode, isDealer: 1};

    default: return state;
  }
}

const rootReducer = combineReducers({
  reducers
});

export default rootReducer;
