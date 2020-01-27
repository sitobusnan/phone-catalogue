import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { oneItem } from "../../store/reducers";

const Detail = (props, { item }) => {
  if (props.item === undefined) {
    props.history.push("/");
    return null;
  }
  return (
    <div>
      <h1>{props.item.name}</h1>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return { item: oneItem(state, props.match.params.id) };
};

export default withRouter(connect(mapStateToProps)(Detail));
