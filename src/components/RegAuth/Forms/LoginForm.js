import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import {
  Form,
  FormBlock,
  Label,
  Input,
  ErrorBlock,
  Span,
  loginBtn
} from "./styles";
import ThemedButton from "../../shared/Button";
import validate from "./validate";
import ReactTooltip from "react-tooltip";
import * as styleGuides from "../../shared/styleGuides";
import "../../../themes/css/tooltip.css";

const renderField = ({
  input,
  label,
  type,
  placeholder,
  id,
  tooltip,
  meta: { asyncValidating, touched, error }
}) => (
  <FormBlock column>
    <Label htmlFor={id}>{label}</Label>
    <Input
      id={id}
      width="100%"
      {...input}
      placeholder={placeholder}
      type={type}
      data-tip={(error && tooltip) || null}
      data-for={id}
    />
    {touched &&
      (error && (
        <ReactTooltip
          className={type === "password" ? "error-top" : "error-left"}
          id={id}
          place={type === "password" ? "top" : "left"}
          effect="solid"
          getContent={dataTip => (
            <ErrorBlock>{`What's your ${dataTip}?`}</ErrorBlock>
          )}
        />
      ))}
  </FormBlock>
);

const LoginForm = props => {
  const { handleSubmit /* , pristine, submitting */ } = props;
  return (
    <Form onSubmit={handleSubmit} solid>
      <Field
        name="username"
        tooltip="username"
        id="username-login"
        type="text"
        label="Username"
        component={renderField}
      />
      <Field
        name="password"
        tooltip="password"
        id="password-login"
        type="password"
        label="Password"
        component={renderField}
      />
      <ThemedButton theme={loginBtn} name="Login" type="submit" />
    </Form>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
};

LoginForm.defaultProps = {
  handleSubmit: e => e.preventDefault(),
  pristine: false,
  submitting: false
};

export default reduxForm({
  form: "login form",
  validate
})(LoginForm);
