import styled from "styled-components";
import { Field, Form } from "formik";
import { ErrorMessage } from "formik";
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
  :last-child {
    margin-bottom: 24px;
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
`;

export const Error = styled(ErrorMessage)`
  background-image: url(${warning});
  background-repeat: no-repeat;
  background-position: 17%;

  text-align: center;
`;

export const ContactButton = styled.button`
  font-family: var(--main-font);
  color: var(--first-color);
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  text-align: center;

  display: flex;
  margin: 0 auto;
  padding: 16px 56px;
  border: transparent;
  border-radius: 5px;
  background-color: var(--accent-color);

  cursor: pointer;
  transition: opacity 250ms;

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;
