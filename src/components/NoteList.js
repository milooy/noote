import React, { Component } from "react";
import { Row, Col } from "antd";
import { Note } from ".";

export default class extends Component {
  renderNoteList = data => {
    return data.map(noteData => {
      return (
        <Col span={4} key={noteData.id}>
          <Note noteData={noteData}/>
        </Col>
      );
    });
  };

  render() {
    const { noteList } = this.props;
    return <Row>{this.renderNoteList(noteList)}</Row>;
  }
}
