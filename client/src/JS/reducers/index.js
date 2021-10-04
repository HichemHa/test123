import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import filterReducer from './filterReducer';
import cardReducer from './cardReducer';
import livreurReducer from './livreurReducer'
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
  userReducer,
  productReducer,
  filterReducer,
  cardReducer,
  livreurReducer,
  cardReducer,
  categoryReducer

});

export default rootReducer;
