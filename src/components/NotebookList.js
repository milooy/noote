import React, { Component } from "react";
import { Row, Col } from "antd";
import { Notebook } from ".";

export default class extends Component {
  renderNotebookList = data => {
    return data.map(notebookData => {
      return (
        <Col xs={7} md={5} key={notebookData.id}>
          <Notebook notebookData={notebookData} />
        </Col>
      );
    });
  };

  render() {
    const { notebookList } = this.props;
    return <Row gutter={8}>{this.renderNotebookList(notebookList)}</Row>;
  }
}
