import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NoteList from "../components/NoteList";
import { Link } from "react-router-dom";
import { StaticRouter } from "react-router";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    noteList: [
      { id: 3, title: "NOOTE Specification", date: "2018-01-18", notebookId: 1, notebookTitle: 'TODO' , contents: 'acbc'},
      { id: 2, title: "Second note", date: "2018-01-17", notebookId: 2, notebookTitle: 'DONE', contents: "efgh"},
      { id: 1, title: "First note", date: "2018-01-16", notebookId: 1, notebookTitle: 'TODO', contents: "abcd"}
    ],
    noteAction: {
      deleteNote: jest.fn(),
      moveNote: jest.fn()
    }
  };
  const component = (
    <StaticRouter location="someLocation" context={jest.enableAutomock()}>
      <NoteList {...props} />
    </StaticRouter>
  );
  const enzymeWrapper = mount(component);

  return {
    props,
    enzymeWrapper
  };
}

describe("components", () => {
  describe("NoteList", () => {
    it('should render all the notes + new one', () => {
      const { enzymeWrapper, props } = setup();
      const NoteList = enzymeWrapper.find('.note');
      expect(NoteList.length).toEqual(props.noteList.length + 1);
    });
  });
});
