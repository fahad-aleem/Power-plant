import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Nav = styled.nav`
  padding: 1rem 3rem;

  display: flex;
  justify-content: space-between;
  background-color: #252422;
  color: #fff;
  align-items: center;
`;

const NavBrand = styled.a`
  display: block;
  font-size: 1.5rem;
`;

const LinkTo = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 2rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavBrand>Power Generation</NavBrand>
      <div>
        <LinkTo to="/">Home</LinkTo>
        <LinkTo to="/user">User</LinkTo>
      </div>
    </Nav>
  );
};

export default Navbar;
