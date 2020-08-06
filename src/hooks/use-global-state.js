import React, { createContext, useContext, useReducer } from "react"

const DEFAULT_STATE = {
  showCart: false,
  loading: false,
  notifications: [],
  categoryProducts: null,
  activeProduct: null,
  cart: {
    items: [{ one: "gandon" }, { two: "gandons" }],
    total: null,
  },
  user: {
    name: null,
    email: null,
    phone: null,
    message: null,
  },
}

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_CART":
      return {
        ...state,
        showCart: action.payload,
      }
    case "LOADING_ENABLED":
      return {
        ...state,
        loading: true,
      }
    case "LOADING_DISABLED":
      return {
        ...state,
        loading: false,
      }
    case "SET_ACTIVE_PRODUCT":
      return {
        ...state,
        activeProduct: action.payload,
      }
    case "ADD_PRODUCT_TO_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          items: [...state.cart.items, action.payload],
        },
      }
    case "REMOVE_PRODUCT_FROM_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          items: [
            ...state.cart.items.slice(0, action.payload),
            ...state.cart.items.slice(action.payload + 1),
          ],
        },
      }
    case "UPDATE_PRODUCT_QTY":
      return {
        ...state,
        cart: {
          ...state.cart,
          items: [
            ...state.cart.items.slice(0, action.payload.index),
            {
              ...state.cart.items[action.payload.index],
              product: {
                ...state.cart.items[action.payload.index].product,
                quantity: action.payload.quantity,
              },
            },
            ...state.cart.items.slice(action.payload.index + 1),
          ],
        },
      }
    default:
      return DEFAULT_STATE
  }
}

const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => (
  <GlobalContext.Provider value={useReducer(reducer, DEFAULT_STATE)}>
    {children}
  </GlobalContext.Provider>
)

export const wrapRootElement = ({ element }) => (
  <GlobalContextProvider>{element}</GlobalContextProvider>
)

const useGlobalState = () => {
  const [appState, dispatch] = useContext(GlobalContext)
  return { appState, dispatch }
}

export default useGlobalState
