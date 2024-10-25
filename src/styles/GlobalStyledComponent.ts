import styled from 'styled-components';
import { colors, breakpoints, flexBox, fontStyle} from '../utils/constants';


// Wrapper for the entire page
export const PageWrapper = styled.div`
  ${flexBox({ direction: "column" })};
  ${fontStyle({})};
  background-color: ${colors.secondary};
  min-height: 100vh;
  margin: 0 auto;
`;

export const FlexBox = styled.div`
  ${flexBox({ direction: "row", justify: "space-between", gap: 10 })};
  align-items: center;

  .bold-text {
    font-weight: 600;
  }
`;

// Profile section
export const ProfileSection = styled.section`
  ${flexBox({ direction: "row" })};
  padding: 24px 130px 0;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    padding: 10px;
    margin-top: 20px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    padding: 24px 20px;
    flex-direction: column;
    align-items: center;
`;
