import React, { Component } from "react";

export default class extends Component {
  render() {
    const { noteData } = this.props;
    
    return (
      <div className="note">
        <div className="title">{noteData.title}</div>
        <div className="contents">{noteData.contents}</div>
        <div className="date">{noteData.date}</div>
      </div>
    );
  }
}
