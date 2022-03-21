import React from "react";

// Containers
import Pokemon from "../containers/Pokemon/Pokemon";

export default function pokemon(props) {
  const { id } = props;

  return <Pokemon id={id} />;
}
