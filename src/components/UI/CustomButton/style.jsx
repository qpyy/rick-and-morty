import styled from "styled-components";

const StyledCustomButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  background-image: url(${(props) => props.image});
  background-size: 20px 12px;
  background-position: 15px center;
  background-repeat: no-repeat;

  margin: 10px;
  background-color: #f2f9fe;
  color: #2196f3;
  border: 1px solid #00000033;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.3s;
  cursor: pointer;
  box-shadow: -1px 2px 14px 1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: -1px 2px 14px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: -1px 2px 14px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    color: #000000b3;
  }

  &:active {
    box-shadow: -1px 2px 14px 2px rgba(0, 0, 0, 0.2) inset;
    -webkit-box-shadow: -1px 2px 14px 2px rgba(0, 0, 0, 0.2) inset;
    -moz-box-shadow: -1px 2px 14px 2px rgba(0, 0, 0, 0.2) inset;
  }
`;

export { StyledCustomButton };
