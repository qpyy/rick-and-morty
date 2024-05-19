import { useNavigate } from "react-router-dom";
import { StyledButton } from "./style";

const GoBackButton = ({ buttonText, imageUrl }) => {
  let navigate = useNavigate();

  const backPage = () => navigate(-1);

  return (
    <StyledButton onClick={backPage}>
      <img src={imageUrl} alt="Arrow" />
      <span>{buttonText}</span>
    </StyledButton>
  );
};

export default GoBackButton;
