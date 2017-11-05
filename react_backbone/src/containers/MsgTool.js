import React, { Component } from "react";
import { Tooltip } from "antd";
import {
  Menu,
  Dropdown,
  Icon,
  message,
  notification,
  Modal,
  Spin,
  Alert
} from "antd";

import Modal1 from "../components/ant/Modal";

class MsgTool extends React.Component {
  state = { visible: false, spinVisible: false };
  menu = (
    <Menu onClick={key => this.onClick(key)}>
      <Menu.Item key="1">Basic Dialog</Menu.Item>
      <Menu.Item key="2">Success Dialog</Menu.Item>
      <Menu.Item key="3">Error Dialog</Menu.Item>
      <Menu.Item key="4">Success Message</Menu.Item>
      <Menu.Item key="5">Error Message</Menu.Item>
      <Menu.Item key="6">Warning Message</Menu.Item>
      <Menu.Item key="7">Loading Message</Menu.Item>
      <Menu.Item key="8">Notification</Menu.Item>
      <Menu.Item key="9">Spin</Menu.Item>
    </Menu>
  );
  onClick = function({ key }) {
    console.log("MsgTool click = " + key);
    // message.info(`Click on item ${key}`);
    switch (key) {
      case "1":
        this.showModal();
        break;
      case "2":
        this.successModal();
        break;
      case "3":
        this.errorModal();
        break;
      case "4":
        this.successMsg();
        break;
      case "5":
        this.errorMsg();
        break;
      case "6":
        this.warningMsg();
        break;
      case "7":
        this.loadingMsg();
        break;
      case "8":
        this.openNotification();
        break;
      case "9":
        this.toggleSpin();
        break;
    }
  };
  toggleSpin = () => {
    console.log("showSpin");
    this.setState({
      spinVisible: !this.state.spinVisible
    });
  };
  openNotification = () => {
    notification.open({
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification."
    });
  };
  successMsg = () => {
    message.success("This is a message of success");
  };
  errorMsg = () => {
    message.error("This is a message of error");
  };
  warningMsg = () => {
    message.warning("This is message of warning");
  };
  loadingMsg = () => {
    const hide = message.loading("Action in progress..", 0);
    // Dismiss manually and asynchronously
    setTimeout(hide, 2500);
  };
  successModal() {
    Modal.success({
      title: "This is a success message",
      content: "some messages...some messages..."
    });
  }
  errorModal() {
    Modal.error({
      title: "This is an error message",
      content: "some messages...some messages..."
    });
  }
  showModal = () => {
    console.log("showModal");
    this.setState({
      visible: true
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  render() {
    return <div>
        <Dropdown overlay={this.menu}>
          <a className="ant-dropdown-link" href="#">
            Message Dialogs <Icon type="down" />
          </a>
        </Dropdown>
        <Modal title="Title" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        {this.state.spinVisible && <Spin tip="Loading..." >
            <Alert message="Alert message title" description="Further details about the context of this alert." type="info" />
          </Spin>}
      </div>;
  }
}

export default MsgTool;