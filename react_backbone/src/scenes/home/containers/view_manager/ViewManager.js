import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Collapse } from "antd";
import { Input } from 'antd';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import Avatar from 'material-ui/Avatar';
import { createEmptyView, faCreateEmptyViewManager} from "../../../../services/view_manager/actions";
const Search = Input.Search;
class ViewManager extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listData: [
                {
                    idView: 1,
                    name: 'Vechince',
                },
                {
                    idView: 2,
                    name: 'Vechince1',
                },
                {
                    idView: 3,
                    name: 'Vechince2',
                },
            ],
            valueSearch: ''
        };
    }

    _handleClickItem =id=> {
        const { dispatch } = this.props;
        dispatch(faCreateEmptyViewManager(1));
        console.log("Add  rCreateEmptyView = " + this.props.rCreateEmptyView.view + this.props.rCreateEmptyView.isCreate);
        
    }

    _handleClickAdd = id => {
        console.log("Add  id = " + id)
    //    dispatch(faSelectViewManager(id));
    }

    _handleClickSave = id => {
        console.log("Save  id = " + id)
    }
    _handleClickDelete = id => {
        console.log("Delete  id = " + id)
    }

    _handleSearch = value =>{
        this.setState({ valueSearch: value })
        console.log("Search  id = " + this.state.valueSearch)
     }
  
    
    render() {
        return (
            <div>
                <Search
                    placeholder="input search text"
                    style={{ width: 300 }}
                    onSearch={this._handleSearch}
                />
                <SimpleList data={this.state.listData} handleCLick={this._handleClickItem} 
                handleClickAdd={this._handleClickAdd}
                handleClickSave={this._handleClickSave}
                handleClickDelete={this._handleClickDelete}
                />
            
            </div>
        )
    };
}
class SimpleList extends Component {

 
    _itemClick = id => item => {
        this.props.handleCLick(id);
    }

    _itemClickAdd = id => item => {
        this.props.handleClickAdd(id);
    }

    _itemClickSave = id => item => {
        this.props.handleClickSave(id);
    }

    _itemClickDelete= id => item => {
        this.props.handleClickDelete(id);
    }

      render() { 
          return (
              <div>
                  <List>
                      {this.props.data.map((item) => (
                          <ListItem button>
                              <ListItemText primary={item.name} align="left" onClick={this._itemClick(item.idView)} />
                              <ListItemIcon>
                                  <DraftsIcon onClick={this._itemClickAdd(item.idView)} />
                              </ListItemIcon>
                              <ListItemIcon>
                                  <DraftsIcon onClick={this._itemClickSave(item.idView)} />
                              </ListItemIcon>
                              <ListItemIcon>
                                  <DraftsIcon onClick={this._itemClickDelete(item.idView)}  />
                              </ListItemIcon>
                          </ListItem>
                      ))};
                     </List>
              </div>
          );
      }
  
}


const mapStateToProps = state => {
    const { rCreateEmptyView } = state;
    return {
        rCreateEmptyView,
    };
};

export default connect(mapStateToProps)(ViewManager);
