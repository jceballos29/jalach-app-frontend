import { combineReducers } from "redux";
import auth from "./auth.reducer";
import roles from "./roles.reducer";
import categories from './categories.reducer'


export default combineReducers({
  auth,
  roles,
  categories
});
