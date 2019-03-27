import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import validationSchema from "../helpers/validationSchema";
import "../../../style-helpers/tooltip.css";
import styles from "./SignupForm.module.css";
import SignupInput from "./SignupInput";

const SignupForm = props => {
  const { user, onSubmit: handleSubmit } = props;
  return (
    <Formik
      initialValues={user}
      onSubmit={handleSubmit}
      render={props => {
        const {
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          handleSignupFocus,
          isSubmitting
        } = props;
        if (touched && error) handleSignupFocus;
        return (
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSubmit();
            }}
            className={styles.form}
          >
            <h1 className={styles.h1}>
              <strong>Signup</strong> to explore new experiences
            </h1>
            <SignupInput
              name="fullname"
              type="text"
              placeholder="Full Name"
              error={touched.fullname && errors.fullname}
              value={values.fullname}
              onChange={handleChange}
              onBlur={handleBlur}
              // onFocus={handleSignupFocus}
              touched={touched.fullname}
            />
            <SignupInput
              name="username"
              type="text"
              placeholder="Username"
              error={touched.username && errors.username}
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              // onFocus={handleSignupFocus}
              touched={touched.username}
            />
            <SignupInput
              name="password"
              type="password"
              placeholder="Password"
              error={touched.password && errors.password}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              // onFocus={handleSignupFocus}
              touched={touched.password}
            />
            <button
              className={styles.button}
              type="submit"
              disabled={Object.values(errors).length !== 0 || isSubmitting}
            >
              Signup
            </button>
          </form>
        );
      }}
    />
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

export default SignupForm;
