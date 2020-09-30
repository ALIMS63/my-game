import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { userReducer, gameReducer } from './reducers';

const preloadedState = window.localStorage.getItem('redux') || '{}';
const composeEnhsncers = composeWithDevTools({ name: 'MY-GAME' });

export const store = createStore(
  combineReducers({
    user: userReducer,
    game: gameReducer,
  }),
  preloadedState,
  composeEnhsncers(applyMiddleware())
);

store.subscribe(() => {
  window.localStorage.setItem('redux', JSON.stringify(store.getState()));
});
