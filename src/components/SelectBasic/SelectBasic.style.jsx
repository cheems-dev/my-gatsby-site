import styled from "styled-components";
import { CONSTANTS } from "../../config/constants";
import { variables } from "../../config/variables";

const { desktop } = CONSTANTS.BREAKPOINTS;
const { palette } = variables;

const Styles = styled.div`
  width: ${(props) => (props.width ? "" : "200px")};

  @media screen and (max-width: ${desktop}px) {
    display: contents;
  }

  .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    color: ${(props) => (props.fontColor ? props.fontColor : palette.dark)};
  }

  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
    height: 56px;
    width: ${(props) => (props.width ? "" : "380px")};
    border-radius: 8px;
    background-color: ${(props) => (props.color ? props.color : palette.white)};

    @media screen and (max-width: ${desktop}px) {
      width: auto;
    }
  }
`;

export default Styles;
