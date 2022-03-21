import React from "react";

// Props
import Navbar from "../Navbar/Navbar";

export default function Layout(props) {
  const { children } = props;

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
