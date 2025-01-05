
import { configureStore } from "@reduxjs/toolkit";
import counterRducer from "../redux/features/CounterSlice"


export const store = configureStore({
   reducer: {
      counter: counterRducer
   }
})

export type rootState = ReturnType<typeof store.getState>


