import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"; // used for the extension in the chrome
import { productListReducer,productDetailsReducer } from "./reducers/productReducers.js";

const reducer = combineReducers({
  productList: productListReducer, // product list is what will be shown as a piece of state
  productDetails: productDetailsReducer,
});

const initialState = {};

const middleware = [thunk]; // thunk allows you to use async functions

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
