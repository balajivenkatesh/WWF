const emptyBoard = Array(11).fill().map(() => Array(11).fill().map(() => '_'));

const initialState = {
  numBoard: 1,
  currBoard: 0,
  board: []
}
initialState.board.push(emptyBoard);

const boardReducer = (state = initialState, action) => {
  return state;
}

export default boardReducer;