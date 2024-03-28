// Tis is for Linking The page with a or Link
import React from "react";
import { Link } from "react-router-dom";

function LinkPage({ path, txt, className }) {
  return (
    <>
      <Link className={className} to={path}>{txt}</Link>
    </>
  );
}

export default LinkPage;
