import { combineReducers } from "redux";
import * as type from '../../redux/actions';

export const filters = (state = 'default', action) => {
  switch(action.type) {
    case type.UPDATE_TOOL_FILTER:
      return {
        ...state,
        isConverted: true
      }
    default:
      return state;
  }
}