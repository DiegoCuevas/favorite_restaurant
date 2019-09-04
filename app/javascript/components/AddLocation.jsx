/** @jsx jsx */
import { jsx } from "@emotion/core";
import Navbar from "./navbar";
import React from "react";

function Addlocation() {
  const [address, setAddress] = React.useState();

  function handleSubmit(event) {
    event.preventDefault();
    const locationData = {
      latitud: event.target.elements.latitud.value,
      longitud: event.target.elements.longitud.value,
      address: event.target.elements.address.value
    };

    fetch("/locations", {
      method: "POST",
      body: JSON.stringify(locationData),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        setAddress(data);
      });
  }

  const inputStyle = {
    background: "white",
    border: "1px solid #98AEEB",
    borderRadius: "4px",
    boxSizing: "border-box",
    display: "block",
    fontSize: "1rem",
    padding: "14px 20px",
    color: "#98AEEB",
    width: "100%",
    "&:focus": {
      outline: "none",
      color: "#4055A8"
    }
  };

  return (
    <>
      <Navbar />
      <h1>Add your location</h1>
      <form onSubmit={handleSubmit} css={{ maxWidth: "360px", width: "100%" }}>
        <input css={inputStyle} name="latitud" placeholder="latitud"/>
        <input css={inputStyle} name="longitud" placeholder="longitud" />
        <input css={inputStyle} name="address" placeholder="address" />
        <button>accept</button>
      </form>
    </>
  );
}

export default Addlocation;
