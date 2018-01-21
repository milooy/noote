import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Note from "../components/Note";
import { Link } from "react-router-dom";
import { StaticRouter } from "react-router";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    noteData: {
      id: 1,
      title: "First note",
      date: "2018-01-16",
      notebookId: 1,
      notebookTitle: "TODO",
      contents: "abcd"
    },
    noteAction: jest.enableAutomock()
  };
  const component = (
    <StaticRouter location="someLocation" context={jest.enableAutomock()}>
      <Note {...props} />
    </StaticRouter>
  );
  const enzymeWrapper = mount(component);

  return {
    props,
    enzymeWrapper
  };
}

describe("components", () => {
  describe("Note", () => {
    it("should render self and right note data", () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find(".title").text()).toBe("First note");
      expect(enzymeWrapper.find(".date").text()).toBe("2018-01-16");
      expect(enzymeWrapper.find(".contents").text()).toBe("abcd");
    });

    it("should render right link", () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find("a").prop("href")).toBe("/note/1/");
    });
  });
});
