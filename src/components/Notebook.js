import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class extends Component {
  render() {
    const { notebookData } = this.props;

    return (
      <Link to={`/notebook/${notebookData.id}/`}>
        <div className="notebook">
          <div className="cover" style={{ background: notebookData.color }}>
            <div className="num">{notebookData.noteIdList.length}</div>
          </div>
          <div className="contents">
            <div className="title">{notebookData.title}</div>
            <div className="desc">{notebookData.desc}</div>
          </div>
        </div>
      </Link>
    );
  }
}
