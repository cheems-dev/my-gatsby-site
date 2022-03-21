import React from "react";

// Components
import Layout from "./src/components/Layout/Layout";
// Root Styles
import "./src/styles/global.css";

export function wrapPageElement({ element, props }) {
  return <Layout>{element}</Layout>;
}
