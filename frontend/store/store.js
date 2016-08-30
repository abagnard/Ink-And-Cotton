import { createStore } from 'redux';
import { SessionReducer } from "../reducers/session_reducer";
import { SessionMiddleware } from "../middleware/session_middleware";

export const configureStore = (preloadedState = {}) => (
  createStore(
    SessionReducer,
    preloadedState,
    SessionMiddleware
  )
);
