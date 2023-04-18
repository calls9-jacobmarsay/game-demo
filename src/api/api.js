const base_url = "https://api.rawg.io/api/";

// get date an convert to string
const getDate = () => {
    return new Date().toISOString().slice(0, 10);
  };

// get last year
const lastYear = new Date().getFullYear() -1;

// get next year
const nextYear = new Date().getFullYear() +1;

// get current date
const currentDate = getDate();

// get popular games
const popular_games = `/games?key${process.env.API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
// get upcoming games
const upcoming_games = `/games?key=${process.env.API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
// get new games
const new_games = `/games?key${process.env.API_KEY}&dates=${currentDate},${lastYear}&ordering=-released&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newgamesUrl = () => `${base_url}${new_games}`;
// GAME DETAILS

export const gameDetailsUrl = (game_id) =>
  `${base_url}games/${game_id}?&key=${process.env.REACT_APP_KEY}`;

  // GAME DETAILS SCREENSHOTS
export const gameScreenshotUrl = (game_id) =>
  `${base_url}games/${game_id}/screenshots?&key=${process.env.REACT_APP_KEY}`;