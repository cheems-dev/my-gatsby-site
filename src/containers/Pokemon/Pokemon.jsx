import React, { useEffect, useState } from "react";

// Services
import { getPokemonById } from "../../services/Pokemon.service";
// Components
import PokemonCard from "./Components/PokemonCard/PokemonCard";
// Styles
import Styles from "./Pokemon.styles";

export default function Pokemon(props) {
  const { id } = props;
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    async function fetchData(ID) {
      const response = await getPokemonById(ID);
      setPokemon(response);
    }

    fetchData(id);
  }, [id]);

  return (
    <Styles>
      <PokemonCard pokemon={pokemon} />
    </Styles>
  );
}
