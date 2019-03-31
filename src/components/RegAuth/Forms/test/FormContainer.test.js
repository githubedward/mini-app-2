import React from "react";
import FormContainer from "../FormContainer";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import Enzyme, { mount, unmount } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe("<FormContainer />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<FormContainer />);
  });

  it("should render correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
});
