import actionTypes from '../actionTypes';

const initialState = {
  fetching: false,
  error: '',
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MONSTERS_REQUESTED:
      return {
        ...state,
        fetching: true,
      };
    case actionTypes.FETCH_MONSTER_REQUESTED:
      return {
        ...state,
        fetching: true,
      };
    case actionTypes.FETCH_MONSTERS_FAILED:
      return {
        ...state,
        error: action.error,
        fetching: false,
      };
    case actionTypes.FETCH_MONSTER_SUCCEEDED:
      return {
        ...state,
        fetching: false,
        data: [...state.data, action.monster],
      };
    default:
      return state;
  }
};
