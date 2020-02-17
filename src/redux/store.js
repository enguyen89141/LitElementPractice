//store is essentially the intermediary housing of the data for the views to call upon
import { createStore } from 'redux';
import { reducer } from './reducer.js';

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);