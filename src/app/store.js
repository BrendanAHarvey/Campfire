import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
// import { applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import createLogger from 'redux-logger';
// import rootReducer from './reducers';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// const loggerMiddleware = createLogger();

// const createStoreWithMiddleware = applyMiddleware(
//   thunkMiddleware,
//   loggerMiddleware
// )(configureStore);

// export default function configureStore(initialState) {
//   return createStoreWithMiddleware(rootReducer, initialState);
// }
