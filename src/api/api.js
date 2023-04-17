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