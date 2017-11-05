import React, { Component } from "react";
import { Select, InputNumber } from "antd";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";

const Option = Select.Option;
const units = ['m', 'km', 'mile', 'feet'];
                
class LocationFilter extends React.Component {
  state = {
    totalPoint: 0,
    radius: 0,
    unit: 'm'
  };
  constructor(props) {
    super(props);
  }
  _onRadiusChange(value){
    this.setState({
      radius: value
    })
  }
  _onUnitChange(value){
    this.setState({
      unit: value
    })
  }
  render() {
    return <div>
        {/* <PointSummaryPaper totalPoint={this.state.totalPoint} /> */}
        <InputNumber min={1} max={100000} defaultValue={0} onChange={value => this._onRadiusChange(value)} style={{ marginRight: 10 }} />
        <Select defaultValue="m" style={{ width: 120 }} onChange={value => this._onUnitChange(value)}>
          <Option value="m">Meter</Option>
          <Option value="km">Kilometer</Option>
          <Option value="mile">Mile</Option>
          <Option value="feet">Feet</Option>
        </Select>
      </div>;
  }
}

class PointSummaryPaper extends React.Component {
  render(){
    return <div>
        <Paper elevation={1} style={{ padding: 10, marginBottom: 10 }}>
          <Typography type="headline" component="h3">
            Total number of Point Set
          </Typography>
          <Typography type="body1" component="p">
            {this.props.totalPoint} Points
          </Typography>
        </Paper>
      </div>;
  }
}

export default LocationFilter;