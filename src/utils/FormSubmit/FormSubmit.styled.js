import styled from "styled-components";
import { Field, Form } from "formik";
import warning from "../../images/worning.svg";

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.div`
  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const FormField = styled(Field)`
  min-width: 280px;
  height: 40px;
  padding: 8px;
  position: relative;
  border-radius: 5px;
  background: var(--primary-background-color);
  border: 1px solid var(--third-accnt-color);

  &::placeholder {
    font-size: 16px;
    line-height: 23px;
    color: var(--fourth-accent-color);
  }

  &:invalid {
    background-image: url(${warning});
    background-repeat: no-repeat;
    background-position: 98%;
  }
`;
