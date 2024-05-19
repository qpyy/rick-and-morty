import { StyledSelect } from "./style";

const CustomSelect = ({ options, defaultValue }) => {
  return (
    <StyledSelect defaultValue={defaultValue}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default CustomSelect;
