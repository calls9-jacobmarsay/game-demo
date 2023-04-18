import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { popularGamesUrl, upcomingGamesUrl, newgamesUrl, gameDetailsUrl, gameScreenshotUrl} from '../../api/api';
import axios from 'axios';

export const loadGames = createAsyncThunk('games/loadGames', async () => {
  const popularData = await axios.get(popularGamesUrl());
  const upcomingData = await axios.get(upcomingGamesUrl());
  const newGameData = await axios.get(newgamesUrl());

  return {
    popular: popularData.data.results,
    upcoming: upcomingData.data.results,
    newGames: newGameData.data.results,
  };
});
  


export const loadDetail = createAsyncThunk("games/loadDetail", async (id) => {
  const detailData = await axios.get(gameDetailsUrl(id));
  const screenshotData = await axios.get(gameScreenshotUrl(id));
  return {
    game: detailData.data,
    screen: screenshotData.data,
  };
});

const initialState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: [],
    game: {},
    screen: {},
    status: 'idle',
    error: null,
  };

  const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(loadGames.fulfilled, (state, action) => {
        state.popular = action.payload.popular;
        state.upcoming = action.payload.upcoming;
        state.newGames = action.payload.newGames;
      });
      builder.addCase(loadDetail.pending, (state) => {
        state.status = "loading";
      });
      builder.addCase(loadDetail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.game = action.payload.game;
        state.screen = action.payload.screen;
      });
      builder.addCase(loadDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    },
  });
  
export default gamesSlice.reducer;
