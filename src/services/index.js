import $api from "../http";

const getCharactersService = async (page) => {
  const response = await $api.get(`/character/?page=${page}`);

  return response.data.results;
};

const getCharacterDetailsService = async (id) => {
  const response = await $api.get(`/character/${id}`);

  return response.data;
};

const getFilteredByNameService = async (name) => {
  const response = await $api.get(`/character/?name=${name}`);

  return response.data.results;
};

const getEpisodeDetailsService = async (episodeUrl) => {
  const response = await $api.get(episodeUrl);

  return response.data;
};

export {
  getCharactersService,
  getCharacterDetailsService,
  getFilteredByNameService,
  getEpisodeDetailsService,
};
