import * as type from '../../redux/actions';

import { updateToolFilter } from '../../avl_tool/actions';

export const editViewName = (viewName , viewId) =>({
    type: type.EDIT_VIEW_NAME,
    viewName: viewName,
    isEdit:true,
    viewId: viewId
    });

export const deleteView = (viewId) => ({
    type: type.DELETE_VIEW,
    isDelete: true,
    viewId: viewId,
    listViewManager:{},
});

export const faDeleteView = (viewId) => {
    if(true){
        dispath(updateToolFilter(null));
    }
    // return fetch('ENDPOINT')
    //     .then(response => response.json())
    // .then(json => dispath(updateFilter(null)))
    // .then(dispath(updateGridResult(null)))
};

export const saveView = (queryId, viewId) => ({
    type: type.SAVE_VIEW,
    queryId: queryId,
    isSave: true,
    viewId: viewId
});

export const selectView = (filterQuery,filterGrid, viewId) => ({
    type: type.SELECT_VIEW,
    filterQuery: filterQuery,
    filterGrid: filterGrid,
    isSelect :isSelect,
    viewId: viewId
});

export const createEmptyView = (filterQuery, filterGrid, viewId) => ({
    type: type.CREATE_EMPTY_VIEW,
    filterQuery: filterQuery,
    filterGrid: filterGrid,
    isCreate: true,
    viewId: viewId
});

export const loadViewList = (filter, viewId) => ({
    type: type.LOAD_VIEW_LIST,
    filter: filter,
    viewId: viewId
});