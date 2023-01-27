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

export const InputContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  position: relative;
  transition: 1s;
  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }

  .filled {
    top: -20px;
    @media screen and (min-width: 768px) {
      top: -24px;
    }
  }
`;
export const LabelStyled = styled.label`
  position: absolute;
  left: 12px;
  top: 14px;
  color: var(----fourth-accent-color);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const Input = styled(Field)`
  width: 265px;
  height: 40px;
  padding: 8px;
  position: relative;
  border-radius: 5px;
  background: var(--primary-background-color);
  border: 1px solid var(--third-accnt-color);

  margin-bottom: 16px;

  &:hover,
  &:focus {
    background-color: rgb(137, 196, 244, 0.4);
    border: 1px solid #f5f5f5;
    + label {
      top: -20px;
      @media screen and (min-width: 768px) {
        top: -24px;
      }
    }
  }
  @media screen and (min-width: 768px) {
    width: 320px;
  }

  @media screen and (min-width: 1360px) {
    width: 608px;
  }
`;

export const Error = styled.p`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: -5px;
  left: 8px;
  font-size: 14px;
  line-height: 16px;
  color: #f0000f;
  /* background-image: url(${warning});
  background-repeat: no-repeat;
  background-position: 1%;
  background-position: left;
  text-indent: 10px;
  padding-left: 10px;

  text-align: center;
  color: tomato;
  position: absolute;

  top: 83%;
  right: 37%;

  @media screen and (min-width: 768px) {
    top: 60%;
    right: 24%;
  }

  @media screen and (min-width: 1360px) {
    top: 53%;
    right: 34%;
  } */
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
    margin-top: 12px;
  }
`;
