import styled from "styled-components";

const StyledCharacterDetails = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fff;
  padding-bottom: 60px;

  h2 {
    text-align: center;
  }

  h3 {
    color: #8e8e93;
  }

  @media (max-width: 460px) {
    h2 {
      font-size: 32px;
    }
  }
`;

const StyledMain = styled.main`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const StyledInformations = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 413px;

  @media (max-width: 460px) {
    width: 300px;
  }

  h3 {
    color: #8e8e93;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  h4 {
    margin-top: 15px;
    margin-bottom: 0px;
    padding-left: 12px;
  }

  p {
    width: 90%;
    margin-top: 0px;
    margin-bottom: 5px;
    padding-bottom: 5px;
    padding-left: 12px;
    border-bottom: 1px solid #d9d9d9;
  }

  a {
    width: 100%;
    text-decoration: none;

    &:visited {
      color: #000000;
    }

    &.active {
      color: #02afc5;
    }

    &:hover {
      color: #000000b3;
    }

    img {
      width: 24px;
      height: 24px;
      position: absolute;
      margin-top: -18px;
      margin-left: 350px;
      z-index: 1;
    }

    @media (max-width: 460px) {
      width: 300px;
      img {
        margin-left: 250px;
      }
    }
  }
`;

const StyledEpisodes = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledImage = styled.img`
  margin-top: 30px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 5px solid #f2f2f7;

  @media (max-width: 460px) {
    margin-top: 60px;
    width: 150px;
    height: 150px;
  }

  @media (max-width: 900px) {
    margin-top: 60px;
    width: 250px;
    height: 250px;
  }
`;

const StyledButtonWrapper = styled.div`
  position: absolute;
  top: 90px;
  left: 15%;

  @media (max-width: 800px) {
    top: 80px;
    left: 12%;
  }

  @media (max-width: 460px) {
    top: 70px;
    left: 10%;
  }
`;

export {
  StyledCharacterDetails,
  StyledImage,
  StyledMain,
  StyledInformations,
  StyledEpisodes,
  StyledButtonWrapper,
};
