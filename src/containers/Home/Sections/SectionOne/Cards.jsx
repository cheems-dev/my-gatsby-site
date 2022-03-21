import React from "react";
import { Link } from "gatsby";

// Components
import CardSimple from "../../../../components/Card/Card";
import Loading from "../../../../components/Loading/Loading";
// Functions
import { handleDynamicSort } from "../../../../Utils/functions/handleDynamicSort";
import { handleFilter } from "../../../../Utils/functions/handleFilter";
// Styles
import Styles from "./Cards.styles";

export default function Cards(props) {
  const { list, filterArray, orderArray } = props;

  return (
    <Styles>
      <div className="container">
        {list?.length ? (
          list
            ?.filter((row) => handleFilter(row, filterArray))
            ?.sort(handleDynamicSort(orderArray))
            ?.map((pokemon) => {
              const { url } = pokemon;
              const id = url.slice(url.length - 4, url.length - 1);

              return (
                <Link key={id} to={`pokemon/${id}`}>
                  <CardSimple key={id} image={""} title={pokemon.name} />
                </Link>
              );
            })
        ) : (
          <Loading />
        )}
      </div>
    </Styles>
  );
}
