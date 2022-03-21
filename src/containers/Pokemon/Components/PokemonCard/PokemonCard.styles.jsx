import styled from "styled-components";
import { variables } from "../../../../config/variables";

const { palette } = variables;

const Styles = styled.div`
  border: 2px solid ${palette.gray};
  border-radius: 8px;

  .container {
    &__image {
      display: flex;
      justify-content: center;
    }

    &__content {
      display: flex;
      justify-content: space-around;
    }
  }

  .title {
    text-align: center;
    font-size: 32px;
    text-transform: capitalize;
  }

  .paragraph {
    text-align: center;
    font-size: 24px;
  }

  .image {
    width: 240px;
  }
`;

export default Styles;
