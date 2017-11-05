import React, { Component } from "react";
import { Select } from "antd";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";

const Option = Select.Option;
const events = ['Normal GPS Event', 'Ignition On', 'Ignition Off', 'Moving',
                'Not Moving', 'Stop Arm Close', 'Stop Arm Open', 'Chair Lift Inactive'];
const children = []
                
class EventFilter extends React.Component {
  state = {
    totalEvent: 0
  };
  constructor(props) {
    super(props);
    for (var i = 0; i < events.length; i++) {
      children.push(<Option key={i}>{events[i]}</Option>);
    }
  }
  _onSelect(value) {
    console.log(`_onSelect ${value}`);
    const count = this.state.totalEvent + 1;
    this.setState({
        totalEvent: count
    });
    this.props.updateEventCount(count);
  }
  _onDeselect(value) {
    console.log(`_onDeselect ${value}`);
    const count = this.state.totalEvent - 1;
    this.setState({ totalEvent: count });
    this.props.updateEventCount(count);
  }
  render() {
    return <div>
        {/* <EventSummaryPaper totalEvent={this.state.totalEvent} /> */}
        <Select mode="multiple" style={{ width: "100%" }} placeholder="Please select" onSelect={(value, option) => this._onSelect(value)} onDeselect={value => this._onDeselect(value)}>
          {children}
        </Select>
      </div>;
  }
}

class EventSummaryPaper extends React.Component {
  render(){
    return <div>
        <Paper elevation={1} style={{ padding: 10, marginBottom: 10}}>
          <Typography type="headline" component="h3">
            Total number of events
          </Typography>
          <Typography type="body1" component="p">
            {this.props.totalEvent} Events
          </Typography>
        </Paper>
      </div>;
  }
}

export default EventFilter;