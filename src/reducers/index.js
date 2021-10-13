import { combineReducers } from "redux";
import auth from "./auth.reducer";
import roles from "./roles.reducer";
import categories from './categories.reducer';
import products from './products.reducer'
import budgets from './budgets.reducer'


export default combineReducers({
  auth,
  roles,
  categories,
  products,
  budgets
});
