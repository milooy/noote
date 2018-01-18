import React, { Component } from "react";
import { fetchNoteDetail } from "../actions/index";
import { connect } from "react-redux";
import SimpleMDE from "react-simplemde-editor";
import "react-simplemde-editor/dist/simplemde.min.css";

class NotePage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      noteValue: ''
    };
  }

  componentDidMount() {
    const noteId = this.props.match.params.noteId;
    this.props.fetchNoteDetail(noteId).then(() => {
      this.setState({noteValue: this.props.noteDetail.contents});
    });
  }

  /* Catch route change event */
  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
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
            <section className="noteTitleSection">
              <h2 className="headtitle">{noteDetail.title}</h2>
              <span>{noteDetail.date}</span>
              <span>{noteDetail.notebookTitle}</span>
            </section>
            <section className="contentsSection">
              <SimpleMDE
                value={this.state.noteValue}
                options={{ spellChecker: false }}
              />
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
