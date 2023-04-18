import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../store/slice/gamesSlice";
import { useLocation } from "react-router-dom";
import Game from "../components/Game";

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  
  const { popular, newGames, upcoming } = useSelector((state) => state.games);
  
  if (!popular || !newGames || !upcoming || !popular.length || !newGames.length || !upcoming.length) {
    return <div>Loading...</div>;
}


  return (
    <div>
      <div>
        <h2>Upcoming Games</h2>
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
      <div>
        <h2>Most Popular</h2>
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
      <div>
        <h2>New Games</h2>
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
  );
};

export default Home;
