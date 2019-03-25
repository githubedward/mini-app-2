import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import ReactTooltip from "react-tooltip";
import "../../../shared/styles/tooltip/tooltip.css";
import styles from "./LoginForm";

const renderField = ({
  input,
  label,
  type,
  placeholder,
  id,
  tooltip,
  meta: { asyncValidating, touched, error }
}) => (
  <label>
    {label}
    <input
      id={id}
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
          getContent={dataTip => <div>{`What's your ${dataTip}?`}</div>}
        />
      ))}
  </label>
);

const LoginForm = props => {
  const { handleSubmit /* , pristine, submitting */ } = props;
  return (
    <form onSubmit={handleSubmit}>
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
    </form>
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
