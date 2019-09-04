/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Link } from "@reach/router";

function Navbar() {
  return (
    <header
      css={{
        background: "white",
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        gridTemplateRows: "auto",
        gridTemplateAreas: "'logo navigation sign-out'",
        gridColumnGap: "40px",
        padding: "15px 30px",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <div
        css={{
          background: "none",
          border: "none",
          color: "#35469C",
          cursor: "pointer",
          fontSize: "1em"
        }}
      >
        <Link to="/ubication">maps</Link>
      </div>
      <div
        css={{
          background: "none",
          border: "none",
          color: "#35469C",
          cursor: "pointer",
          fontSize: "1em"
        }}
      >
        <Link to="/">home</Link>
      </div>
      <div>
        <button
          css={{
            background: "none",
            border: "none",
            color: "#35469C",
            cursor: "pointer",
            fontSize: "1em"
          }}
        >
          <Link to="/addlocation">add location</Link>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
