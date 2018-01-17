import React, { Component } from "react";
import { Menu, Icon, Layout } from "antd";

class Sidebar extends Component {
  render() {
    return (
      <Layout.Sider breakpoint="sm" collapsedWidth="0">
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
      </Layout.Sider>
    );
  }
}

export default Sidebar;
