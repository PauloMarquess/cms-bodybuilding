import Logo from "../../atoms/Logo";
import NavigationDesktop from "../../molecules/NavigationDesktop";
import { CardHeader, CardLogo } from "./style";

const Header = () => {
  return (
    <CardHeader>
      <CardLogo>
        <Logo />
        <h2>Bodybuilding</h2>
      </CardLogo>
      <NavigationDesktop />
    </CardHeader>
  );
};

export default Header;
