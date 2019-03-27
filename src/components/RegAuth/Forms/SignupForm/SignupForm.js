import React from "react";
import PropTypes from "prop-types";
import { withFormik } from "formik";
import validationSchema from "../helpers/validationSchema";
import "../../../style-helpers/tooltip.css";
import styles from "./SignupForm.module.css";
import SignupInput from "./SignupInput";

const SignupForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = props;
  const { handleSignupFocus } = values;
  const isError = Object.values(errors).length !== 0;
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSignupFocus();
        handleSubmit();
      }}
      className={styles.form}
    >
      <h1 className={`${styles.h1} ${isError && styles.h1_error}`}>
        <strong>Signup</strong> to explore new experiences
      </h1>
      <SignupInput
        name="fullname"
        type="text"
        placeholder="Full Name"
        error={touched.fullname && errors.fullname && errors.fullname}
        value={values.fullname}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleSignupFocus}
        touched={touched.fullname}
      />
      <SignupInput
        name="username"
        type="text"
        placeholder="Username"
        error={touched.username && errors.username && errors.username}
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleSignupFocus}
        touched={touched.username}
      />
      <SignupInput
        name="password"
        type="password"
        placeholder="Password"
        error={touched.password && errors.password && errors.password}
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleSignupFocus}
        touched={touched.password}
      />
      <button
        className={styles.button}
        type="submit"
        disabled={isError || isSubmitting}
      >
        Signup
      </button>
    </form>
  );
};

SignupForm.propTypes = {
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  dirty: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired
};

const formikEnhancer = withFormik({
  validationSchema,
  enableReinitialize: true,
  mapPropsToValues: ({ user, handleSignupFocus }) => ({
    ...user,
    handleSignupFocus
  }),
  handleSubmit: (values, formikBag) => {
    formikBag.props.onSubmit(values);
  },
  displayName: "SignupForm"
});

export default formikEnhancer(SignupForm);
