import { TILE_SELECTED } from '../constants/actionTypes';

export function onTileSelected(tileLocation, x, y) {
  return {
    type: TILE_SELECTED,
    tileLocation,
    x,
    y
  }
}