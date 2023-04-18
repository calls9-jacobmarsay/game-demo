import React from "react";
import { useDispatch } from "react-redux";
import { loadDetail } from "../store/slice/gamesSlice";
import { Link } from "react-router-dom";
import { smallImage } from "../util";

const Game = ({ name, released, image, id }) => {
  // CONVERT DATATYPE INT TO STRING
  const stringPathId = id.toString();
  const dispatch = useDispatch();
  //HANDLERS
  const loadDetailHandler = () => {
    const stringPathId = id.toString();
    dispatch(loadDetail(id));
    console.log(stringPathId);
  };
  return (
    <div className="game__card" layout layoutId={stringPathId} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <div className="card__image">
          <img src={smallImage(image, 640)} alt={name} />
        </div>
        <div className="card__content">
          <h3>{name}</h3>
          <p>{released}</p>
        </div>
      </Link>
    </div>
  );
}
export default Game;
