const validate = values => {
  const errors = {};
  if (!values.fullname) {
    errors.fullname = "Required";
  }
  if (!values.username) {
    errors.username = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

export default validate;
