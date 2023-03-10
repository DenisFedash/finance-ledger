import sprite from "../../images/sprite.svg";
import {
  SocialItem,
  SocialLink,
  SocialList,
  SocialSvg,
} from "./Socials.styled";

export const Socials = () => {
  return (
    <SocialList>
      <SocialItem>
        <SocialLink>
          <SocialSvg width="35" height="35">
            <use href={`${sprite}#facebook`}></use>
          </SocialSvg>
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink>
          <SocialSvg width="35" height="35">
            <use href={`${sprite}#twitter`}></use>
          </SocialSvg>
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink>
          <SocialSvg width="35" height="35">
            <use href={`${sprite}#youtube`}></use>
          </SocialSvg>
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink>
          <SocialSvg width="35" height="35">
            <use href={`${sprite}#linkedin`}></use>
          </SocialSvg>
        </SocialLink>
      </SocialItem>
    </SocialList>
  );
};
