import React, { Component } from 'react';
import { fetchNoteList } from '../actions/index';
import { connect } from 'react-redux';

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
      <div>{
        this.props.noteList.map(d => {
          let foo = d.title;
          return <div key={foo}>{foo}</div>
      })}</div>
    )
  }
}

function mapStateToProps (state) {
  return {
    noteList: state.lists.noteList
  };
}

export default connect(mapStateToProps, { fetchNoteList })(Home);