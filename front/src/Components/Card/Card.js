import React from "react";

const Card = props => {
  return (
    <div onClick={}>
        <h4>{props.data.name}</h4>
        <div>
            <img src={require(`../../../images/${props.data.imageFileName}`)}alt=""/>
        </div>
        <h6>{props.data.price}</h6>
    </div>
  );
};

export default Card;
