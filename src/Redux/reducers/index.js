import { combineReducers } from "redux";
import CartReducers from "./CartReducers";



export default combineReducers({
  Cart: CartReducers
});
