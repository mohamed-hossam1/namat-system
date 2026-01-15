import * as Yup from "yup";

export default function validation() {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  });

  return validationSchema;
}
