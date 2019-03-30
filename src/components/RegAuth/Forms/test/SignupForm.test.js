import React from "react";
import FormContainer from "../FormContainer";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow, mount } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe("<SignupForm />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<FormContainer />);
  });
});
