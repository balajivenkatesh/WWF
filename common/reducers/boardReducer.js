const emptyBoard = Array(11).fill().map(() => Array(11).fill().map(() => '_'));

// const emptyBoard = new Array(11);
// for (var i = 0; i < 11; i++) {
//   const row = new Array(11);
//   for (var j = 0; j < 11; j++) {
//     row[j] = 'A';
//   }
//   emptyBoard[i] = row;
// }

let initialState = {
  numBoard: 1,
  currBoard: 0,
  board: []
}
initialState.board.push(emptyBoard);

const boardReducer = (state = initialState, action) => {
  return state;
}

export default boardReducer;