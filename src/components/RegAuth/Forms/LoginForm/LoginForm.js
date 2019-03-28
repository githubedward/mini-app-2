import React from "react";
import PropTypes from "prop-types";
import { withFormik } from "formik";
import LoginInput from "./LoginInput";
import { PulseLoader } from "react-spinners";
import { loginValidationSchema as validationSchema } from "../helpers/validationSchema";
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
  const { isSignupFocus, isLoginFocus, handleLoginFocus } = values;
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
        error={touched.username && errors.username}
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
        error={touched.password && errors.password}
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleLoginFocus}
        pressed={isLoginFocus}
      />
      <button
        type="submit"
        className={styles.btn}
        disabled={isError || isSubmitting || isSignupFocus}
      >
        {/* (isSubmitting && */ (
          <PulseLoader
            sizeUnit={"px"}
            size={5}
            loading={true}
            color={`#ff4451`}
          />
        ) || "Login"}
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
  handleSubmit: (values, formikBag) => {
    formikBag.props.onSubmit(values);
  },
  displayName: "LoginForm"
});

export default formikEnhancer(LoginForm);
