import { Field, Form } from "formik";
import styled from "styled-components";

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const FormField = styled(Field)`
  width: 280px;
`;
