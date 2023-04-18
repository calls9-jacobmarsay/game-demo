import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    fetchGames(state, action) {
      state.popular = action.payload.popular;
      state.upcoming = action.payload.upcoming;
      state.newGames = action.payload.newGames;
    },
  },
});

export const { fetchGames } = gamesSlice.actions;
export default gamesSlice.reducer;
