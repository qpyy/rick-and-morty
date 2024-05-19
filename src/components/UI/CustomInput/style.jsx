import styled from "styled-components";
import searchIcon from "../../../assets/icons/SearchIcon.svg";

const StyledCustomInput = styled.input`
  width: 200px;
  height: 56px;
  margin: 10px;
  border: 1px solid #00000033;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;

  background-image: url(${searchIcon});
  background-size: 24px 24px;
  background-position: 10px center;
  background-repeat: no-repeat;
  padding-left: 40px;

  &:focus {
    border-color: #35c9dd;
  }

  @media (max-width: 600px) {
    width: 268px;
  }
`;

export { StyledCustomInput };
