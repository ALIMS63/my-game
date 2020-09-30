import { ADD_GAME, SET_USER, DELETE_USER, AUTHENTICATED_SUCCESSFULLY, LOGOUT } from './action-types';

export function gameReducer(state = [], action) {
  switch (action.type) {
    case ADD_GAME:
      return {
        ...state,
        game: [action.payload.game]
      }
    default:
      return state;
  }
}

export function userReducer(state = { isAuthenticated: false }, action) {
  switch (action.type) {
    case SET_USER:
      return action.payload.user;
    case AUTHENTICATED_SUCCESSFULLY:
      return {
        ...state,
        isAuthenticated: true,
      };
    case LOGOUT:
      return {
        isAuthenticated: false,
      };
    case DELETE_USER:
      return false;
    default:
      return state;
  }
}
