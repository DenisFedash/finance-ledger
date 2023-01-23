import { ImgPicture } from "./Picture.styled";

export const Picture = ({ jpg1x, jpg2x, webp1x, webp2x, className }) => {
  return (
    <picture className={className}>
      <source srcSet={`${webp1x} 1x, ${webp2x} 2x`} type="image/webp" />
      <source srcSet={`${jpg1x} 1x, ${jpg2x} 2x`} />
      <ImgPicture src={jpg1x} alt="picture" />
    </picture>
  );
};
