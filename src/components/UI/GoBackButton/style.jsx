import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  padding: 5px;
  cursor: pointer;

  span {
    font-family: Karla;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    color: #000;
  }

  img {
    margin-right: 4px;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export { StyledButton };
