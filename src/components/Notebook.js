import React, { Component } from "react";

export default class extends Component {
  render() {
    const { notebookData } = this.props;
    
    return (
      <div className="notebook">
        <div className="title">{notebookData.title}</div>
        <div className="desc">{notebookData.desc}</div>
        <div className="num">{notebookData.noteIdList.length}</div>
      </div>
    );
  }
}
