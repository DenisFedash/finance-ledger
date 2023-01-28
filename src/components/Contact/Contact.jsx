import { Container } from "../Container/Container.styled";
import { Picture } from "../../utils/Picture/Picture";
import contactJpg from "../../images/home/contact.jpg";
import contactWebp from "../../images/home/contact.webp";
import contact2xJpg from "../../images/home/contact@2x.jpg";
import contact2xWebp from "../../images/home/contact@2x.webp";
import {
  ContactContainer,
  ContactImg,
  RequestContainer,
} from "./Contact.styled";
import { FormSubmit } from "../../utils/FormSubmit/FormSubmit";

export const Contact = () => {
  return (
    <Container>
      <ContactContainer id="contact">
        <ContactImg>
          <Picture
            jpg1x={contactJpg}
            jpg2x={contact2xJpg}
            webp1x={contactWebp}
            webp2x={contact2xWebp}
          />
        </ContactImg>

        <RequestContainer>
          <FormSubmit />
        </RequestContainer>
      </ContactContainer>
    </Container>
  );
};
