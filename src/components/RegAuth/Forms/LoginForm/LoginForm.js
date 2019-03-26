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
    dirty,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = props;
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <LoginInput
        name="username"
        type="text"
        label="Username"
        error={touched.username && errors.username}
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        touched={touched.username}
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
      />
      <button type="submit" className={styles.btn}>
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
  mapPropsToValues: ({ user }) => ({ ...user }),
  handleSubmit: (values, { onSubmit }) => {
    onSubmit();
  },
  displayName: "SignupForm"
});

export default formikEnhancer(LoginForm);
