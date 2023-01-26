import styled from "styled-components";
import { Field, Form } from "formik";
import { ErrorMessage } from "formik";
import warning from "../../images/worning.svg";

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    display: block;
    align-items: start;
  }
`;

export const Label = styled.div`
  :not(:last-child) {
    margin-bottom: 24px;
  }
  :last-child {
    margin-bottom: 36px;
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
  @media screen and (min-width: 768px) {
    width: 336px;
  }
`;

export const Error = styled(ErrorMessage)`
  background-image: url(${warning});
  background-repeat: no-repeat;
  background-position: 1%;
  background-position-x: left;

  text-align: center;
  color: tomato;
  position: absolute;
  top: 55%;
  right: 25%;
`;

export const ContactTitle = styled.h2`
  color: var(--second-color);
  font-family: var(--main-font);
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  text-align: center;
  margin-bottom: 69px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
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

  @media screen and (min-width: 768px) {
    display: block;
    align-items: start;
    margin: 0;
  }
`;
