import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = 'bcfcbc724e41d99db8b5c8e30cf561fe';

export const getWeatherApi = createAsyncThunk(
    "weather/getWeatherApi",
    async ({ lat, lon }) => {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
      console.log("API Response:", response.data);
      return response.data;
    }
  );
  

export const ApiSlice = createSlice({
  name: "weather",
  initialState: {
    status: "idle",
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWeatherApi.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getWeatherApi.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.data = action.payload;
      console.log("State after fetch:", state);
    });
    builder.addCase(getWeatherApi.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
  
});

export default ApiSlice.reducer;
