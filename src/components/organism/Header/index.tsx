import Logo from "../../atoms/Logo";
import NavigationDesktop from "../../molecules/NavigationDesktop";
import { CardHeader } from "./style";

const Header = () => {
  return (
    <CardHeader>
      <a href="#home">
        <Logo />
      </a>
      <NavigationDesktop />
    </CardHeader>
  );
};

export default Header;
