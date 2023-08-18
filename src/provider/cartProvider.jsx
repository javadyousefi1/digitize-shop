import { createContext, useContext, useReducer } from "react";
import CartReducer from "./cartReducer";

const cartState = createContext();
const cartDispatch = createContext();

const getLocalStorage = localStorage.getItem("cart")
? JSON.parse(localStorage.getItem("cart"))
: [];


const initialState = {
    cart :getLocalStorage.cart || [],
    total : getLocalStorage.total || 0,
    searchItem : ""
}

const CartProvider = ({ children }) => {

  const [cart,dispatch] = useReducer(CartReducer,initialState)

  return (
    <>
      <cartState.Provider value={cart}>
        <cartDispatch.Provider value={dispatch}>{children}</cartDispatch.Provider>
      </cartState.Provider>
    </>
  );
};

export default CartProvider;

export const UseCart = ()=> useContext(cartState)
export const UseCartDispatch = ()=> useContext(cartDispatch)