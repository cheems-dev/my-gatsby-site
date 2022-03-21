import styled from "styled-components";
import { CONSTANTS } from "../../config/constants";
import { variables } from "../../config/variables";

const { tablet, desktop } = CONSTANTS.BREAKPOINTS;
const { palette, gradients } = variables;

const Styles = styled.div`
  width: auto;

  .css-hip9hq-MuiPaper-root-MuiAppBar-root {
    background: ${gradients.custom4};
    background-blend-mode: darken;
  }

  .css-1rwt2y5-MuiButtonBase-root-MuiButton-root {
    font-size: 12px;
    color: ${palette.blue};
    border: 3px solid ${palette.skyBlue} !important;
  }

  .css-19r6kue-MuiContainer-root {
    padding: 0 96px;

    @media screen and (max-width: ${desktop}px) {
      padding: 0 32px;
    }

    @media screen and (max-width: ${tablet}px) {
      padding: 0 16px;
    }
  }

  .image {
    max-width: 120px;
  }

  .link {
    color: ${palette.white};
    &:-webkit-any-link {
      text-decoration: none;
    }
  }
`;

const TypographyStyle = {
  mr: 2,
  display: { xs: "none", md: "flex" },
  fontSize: "16px",
};

const BoxStyle = { flexGrow: 1, display: { xs: "flex", md: "none" } };

const anchorOrigin = {
  vertical: "bottom",
  horizontal: "left",
};

const anchorOriginTwo = {
  vertical: "top",
  horizontal: "left",
};

const transformOrigin = {
  vertical: "top",
  horizontal: "left",
};

const sx = {
  display: { xs: "block", md: "none" },
};

const sxTwo = {
  flexGrow: 1,
  display: { xs: "flex", md: "none" },
};

const BoxStyleTwo = {
  flexGrow: 1,
  display: { xs: "none", md: "flex" },
  justifyContent: "space-around",
};

const ButtonStyle = {
  my: 2,
  color: "white",
  display: "flex",
  fontSize: "10px",
};

export {
  Styles,
  TypographyStyle,
  BoxStyle,
  anchorOrigin,
  anchorOriginTwo,
  transformOrigin,
  sx,
  sxTwo,
  BoxStyleTwo,
  ButtonStyle,
};
