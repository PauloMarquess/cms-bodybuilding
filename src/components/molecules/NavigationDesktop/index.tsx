import { navigation } from "../../../locale/ptBr";
import { socialMedia } from "../../../__mocks__";
import { Media, Navigation } from "./style";

const NavigationDesktop = () => {
  return (
    <Navigation>
      {navigation.map((item) => (
        <li key={item.name}>
          <a>{item.name}</a>
        </li>
      ))}
      <p>|</p>
      {socialMedia.map((item) => (
        <a key={item.name}>
          <Media src={item.icons} alt={`icone ${item.name}`} />
        </a>
      ))}
    </Navigation>
  );
};

export default NavigationDesktop;
