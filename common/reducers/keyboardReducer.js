import { TILE_SELECTED } from '../constants/actionTypes';
import { showEnum, locationsEnum } from '../constants/boardConst';

const initialState = {
  show: showEnum.none,
  tileLocation: locationsEnum.grid,
  x: -1,
  y: -1
}

const keyboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case TILE_SELECTED: {
      switch (action.tileLocation) {
        case locationsEnum.grid:
          return {
            ...state,
            show: showEnum.keyboard,
            tileLocation: action.tileLocation,
            x: action.x,
            y: action.y
          };
        case locationsEnum.keyboard:
        case locationsEnum.hand:
        default:
          return {...state, show: showEnum.none};
      }
    }
    default:
      return state;
  }
}

export default keyboardReducer;