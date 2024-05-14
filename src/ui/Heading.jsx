import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(prpos) =>
    prpos.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(prpos) =>
    prpos.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
 
  ${(prpos) =>
    prpos.as === "h3" &&
    css`
      font-size: 1.6rem;
      font-weight: 500;
    `}
  ${(prpos) =>
    prpos.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `}
`;

export default Heading;
