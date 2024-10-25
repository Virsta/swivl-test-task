import { css } from "styled-components";

export const colors = {
  primary: "#F05D63",
  secondary: "#FFFFFF",
  text: "#3E3F58",
  border: "#E0E0E0",
};

export const flexBox = ({
  direction = "row",
  justify = "initial",
  gap = 0,
}) => `
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  gap: ${gap}px;
`;

export const fontStyle = ({
  fontSize = 14,
  lineHeight = 24.51,
  fontWeight = 400,
  fontFamily = "Open Sans",
}) => css`
  font-size: ${fontSize}px;
  line-height: ${lineHeight}px;
  font-weight: ${fontWeight};
  font-family: ${fontFamily};
`;

export const breakpoints = {
  mobile: "576px",
  tablet: "820px",
};

export interface DropdownMenuProps {
  isOpen: boolean;
}

export const navItems = ["FEED", "EXPLORE", "DISCUSSIONS"];

export const posts = [
  {
    title: "New air routes that promise cheap flights in",
    author: "Gregory Watkins",
    likes: 24,
  },
  {
    title: "New air routes that promise cheap flights in",
    author: "Gregory Watkins",
    likes: 24,
  },
  {
    title: "New air routes that promise cheap flights in",
    author: "Gregory Watkins",
    likes: 24,
  },
  {
    title: "New air routes that promise cheap flights in",
    author: "Gregory Watkins",
    likes: 24,
  },
];
