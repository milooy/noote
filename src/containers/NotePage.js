import React, { Component } from "react";
import { fetchNoteDetail, postNote } from "../actions/index";
import { message } from "antd";
import { connect } from "react-redux";
import _ from "lodash";
import SimpleMDE from "react-simplemde-editor";
import "react-simplemde-editor/dist/simplemde.min.css";

class NotePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteValue: ""
    };
    this.autosaveNote = _.debounce(this.autosaveNote, 700);
  }

  componentDidMount() {
    const noteId = this.props.match.params.noteId;
    this.props.fetchNoteDetail(noteId).then(() => {
      this.setState({ noteValue: this.props.noteDetail.contents });
    });
  }

  /* Catch route change event */
  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      const noteId = nextProps.match.params.noteId;
      this.props.fetchNoteDetail(noteId);
    }
  }

  /* Save note once in 7 secs when handleChange occurs */
  autosaveNote = formData => {
    const noteId = this.props.match.params.noteId;
    this.props.postNote(noteId, formData).then(() => {
      message.info("Note is autosaved", 1);
    });
  };

  handleChange = formData => {
    this.autosaveNote(formData);
  };

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
                onChange={this.handleChange}
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

export default connect(mapStateToProps, { fetchNoteDetail, postNote })(
  NotePage
);
