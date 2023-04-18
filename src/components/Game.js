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
    <div layout layoutId={stringPathId} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={smallImage(image, 640)} alt={name} />
      </Link>
    </div>
  );
}
export default Game;
