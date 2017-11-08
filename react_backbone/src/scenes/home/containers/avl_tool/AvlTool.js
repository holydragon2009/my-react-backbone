import React, { Component } from "react";
import { Collapse } from "antd";
import DateTimeFilter from "../../../../components/ant/DateTimeFilter";
import EventFilter from "../../../../components/ant/EventFilter";
import VehicleFilter from "../../../../components/ant/VehicleFilter";
import UnitFilter from "../../../../components/ant/UnitFilter";
import LocationFilter from "../../../../components/ant/LocationFilter";
import { connect } from "react-redux";
import { aUpdateToolFilter, aSearchToolFilter } from "../../../../services/avl_tool/actions";

const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

class AvlTool extends React.Component {
  state = {
    eventCount: 0,
    timeframe: "",
    vehicleCount: 0,
    unitCount: 0,
    locationCount: 0
  };
  updateEventCount = count => {
    const { dispatch, updateFilters } = this.props;
    dispatch(aUpdateToolFilter('eventCount = ' + count, 1));
    this.setState({
      eventCount: count
    });
  };
  updateTimeFrame = timeframe => {
    this.setState({
      timeframe: timeframe
    });
  };
  updateVehicleCount = count => {
    this.setState({
      vehicleCount: count
    });
  };
  updateUnitCount = count => {
    this.setState({
      unitCount: count
    });
  };
  render() {
    return <Collapse defaultActiveKey={["1"]} onChange={callback} style={{ width: 500 }}>
        <Panel header={this.state.eventCount + " " + (this.state.eventCount > 1 ? "Events" : "Event")} key="1">
          <p>
            <EventFilter updateEventCount={this.updateEventCount} />
          </p>
        </Panel>
        <Panel header={"TimeFrame" + (this.state.timeframe ? " : " + this.state.timeframe : this.state.timeframe)} key="2">
          <p>
            <DateTimeFilter updateTimeFrame={this.updateTimeFrame} />
          </p>
        </Panel>
        <Panel header={this.state.vehicleCount + " " + (this.state.vehicleCount > 1 ? "Vehicles" : "Vehicle")} key="3">
          <p>
            <VehicleFilter updateVehicleCount={this.updateVehicleCount} />
          </p>
        </Panel>
        <Panel header={this.state.unitCount + " " + (this.state.unitCount > 1 ? "Units" : "Unit")} key="4">
          <p>
            <UnitFilter updateUnitCount={this.updateUnitCount} />
          </p>
        </Panel>
        <Panel header="Location" key="5">
          <p>
            <LocationFilter />
          </p>
        </Panel>
      </Collapse>;
  }
}

const mapStateToProps = state => {
  const { rUpdateFilters } = state
  return {
    rUpdateFilters
  }
}

export default connect(mapStateToProps)(AvlTool);

