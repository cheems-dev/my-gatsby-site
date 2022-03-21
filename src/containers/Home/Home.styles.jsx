import styled from "styled-components";
import { CONSTANTS } from "../../config/constants";
import { variables } from "../../config/variables";

const { desktop } = CONSTANTS.BREAKPOINTS;
const { palette, gradients } = variables;

const Styles = styled.div`
  background: ${palette.graySecond};
  background-blend-mode: darken;

  .container {
    padding: 80px;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 32px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 40px;

    @media screen and (max-width: ${desktop}px) {
      justify-content: end;
      flex-direction: column;
      padding-bottom: 0;
    }
  }
`;

export default Styles;
