import { combineReducers } from "redux";
import * as type from '../../redux/actions';


export const rDeleteView =(state,action) =>{
  switch (action.type) {
      case type.DELETE_VIEW:
        return{
        ...state,
        items: state.items.filter(view => view.id !== view.id)
    };
       default:
          return state;
  }
};

export const rEditViewName = (state = {}, action) => {
    switch (action.type) {
        case type.EDIT_VIEW_NAME:
            return {
                ...state,
                view: action.view
            };
        default:
            return state;
    }
};


export const rSaveView = (state , action) => {
    switch (action.type) {
        case type.SAVE_VIEW:
            return {
                ...state,
                isSave: action.isSave,
            }
        default:
            return state;
    }
}

export const rSelectView= (state= {},action) => { 
    switch (action.type) {
        case type.SELECT_VIEW:
           return{
            ...state,
            isSave: action.isSave,
           }
        default:
            return state
    }
};

export const rCreateEmptyView = (state = {},action) => {
    switch (action.type) {
        case type.CREATE_EMPTY_VIEW:
            return {
                ...state,
                view: action.view,
                isCreate: action.isCreate,
            }
        default:
            return state
    }
};

export const rLoadViewList= (state={} ,action) =>{
    switch (action.type) {
        case type.LOAD_VIEW_LIST:
            return{
             ...state,
             items: action.items,
             isLoadList: action.viewId,
            }
        default:
            return state;
    }
};