import styled from "styled-components";
import { CONSTANTS } from "../../config/constants";
import { variables } from "../../config/variables";

const { desktop } = CONSTANTS.BREAKPOINTS;
const { palette } = variables;

const Styles = styled.div`
  @media screen and (max-width: ${desktop}px) {
    display: contents;
  }

  .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root {
    width: 380px;
    border-color: ${palette.gray};
    background-color: ${palette.white};
    border-radius: 8px;
    height: 56px;

    @media screen and (max-width: ${desktop}px) {
      width: auto;
      margin-bottom: 16px;
    }
  }

  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: ${palette.dark};
  }

  .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;

export default Styles;
