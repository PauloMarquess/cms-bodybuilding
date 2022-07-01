import { socialMedia } from "../../../__mocks__";
import { Navigation } from "./style";

const SocialMedia = () => {
  return (
    <Navigation>
      {socialMedia.map((item) => (
        <a href={item.link}>
          <img src={item.icons} alt={`icone ${item.name}`} />
        </a>
      ))}
    </Navigation>
  );
};

export default SocialMedia;
