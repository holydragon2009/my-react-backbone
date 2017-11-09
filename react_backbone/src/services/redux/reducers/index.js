import { combineReducers } from "redux";

import { rUpdateFilters} from '../../avl_tool/reducers';
import { postsByReddit, rSelectedReddit } from '../../reddit_news/reducers';
import { rCreateEmptyView } from '../../view_manager/reducers';


const rootReducer = combineReducers({
  postsByReddit, rSelectedReddit, rUpdateFilters, rCreateEmptyView
});

export default rootReducer;