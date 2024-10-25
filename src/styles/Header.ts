import styled from 'styled-components';
import { colors, breakpoints, flexBox, fontStyle } from '../utils/constants';

// Header with navigation and user profile section
export const Header = styled.header`
  padding: 24px 130px 0;
  border-bottom: 1px solid ${colors.border};
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.2);
  font-family: "OpenSans", sans-serif;
  height: 90px;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 24px 20px 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 24px 10px 0;
  }
`;

export const ActionButton = styled.button`
  position: absolute;
  bottom: -35px;
  right: 165px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(to right, #ff974f, #e32c75);
  padding: 10px 20px;
  font-size: 40px;
  color: ${colors.secondary};
  cursor: pointer;

  @media (max-width: ${breakpoints.mobile}) {
    right: 10px;
    bottom: -20px;
    font-size: 30px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    right: 20px;
    bottom: -20px;
    font-size: 35px;
  }
`;

export const Logo = styled.img`
  width: 50px;
  height: 23px;
  object-fit: contain;
`;

export const UserProfile = styled.div`
  ${flexBox({ direction: "row", justify: "space-between" })};
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    margin: 0 12px 0 20px;
  }

  span {
    margin-left: 10px;
    color: ${colors.text};
    ${fontStyle({ fontSize: 16, lineHeight: 20 })};
    letter-spacing: -0.5px;
  }
`;

export const Icons = styled.div`
  ${flexBox({})}

  img {
    margin: 0;
    cursor: pointer;
  }
`;

export const IconArrow = styled.div`
  img {
    width: 16px;
    height: 18px;
    margin-left: -5px;
    cursor: pointer;
  }
`;

export const Nav = styled.nav`
  ul {
    ${flexBox({ direction: "row", justify: "initial", gap: 36 })};
    ${fontStyle({ fontSize: 14, lineHeight: 16.41 })};
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 23px;
  }
`;

export const NavItem = styled.li<{ isActive: boolean }>`
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? "black" : "gray")};
  position: relative;

  &:hover {
    color: black;
  }

  &::after {
    content: "";
    display: ${({ isActive }) => (isActive ? "block" : "none")};
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #ff974f, #e32c75);
    position: absolute;
    bottom: -20px;
    left: 0;
  }
`;
