import React from "react";
import { useSelector } from "react-redux";
import { smallImage } from "../util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import '../styles/app.scss'

const GameDetail = ({ pathId }) => {
  const { screen, game, isLoading } = useSelector((state) => state.games);

  if (isLoading || !game.name) {
    return <div>Loading...</div>;
  }

  return (
    	<div className="game__content">
      	<div className="content">
        		<div className="column">
				  	<Link to="/">
               	<FontAwesomeIcon icon={faCircleArrowLeft} size="2x"/>
            	</Link>
           		<div className="flex__row">
               	<h2>{game.name}</h2>
               	<p>Rating: {game.rating}</p>
            	</div>
            	<div className="game__description">
                	<p><b>Description:</b> {game.description_raw}</p>
            	</div>
        		</div>
        		<div className="column">
            	<div className="preview_image">
               	<img src={smallImage(game.background_image, 1280)} alt="Game Art" />
            	</div>
            	<div className="platforms">
               	<h3>Platforms</h3>
               	<div className="platform__content">
                  	{game.platforms?.map((data) => (
                  		<p key={data.platform.id}>{data.platform.name}</p>
                  	))}
               	</div>
            	</div>
        		</div>
      	</div>
      	<div className="gallery">
				<h3>Gallery</h3>
				<div className="gallery__image">
					{screen.results?.map((screen) => (
						<img
							src={smallImage(screen.image, 1280)}
							key={screen.id}
							alt="Game Gallery"
						/>
					))}
				</div>
      	</div>
		</div>
  );
};

export default GameDetail;
