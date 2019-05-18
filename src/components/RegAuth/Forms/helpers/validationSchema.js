import * as Yup from "yup";

const errorMsg = {
  min: "Enter at least 6 characters"
};

const regex = /\s*[\w\d]\s*[\w\d]\s*/;

export const loginValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, errorMsg.min)
    .required("What's your username?"),
  password: Yup.string()
    .min(6, errorMsg.min)
    .required("What's your password?")
});

export const signupValidationSchema = Yup.object().shape({
  fullname: Yup.string()
    .test("doublespaces", "Too much blank space, baby", value =>
      regex.test(value)
    )
    .min(2, "One more character and you're good.")
    .required("What's your name?"),
  username: Yup.string()
    .test(
      "doublespaces",
      "Invalid blank space, baby",
      value => !/\s/g.test(value)
    )
    .min(6, errorMsg.min)
    .required("You'll need this when you login."),
  password: Yup.string()
    .test(
      "doublespaces",
      "Invalid blank space, baby",
      value => !/\s/g.test(value)
    )
    .min(6, errorMsg.min)
    .required("You'll need this when you login.")
});
