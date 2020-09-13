import { ADD_GAME } from './action-types';

export function gameReducer(state = [], action) {
  switch (action.type) {
    case ADD_GAME:
      return {
        ...state,
        game:[action.payload.game]
      }
    default:
      return state;
  }
}
