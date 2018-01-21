import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Icon, message } from "antd";

export default class extends Component {
  handleMenuClick = e => {
    const { noteData, noteAction } = this.props;
    const noteId = noteData.id;
    const MenuKey = {
      MOVE: "MOVE",
      DELETE: "DELETE"
    };
    e.domEvent.stopPropagation();

    switch (e.key) {
      case MenuKey.MOVE: /* Move note to other notebook */
        noteAction.moveNote(noteId).then(res => {
          message.success(res.payload.data);
          noteAction.fetchNoteList(); /* Refresh note list */
        });
        break;
      case MenuKey.DELETE: /* Delete note */
        noteAction.deleteNote(noteId).then(res => {
          message.success(res.payload.data);
          noteAction.fetchNoteList(); /* Refresh note list */
        });
        break;
      default:
        break;
    }
  };

  render() {
    const { noteData } = this.props;

    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="MOVE">
          Move to {noteData.notebookId === 1 ? "DONE" : "TODO"}
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="DELETE">Delete Note</Menu.Item>
      </Menu>
    );

    return (
      <Link to={`/note/${noteData.id}/`}>
        <div className="note">
          <div className="inner">
            <div className="title">{noteData.title}</div>
            <div className="contents">{noteData.contents}</div>
            <div className="note-footer">
              <Dropdown overlay={menu} trigger={["click", "hover"]}>
                <div className="ant-dropdown-link">
                  <Icon type="down" />
                </div>
              </Dropdown>
              <div className="date">{noteData.date}</div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
