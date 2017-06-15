export const createNewGame = (numPlayers, dealerName, gameCode) => {
  return {
    type: 'createNewGame',
    numPlayers: numPlayers,
    dealerName: dealerName,
    gameCode: gameCode,
  }
}

export const joinGame = (playerName, gameCode) => {
  return {
    type: 'joinGame',
    playerName: playerName,
    gameCode: gameCode,
  }
}
