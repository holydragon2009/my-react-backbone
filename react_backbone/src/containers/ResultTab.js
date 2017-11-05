import React, { Component } from "react";
import { Tabs, Button, Popconfirm, Modal } from "antd";
import TableResult1 from "../components/ant/TableResult1";
import TableResult2 from "../components/ant/TableResult2";
import TableResult3 from "../components/ant/TableResult3";

const TabPane = Tabs.TabPane;

class ResultTab extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: "View 1", content: <TableResult1 />, key: "1" },
      { title: "View 2", content: <TableResult2 />, key: "2" },
      { title: "View 3", content: <TableResult3 />, key: "3" }
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
      modalVisible: false
    };
  }
  handleOk = e => {
    console.log(e);
    this.setState({
      modalVisible: false
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      modalVisible: false
    });
  };
  onChange = activeKey => {
    this.setState({ activeKey });
  };
  onEdit = (targetKey, action) => {
    this[action](targetKey);
    console.log("edit tab action = " + action);
    console.log("edit tab targetKey = " + targetKey);
    if (action == "remove") {
      this.setState({
        modalVisible: true
      });
    }
  };
  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    var content;
    switch (this.newTabIndex % 3) {
      case 1:
        content = <TableResult1 />;
        break;
      case 2:
        content = <TableResult2 />;
        break;
      case 3:
        content = <TableResult3 />;
        break;
      default:
        content = <TableResult1 />;
        break;
    }
    panes.push({
      title: "Untitled View",
      content: content,
      key: activeKey
    });
    this.setState({ panes, activeKey });
  };
  remove = targetKey => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  };
  render() {
    return (
      <div>
        <Modal
          title="Save View"
          visible={this.state.modalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Do you want to save this view?</p>
        </Modal>
        <div style={{ marginBottom: 16 }}>
          <Button onClick={this.add}>ADD</Button>
        </div>
        <Tabs
          hideAdd
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
        >
          {this.state.panes.map(pane => (
            <TabPane tab={pane.title} key={pane.key}>
              {pane.content}
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

export default ResultTab;
