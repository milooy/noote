import React, { Component } from 'react';
import { fetchNoteList } from '../actions/index';
import { connect } from 'react-redux';
import { NoteList } from "../components";

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      end: null
    };
  }

  componentDidMount () {
    this.props.fetchNoteList();
  }

  render () {
    return (
      <div>
        <h2>Recent Notes</h2>
        <NoteList noteList={this.props.noteList}/>
        <h2>Notebooks</h2>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    noteList: state.lists.noteList
  };
}

export default connect(mapStateToProps, { fetchNoteList })(Home);