import React, { Component } from "react";
import { fetchNotebookDetail } from "../actions/index";
import { connect } from "react-redux";
import { NoteList } from "../components";
import "../css/NotebookPage.css";

class NotebookPage extends Component {
  componentDidMount() {
    const notebookId = this.props.match.params.notebookId;
    this.props.fetchNotebookDetail(notebookId);
  }

  /* Catch route change event */
  componentWillReceiveProps (nextProps) {
    if ( this.props.location.pathname !== nextProps.location.pathname ) {
      const notebookId = nextProps.match.params.notebookId;
      this.props.fetchNotebookDetail(notebookId);
    }
  }

  render() {
    const { notebookDetail } = this.props;
    return (
      <div>
        {notebookDetail && (
          <div>
            <section className="titleSection" style={{background: notebookDetail.color}}>
              <h2 className="headtitle">{notebookDetail.title}</h2>
              <span>{notebookDetail.desc}</span>
            </section>
            <NoteList noteList={notebookDetail.noteList} />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notebookDetail: state.lists.notebookDetail
  };
}

export default connect(mapStateToProps, { fetchNotebookDetail })(NotebookPage);
