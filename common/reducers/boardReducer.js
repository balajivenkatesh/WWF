import { TILE_SELECTED, LETTER_SELECTED } from '../constants/actionTypes';

const emptyBoard = Array(11).fill().map(() => Array(11).fill().map(() => '_'));

const initialState = {
  numBoard: 1,
  currBoard: 0,
  board: []
}
initialState.board.push(emptyBoard);

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case LETTER_SELECTED: {
      state.board[state.currBoard][action.x][action.y] = action.letter;
      state.numBoard = state.numBoard + 1;
      console.log(state.numBoard);
      return state;
    }
    default:
      return state;
  }
}

export default boardReducer;