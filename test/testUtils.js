import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../src/redux/root-reducer';
import { middlewares } from '../src/configureStore';

export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore) 
  return createStoreWithMiddleware(rootReducer, initialState)
}

export const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`); 
};