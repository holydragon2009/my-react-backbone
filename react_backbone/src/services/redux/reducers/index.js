import { combineReducers } from "redux";

import { updateFilters } from '../../avl_tool/reducers';
import { postsByReddit, selectedReddit } from '../../reddit_news/reducers';

const rootReducer = combineReducers({
  postsByReddit, selectedReddit, updateFilters
});

export default rootReducer;