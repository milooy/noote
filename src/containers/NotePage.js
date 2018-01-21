import React, { Component } from "react";
import {
  fetchNoteDetail,
  postNote,
  deleteNote,
  moveNote
} from "../actions/index";
import { message, Button, Popconfirm, Input, Select } from "antd";
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
      noteTitle: "",
      notebookTitle: ""
    };
    this.autosaveNote = _.debounce(this.autosaveNote, 700);
  }

  componentDidMount() {
    const noteId = this.props.match.params.noteId;
    this.setState({ noteId });
    this.props.fetchNoteDetail(noteId).then(() => {
      this.setState({
        noteValue: this.props.noteDetail.contents,
        noteTitle: this.props.noteDetail.title,
        notebookTitle: this.props.noteDetail.notebookTitle
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

  /* Occurs when textarea changes */
  handleChange = formData => {
    this.autosaveNote(formData);
  };

  /* Delete note by id */
  handleDelete = () => {
    const { history, noteDetail, deleteNote } = this.props;
    deleteNote(this.state.noteId).then(res => {
      message.success(res.payload.data);
      history.push(`/notebook/${noteDetail.notebookId}`);
    });
  };

  /* Move note by id */
  handleMoving = value => {
    this.setState({notebookTitle: value });
    this.props.moveNote(this.state.noteId).then(res => {
      message.success(res.payload.data);
    });
  };

  render() {
    const { noteDetail } = this.props;
    const renderSelectNotebook = (
      <Select
        value={this.state.notebookTitle}
        onChange={this.handleMoving} >
        <Select.Option value="TODO">TODO</Select.Option>
        <Select.Option value="DONE">DONE</Select.Option>
      </Select>
    );

    return (
      <div>
        {noteDetail && (
          <div>
            <section className="noteTitleSection">
              <h2 className="headTitle">
                <Input size="large" placeholder="Title" value={this.state.noteTitle}
                  onChange={e => this.setState({ noteTitle: e.target.value })} />
              </h2>
              <span>{noteDetail.date}</span>
              {renderSelectNotebook}
            </section>
            <section className="contentsSection">
              <SimpleMDE
                value={this.state.noteValue}
                onChange={this.handleChange}
                options={{ spellChecker: false }} />
            </section>
            <section className="actionSection">
              <Popconfirm
                title="Are you sure delete this note?"
                onConfirm={this.handleDelete}
                okText="Yes" cancelText="No" >
                <Button type="danger" shape="circle" icon="delete" />
              </Popconfirm>
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
