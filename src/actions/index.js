export const createNewGame = (numPlayers, dealerName, gameCode) => {
  return {
    type: 'createNewGame',
    numPlayers: numPlayers,
    dealerName: dealerName,
    gameCode: gameCode,
  }
}
