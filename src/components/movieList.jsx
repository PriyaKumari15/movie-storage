import React, { useState } from "react";
import { connect } from "react-redux";
import {
  fetchData,
  movieDetail,
  removeMovieDetail,
  sortMovieList,
} from "../actions";
import "./movieList.scss";

const MovieList = (props) => {
  useState(props.fetchData);
  return (
    <div className="container">
      <div className="container-overflow">
        {!props.isListLoading ? (
          props.list ? (
            props.list.map((movie) => {
              return (
                <div
                  id={movie.id}
                  className={"grid-container"}
                  key={`${movie.id}`}
                  onClick={() => props.movieDetail(movie.title)}
                >
                  <div className="grid-image">
                    <img className="image" src={movie.imageUrl} alt={""} />
                  </div>
                  <div className="grid-item">
                    <label className="grid-item-alt font-16">
                      {movie.title || " Not Available"}
                    </label>
                    <label className="grid-item-alt">{`Released in ${movie.releaseDate}`}</label>
                  </div>
                </div>
              );
            })
          ) : (
            <div className={"grid-container-error"}>
              <div className="grid-item">{"No Data Available"}</div>
            </div>
          )
        ) : (
          <div className="page-loader">{"Loading ..."} </div>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData()),
  sortMovieList: (sortData) => dispatch(sortMovieList(sortData)),
  movieDetail: (movie) => dispatch(movieDetail(movie)),
  removeMovieDetail: () => dispatch(removeMovieDetail()),
});
const mapStateToProps = (state) => {
  return {
    isLoading: state.data.isListLoading,
    sortList: state.data.sortList,
    list: state.data.movieList,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
