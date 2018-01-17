import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import { Foo, Sidebar } from ".";
import { Home } from "../containers";
import logo from "../logo.svg";
import "../css/App.css";
const { Header, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Sidebar />
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
