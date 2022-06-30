import { images } from "../../../assets";
import { ImageLogo } from "./style";

const Logo = () => {
  return (
    <ImageLogo src={images.logo} width="90px" alt="Imagem cms bodybuilding" />
  );
};

export default Logo;
