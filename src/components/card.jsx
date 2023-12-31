import React from "react";
import Avatar from "./avatar";
import Detail from "./details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Detail detailInfo={props.details} />
      </div>
    </div>
  );
}

export default Card;
