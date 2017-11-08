import { combineReducers } from "redux";

import { rUpdateFilters} from '../../avl_tool/reducers';
import { postsByReddit, rSelectedReddit } from '../../reddit_news/reducers';

const rootReducer = combineReducers({
  postsByReddit, rSelectedReddit, rUpdateFilters
});

export default rootReducer;