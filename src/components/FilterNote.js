import React, { Component } from "react";
import { Input, Select } from "antd";

class FilterNote extends Component {
  render() {
    return (
      <section className="filterNoteSection">
        <Input.Search
          placeholder="Search"
          onSearch={this.props.onSearch}
          style={{ width: 200 }}
        />
        <Select
          defaultValue="date"
          style={{ width: 160 }}
          onChange={this.props.onChange}
        >
          <Select.Option value="date">Sort by date</Select.Option>
          <Select.Option value="title">Sort by title</Select.Option>
        </Select>
      </section>
    );
  }
}

export default FilterNote;
