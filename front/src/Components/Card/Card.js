import React from "react";
import { withRouter } from 'react-router-dom'


const Card = props => {
  return (
    <div onClick={()=>{props.history.push(`/${props.data.id}`)}}>
        <h4>{props.data.name}</h4>
        <div>
            <img src={require(`../../../images/${props.data.imageFileName}`)}alt=""/>
        </div>
        <h6>{props.data.price}</h6>
    </div>
  );
};



export default withRouter(Card);
