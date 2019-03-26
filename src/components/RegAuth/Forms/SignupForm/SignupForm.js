import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import ReactTooltip from "react-tooltip";
import validate from "../helpers/validate";
import "../../../style-helpers/tooltip.css";
import styles from "./SignupForm.module.css";
import ErrorIcon from "../../../shared/ErrorIcon";

const renderField = ({
  input,
  type,
  placeholder,
  id,
  tooltip,
  meta: { asyncValidating, touched, error }
}) => (
  <label className={styles.label}>
    <input
      className={styles.input}
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
          className="error-left"
          id={id}
          place="left"
          effect="solid"
          getContent={dataTip => <div>{dataTip}</div>}
        />
      ))}
    {touched && (error && <ErrorIcon className={styles.error} />)}
  </label>
);

const SignupForm = props => {
  const { handleSubmit /* , pristine, submitting */ } = props;
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.h1}>
        <strong>Signup</strong> to explore new experiences
      </h1>
      <Field
        name="fullname"
        tooltip="What's your full name?"
        id="fullname-signup"
        type="text"
        label="Full Name"
        placeholder="Full Name"
        component={renderField}
      />
      <Field
        name="username"
        tooltip="What's your username? You need it to login."
        id="username-signup"
        type="text"
        label="Username"
        placeholder="Username"
        component={renderField}
      />
      <Field
        name="password"
        tooltip="What's your password? You need it to login."
        id="password-signup"
        type="password"
        label="Password"
        placeholder="Password"
        component={renderField}
      />
      <button className={styles.button} type="submit">
        Signup
      </button>
    </form>
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
