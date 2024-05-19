import { StyledCustomButton } from "./style";

const CustomButton = ({ buttonText, clickAction, width, height, image }) => {
  return (
    <StyledCustomButton onClick={clickAction} width={width} height={height} image={image}>
      {buttonText}
    </StyledCustomButton>
  );
};

export default CustomButton;
