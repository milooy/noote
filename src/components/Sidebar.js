import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import { Menu, Icon, Layout } from "antd";

class Sidebar extends Component {
  render() {
    return (
      <Layout.Sider breakpoint="sm" collapsedWidth="0">
        <Menu
          mode="inline"
          defaultOpenKeys={["notebooks"]}
        >
          <Menu.SubMenu
            key="notebooks"
            title={
              <span>
                <Icon type="folder-open" />
                <span>Notebooks</span>
              </span>
            }
          >
            <Menu.Item key="1"><NavLink to="/notebook/1/" activeClassName="ant-menu-item-selected">TODO</NavLink></Menu.Item>
            <Menu.Item key="2"><NavLink to="/notebook/2/" activeClassName="ant-menu-item-selected">DONE</NavLink></Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Layout.Sider>
    );
  }
}

export default Sidebar;
