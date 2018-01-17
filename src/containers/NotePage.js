import React, { Component } from "react";
import { fetchNoteDetail } from "../actions/index";
import { connect } from "react-redux";
import { NoteList } from "../components";

class NotePage extends Component {
  componentDidMount() {
    const noteId = this.props.match.params.noteId;
    this.props.fetchNoteDetail(noteId);
  }

  /* Catch route change event */
  componentWillReceiveProps (nextProps) {
    if ( this.props.location.pathname !== nextProps.location.pathname ) {
      const noteId = nextProps.match.params.noteId;
      this.props.fetchNoteDetail(noteId);
    }
  }

  render() {
    const { noteDetail } = this.props;
    
    return (
      <div>
        {noteDetail && (
          <div>
            <section className="titleSection">
              <h2 className="headtitle">{noteDetail.title}</h2>
              <span>{noteDetail.date}</span>
              <span>{noteDetail.notebookTitle}</span>
            </section>
            <section className="contentsSection">
              {noteDetail.contents}
            </section>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    noteDetail: state.lists.noteDetail
  };
}

export default connect(mapStateToProps, { fetchNoteDetail })(NotePage);
