import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Notebook from "../components/Notebook";
import { Link } from "react-router-dom";
import { StaticRouter } from "react-router";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    notebookData: { id: 1, title: "TODO", desc: "Keep this notes", noteIdList: [1, 3], color: "#F8BA00" },
  };
  const component = (
    <StaticRouter location="someLocation" context={jest.enableAutomock()}>
      <Notebook {...props} />
    </StaticRouter>
  );
  const enzymeWrapper = mount(component);

  return {
    props,
    enzymeWrapper
  };
}

describe("components", () => {
  describe("Notebook", () => {
    it("should render self and right notebook data", () => {
      const { enzymeWrapper, props } = setup();
      expect(enzymeWrapper.find(".title").text()).toBe(props.notebookData.title);
      expect(enzymeWrapper.find(".desc").text()).toBe(props.notebookData.desc);
      expect(enzymeWrapper.find(".num").text()).toBe(props.notebookData.noteIdList.length.toString());
    });

    it("should render right link", () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find("a").prop("href")).toBe("/notebook/1/");
    });
  });
});
