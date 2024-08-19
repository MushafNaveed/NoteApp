import { configureStore } from "@reduxjs/toolkit";
import NodeReducer from "./NodeSlice";
import weatherReducer from "./ApiSlice"; 

export const store = configureStore({
  reducer: {
    AddNote: NodeReducer,
    weather: weatherReducer, 
  },
});
