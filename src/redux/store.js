import { configureStore } from '@reduxjs/toolkit'
import  counterReducer  from './slides/counterSlide'
import  cartReducer  from './slides/cartSlide'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
})
