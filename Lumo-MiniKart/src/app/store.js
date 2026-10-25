import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'

export const store = configureStore({ reducer: { cart: cartReducer } })
store.subscribe(() => {
  try { localStorage.setItem('lumo-cart', JSON.stringify(store.getState().cart.items)) } catch { /* storage may be unavailable */ }
})
