import { composeWithDevTools } from 'redux-devtools-extension';

import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({});

export const store = createStore(reducer, composeWithDevTools());
