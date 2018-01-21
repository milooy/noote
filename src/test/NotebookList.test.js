import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NotebookList from "../components/NotebookList";
import { StaticRouter } from "react-router";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    notebookList: [
      { id: 1, title: "TODO", desc: "Keep this notes", noteIdList: [1, 3], color: "#F8BA00" },
      { id: 2, title: "DONE", desc: "I've done it", noteIdList: [2], color: "#F86422" }
    ]
  };
  const component = (
    <StaticRouter location="someLocation" context={jest.enableAutomock()}>
      <NotebookList {...props} />
    </StaticRouter>
  );
  const enzymeWrapper = mount(component);

  return {
    props,
    enzymeWrapper
  };
}

describe("components", () => {
  describe("NotebookList", () => {
    it('should render all the notebooks', () => {
      const { enzymeWrapper, props } = setup();
      const NotebookList = enzymeWrapper.find('.notebook');
      expect(NotebookList.length).toEqual(props.notebookList.length);
    });
  });
});
