import React from "react";
import { Router } from "@reach/router";
import Location from "./locations";
import Home from "./Home";
import Addlocation from "./AddLocation";

function App() {
  const [ubication, setUbication] = React.useState([]);
  const [restaurants, setRestaurants] = React.useState([]);

  React.useEffect(() => {
    fetch("/locations")
      .then(response => response.json())
      .then(data => {
        setUbication(data);
      });
  }, [setUbication]);

  React.useEffect(() => {
    fetch(`/restaurants?lat=${-14.0833219}&lng=${-75.7331478}`)
      .then(response => response.json())
      .then(data => {
        console.log(restaurants)
        setRestaurants(data);
      });
  }, [setRestaurants]);

  return (
    <>
      <Router>
        <Home path="/" ubication={ubication}  />
        <Location path="/ubication" ubication={ubication} />
        <Addlocation path="/addlocation" setUbication={setUbication} />
      </Router>
    </>
  );
}

export default App;
