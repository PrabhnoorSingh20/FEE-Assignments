import { createSlice } from '@reduxjs/toolkit'

const loadCart = () => {
  try {
    const saved = localStorage.getItem('lumo-cart')
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: loadCart() },
  reducers: {
    addToCart(state, action) {
      const product = action.payload
      const found = state.items.find((item) => item.id === product.id)
      if (found) found.quantity += 1
      else state.items.push({ ...product, quantity: 1 })
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    increaseQuantity(state, action) {
      const item = state.items.find((product) => product.id === action.payload)
      if (item) item.quantity += 1
    },
    decreaseQuantity(state, action) {
      const item = state.items.find((product) => product.id === action.payload)
      if (item) {
        item.quantity -= 1
        if (item.quantity <= 0) state.items = state.items.filter((product) => product.id !== action.payload)
      }
    },
    clearCart(state) { state.items = [] },
  },
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer
