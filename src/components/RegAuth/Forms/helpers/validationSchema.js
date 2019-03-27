import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "One more character and you're good.")
    .required("What's your name?"),
  username: Yup.string()
    .min(6, "Username needs to be at least 6 characters")
    .required("You'll use this when you login."),
  password: Yup.string()
    .min(
      6,
      "For better account security, please provide a minimum of alphanumeric characters"
    )
    .required("Enter at least 6 characters")
});

export default validationSchema;
