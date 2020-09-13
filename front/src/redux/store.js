import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { gameReducer } from './reducers';

const composeEnhsncers = composeWithDevTools({ name: 'MY-GAME' });

export const store = createStore(
  gameReducer,
  undefined,
  composeEnhsncers(applyMiddleware())
);
