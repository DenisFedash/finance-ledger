import { ErrorMessage, Formik } from "formik";
import * as yup from "yup";
import {
  ContactButton,
  ContactTitle,
  Error,
  FormContainer,
  Input,
  InputContainer,
  LabelStyled,
} from "./FormSubmit.styled";
import { BasicModal } from "../../utils/Modal/Modal";
import { useState } from "react";
import warning from "../../images/worning.svg";

const schema = yup.object().shape({
  name: yup.string(),
  email: yup
    .string()
    .email("Wrong email!")
    .required("This is a required field"),
});

const initialValues = {
  name: "",
  email: "",
};

export const FormSubmit = () => {
  const [nameValue, setNameValue] = useState("");
  const [mailValue, setMailValue] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
    handleOpen();
    setNameValue("");
    setMailValue("");
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
          handleOpen();
          setNameValue("");
          setMailValue("");
        }}
      >
        {({ setFieldValue }) => {
          return (
            <FormContainer name="contact" method="post">
              <ContactTitle>Request Callback</ContactTitle>
              <input type="hidden" name="form-name" value="contact" />
              <InputContainer>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={nameValue}
                  onChange={(e) => {
                    setFieldValue("name", e.target.value);
                    setNameValue(e.target.value);
                  }}
                />
                <LabelStyled htmlFor="name" className={nameValue && "filled"}>
                  Enter your name
                </LabelStyled>
              </InputContainer>
              <InputContainer>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={mailValue}
                  onChange={(e) => {
                    setFieldValue("email", e.target.value);
                    setMailValue(e.target.value);
                  }}
                />
                <LabelStyled htmlFor="email" className={mailValue && "filled"}>
                  Enter email*
                </LabelStyled>
                <ErrorMessage
                  name="email"
                  render={(msg) => (
                    <Error>
                      <svg width="14" height="14" fill="#f0000f">
                        <use href=""></use>
                      </svg>
                      {msg}
                    </Error>
                  )}
                />
              </InputContainer>

              <ContactButton type="submit">Send</ContactButton>
            </FormContainer>
          );
        }}
      </Formik>
      <BasicModal open={open} handleClose={handleClose} />
    </>
  );
};
