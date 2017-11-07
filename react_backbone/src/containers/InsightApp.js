import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./InsightApp.less";
import { 
  Layout,
  Icon, 
  Button,
  Affix
} from "antd";

import AutoCompleteBox from "../components/ant/AutoCompleteBox";
import AvlTool from "../scenes/home/containers/AvlTool";
import MsgTool from "./MsgTool";
import ResultTab from "./ResultTab";
import RedditNews from "./RedditNews";
import Divider from "material-ui/Divider";
import ViewManager from "./ViewManager";

const { Header, Footer, Sider, Content } = Layout;

class InsightApp extends Component {
  render() {
    return <div id="components-layout-demo-basic">
        <Layout>
          <Affix>
            <Header>
              <div className="nav__top nav__padding center">
                <Icon type="windows" style={{ fontSize: 16, color: "#08c" }} />
                <span style={{ fontSize: 16, color: "#08c" }}>
                  &nbsp;Insight
                </span>
                <div style={{ flex: 1 }} />
                <AutoCompleteBox />
              </div>
            </Header>
            <Divider />
          </Affix>
          <Content>
            <div style={styles.msgTool}>
              <MsgTool />
            </div>
            <Layout>
            <div>
              <div className="avlTool">
                <AvlTool />
              </div >
              <div className="manager">
                <fieldset className="fieldset">
                  <ViewManager ></ViewManager>
                </fieldset>


              </div>
            </div>
              <div style={styles.redditNews}>
                <RedditNews />
              </div>
            </Layout>
            <div style={styles.tableResult}>
              <ResultTab />
            </div>
          </Content>
          <Divider />
          <Footer>
            <p className="nav__padding">
              <a href="#">Copyright</a> © 2017-2020 KarrosTech, All Rights Reserved.
            </p>
          </Footer>
        </Layout>
      </div>;
  }
}

const styles = {
  tableResult: {
    margin: 15,
    border: "1px solid #e9e9e9",
    padding: 10
  },
  avlTool: {
    padding: 15
  },
  msgTool: {
    margin: 15
  },
  redditNews: {
    margin: 15,
    border: "1px solid #e9e9e9",
    padding: 10,
    background: 'white',
    color: 'black'
  }
};

export default InsightApp;
