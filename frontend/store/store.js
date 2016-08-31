import { createStore } from 'redux';
import { MasterReducer } from "../reducers/master_reducer";
import { MasterMiddleware } from "../middleware/master_middleware";

export const configureStore = (preloadedState = {}) => (
  createStore(
    MasterReducer,
    preloadedState,
    MasterMiddleware
  )
);
