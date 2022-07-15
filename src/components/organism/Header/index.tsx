import ChangeLanguage from "../../atoms/ChangeLanguage";
import Logo from "../../atoms/Logo";
import SocialMedia from "../../atoms/SocialMedia";
import NavigationDesktop from "../../molecules/NavigationDesktop";
import NavigationMobile from "../../molecules/NavigationMobile";
import { CardHeader, CardLogo, InvisibleMobile } from "./style";

const Header = () => {
  return (
    <CardHeader>
      <CardLogo href="#home">
        <Logo />
        <h1>BodyBuilding</h1>
      </CardLogo>
      <NavigationMobile />
      <NavigationDesktop />
      <SocialMedia />
      <InvisibleMobile>
        <ChangeLanguage />
      </InvisibleMobile>
    </CardHeader>
  );
};

export default Header;
