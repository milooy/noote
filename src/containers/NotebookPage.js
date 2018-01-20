import React, { Component } from "react";
import {
  fetchNotebookDetail,
  deleteNote,
  moveNote
} from "../actions/index";
import { connect } from "react-redux";
import { NoteList } from "../components";
import { Input, Select } from "antd";
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

  handleSortingChange = sort => {
    const query = this.state.query;
    this.setState({sort});
    this.props.fetchNotebookDetail(this.state.notebookId, {
      params: { sort, query }
    });
  };

  handleSearch = query => {
    const sort = this.state.sort;
    this.setState({query});
    this.props.fetchNotebookDetail(this.state.notebookId, {
      params: { sort, query }
    });
  }

  fetchNoteList = () => {
    this.props.fetchNotebookDetail(this.state.notebookId);
  }

  render() {
    const { notebookDetail, deleteNote, moveNote } = this.props;
    
    return (
      <div>
        {notebookDetail && (
          <div>
            <section
              className="titleSection"
              style={{ background: notebookDetail.color }}
            >
              <h2 className="headtitle">{notebookDetail.title}</h2>
              <span>{notebookDetail.desc}</span>
            </section>
            <section className="filterSection">
              <Input.Search
                placeholder="Search"
                onSearch={this.handleSearch}
                style={{ width: 200 }}
              />
              <Select
                defaultValue="date"
                style={{ width: 160 }}
                onChange={this.handleSortingChange}
              >
                <Select.Option value="date">Sort by date</Select.Option>
                <Select.Option value="title">Sort by title</Select.Option>
              </Select>
            </section>
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
