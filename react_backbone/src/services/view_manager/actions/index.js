import * as type from '../../redux/actions';
import { aUpdateToolFilter } from '../../avl_tool/actions';
import { axioDeleteViewManger, axioEditViewManger,axioSaveViewManger, axioLoadListViewManger } from '../../api/view_manager';

export const editViewName = view=>({
    type: type.EDIT_VIEW_NAME,
    isEdit: true,
    view: view
    });


export const faEditViewName = (viewName,viewId) => (dispatch) => {
    return axioEditViewManger(viewName,viewId).then(response => {
        dispatch(editViewName(response.view)) //View object contains view attributes
    }).catch(error => {
        console.log('error ' + JSON.stringify(error));
    });
};

export const deleteView = (viewId) => ({
    type: type.DELETE_VIEW,
    isDelete: true,
    viewId: viewId,
});

export const faDeleteView = (viewId) => (dispatch) =>{
    return axioDeleteViewManger(viewId).then(response => {
        dispatch(deleteView(viewId))
            (dispatch(aUpdateToolFilter(null)))
            // .then(dispatch(updateGridResult(null)))
           
    }).catch(error => {
        console.log('error ' + JSON.stringify(error));
    });
};

export const saveViewManager = (queryId) => ({
    type: type.SAVE_VIEW,
    queryId: queryId,
    isSave: true,
});

export const faSaveViewManager = (queryId) => (dispatch) => {
    return axioSaveViewManger(queryId).then(response => {
        dispatch(saveViewManager(queryId))
    }).catch(error => {
        console.log('error ' + JSON.stringify(error));
    });
};

export const selectView = (viewId) =>  ({
    type: type.SELECT_VIEW,
    filterQuery: {},
    filterGrid: {},
    isSelect :true,
    viewId: viewId
});

export const faSelectViewManager = (viewId) => (dispatch) => {
    dispatch(selectView(viewId))
    dispatch(aUpdateToolFilter(null))
    //dispatch(updateGridResult(null))
};

export const createEmptyView = (view) => ({
    type: type.CREATE_EMPTY_VIEW,
    isCreate: true,
    view: view
});

export const faCreateEmptyViewManager = view => (dispatch) => {
    dispatch(createEmptyView(view))
    dispatch(aUpdateToolFilter('changeData', 1));
    //dispatch(updateGridResult(null))
};




export const loadViewList = (items) => ({
    type: type.LOAD_VIEW_LIST,
    isLoadList: true,
    items :items
});

export const faLoadViewManager = (queryId) => (dispatch) => {
    return axioLoadListViewManger(queryId).then(items => {
        dispatch(loadViewList(items))
    }).catch(error => {
        console.log('error ' + JSON.stringify(error));
    });
};