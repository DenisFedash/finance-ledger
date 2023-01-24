import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { FormContainer, FormField, Label } from "./FormSubmit.styled";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
});

const initialValues = {
  name: "",
  email: "",
};

export const FormSubmit = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormContainer>
        <div>
          <Label htmlFor="name">
            <FormField type="text" name="name" placeholder="Enter your name" />
            <ErrorMessage name="name" component="div" />
          </Label>
          <Label htmlFor="email">
            <FormField type="text" name="Email" placeholder="Enter email*" />
            <ErrorMessage name="email" component="div" />
          </Label>
        </div>
        <button type="submit">Submit</button>
      </FormContainer>
    </Formik>
  );
};
