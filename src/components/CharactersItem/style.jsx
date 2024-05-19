import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledCharactersItem = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;
  width: 240px;
  height: auto;
  background-color: #fff;
  text-decoration: none;
  overflow: hidden;
  color: #000;
  box-shadow: -1px 2px 14px 2px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: -1px 2px 14px 2px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: -1px 2px 14px 2px rgba(0, 0, 0, 0.2);

  &:visited {
    color: #000;
  }

  &:hover {
    color: #000000b3;
  }

  h3,
  p {
    align-self: flex-start;
    padding-left: 12px;
    margin: 0;
  }

  h3 {
    margin-top: 16px;
  }

  p {
    margin-bottom: 16px;
  }

  @media (max-width: 600px) {
    width: 312px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 168px;
  object-fit: cover;

  @media (max-width: 600px) {
    max-height: 232px;
  }
`;

export { StyledCharactersItem, StyledImage };
