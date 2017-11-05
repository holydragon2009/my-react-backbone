import React, { Component } from "react";
import { Table, Button } from 'antd';
import "./TableResult1.css";

const data2 = [
  {
    busId: "1",
    unitId: "1",
    eventName: "Normal GPS Event",
    lat: 33.882479,
    lng: 33.882450,
    speed: 10,
    heading: "SW",
    timestamp: "04/04/2017 10:10:00"
  },{
    busId: "2",
    unitId: "2",
    eventName: "Normal GPS Event",
    lat: 33.882479,
    lng: 33.882450,
    speed: 15,
    heading: "SW",
    timestamp: "04/05/2017 10:10:00"
  },{
    busId: "3",
    unitId: "3",
    eventName: "Normal GPS Event",
    lat: 33.882479,
    lng: 33.882450,
    speed: 20,
    heading: "SW",
    timestamp: "04/10/2017 10:10:00"
  }
]
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  name: 'Jim Red',
  age: 32,
  address: 'London No. 2 Lake Park',
}];

class TableResult1 extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null
  };
  handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter
    });
  };
  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };
  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null
    });
  };
  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: "descend",
        columnKey: "age"
      }
    });
  };
  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        filters: [{ text: "Joe", value: "Joe" }, { text: "Jim", value: "Jim" }],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
        sorter: (a, b) => a.age - b.age,
        sortOrder: sortedInfo.columnKey === "age" && sortedInfo.order
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address",
        filters: [
          { text: "London", value: "London" },
          { text: "New York", value: "New York" }
        ],
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === "address" && sortedInfo.order
      }
    ];
    return (
      <div>
        <div className="table-operations">
          <Button onClick={this.setAgeSort}>Sort age</Button>
          <Button onClick={this.clearFilters}>Clear filters</Button>
          <Button onClick={this.clearAll}>Clear filters and sorters</Button>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TableResult1;