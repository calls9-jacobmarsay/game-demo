import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../store/slice/gamesSlice";
import Game from "../components/Game";
import '../styles/app.scss'

const Home = () => {
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const upcoming = useSelector(state => state.games.upcoming);
  const popular = useSelector(state => state.games.popular);
  const newGames = useSelector(state => state.games.newGames);
  const searched = useSelector(state => state.games.searched);

  console.log(popular);
  console.log(searched);
  
  console.log(searched);
  if (!popular || !newGames || !upcoming || !popular.length || !newGames.length || !upcoming.length) {
    return <div>Loading...</div>;
}


  return (
    <div className="homepage__content">
      {searched.length > 0 && (
        <div className="category">
          <h2>Searched Games</h2>
          <div className="category__row">
            {searched.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
                key={game.id}
              />
            ))}
          </div>
        </div>
      )}
      <div className="category">
        <h2>Upcoming Games</h2>
        <div className="category__row">
          {upcoming.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </div>
      </div>
        <div className="category">
          <h2>Most Popular</h2>
          <div className="category__row">
            {popular.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
                key={game.id}
              />
            ))}
        </div>
      </div>
      <div className="category">
        <h2>New Games</h2>
        <div className="category__row">
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
