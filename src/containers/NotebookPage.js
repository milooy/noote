import React, { Component } from "react";
import {
  fetchNotebookDetail,
  deleteNote,
  moveNote
} from "../actions/index";
import { connect } from "react-redux";
import { NoteList, FilterNote } from "../components";
import "../css/NotebookPage.css";

class NotebookPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notebookId: "",
      sort: "",
      query: "",
    };
  }

  componentDidMount() {
    const notebookId = this.props.match.params.notebookId;
    this.setState({notebookId});
    this.props.fetchNotebookDetail(notebookId);
  }

  /* Catch route change event */
  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      const notebookId = nextProps.match.params.notebookId;
      this.setState({notebookId});
      this.props.fetchNotebookDetail(notebookId);
    }
  }

  /* Sort notes by title, date */
  handleSortingChange = sort => {
    const query = this.state.query;
    this.setState({sort});
    this.props.fetchNotebookDetail(this.state.notebookId, {
      params: { sort, query }
    });
  };

  /* Search notes by title, contents */
  handleSearch = query => {
    const sort = this.state.sort;
    this.setState({query});
    this.props.fetchNotebookDetail(this.state.notebookId, {
      params: { sort, query }
    });
  }

  /* Fetch note list */
  fetchNoteList = () => {
    this.props.fetchNotebookDetail(this.state.notebookId);
  }

  render() {
    const { notebookDetail, deleteNote, moveNote } = this.props;
    
    return (
      <div>
        {notebookDetail && (
          <div>
            <section className="titleSection"
              style={{ background: notebookDetail.color }} >
              <h2 className="headtitle">{notebookDetail.title}</h2>
              <div className="desc">{notebookDetail.desc}</div>
              <div className="num">{notebookDetail.noteList.length} Notes</div>
            </section>
            <FilterNote onSearch={this.handleSearch} onChange={this.handleSortingChange} />
            <NoteList
              noteList={notebookDetail.noteList}
              noteAction={{ deleteNote, moveNote, fetchNoteList: this.fetchNoteList }}
            />
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

export default connect(mapStateToProps, {
  fetchNotebookDetail,
  deleteNote,
  moveNote
})(NotebookPage);
