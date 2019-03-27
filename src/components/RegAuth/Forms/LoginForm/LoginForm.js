import React from "react";
import PropTypes from "prop-types";
import { withFormik } from "formik";
import LoginInput from "./LoginInput";
import validationSchema from "../helpers/validationSchema";
import "../../../style-helpers/tooltip.css";
import styles from "./LoginForm.module.css";

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
  const { isSignupFocus } = values;
  const classes = `${styles.form} ${isSignupFocus && styles.form_less}`;
  return (
    <form onSubmit={handleSubmit} className={classes}>
      <LoginInput
        name="username"
        type="text"
        label="Username"
        error={touched.username && errors.username}
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        touched={touched.username}
        disabled={isSignupFocus}
      />
      <LoginInput
        name="password"
        type="password"
        label="Password"
        error={touched.password && errors.password}
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        touched={touched.password}
        disabled={isSignupFocus}
      />
      <button
        type="submit"
        className={styles.btn}
        disabled={
          Object.values(errors).length !== 0 || isSubmitting || isSignupFocus
        }
      >
        Login
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  dirty: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired
};

// LoginForm.defaultProps = {
//   handleSubmit: e => e.preventDefault(),
//   pristine: false,
//   submitting: false
// };

const formikEnhancer = withFormik({
  validationSchema,
  enableReinitialize: true,
  mapPropsToValues: ({ user, handleLoginFocus }) => ({
    ...user,
    handleLoginFocus
  }),
  mapPropsToStaus: formikBag => formikBag.props,
  handleSubmit: (values, formikBag) => {
    formikBag.props.onSubmit(values);
  },
  handleLoginFocus: formikBag => formikBag.props.handleLoginFocus,
  displayName: "SignupForm"
});

export default formikEnhancer(LoginForm);
