import styled from "styled-components";
import {
  colors,
  breakpoints,
  flexBox,
  fontStyle,
  DropdownMenuProps,
} from "../utils/constants";

export const ProfileInfo = styled.div`
  flex: 1;
  margin-right: 20px;
  max-width: 350px;

  h2 {
    ${fontStyle({
      fontSize: 24,
      lineHeight: 26,
      fontWeight: 600,
      fontFamily: "Montserrat",
    })};
    margin-bottom: 10px;
  }

  p {
    color: ${colors.text};
    ${fontStyle({ fontSize: 16, lineHeight: 24 })};
    margin: 0;
  }

  span {
    display: inline-block;
    margin-right: 15px;
    color: ${colors.text};
  }
`;
export const UserDetails = styled.div`
  ${flexBox({ direction: "row", justify: "space-between", gap: 24 })};
  align-items: flex-start;
  img {
    max-width: 120px;
    max-height: 120px;
  }
`;

export const EditProfileButton = styled.button`
  display: flex;
  align-items: center;
  ${fontStyle({ fontSize: 16, lineHeight: 20 })};
  background-color: transparent;
  color: ${colors.primary};
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  img {
    padding: 0 5px 0 0;
  }
`;

export const FollowersBox = styled.div`
  ${flexBox({ direction: "row", justify: "space-between", gap: 24 })};
  margin-top: 32px;
  margin-bottom: 23px;

  div {
    text-align: center;
    ${fontStyle({ fontSize: 16, lineHeight: 24 })};

    span {
      font-size: 18px;
      font-weight: 700;
    }
  }
`;

// Dropdown for interactive options
export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 70px;

  @media (max-width: ${breakpoints.mobile}) {
    margin: 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 10px;
  }
`;

export const DotsButton = styled.button`
  background: none;
  border: none;
  transform: rotate(270deg);
  width: 16px;
  height: 16px;
  ${fontStyle({ fontSize: 28 })};
  letter-spacing: -1px;
  margin-top: 30px;
  cursor: pointer;
`;

export const DropdownMenu = styled.ul<DropdownMenuProps>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  padding: 24px 0;
  position: absolute;
  width: 176px;
  top: 100%;
  left: 17px;
  ${fontStyle({ fontSize: 16, lineHeight: 18.75 })};
  border-radius: 8px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  background: ${colors.secondary};

  @media (max-width: ${breakpoints.mobile}) {
    margin: 0;
    left: -150px;
    padding: 14px 0;
  }

  button {
    display: block;
    width: 100%;
    border: none;
    background-color: transparent;
    color: ${colors.text};
    text-align: left;
    cursor: pointer;
  }
`;

export const MenuItem = styled.li`
  ${flexBox({ direction: "row", justify: "space-between" })};
  padding: 8px 24px;
  cursor: pointer;

  &:hover {
    background-color: #ecf1f8;
  }
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 55px;
  height: 24px;
  margin: 0 20px 0 30px

  @media (max-width: ${breakpoints.mobile}) {
    margin: 0 10px 20px 20px;
`;

export const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &::before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 2.5px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const SwitcherContainer = styled(Switch)`
  ${Checkbox}:checked + ${Slider} {
    background-color: ${colors.primary};
  }

  ${Checkbox}:checked + ${Slider}::before {
    transform: translateX(14px);
  }
`;

export const MobileVersion = styled.div`
  @media (max-width: ${breakpoints.mobile}) {
   position: absolute;
   top: 130px;
   left: 20px; 
`;
