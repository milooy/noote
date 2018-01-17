import React, { Component } from "react";
import { Row, Col } from "antd";
import { Notebook } from ".";

export default class extends Component {
  renderNotebookList = data => {
    return data.map(notebookData => {
      return (
        <Col span={4} key={notebookData.id}>
          <Notebook notebookData={notebookData}/>
        </Col>
      );
    });
  };

  render() {
    const { notebookList } = this.props;
    return <Row>{this.renderNotebookList(notebookList)}</Row>;
  }
}
