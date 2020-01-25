import React from "react";
import { connect } from "react-redux";
import { getInfo } from "../../store/reducers";
import Loading from "../Loading/Loading";
import Card from "../Card/Card";

const List = ({ list }) => {
  console.log(list);

  if (list.length == 0) {
    return (
      <div>
        <h1>load</h1>
        <Loading />
      </div>
    );
  } else {
    return (
      <div>
        <h1>CON INFO</h1>
        <div>
        {list.map((elem, idx) => {
          return <Card key={idx} data={elem} />;
        })}
        </div>
      </div>
    );
  }
};
const mapStateToProps = state => {
  return { list: getInfo(state) };
};

export default connect(mapStateToProps)(List);
