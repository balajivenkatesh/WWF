import { LETTER_SELECTED } from '../constants/actionTypes';

export function onLetterSelected(x, y, letter) {
  return {
    type: LETTER_SELECTED,
    x,
    y,
    letter
  }
}