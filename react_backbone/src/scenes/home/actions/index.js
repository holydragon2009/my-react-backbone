export const UPDATE_TOOL_FILTER = 'UPDATE_TOOL_FILTER';

export const updateToolFilter = (filter, viewId) => ({
  type: UPDATE_TOOL_FILTER,
  filter: filter,
  isChanged: true,
  viewId: viewId
});