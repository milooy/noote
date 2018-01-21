import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { Layout, Icon } from "antd";
import { Sidebar } from ".";
import { Home, NotebookPage, NotePage } from "../containers";
import logo from "../logo.svg";
import "../css/app.css";
const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Sidebar />
          <Layout>
            <Header>
              <NavLink to="/" className="logo">
                <img src={logo} className="App-logo" alt="logo" />
              </NavLink>
            </Header>
            <Content>
              <Switch>
                <Route exact path="/notebook/:notebookId" component={NotebookPage}/>
                <Route exact path="/note/:noteId" component={NotePage}/>
                <Route exact path="/" component={Home} />
              </Switch>
            </Content>
            <Footer>
              Noote ©2018 Created by Jay Jin
              <a href="https://github.com/milooy/noote/"><Icon type="github" /></a>
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
