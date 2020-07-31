// import { result } from "../types/defaultData";
import { requestMovieData } from "../components/movieApi";
export const intiateDataFetch = () => {
  return {
    type: "INITIATE_FETCH",
  };
};
export const uploadData = (movieList, sortList) => {
  return {
    type: "UPLOAD_DATA",
    moviePayload: movieList,
    sortPayload: sortList,
  };
};
export const sortMovieList = (sortBy) => {
  return {
    type: "SORT_MOVIE_LIST",
    sortBy,
  };
};
export const movieDetail = (movie) => {
  return {
    type: "SHOW_MOVIE_DETAIL",
    movie,
  };
};
export const removeMovieDetail = () => {
  return {
    type: "REMOVE_MOVIE_DETAIL",
  };
};

export const fetchData = () => {
  return (dispatch) => {
    let movieList = [];
    let sortList = [];
    dispatch(intiateDataFetch());
    return requestMovieData()
      .then((response) =>
        response.components.forEach((data) => {
          if (data.type === "movie-list") {
            movieList.push(...data.items);
          } else if (data.type === "order-select") {
            sortList = [...data.items];
          }
        })
      )
      .then(() => dispatch(uploadData(movieList, sortList)));

    // return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    //   .then((response) => response.json())
    //   .then((json) => dispatch(receivePosts(subreddit, json)));
  };
};
