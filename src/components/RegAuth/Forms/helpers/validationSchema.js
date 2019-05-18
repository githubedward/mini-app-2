import * as Yup from "yup";

const errorMsg = {
  min: "Enter at least 6 characters",
  noSpaces: "No spaces please"
};

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
    .required("What's your name?")
    .min(3, "Enter at least 3 characters")
    .trim(),
  username: Yup.string()
    .required("You'll need this when you login.")
    .min(6, errorMsg.min)
    .matches(/^\S*$/, errorMsg.noSpaces),
  password: Yup.string()
    .required("You'll need this when you login.")
    .min(6, errorMsg.min)
    .matches(/^\S*$/, errorMsg.noSpaces)
});
