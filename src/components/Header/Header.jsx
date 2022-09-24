import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { CustomLink } from "../../styles";
import { HeaderContainer, HeaderLogo } from "./styles";

const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <Link to="/">
          <HeaderLogo
            component="img"
            src="https://res.cloudinary.com/dhk15xaeq/image/upload/v1664027729/Postil/Blog-app/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_hckhav.png"
          />
        </Link>
        <CustomLink to="create-post">Create Post</CustomLink>
      </HeaderContainer>
      <Divider />
    </header>
  );
};

export default Header;
