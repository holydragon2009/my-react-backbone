import React, { Component } from "react";

import { DatePicker } from "antd";
import moment from "moment";

import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";

const { RangePicker } = DatePicker;
// const RangePicker = DatePicker.RangePicker;

class DateTimeFilter extends React.Component {
  state = {
    from: null,
    to: null
  };
  _onChange(dates, dateStrings) {
    console.log("From: ", dates[0], ", to: ", dates[1]);
    console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
    this.setState({
      from: dates[0],
      to: dates[1],
    })
    this.props.updateTimeFrame("FROM " + dates[0].format("lll") + " TO " + dates[1].format("lll"));
  }
  render() {
    return (
      <div>
        {/* <TimeFrameSummaryPaper from={this.state.from} to={this.state.to}/> */}
        <RangePicker
          ranges={{
            Today: [moment(), moment()],
            Yesterday: [
              moment().subtract(1, "days"),
              moment().subtract(1, "days")
            ],
            "Last Week": [
              moment()
                .subtract(1, "weeks")
                .startOf("week"),
              moment()
                .subtract(1, "weeks")
                .endOf("week")
            ],
            "This Week": [moment().startOf("week"), moment()],
            "This Month": [moment().startOf("month"), moment()]
          }}
          showTime={{ format: "HH:mm" }}
          format="YYYY-MM-DD HH:mm"
          locale="en"
          onChange={(dates, dateStrings) => this._onChange(dates, dateStrings)}
        />
      </div>
    );
  }
}

class TimeFrameSummaryPaper extends React.Component {
  state = {
    from: null,
    to: null
  }
  render() {
    const {from, to} = this.props
    const timeFrame = from != null && to != null ? 
    "FROM " + from.format("lll") + " TO " + to.format("lll") : "None";
    return <div>
        <Paper elevation={1} style={{ padding: 10, marginBottom: 10 }}>
          <Typography type="headline" component="h3">
            Time Frame
          </Typography>
          <Typography type="body1" component="p">
            {timeFrame}
          </Typography>
        </Paper>
      </div>;
  }
}

export default DateTimeFilter