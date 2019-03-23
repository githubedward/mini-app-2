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

const renderField = ({
  input,
  label,
  type,
  placeholder,
  id,
  meta: { asyncValidating, touched, error }
}) => (
  <FormBlock column>
    <Label htmlFor={id} color="white">
      {label}
    </Label>
    <Input
      id={id}
      width="100%"
      {...input}
      placeholder={placeholder}
      type={type}
    />
    <ErrorBlock>
      {touched && (error && <Span color="red">{error}</Span>)}
    </ErrorBlock>
  </FormBlock>
);

const LoginForm = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <Form onSubmit={handleSubmit} red>
      <Field
        name="username"
        id="username"
        type="text"
        label="Username"
        component={renderField}
      />
      <Field
        name="password"
        id="password"
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
  form: "login form"
  // validate
})(LoginForm);
