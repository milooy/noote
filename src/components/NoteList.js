import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Icon } from "antd";
import { Note } from ".";

export default class extends Component {
  renderNoteList = data => {
    return data.map(noteData => {
      return (
        <Col xs={12} md={6} key={noteData.id}>
          <Note
            noteData={noteData}
            noteAction={this.props.noteAction}
          />
        </Col>
      );
    });
  };

  render() {
    const { noteList } = this.props;
    const newNoteId = 99;

    return (
      <Row gutter={8}>
        <Col xs={12} md={6}>
          <Link to={`/note/${newNoteId}/`}>
            <div className="note new-note">
              <div className="inner">
                <Icon type="plus" />
              </div>
            </div>
          </Link>
        </Col>
        {this.renderNoteList(noteList)}
      </Row>
    );
  }
}
