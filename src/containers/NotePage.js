import React, { Component } from "react";
import {
  fetchNoteDetail,
  postNote,
  deleteNote,
  moveNote
} from "../actions/index";
import { message, Button, Popconfirm, Input } from "antd";
import { connect } from "react-redux";
import _ from "lodash";
import SimpleMDE from "react-simplemde-editor";
import "react-simplemde-editor/dist/simplemde.min.css";
import "../css/NotePage.css";

class NotePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteId: "",
      noteValue: "",
      noteTitle: ""
    };
    this.autosaveNote = _.debounce(this.autosaveNote, 700);
  }

  componentDidMount() {
    const noteId = this.props.match.params.noteId;
    this.setState({ noteId });
    this.props.fetchNoteDetail(noteId).then(() => {
      this.setState({
        noteValue: this.props.noteDetail.contents,
        noteTitle: this.props.noteDetail.title
      });
    });
  }

  /* Catch route change event */
  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.props.fetchNoteDetail(this.state.noteId);
    }
  }

  /* Save note once in 7 secs when handleChange occurs */
  autosaveNote = formData => {
    this.props.postNote(this.state.noteId, formData).then(() => {
      message.info("Note is autosaved", 1);
    });
  };

  handleChange = formData => {
    this.autosaveNote(formData);
  };

  handleDelete = () => {
    const { history, noteDetail, deleteNote } = this.props;
    deleteNote(this.state.noteId).then(res => {
      message.success(res.payload.data);
      history.push(`/notebook/${noteDetail.notebookId}`);
    });
  };

  handleMoving = () => {
    const { history, noteDetail, moveNote } = this.props;
    const otherNotebookId = noteDetail.notebookId === 1 ? 0 : 1;
    moveNote(this.state.noteId).then(res => {
      message.success(res.payload.data);
      history.push(`/notebook/${otherNotebookId}`);
    });
  };

  render() {
    const { noteDetail } = this.props;

    return (
      <div>
        {noteDetail && (
          <div>
            <section className="noteTitleSection">
              <h2 className="headTitle">
                <Input
                  size="large"
                  placeholder="Title"
                  value={this.state.noteTitle}
                  onChange={e => this.setState({ noteTitle: e.target.value })}
                />
              </h2>
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
            <section className="actionSection">
              <Popconfirm
                title="Are you sure delete this note?"
                onConfirm={this.handleDelete}
                okText="Yes"
                cancelText="No"
              >
                <Button type="danger" shape="circle" icon="delete" />
              </Popconfirm>
              <Button onClick={this.handleMoving}>
                Move to {noteDetail.notebookId === 1 ? "DONE" : "TODO"}
              </Button>
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

export default connect(mapStateToProps, {
  fetchNoteDetail,
  postNote,
  deleteNote,
  moveNote
})(NotePage);
