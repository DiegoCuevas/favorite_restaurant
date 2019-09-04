import React from "react";
import Navbar from "./navbar";

function Home({ ubication }) {

  return (
    <>
      <Navbar />
      <section>
        {ubication.map(e => (
          <article>
            <div>{e.address}</div>
            <div>{e.latitud}</div>
            <div>{e.longitud}</div>
            <br />
          </article>
        ))}
      </section>
    </>
  );
}

export default Home;
