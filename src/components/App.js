import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import { Sidebar } from ".";
import { Home, NotebookPage } from "../containers";
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
              <NavLink to="/" className="logo">
                <img src={logo} className="App-logo" alt="logo" />NOOTE
              </NavLink>
            </Header>
            <Content>
              <Switch>
                <Route exact path="/notebook/:notebookId" component={NotebookPage}/>
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
