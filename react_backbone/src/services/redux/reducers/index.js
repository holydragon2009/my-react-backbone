import { combineReducers } from "redux";

import { filters } from '../../avl_tool/reducers';
import { postsByReddit, selectedReddit } from '../../reddit_news/reducers';

const rootReducer = combineReducers({
  postsByReddit, selectedReddit, filters
});

export default rootReducer;