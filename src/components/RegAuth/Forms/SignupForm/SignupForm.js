import React from "react";
import PropTypes from "prop-types";
import { withFormik } from "formik";
import { signupValidationSchema as validationSchema } from "../helpers/validationSchema";
import "../../../style-helpers/tooltip.css";
import styles from "./SignupForm.module.css";
import SignupInput from "./SignupInput";
import { PulseLoader } from "react-spinners";

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
  const { handleSignupFocus, isSignupFocus, isLoginFocus, asyncError } = values;
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
      <h1 className={`${styles.h1} ${isSignupFocus && styles.h1_error}`}>
        <strong>Signup</strong> to explore new experiences
      </h1>
      <SignupInput
        name="fullname"
        type="text"
        placeholder="Full Name"
        error={
          (touched.fullname && errors.fullname) ||
          (asyncError.fullname && asyncError.message)
        }
        value={values.fullname}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleSignupFocus}
        pressed={isSignupFocus}
      />
      <SignupInput
        name="username"
        type="text"
        placeholder="Username"
        error={
          (touched.username && errors.username) ||
          (asyncError.username && asyncError.message)
        }
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleSignupFocus}
        pressed={isSignupFocus}
      />
      <SignupInput
        name="password"
        type="password"
        placeholder="Password"
        error={
          (touched.password && errors.password) ||
          (asyncError.password && asyncError.message)
        }
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleSignupFocus}
        pressed={isSignupFocus}
      />
      <button
        className={styles.button}
        type="submit"
        disabled={isError || asyncError || isSubmitting || isLoginFocus}
      >
        {(isSubmitting && (
          <PulseLoader
            sizeUnit={"px"}
            size={12}
            color={"white"}
            loading={true}
          />
        )) ||
          "Signup"}
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
  handleSignupFocus: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired
};

const formikEnhancer = withFormik({
  validationSchema,
  enableReinitialize: true,
  mapPropsToValues: ({ user, handleSignupFocus, asyncError, isFocus }) => ({
    ...user,
    asyncError,
    ...isFocus,
    handleSignupFocus
  }),
  handleSubmit: (values, formikBag) => {
    const { username, fullname, password } = values;
    const user = {
      username,
      fullname,
      password
    };
    formikBag.props.onSubmit(user);
  },
  displayName: "SignupForm"
});

export default formikEnhancer(SignupForm);
