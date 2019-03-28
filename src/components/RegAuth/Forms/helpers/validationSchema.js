import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, "Username needs to be at least 6 characters")
    .required("What's your username?"),
  password: Yup.string()
    .min(6, "Enter at least 6 characters")
    .required("What's your password?")
});

export const signupValidationSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "One more character and you're good.")
    .required("What's your name?"),
  username: Yup.string()
    .min(6, "Username needs to be at least 6 characters")
    .required("You'll need this when you login."),
  password: Yup.string()
    .min(6, "Password needs to be at least 6 characters")
    .required("You'll need this when you login.")
});
