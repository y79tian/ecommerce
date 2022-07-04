import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants.js";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  const payload = {
    product: data._id,
    name: data.name,
    image: data.image,
    price: data.price,
    countInStock: data.countInStock,
    qty,
  };
  dispatch({ type: CART_ADD_ITEM, payload });

  // we use getState to get the state tree (in redux)
  // setItems in localStorage
  // localStorage only stores string
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};