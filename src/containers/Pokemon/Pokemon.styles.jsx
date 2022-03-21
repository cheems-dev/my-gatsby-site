import styled from "styled-components";
import { CONSTANTS } from "../../config/constants";
import { variables } from "../../config/variables";

const { desktop } = CONSTANTS.BREAKPOINTS;
const { palette, gradients } = variables;

const Styles = styled.div`
  height: 100%;
  padding: 160px 80px;
`;

export default Styles;
