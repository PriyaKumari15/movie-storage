import * as React from "react";

import { connect } from "react-redux";
import "./topMovies.scss";
import { sortMovieList } from "../actions";
import MovieDetail from "./movieDetail";
import MovieList from "./movieList";

const TopMovie = (props) => {
  return (
    <div className="App-container">
      <div className="grid-container-header">
        <label className="grid-item-header">{"Top Movies"}</label>
        <select
          name="Sort By"
          id="order"
          className="select-container"
          vaule={props.sortBy}
          onChange={(e, extra) => props.sortMovieList(e.target.value)}
        >
          {props.sortList &&
            props.sortList.map((s) => {
              return (
                <option value={s.valueToOrderBy} key={s.valueToOrderBy}>
                  {s.label}
                </option>
              );
            })}
        </select>
      </div>
      <div className={props.isShow ? "App" : "App-alt"}>
        <MovieList />
        {props.isShow ? <MovieDetail /> : null}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  sortMovieList: (sortData) => dispatch(sortMovieList(sortData)),
});
const mapStateToProps = (state) => {
  return {
    sortList: state.data.sortList,
    isShow: state.data.isShowDetail,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TopMovie);
