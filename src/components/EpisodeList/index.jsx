import ChevronRight from "../../../src/assets/icons/ChevronRight.svg";
import { StyledEpisodeList, StyledEpisode } from "./style";

const EpisodeList = ({ episodes }) => {
  return (
    <StyledEpisodeList>
      <h3>Episodes</h3>
      {episodes.map((episode) => (
        <StyledEpisode key={episode.id}>
          <h4>{episode.episode}</h4>
          <p>{episode.name}</p>
          <p>{episode.air_date}</p>
          <img src={ChevronRight} alt="Right" />
        </StyledEpisode>
      ))}
    </StyledEpisodeList>
  );
};

export default EpisodeList;
