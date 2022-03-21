import React from "react";

// Styles
import Styles from "./PokemonCard.styles";

export default function PokemonCard(props) {
  const { pokemon } = props;

  return (
    <Styles>
      <div>
        <h1 className="title">{pokemon?.name}</h1>
        <div className="container__image">
          <img
            className="image"
            src={pokemon?.sprites?.front_default}
            alt={pokemon?.name}
          />
        </div>
      </div>

      <div className="container__content">
        <p className="paragraph"> Orden: {pokemon?.order}</p>
        <p className="paragraph"> Altura: {pokemon?.height} mtrs</p>
        <p className="paragraph"> Peso: {pokemon?.weight} Kg</p>
      </div>
    </Styles>
  );
}
