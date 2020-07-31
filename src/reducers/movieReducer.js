export const initialState = {
  movieList: [],
  sortList: [],
  sortBy: [],
  movieDetail: null,
  isListLoading: false,
  isDataLoading: false,
  isShowDetail: false,
};
const data = (state = initialState, action) => {
  switch (action.type) {
    case "INITIATE_FETCH":
      return { ...state, isListLoading: true };
    case "UPLOAD_DATA":
      const sortBy = action.sortPayload && action.sortPayload[0].valueToOrderBy;
      const List = action.moviePayload.sort((a, b) => {
        return a[sortBy] - b[sortBy];
      });
      return {
        ...state,
        isListLoading: false,
        movieList: List,
        sortList: action.sortPayload,
        sortBy,
      };
    case "SORT_MOVIE_LIST":
      const list = state.movieList.sort((a, b) => {
        return a[action.sortBy] - b[action.sortBy];
      });
      return { ...state, sortBy: action.sortBy, movieList: [...list] };

    case "SHOW_MOVIE_DETAIL":
      const detail = state.movieList.find((m) => m.title === action.movie);
      return {
        ...state,
        isShowDetail: true,
        movieDetail: detail,
      };

    case "REMOVE_MOVIE_DETAIL":
      return {
        ...state,
        isShowDetail: false,
        movieDetail: null,
      };

    default:
      return state;
  }
};
export default data;
