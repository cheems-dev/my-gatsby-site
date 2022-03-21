import styled from "styled-components";
import { CONSTANTS } from "../../config/constants";
import { variables } from "../../config/variables";

const { desktop } = CONSTANTS.BREAKPOINTS;
const { palette, gradients } = variables;

const Styles = styled.div`
  background: ${palette.graySecond};
  background-blend-mode: darken;
  padding: 80px;
  display: flex;
  gap: 40px;
  flex-direction: column;

  .paragraph {
    text-align: right;
    font-size: 24px;
    color: ${palette.redBostom};
  }

  .container {
    display: flex;
    gap: 32px;
    flex-direction: column;
  }

  .card {
    border: 2px solid ${palette.gray};
    border-radius: 8px;
    padding: 80px;
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-16px) scale(1.03);
    }

    &__title {
      text-align: center;
      font-size: 32px;
      text-transform: uppercase;
    }
  }
`;

export default Styles;
