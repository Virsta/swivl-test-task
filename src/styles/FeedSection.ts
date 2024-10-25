import styled from "styled-components";
import { colors, breakpoints, fontStyle } from "../utils/constants";
import oval from "../img/Oval.svg";

// Feed section displaying posts
export const FeedSection = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 90px 0 0 47px;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    margin: 10px 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin: 10px 0;
`;

export const PostCard = styled.article`
  background-color: ${colors.secondary};
  padding: 15px;
  border-radius: 10px;
  max-width: 374px;
  box-shadow: 0 5px 18px 0 rgba(0, 0, 0, 0.1);

  h3 {
    ${fontStyle({
      fontSize: 36,
      lineHeight: 43.88,
      fontWeight: 400,
      fontFamily: "Montserrat",
    })};
    color: ${colors.text};
    margin-bottom: 10px;
  }

  p {
    ${fontStyle({ fontSize: 14, lineHeight: 16.41 })};
    color: ${colors.text};
    margin-bottom: 10px;
    margin-left: 28px;
    position: absolute;

    &::after {
      content: "";
      background-image: url(${oval});
      position: relative;
      top: 50%;
      right: 10px;
    }
  }

  .share {
    button {
      ${fontStyle({ fontSize: 18 })};
      background: none;
      border: none;
      cursor: pointer;
      color: ${colors.primary};

      &:hover {
        text-decoration: underline;
      }
    }
  }

  span {
    cursor: pointer;
  }
`;
