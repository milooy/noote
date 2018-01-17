import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class extends Component {
  render() {
    const { noteData } = this.props;

    return (
      <Link to={`/note/${noteData.id}/`}>
        <div className="note">
          <div className="inner">
            <div className="title">{noteData.title}</div>
            <div className="contents">{noteData.contents}</div>
            <div className="date">{noteData.date}</div>
          </div>
        </div>
      </Link>
    );
  }
}
