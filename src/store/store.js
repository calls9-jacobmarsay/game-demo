import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import gamesReducer from './slice/gamesSlice';

const rootReducer = combineReducers({
    games: gamesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
