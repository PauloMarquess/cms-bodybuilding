import Logo from "../../atoms/Logo";
import NavigationDesktop from "../../molecules/NavigationDesktop";
import { CardHeader } from "./style";

const Header = () => {
  return (
    <CardHeader>
      <Logo />
      <NavigationDesktop />
    </CardHeader>
  );
};

export default Header;
