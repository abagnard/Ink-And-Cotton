import { applyMiddleware } from 'redux';
import { SessionMiddleware } from './session_middleware';
import { ProductMiddleware } from './product_middleware';
import { ReviewMiddleware } from './review_middleware';
import { UserMiddleware } from './user_middleware';


export const MasterMiddleware = applyMiddleware (
  SessionMiddleware,
  ProductMiddleware,
  UserMiddleware,
  ReviewMiddleware
);
