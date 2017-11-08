import { combineReducers } from "redux";
import * as type from '../../redux/actions';

export const editViewName = (state ={
},action) =>{
  switch (action.type) {
    case type.UPDATE_TOOL_FILTER:
       return {
         ...state,
         viewName: action.viewName,
         isEdit: action.isEdit,
         viewId: action.viewId,
        } 
        default:
           return state;
    }
};

export const deleteView =(state ={},action) =>{
  switch (action.type) {
      case type.DELETE_VIEW:
        return{
        ...state,
        listViewManager: state.listViewManager.map(view =>
            view.viewId === action.viewId
                ? { ...view, isDelete: true,isResfresh :true }
                : view
        )
    }
       default:
          return state;
  }
}

export const saveView = (state = {}, action) => {
    switch (action.type) {
        case type.SAVE_VIEW:
            return {
                ...state,
                queryId: action.queryId,
                isSave: action.isSave,
                viewId: action.viewId
            }
        default:
            return state;
    }
}

export const selectView= (state= {},action) => { 
    switch (type) {
        case type.SELECT_VIEW:
           return{
            ...state,
            filterQuery: action.filterQuery,
            filterGrid: action.filterGrid,
            isSelect: action.isSelect,
            viewId: action.viewId
           }
        default:
            return state
    }
}

export const createEmptyView = (state = {},action) => {
    switch (type) {
        case type.CREATE_EMPTY_VIEW:
            return {
                ...state,
                filterQuery: action.filterQuery,
                filterGrid: action.filterGrid,
                isCreate: action.isCreate,
                viewId: action.viewId
            }
        default:
            return state
    }
}

export const loadViewList= (state = {},action) =>{
    switch (type) {
        case type.LOAD_VIEW_LIST:
            return{
             ...state,
             filter: action.filter,
             viewId: action.viewId,
            }
        default:
            return state;
    }
}