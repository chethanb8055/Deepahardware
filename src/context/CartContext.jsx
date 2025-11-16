import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = { items: [] };

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.payload.id ? { ...i, qty: i.qty + (action.payload.qty || 1) } : i
          )
        };
      }
      return { ...state, items: [...state.items, { ...action.payload, qty: action.payload.qty || 1 }] };
    }
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter(i => i.id !== action.payload) };
    case "SET_QTY":
      return {
        ...state,
        items: state.items.map(i => (i.id === action.payload.id ? { ...i, qty: Math.max(1, action.payload.qty) } : i))
      };
    case "CLEAR_CART":
      return { ...state, items: [] };
    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (product, qty = 1) => dispatch({ type: "ADD_ITEM", payload: { id: product.id, product, qty } });
  const removeItem = id => dispatch({ type: "REMOVE_ITEM", payload: id });
  const setQty = (id, qty) => dispatch({ type: "SET_QTY", payload: { id, qty } });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const total = state.items.reduce((s, i) => s + i.product.price * i.qty, 0);

  return (
    <CartContext.Provider value={{ cart: state, addItem, removeItem, setQty, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
