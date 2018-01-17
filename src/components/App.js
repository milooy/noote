import React, { Component } from "react";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import logo from "../logo.svg";
import { Layout, Menu, Icon } from "antd";
import "../css/App.css";
import { Foo } from ".";
import { Home } from "../containers";
const { Header, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Sider breakpoint="sm" collapsedWidth="0">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["notebooks"]}
            >
              <Menu.SubMenu
                key="notebooks"
                title={
                  <span>
                    <Icon type="mail" />
                    <span>Notebooks</span>
                  </span>
                }
              >
                <Menu.Item key="1">TODO</Menu.Item>
                <Menu.Item key="2">DONE</Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Header>
              <Link to="/" className="logo">
                <img src={logo} className="App-logo" alt="logo" />NOOTE
              </Link>
            </Header>
            <Content>
              <Switch>
                <Route exact path="/foo" component={Foo} />
                <Route exact path="/" component={Home} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
