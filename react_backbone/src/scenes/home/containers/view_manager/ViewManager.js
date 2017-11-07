import React, { Component } from "react";
import { Collapse } from "antd";
import { Input } from 'antd';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import Avatar from 'material-ui/Avatar';

const Search = Input.Search;
class ViewManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [
                {
                    id: 1,
                    name: 'Vechince',
                },
                {
                    id: 2,
                    name: 'Vechince1',
                },
                {
                    id: 3,
                    name: 'Vechince2',
                },
            ],
            valueSearch: ''
        };
    
    }
    render() {
        console.log("quanle" + this.state.valueSearch);
        return (
            <div>
                <Search
                    placeholder="input search text"
                    style={{ width: 300 }}
                    onSearch={value => this.setState({ valueSearch: value })}
                />
                <SimpleList data={this.state.listData}/>
            
            </div>
        )
    };
}
class SimpleList extends Component {
      render() { 
          return (
              <div>
                  <List>
                      {this.props.data.map((item) => (
                          <ListItem button>
                              <ListItemText primary={item.name} align="left" onClick={() => console.log("List" + item.id)}/>
                              <ListItemIcon>
                                  <DraftsIcon onClick={() => console.log("Edit" + item.id)} />
                              </ListItemIcon>
                              <ListItemIcon>
                                  <DraftsIcon onClick={() => console.log("Add" + item.id)} />
                              </ListItemIcon>
                              <ListItemIcon>
                                  <DraftsIcon onClick={() => console.log("Save" + item.id)} />
                              </ListItemIcon>
                          </ListItem>
                      ))};
                     </List>
              </div>
          );
      }
  
}
export default ViewManager;
