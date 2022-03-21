import React, { useEffect, useState } from "react";

// Services
import { getFoundPokemon } from "../../services/Pokemon.service";
// Styles
import Styles from "./Found.styles";

export default function Found() {
  const [list, setList] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await getFoundPokemon();

      setList(response);
    }

    fetchData();
  }, []);

  const { results } = list;

  return (
    <Styles>
      <p className="paragraph">Numero total lugares {list.count}</p>
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
