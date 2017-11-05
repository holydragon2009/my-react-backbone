import React, { Component } from "react";
import { Select } from "antd";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";

const Option = Select.Option;
const units = ['Unit Id 1', "Unit Id 2", "Unit Id 3", "Unit Id 4",
                "Unit Id 5", "Unit Id 6", "Unit Id 7", "Unit Id 8"];
const children = []
                
class UnitFilter extends React.Component {
  state = {
    totalUnit: 0
  };
  constructor(props) {
    super(props);
    for (var i = 0; i < units.length; i++) {
      children.push(<Option key={i}>{units[i]}</Option>);
    }
  }
  _onSelect(value) {
    console.log(`_onSelect ${value}`);
    const count = this.state.totalUnit + 1;
    this.setState({ totalUnit: count });
    this.props.updateUnitCount(count);
  }
  _onDeselect(value) {
    console.log(`_onDeselect ${value}`);
    const count = this.state.totalUnit - 1;
    this.setState({
      totalUnit: count
    });
    this.props.updateUnitCount(count);
  }
  render() {
    return <div>
        {/* <UnitSummaryPaper totalUnit={this.state.totalUnit} /> */}
        <Select mode="multiple" style={{ width: "100%" }} placeholder="Please select" onSelect={(value, option) => this._onSelect(value)} onDeselect={value => this._onDeselect(value)}>
          {children}
        </Select>
      </div>;
  }
}

class UnitSummaryPaper extends React.Component {
  render(){
    return <div>
        <Paper elevation={1} style={{ padding: 10, marginBottom: 10 }}>
          <Typography type="headline" component="h3">
            Total number of units
          </Typography>
          <Typography type="body1" component="p">
            {this.props.totalUnit} Units
          </Typography>
        </Paper>
      </div>;
  }
}

export default UnitFilter;