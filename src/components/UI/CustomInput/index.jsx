import { StyledCustomInput } from "./style";

const CustomInput = ({ placeholderValue, changeAction }) => {
  return <StyledCustomInput placeholder={placeholderValue} onChange={changeAction} />;
};

export default CustomInput;
