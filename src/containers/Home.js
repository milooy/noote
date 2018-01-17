import React, { Component } from 'react';
import { fetchNoteList, fetchNotebookList } from '../actions/index';
import { connect } from 'react-redux';
import { NoteList, NotebookList } from "../components";

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      end: null
    };
  }

  componentDidMount () {
    this.props.fetchNoteList();
    this.props.fetchNotebookList();
  }

  render () {
    return (
      <div>
        <h2 className="subtitle">Recent Notes</h2>
        <NoteList noteList={this.props.noteList}/>
        <h2 className="subtitle">Notebooks</h2>
        <NotebookList notebookList={this.props.notebookList}/>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    noteList: state.lists.noteList,
    notebookList: state.lists.notebookList
  };
}

export default connect(mapStateToProps, { fetchNoteList, fetchNotebookList })(Home);