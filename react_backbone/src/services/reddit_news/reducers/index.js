import { combineReducers } from "redux";
import * as type from '../../redux/actions';

const rSelectedReddit = (state = "reactjs", action) => {
  // console.log("reducer selectedReddit state = " + JSON.stringify(state) + " - action = " + JSON.stringify(action));
  switch (action.type) {
    case type.SELECT_REDDIT:
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
    case type.INVALIDATE_REDDIT:
      return {
        ...state,
        didInvalidate: true
      };
    case type.REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case type.RECEIVE_POSTS:
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
    case type.INVALIDATE_REDDIT:
    case type.RECEIVE_POSTS:
    case type.REQUEST_POSTS:
    // console.log("reducer postsByReddit state = " + JSON.stringify(state[action.reddit]) + " - action = " + JSON.stringify(action));
      return {
        ...state,
        [action.reddit]: posts(state[action.reddit], action)
      };
    default:
      return state;
  }
};

export {
  postsByReddit,
  rSelectedReddit,
};
