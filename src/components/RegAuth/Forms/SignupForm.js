import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import {
  Form,
  FormBlock,
  // Label,
  Input,
  ErrorBlock,
  Span,
  signupBtn,
  H2
} from "./styles";
import ThemedButton from "../../shared/Button";
import validate from "./validate";
import ReactTooltip from "react-tooltip";
// import * as styleGuides from "../../shared/styleGuides";
import styles from "../../../themes/tooltip.css";

const renderField = ({
  input,
  type,
  placeholder,
  id,
  tooltip,
  meta: { asyncValidating, touched, error }
}) => (
  <FormBlock column big>
    <Input
      big
      id={id}
      {...input}
      placeholder={placeholder}
      type={type}
      data-tip={(touched && (error && tooltip)) || null}
      data-for={id}
      data-event={"blur"}
    />
    {touched &&
      (error && (
        <ReactTooltip
          className={"errorTheme"}
          id={id}
          place="left"
          // type="error"
          effect="solid"
          getContent={dataTip => (
            <ErrorBlock>{`What's your ${dataTip}?`}</ErrorBlock>
          )}
        />
      ))}
    {/* <ErrorBlock>
      {touched && (error && <Span color="red">{error}</Span>)}
    </ErrorBlock> */}
  </FormBlock>
);

const SignupForm = props => {
  const { handleSubmit /* , pristine, submitting */ } = props;
  return (
    <Form onSubmit={handleSubmit} direction="column" big>
      <H2>
        <strong>Signup</strong> to explore new experiences
      </H2>
      <Field
        name="fullname"
        tooltip="full name"
        id="fullname-signup"
        type="text"
        label="Full Name"
        placeholder="Full Name"
        component={renderField}
      />
      <Field
        name="username"
        tooltip="username"
        id="username-signup"
        type="text"
        label="Username"
        placeholder="Username"
        component={renderField}
      />
      <Field
        name="password"
        tooltip="password"
        id="password-signup"
        type="password"
        label="Password"
        placeholder="Password"
        component={renderField}
      />
      <ThemedButton theme={signupBtn} name="Signup" type="submit" />
    </Form>
  );
};

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
};

SignupForm.defaultProps = {
  handleSubmit: e => e.preventDefault(),
  pristine: false,
  submitting: false
};

export default reduxForm({
  form: "signup form",
  validate
})(SignupForm);