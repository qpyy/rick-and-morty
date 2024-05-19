import styled from "styled-components";
import dropdownIcon from "../../../assets/icons/DropdownIcon.svg";

const StyledSelect = styled.select`
  width: 244px;
  height: 60px;
  margin: 10px;
  border: 1px solid #00000033;
  border-radius: 8px;
  font-size: 16px;
  padding: 10px;
  appearance: none;
  background: url(${dropdownIcon}) no-repeat right 10px center;
  background-size: 16px 16px;
  outline: none;
  transition: border-color 0.3s;
  cursor: pointer;

  &:focus {
    border-color: #35c9dd;
  }

  @media (max-width: 600px) {
    width: 280px;
  }
`;

export { StyledSelect };
