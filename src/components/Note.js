import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Icon } from 'antd';

export default class extends Component {
  renderDropdown() {
    
  }

  render() {
    const { noteData } = this.props;

    const menu = (
      <Menu>
        <Menu.Item key="0">Move to TODO</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">Delete Note</Menu.Item>
      </Menu>
    );

    return (
      <Link to={`/note/${noteData.id}/`}>
        <div className="note">
          <div className="inner">
            <div className="title">{noteData.title}</div>
            <div className="contents">{noteData.contents}</div>
            <div className="date">{noteData.date}</div>
            <Dropdown overlay={menu} trigger={['click', 'hover']}>
              <div className="ant-dropdown-link">
                <Icon type="down" />
              </div>
            </Dropdown>
          </div>
        </div>
      </Link>
    );
  }
}
