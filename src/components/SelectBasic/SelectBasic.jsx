import * as React from "react";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
// Styles
import Styles from "./SelectBasic.style";

export default function SelectBasic(props) {
  const { labels, handleGetFilter } = props;
  const { index, title, width } = props;
  const { color, fontColor } = props;

  const [label, setLabel] = React.useState("");

  const handleChange = (event) => {
    handleGetFilter(event.target.value);
    setLabel(event.target.value);
  };

  return (
    <Styles width={width} color={color} fontColor={fontColor}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          {title ? title : "Ordenar Por"}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={index ? labels[0].name : label}
          label="Age"
          onChange={handleChange}
        >
          {labels.map(({ name, key }) => (
            <MenuItem
              value={key.length ? key : name}
              key={key.length ? key : name}
              className="item"
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Styles>
  );
}
