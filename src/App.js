import React, { Component } from "react";
import logo from "./logo.svg";
import Button from "antd/lib/button";
import { Layout, Menu, Icon } from "antd";
import "./App.css";
const { Header, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Sider breakpoint="sm" collapsedWidth="0">
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span>nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span>nav 3</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header>
              <img src={logo} className="App-logo" alt="logo" />NOOTE
            </Header>
            <Content>
              Content
              
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
