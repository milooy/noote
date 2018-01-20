import React, { Component } from "react";
import {
  fetchNotebookDetail,
  fetchNoteList,
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
    console.log("검색", query);
    const sort = this.state.sort;
    this.setState({query});
    // TODO: search랑 sort동시에 하기 (state저장)
    this.props.fetchNotebookDetail(this.state.notebookId, {
      params: { sort, query }
    });
  }

  render() {
    const { notebookDetail, deleteNote, moveNote, fetchNoteList } = this.props;
    
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
                placeholder="input search text"
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
              noteAction={{ deleteNote, moveNote, fetchNoteList }}
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
  fetchNoteList,
  deleteNote,
  moveNote
})(NotebookPage);
