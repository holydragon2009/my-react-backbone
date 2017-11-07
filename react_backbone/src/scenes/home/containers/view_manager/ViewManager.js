import React, { Component } from "react";
import { Collapse } from "antd";
import { Input } from 'antd';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';

const Search = Input.Search;

class ViewManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueSearch: ''
        };
    }
    render() {
        console.log("quanle" + this.state.valueSearch);
        return (
            <div>
                {/* <ListView></ListView> */}

                <Search
                    placeholder="input search text"
                    style={{ width: 200 }}
                    onSearch={value => this.setState({ valueSearch: value })}
                />
                <SimpleList />
            </div>
        )

    };
}

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      background: theme.palette.background.paper,
    },
  });
  
  function SimpleList(props) {
    const { classes } = props;
    return (
      <div>
        <List>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
          <ListItem button component="a" href="#simple-list">
            <ListItemText primary="Spam" />
          </ListItem>
        </List>
      </div>
    );
  }
  
  SimpleList.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default ViewManager;
