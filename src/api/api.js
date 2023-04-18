// BASE URL

const base_url = "https://api.rawg.io/api/";

const getDate = () => {
  return new Date().toISOString().slice(0, 10);
};

const lastYear = new Date().getFullYear() - 1;
// const currentYear = new Date().getFullYear();
const nextYear = new Date().getFullYear() + 1;
const currentDate = getDate();

const popular_games = `games?key=${process.env.REACT_APP_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${process.env.REACT_APP_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=${process.env.REACT_APP_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newgamesUrl = () => `${base_url}${new_games}`;
// GAME DETAILS

export const gameDetailsUrl = (game_id) =>
  `${base_url}games/${game_id}?&key=${process.env.REACT_APP_KEY}`;
// GAME DETAILS SCREENSHOTS
export const gameScreenshotUrl = (game_id) =>
  `${base_url}games/${game_id}/screenshots?&key=${process.env.REACT_APP_KEY}`;