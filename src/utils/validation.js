import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid e-mail address")
    .required("E-mail cannot be left blank"),
});
