import React, { Component } from "react";
import { fetchNoteList, fetchNotebookList, deleteNote, moveNote } from "../actions/index";
import { connect } from "react-redux";
import { NoteList, NotebookList } from "../components";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      end: null
    };
  }

  componentDidMount() {
    this.props.fetchNoteList();
    this.props.fetchNotebookList();
  }

  handleFetchNoteList = () => {
    this.props.fetchNoteList();
  }

  render() {
    const { noteList, deleteNote, moveNote, notebookList, fetchNoteList } = this.props;
    return (
      <div>
        <h2 className="subtitle">Recent Notes</h2>
        <NoteList
          noteList={noteList}
          noteAction={{deleteNote, moveNote, fetchNoteList}}
        />
        <h2 className="subtitle">Notebooks</h2>
        <NotebookList notebookList={notebookList} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    noteList: state.lists.noteList,
    notebookList: state.lists.notebookList
  };
}

export default connect(mapStateToProps, {
  fetchNoteList,
  fetchNotebookList,
  deleteNote,
  moveNote
})(Home);
