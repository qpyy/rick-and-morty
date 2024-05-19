import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledEpisodeList = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h3 {
    color: #8e8e93;
    padding-top: 30px;
  }

  img {
    width: 24px;
    height: 24px;
    position: absolute;
    margin-top: 25px;
    margin-left: 350px;
    z-index: 1;
  }

  @media (max-width: 460px) {
    img {
      margin-left: 250px;
    }
  }
`;

const StyledEpisode = styled(Link)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  text-decoration: none;
  margin-top: 15px;
  min-width: 413px;
  min-height: 88px;
  border-bottom: 1px solid #d9d9d9;
  color: #000;

  &:visited {
    color: #000;
  }

  &:hover {
    color: #000000b3;
  }

  h4,
  p {
    align-self: flex-start;
    padding-left: 12px;
    margin: 0;
  }

  @media (max-width: 460px) {
    min-width: 300px;
  }
`;

export { StyledEpisodeList, StyledEpisode };
