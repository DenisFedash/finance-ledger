import { Formik } from "formik";
import * as yup from "yup";
import {
  ContactButton,
  Error,
  FormContainer,
  FormField,
  Label,
} from "./FormSubmit.styled";

const schema = yup.object().shape({
  name: yup.string().required("This is a required field"),
  email: yup.string().email().required("This is a required field"),
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
          <Label>
            <label htmlFor="name">
              <FormField
                type="text"
                name="name"
                placeholder="Enter your name"
              />
              <Error name="name" component="div" />
            </label>
          </Label>
          <Label>
            <label htmlFor="email">
              <FormField type="text" name="Email" placeholder="Enter email*" />
              <Error name="email" component="div" />
            </label>
          </Label>
        </div>
        <ContactButton type="submit">Submit</ContactButton>
      </FormContainer>
    </Formik>
  );
};
