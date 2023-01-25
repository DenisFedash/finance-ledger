import { Container } from "../Container/Container.styled";
import blogJpg from "../../images/home/blog.jpg";
import blogWebp from "../../images/home/blog.webp";
import blog2xJpg from "../../images/home/blog@2x.jpg";
import blog2xWebp from "../../images/home/blog@2x.webp";

import { AboutText, AboutTitle } from "../About/About.styled";
import {
  BlogButton,
  BlogContainer,
  BlogImage,
  BlogTextContainer,
} from "./Blog.styled";
import { Picture } from "../../utils/Picture/Picture";

export const Blog = () => {
  return (
    <Container>
      <BlogContainer id="blog">
        <BlogImage>
          <Picture
            jpg1x={blogJpg}
            jpg2x={blog2xJpg}
            webp1x={blogWebp}
            webp2x={blog2xWebp}
          />
        </BlogImage>
        <BlogTextContainer>
          <AboutText>April 16 2020</AboutText>
          <AboutTitle>Blog Post One</AboutTitle>
          <AboutText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </AboutText>
          <BlogButton type="button">Read Our Blog</BlogButton>
        </BlogTextContainer>
      </BlogContainer>
    </Container>
  );
};
