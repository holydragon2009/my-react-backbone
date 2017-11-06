import { combineReducers } from "redux";
import {
  UPDATE_TOOL_FILTER
} from "../actions";

export const filters = (state = 'default', action) => {
  switch(action.type) {
    case UPDATE_TOOL_FILTER:
      return {
        ...state,
        isConverted: true
      }
    default:
      return state;
  }
}