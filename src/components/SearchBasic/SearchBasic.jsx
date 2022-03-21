import React from "react";
import { TextField } from "@mui/material";

// Styles
import Styles from "./SearchBasic.style";

export default function SearchBasic(props) {
  const { label, handleGetInput } = props;

  const handleChange = (event) => {
    handleGetInput(event.target.value);
  };

  return (
    <Styles>
      <TextField label={label} onChange={handleChange} />
    </Styles>
  );
}
