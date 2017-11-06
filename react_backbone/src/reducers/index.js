import { combineReducers } from "redux";
import {
  SELECT_REDDIT,
  INVALIDATE_REDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS
} from "../actions";

import {filters} from '../scenes/home/reducers';

const selectedReddit = (state = "reactjs", action) => {
  // console.log("reducer selectedReddit state = " + JSON.stringify(state) + " - action = " + JSON.stringify(action));
  switch (action.type) {
    case SELECT_REDDIT:
      return action.reddit;
    default:
      return state;
  }
};

const posts = (
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) => {
  switch (action.type) {
    case INVALIDATE_REDDIT:
      return {
        ...state,
        didInvalidate: true
      };
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
};

const postsByReddit = (state = {}, action) => {
  
  switch (action.type) {
    case INVALIDATE_REDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
    // console.log("reducer postsByReddit state = " + JSON.stringify(state[action.reddit]) + " - action = " + JSON.stringify(action));
      return {
        ...state,
        [action.reddit]: posts(state[action.reddit], action)
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  postsByReddit, selectedReddit, filters
});

export default rootReducer;
