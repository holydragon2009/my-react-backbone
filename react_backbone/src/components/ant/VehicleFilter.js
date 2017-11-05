import React, { Component } from "react";
import { Select } from "antd";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";

const Option = Select.Option;
const vehicles = ['Vehicle Id 1', "Vehicle Id 2", "Vehicle Id 3", "Vehicle Id 4",
                "Vehicle Id 5", "Vehicle Id 6", "Vehicle Id 7", "Vehicle Id 8"];
const children = []
                
class VehicleFilter extends React.Component {
  state = {
    totalVehicle: 0
  };
  constructor(props) {
    super(props);
    for (var i = 0; i < vehicles.length; i++) {
      children.push(<Option key={i}>{vehicles[i]}</Option>);
    }
  }
  _onSelect(value) {
    console.log(`_onSelect ${value}`);
   const count = this.state.totalVehicle + 1;
   this.setState({ totalVehicle: count });
   this.props.updateVehicleCount(count);
  }
  _onDeselect(value) {
    console.log(`_onDeselect ${value}`);
    const count = this.state.totalVehicle - 1;
    this.setState({
      totalVehicle: count
    });
    this.props.updateVehicleCount(count);
  }
  render() {
    return <div>
        {/* <VehicleSummaryPaper totalVehicle={this.state.totalVehicle} /> */}
        <Select mode="multiple" style={{ width: "100%" }} placeholder="Please select" onSelect={(value, option) => this._onSelect(value)} onDeselect={value => this._onDeselect(value)}>
          {children}
        </Select>
      </div>;
  }
}

class VehicleSummaryPaper extends React.Component {
  render(){
    return <div>
        <Paper elevation={1} style={{ padding: 10, marginBottom: 10}}>
          <Typography type="headline" component="h3">
            Total number of vehicles
          </Typography>
          <Typography type="body1" component="p">
            {this.props.totalVehicle} Vehicles
          </Typography>
        </Paper>
      </div>;
  }
}

export default VehicleFilter;