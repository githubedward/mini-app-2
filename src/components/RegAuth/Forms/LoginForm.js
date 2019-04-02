import React from "react";
import PropTypes from "prop-types";
import { withFormik } from "formik";
import { PulseLoader } from "react-spinners";
// components/styles
import LoginInput from "./LoginInput";
import "./helpers/tooltip-error.css";
import styles from "./LoginForm.module.css";
// others
import { loginValidationSchema as validationSchema } from "./helpers/validationSchema";

const LoginForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = props;
  const { isSignupFocus, isLoginFocus, handleLoginFocus, asyncError } = values;
  const isError = Object.values(errors).length !== 0;
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleLoginFocus();
        handleSubmit();
      }}
      className={styles.form}
    >
      <LoginInput
        name="username"
        type="text"
        label="Username"
        error={
          (touched.username && errors.username) ||
          (asyncError.username && asyncError.message)
        }
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleLoginFocus}
        pressed={isLoginFocus}
      />
      <LoginInput
        name="password"
        type="password"
        label="Password"
        error={
          (touched.password && errors.password) ||
          (asyncError.password && asyncError.message)
        }
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleLoginFocus}
        pressed={isLoginFocus}
      />
      <button
        type="submit"
        className={styles.btn_login}
        disabled={isError || isSubmitting || isSignupFocus}
      >
        {(isSubmitting && (
          <PulseLoader
            sizeUnit={"px"}
            size={5}
            loading={true}
            color={`#ff4451`}
          />
        )) ||
          "Login"}
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  values: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    isSignupFocus: PropTypes.bool.isRequired,
    isLoginFocus: PropTypes.bool.isRequired,
    handleLoginFocus: PropTypes.func.isRequired,
    asyncError: PropTypes.object.isRequired
  }),
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired
};

const formikEnhancer = withFormik({
  validationSchema,
  enableReinitialize: true,
  mapPropsToValues: ({ user, handleLoginFocus, asyncError, isFocus }) => ({
    ...user,
    asyncError,
    ...isFocus,
    handleLoginFocus
  }),
  handleSubmit: (values, formikBag) => {
    formikBag.props.onSubmit(values);
  },
  displayName: "LoginForm"
});

export default formikEnhancer(LoginForm);
