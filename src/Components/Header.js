import { HeaderWrapper } from "./Styles/Header.style";
import { NavBar } from "./Styles/NavBar.style";
import { BiMenu } from "react-icons/bi";
const Header = () => {
  return (
    <HeaderWrapper>
      <div>
        <BiMenu></BiMenu>
        <p>Menu</p>
      </div>
      <NavBar>
        <p>+1 (737) 425-8899</p>
        <p>ZZZAccounting@gmail.com</p>
      </NavBar>
      <img
        src="https://mk0leanfrontierqpi7o.kinstacdn.com/wp-content/uploads/2018/12/logo-placeholder-png.png"
        alt="firm-logo"
        style={{ height: "2.5rem", width: "2.5rem" }}
      />
    </HeaderWrapper>
  );
};

export default Header;
