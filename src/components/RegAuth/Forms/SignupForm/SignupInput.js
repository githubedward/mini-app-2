import React from "react";
import ReactTooltip from "react-tooltip";
import ErrorIcon from "../../../shared/ErrorIcon";
import styles from "./SignupForm.module.css";

const SignupInput = ({
  type,
  name,
  placeholder,
  label,
  error,
  value,
  onChange,
  pressed,
  ...props
}) => {
  const classes = `${styles.input} ${error && styles.input_error} ${pressed &&
    styles.input_pressed}`;
  return (
    <label className={styles.label}>
      {label}
      <input
        className={classes}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
        data-tip={error}
        data-for={`${name}-signup`}
      />
      {error && (
        <ReactTooltip
          className={"error-left"}
          id={`${name}-signup`}
          place={"left"}
          effect="solid"
          getContent={dataTip => <div>{dataTip}</div>}
        />
      )}
      {error && <ErrorIcon className={styles.error} />}
    </label>
  );
};

export default SignupInput;
