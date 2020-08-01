import * as React from "react";
import { connect } from "react-redux";

import { removeMovieDetail } from "../actions/movieAction";

import "./movieDetail.scss";

const MovieDetail = (props) => {

  const detail = props.list;

  return (
    <div className="detail-container">
      {detail ? (
        <div className="detail-container-overflow">
          <div className="image-container">
            <img className="image-detail" src={detail.imageUrl} alt={""} />
            <div>
              <span
                className="close"
                onClick={() => props.removeMovieDetail()}
              />
            </div>
          </div>
          <label className="title">{detail.title}</label>
          <div className="sub-container">
            <label className="header-item">{"Release Date: "}</label>
            <label className="sub-item padding">{detail.releaseDate}</label>
          </div>
          <div className=" sub-container">
            <label className="header-item">{"Rank: "}</label>
            <label className="sub-item padding">{detail.rank}</label>
          </div>
          <div>
            <label className="header-item">{"Synopsis: "}</label>
            <p className="sub-item">{detail.synopsis}</p>
          </div>
        </div>
      ) : (
          <div className="grid-container-error">
            <div className="grid-item-error">{"No Detail Available"}</div>
          </div>
        )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeMovieDetail: () => dispatch(removeMovieDetail())
});

const mapStateToProps = (state) => {
  return {
    list: state.data.movieDetail
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
