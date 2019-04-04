import React from "react";
import ReactTooltip from "react-tooltip";
import ErrorIcon from "../../shared/IconError";
import styles from "./LoginForm.module.css";

const LoginInput = ({
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
  return (
    <label
      className={`${styles.label} ${error && styles.label_error} ${pressed &&
        styles.label_pressed}`}
    >
      {label}
      <input
        className={`${styles.input} ${error && styles.input_error} ${pressed &&
          styles.input_pressed}`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
        data-tip={error}
        data-for={`${name}-login`}
      />
      {error && (
        <ReactTooltip
          className={type === "password" ? "error-top" : "error-left"}
          id={`${name}-login`}
          place={type === "password" ? "top" : "left"}
          effect="solid"
          getContent={dataTip => <div>{dataTip}</div>}
        />
      )}
      {error && <ErrorIcon className={styles.error} />}
    </label>
  );
};

export default LoginInput;
