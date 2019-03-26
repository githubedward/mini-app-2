import React from "react";
import ReactTooltip from "react-tooltip";
import ErrorIcon from "../../../shared/ErrorIcon";
import styles from "./LoginForm.module.css";

const LoginInput = ({
  type,
  name,
  placeholder,
  label,
  error,
  touched,
  value,
  onChange,
  ...props
}) => {
  return (
    <label className={styles.label}>
      {label}
      <input
        className={styles.input}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
        data-tip={error}
        data-for={`${name}-login`}
      />
      {touched &&
        (error && (
          <ReactTooltip
            className={type === "password" ? "error-top" : "error-left"}
            id={`${name}-login`}
            place={type === "password" ? "top" : "left"}
            effect="solid"
            getContent={dataTip => <div>{dataTip}</div>}
          />
        ))}
      {touched && (error && <ErrorIcon className={styles.error} />)}
    </label>
  );
};

export default LoginInput;
