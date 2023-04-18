import React from "react";
import { useSelector } from "react-redux";
import { smallImage } from "../util";

const GameDetail = ({ pathId }) => {
  const { screen, game, isLoading } = useSelector((state) => state.games);

  if (isLoading || !game.name) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <div>
          <h3>{game.name}</h3>
          <p>Rating: {game.rating}</p>
        </div>
        <div>
          <h3>Platforms</h3>
          <div>
            {game.platforms?.map((data) => (
              <p key={data.platform.id}>{data.platform.name}</p>
            ))}
          </div>
        </div>
      </div>
      <div>
        <img src={smallImage(game.background_image, 1280)} alt="Game Art" />
      </div>
      <div>
        <p>{game.description_raw}</p>
      </div>
      <div>
        {screen.results?.map((screen) => (
          <img
            src={smallImage(screen.image, 1280)}
            key={screen.id}
            alt="Game Gallery"
          />
        ))}
      </div>
    </div>
  );
};

export default GameDetail;
