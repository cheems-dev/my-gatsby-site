import api from "./Api";

const getAllPokemon = () => {
  const response = api
    .get("pokemon?limit=100&offset=200")
    .then((resolve) => resolve.data)
    .catch((error) => {
      console.log(error);
    });

  return response;
};

const getPokemonById = (id) => {
  const response = api
    .get(`pokemon/${id}`)
    .then((resolve) => resolve.data)
    .catch((error) => {
      console.log(error);
    });

  return response;
};

const getGenerationPokemon = () => {
  const response = api
    .get("generation")
    .then((resolve) => resolve.data)
    .catch((error) => {
      console.log(error);
    });

  return response;
};

const getFoundPokemon = () => {
  const response = api
    .get("encounter-method?limit=27")
    .then((resolve) => resolve.data)
    .catch((error) => {
      console.log(error);
    });

  return response;
};

export { getAllPokemon, getPokemonById, getGenerationPokemon, getFoundPokemon };
