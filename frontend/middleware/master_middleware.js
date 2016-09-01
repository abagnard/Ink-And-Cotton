import { applyMiddleware } from 'redux';
import { SessionMiddleware } from './session_middleware';
import { ProductMiddleware } from './product_middleware';


export const MasterMiddleware = applyMiddleware (
  SessionMiddleware,
  ProductMiddleware
);
