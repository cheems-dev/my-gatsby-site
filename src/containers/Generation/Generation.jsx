import React, { useEffect, useState } from "react";

// Services
import { getGenerationPokemon } from "../../services/Pokemon.service";
// Styles
import Styles from "./Generation.styles";

export default function Generation() {
  const [list, setList] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await getGenerationPokemon();

      setList(response);
    }

    fetchData();
  }, []);

  const { results } = list;
  return (
    <Styles>
      <p className="paragraph">Numero total de generaciones {list.count}</p>

      <div className="container">
        {results?.map((result, index) => (
          <div className="card" key={index}>
            <p className="card__title">{result.name}</p>
          </div>
        ))}
      </div>
    </Styles>
  );
}
