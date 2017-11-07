/**
 * Query Tool 
 */
export const UPDATE_TOOL_FILTER = 'UPDATE_TOOL_FILTER'; //Update avl query's criterias
export const SEARCH_TOOL_FILTER = 'SEARCH_TOOL_FILTER'; //Search with avl query's criterias

/**
 * View Manager
 */
export const EDIT_VIEW_NAME = 'EDIT_VIEW_NAME'; //Edit view name => refresh view name on avl query tool AND grid result
export const DELETE_VIEW = 'DELETE_VIEW'; //Delete view => clear avl query's criterias AND clear grid result
export const SAVE_VIEW = 'SAVE_VIEW'; //Save avl query's criterias 
export const SELECT_VIEW = 'SELECT_VIEW'; //Select a specific view => load corresponding avl query's criterias AND load corresponding grid result
export const CREATE_EMPTY_VIEW = 'CREATE_EMPTY_VIEW'; //Create an empty view => clear avl query's criterias AND clear grid result

/**
 * Grid Result
 */
export const SELECT_GRID_RESULT = 'SELECT_GRID_RESULT'; //Like select a specific view => load corresponding avl query's criterias AND load corresponding grid result
export const CLOSE_GRID_RESULT = 'CLOSE_GRID_RESULT'; //Close a view => clear avl query's criterias AND clear grid result
export const SELECT_AND_DRAW_RESULT_ROW = 'SELECT_AND_DRAW_RESULT_ROW'; //Select a(many) row(s) and draw its result into map

/**
 * Map
 */
export const CLICK_TO_SHOW_EVENT_DETAILS = 'CLICK_TO_SHOW_EVENT_DETAILS'; //Click an event(marker) on map to show event details

/**
 * Switch Mode (Actual/Plan/Both)
 */
export const SWITCH_MODE = 'SWITCH_MODE'; //Switch to choose actual/plan/both routes on map

/**
 * APIs
 */
export const LOAD_VIEW_LIST = 'LOAD_VIEW_LIST'; //Load view list 

/**
 * Reddit News 
 */
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_REDDIT = 'SELECT_REDDIT';
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT';