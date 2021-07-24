import styled from "styled-components";
import { device } from "../device";

export const NavBar = styled.nav`
  height: 100%;
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;

  @media ${device.tablet} {
    width: 40%;
  }
`;
