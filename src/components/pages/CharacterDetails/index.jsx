import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EpisodeList from "../../EpisodeList";
import Navbar from "../../UI/Navbar";
import Loader from "../../UI/Loader";
import CustomSnackbar from "../../UI/Snackbar";
import GoBackButton from "../../UI/GoBackButton";
import { getCharacterDetailsService, getEpisodeDetailsService } from "../../../services";
import ChevronRight from "../../../assets/icons/ChevronRight.svg";
import ArrowBack from "../../../assets/icons/ArrowBack.svg";
import {
  StyledCharacterDetails,
  StyledImage,
  StyledMain,
  StyledInformations,
  StyledButtonWrapper,
} from "./style";

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [status, setStatus] = useState({
    error: "",
    isLoading: false,
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
  });

  useEffect(() => {
    if (status.error) {
      handleSnackbar(true, status.error);
    }
  }, [status.error]);

  useEffect(() => {
    getCharacterDetails();
  }, [id]);

  useEffect(() => {
    if (character?.episode) {
      getEpisodeDetails(character.episode);
    }
  }, [character]);

  const getCharacterDetails = async () => {
    try {
      setStatus({ ...status, isLoading: true });
      const response = await getCharacterDetailsService(id);
      setCharacter(response);
      setStatus({ ...status, isLoading: false });
    } catch (error) {
      setStatus({ error: error.message, isLoading: false });
    }
  };

  const getEpisodeDetails = async (episodes) => {
    try {
      const episodePromises = episodes.map((episode) => getEpisodeDetailsService(episode));
      const episodeResponses = await Promise.all(episodePromises);
      setEpisodes(episodeResponses);
    } catch (error) {
      setStatus((state) => ({ ...state, error: error.message }));
    }
  };

  const handleSnackbar = (open, message = "") => {
    setSnackbar({
      open: open,
      message: message,
    });
  };

  return (
    <StyledCharacterDetails>
      <Navbar />
      <StyledButtonWrapper>
        <GoBackButton buttonText="GO BACK" imageUrl={ArrowBack} />
      </StyledButtonWrapper>
      {status.isLoading ? (
        <Loader />
      ) : (
        <>
          <StyledImage src={character?.image} alt="Сharacter..." />
          <h2>{character?.name}</h2>
          <StyledMain>
            <StyledInformations>
              <h3>Informations</h3>
              <h4>Gender</h4>
              <p>{character?.gender}</p>
              <h4>Status</h4>
              <p>{character?.status}</p>
              <h4>Specie</h4>
              <p>{character?.species}</p>
              <h4>Origin</h4>
              <p>{character?.origin.name}</p>
              <h4>Type</h4>
              <p>{character?.type ? character?.type : "Unknown"}</p>
              <Link>
                <h4>Location</h4>
                <img src={ChevronRight} alt="Right" />
                <p>{character?.location.name}</p>
              </Link>
            </StyledInformations>
            <EpisodeList episodes={episodes} />
          </StyledMain>
        </>
      )}

      <CustomSnackbar
        open={snackbar.open}
        message={snackbar.message}
        autoHideDuration={2500}
        handleClose={() => handleSnackbar(false, "")}
      />
    </StyledCharacterDetails>
  );
};

export default CharacterDetails;
