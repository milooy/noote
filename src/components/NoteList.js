import React, { Component } from "react";
import { Row, Col } from "antd";
import { Note } from ".";

export default class extends Component {
  renderNoteList = data => {
    return data.map(noteData => {
      return (
        <Col xs={12} md={6} key={noteData.id}>
          <Note noteData={noteData} noteAction={this.props.noteAction}/>
        </Col>
      );
    });
  };

  render() {
    const { noteList } = this.props;
    return <Row gutter={8}>{this.renderNoteList(noteList)}</Row>;
  }
}
