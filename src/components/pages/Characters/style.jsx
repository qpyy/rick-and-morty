import styled from "styled-components";

const StyledCharacters = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fff;
  padding-bottom: 40px;
`;

const StyledImage = styled.img`
  margin-top: 40px;
  width: 600px;
  height: 200px;

  @media (max-width: 600px) {
    margin-top: 30px;
    width: 420px;
    height: 140px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
    width: 300px;
    height: 100px;
  }
`;

const StyledCharactersGrid = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 20px;
  padding-top: 40px;
  padding-bottom: 40px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, auto);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, auto);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, auto);
  }
`;

export { StyledCharacters, StyledImage, StyledCharactersGrid };
