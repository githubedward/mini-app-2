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
  signupBtn
} from "./styles";
import ThemedButton from "../../shared/Button";

const renderField = ({
  input,
  type,
  placeholder,
  id,
  width,
  meta: { asyncValidating, touched, error }
}) => (
  <FormBlock column>
    <Input
      big
      id={id}
      width={width}
      {...input}
      placeholder={placeholder}
      type={type}
    />
    <ErrorBlock>
      {touched && (error && <Span color="red">{error}</Span>)}
    </ErrorBlock>
  </FormBlock>
);

const SignupForm = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <Form onSubmit={handleSubmit} direction="column">
      <FormBlock>
        <Field
          name="first name"
          id="first name"
          type="text"
          label="First Name"
          placeholder="First Name"
          width="100%"
          component={renderField}
        />
        <Field
          name="last name"
          id="last name"
          type="text"
          label="Last Name"
          placeholder="Last Name"
          width="100%"
          component={renderField}
        />
      </FormBlock>

      <Field
        name="username"
        id="username"
        type="text"
        label="Username"
        placeholder="Username"
        component={renderField}
      />
      <Field
        name="password"
        id="password"
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
  form: "signup form"
  // validate
})(SignupForm);
