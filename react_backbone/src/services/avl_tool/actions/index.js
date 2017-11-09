import * as type from '../../redux/actions';


 export const aUpdateToolFilter = (filter, viewId) => ({
  type: type.UPDATE_TOOL_FILTER,
  filter: filter,
  isChanged: true,
  viewId: viewId
});

 export const aSearchToolFilter = (filter, viewId) => ({
  type: type.SEARCH_TOOL_FILTER,
  filter: filter,
  viewId: viewId
});