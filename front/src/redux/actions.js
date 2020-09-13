import { ADD_GAME } from './action-types';

export function addGame(game) {
  return {
    type: ADD_GAME,
    payload: {
      game
    }
  }
}
