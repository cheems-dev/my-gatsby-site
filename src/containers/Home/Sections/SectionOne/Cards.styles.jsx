import styled from "styled-components";
import { variables } from "../../../../config/variables";

const { palette } = variables;

const Styles = styled.div`
  background: ${palette.violet};

  background-image: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 0.6702031154258579) 4%,
      rgba(0, 212, 255, 1) 100%
    ),
    url(https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;

  .container {
    padding: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 32px;
    z-index: 2;
  }

  .notFound {
    color: ${palette.white};
  }

  a {
    &:-webkit-any-link {
      text-decoration: none;
    }
  }
`;

export default Styles;
