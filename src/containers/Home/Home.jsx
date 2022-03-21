import React, { useEffect, useState } from "react";

// Components
import SearchBasic from "../../components/SearchBasic/SearchBasic";
import SelectBasic from "../../components/SelectBasic/SelectBasic";
import Cards from "./Sections/SectionOne/Cards";
// Service
import { getAllPokemon } from "../../services/Pokemon.service";
// Helper
import { labels } from "./Home.helper";
// Styles
import Styles from "./Home.styles";

export default function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getAllPokemon();

      setList(response.results);
    }
    fetchData();
  }, []);

  const [orderArray, setOrderArray] = useState("");
  const [filterArray, setFilterArray] = useState("");

  const handleGetInput = (value) => {
    setFilterArray(value);
  };

  const handleGetFilter = (value) => {
    setOrderArray(value);
  };

  return (
    <Styles>
      <div className="container">
        <div className="header">
          <SearchBasic
            label={"Buscar pokemon"}
            handleGetInput={handleGetInput}
          />
          <SelectBasic labels={labels} handleGetFilter={handleGetFilter} />
        </div>
        <Cards list={list} orderArray={orderArray} filterArray={filterArray} />
      </div>
    </Styles>
  );
}
