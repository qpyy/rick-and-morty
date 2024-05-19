import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Filters from "../../Filters";
import CharactersItem from "../../CharactersItem";
import Navbar from "../../UI/Navbar";
import CustomSelect from "../../UI/CustomSelect";
import CustomInput from "../../UI/CustomInput";
import CustomButton from "../../UI/CustomButton";
import CustomSnackbar from "../../UI/Snackbar";
import Loader from "../../UI/Loader";
import Modal from "../../UI/Modal";
import { filterUniqueCharacters } from "../../../helpers";
import { getCharactersService, getFilteredByNameService } from "../../../services";
import RickAndMorty from "../../../assets/images/RickAndMorty.svg";
import { StyledCharacters, StyledImage, StyledCharactersGrid } from "./style";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [nameFilter, setNameFilter] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [status, setStatus] = useState({ error: "", isLoading: false });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
  });
  const isMobile = useMediaQuery("(max-width:600px)");

  const options = [
    { value: "Species", label: "Species" },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ];

  const options1 = [
    { value: "Gender", label: "Gender" },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ];

  const options2 = [
    { value: "Status", label: "Status" },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ];

  useEffect(() => {
    if (status.error) {
      handleSnackbar(true, status.error);
    }
  }, [status.error]);

  useEffect(() => {
    if (!status.isLoading) {
      window.scrollTo(0, scrollPosition);
    }
  }, [status.isLoading]);

  useEffect(() => {
    if (nameFilter) {
      filterCharactersByName();
    } else {
      getCharacters();
    }
  }, [currentPage, nameFilter]);

  const getCharacters = async () => {
    try {
      setStatus({ ...status, isLoading: true });
      const response = await getCharactersService(currentPage);
      setCharacters((prevCharacters) => filterUniqueCharacters([...prevCharacters, ...response]));
      setStatus({ ...status, isLoading: false });
    } catch (error) {
      setStatus({ error: error.message, isLoading: false });
    }
  };

  const filterCharactersByName = async () => {
    try {
      setCharacters([]);
      const response = await getFilteredByNameService(nameFilter);
      setCharacters(response);
      setCurrentPage(1);
    } catch (error) {
      setStatus({ error: error.message, isLoading: false });
    }
  };

  const handleNameChange = (event) => {
    setStatus({ ...status, error: "" });
    setNameFilter(event.target.value);
    setCurrentPage(1);
  };

  const loadMoreCharacters = () => {
    setStatus({ ...status, error: "" });
    setScrollPosition(window.scrollY);
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleSnackbar = (open, message = "") => {
    setSnackbar({
      open: open,
      message: message,
    });
  };

  return (
    <StyledCharacters>
      <Navbar />
      <StyledImage src={RickAndMorty} alt="Welcome..." />
      {isMobile ? (
        <>
          <CustomInput placeholderValue="Filter by name..." changeAction={handleNameChange} />
          <Modal>
            <CustomSelect options={options} defaultValue="Species" />
            <CustomSelect options={options1} defaultValue="Gender" />
            <CustomSelect options={options2} defaultValue="Status" />
            <CustomButton buttonText="APPLY" width="280px" height="36px" />
          </Modal>
        </>
      ) : (
        <Filters>
          <CustomInput placeholderValue="Filter by name..." changeAction={handleNameChange} />
          <CustomSelect options={options} defaultValue="Species" />
          <CustomSelect options={options1} defaultValue="Gender" />
          <CustomSelect options={options2} defaultValue="Status" />
        </Filters>
      )}
      {status.isLoading ? (
        <Loader />
      ) : (
        <StyledCharactersGrid>
          {characters.map((character) => (
            <CharactersItem
              id={character.id}
              key={character.id}
              name={character.name}
              species={character.species}
              image={character.image}
            />
          ))}
        </StyledCharactersGrid>
      )}
      <CustomButton
        buttonText="LOAD MORE"
        clickAction={loadMoreCharacters}
        width="154px"
        height="36px"
      />
      <CustomSnackbar
        open={snackbar.open}
        message={snackbar.message}
        autoHideDuration={2500}
        handleClose={() => handleSnackbar(false, "")}
      />
    </StyledCharacters>
  );
};

export default Characters;
