import { combineReducers } from 'redux';

export default combineReducers({
  monsters: (state = {}) => {
    console.log('monsters');
    return { ...state };
  },
});
