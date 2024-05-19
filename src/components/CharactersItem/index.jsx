import { StyledCharactersItem, StyledImage } from "./style";

const CharactersItem = ({ name, image, species, id }) => {
  return (
    <StyledCharactersItem to={`/characters/${id}`}>
      <StyledImage src={image} />
      <h3>{name}</h3>
      <p>{species}</p>
    </StyledCharactersItem>
  );
};

export default CharactersItem;
