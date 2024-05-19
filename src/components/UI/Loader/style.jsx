import styled from "styled-components";

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  animation: rotate 2s linear infinite;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

export { StyledImage };
