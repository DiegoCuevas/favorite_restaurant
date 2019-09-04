import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import Navbar from "./navbar";
function Location({ ubication }) {
  const [position, setPosition] = React.useState([0, 0]);
  const [zoomState, setZoomState] = React.useState(16);

  const mapRef = React.useRef();

  React.useEffect(() => {
    const watchID = navigator.geolocation.watchPosition(pos => {
      setPosition([pos.coords.latitude, pos.coords.longitude]);
    });
    return () => {
      navigator.geolocation.clearWatch(watchID);
    };
  }, [setPosition]);

  const handleOnZoom = map => {
    setZoomState(mapRef.current.leafletElement.getZoom());
  };

  function handleLocation(event) {
    const id = event.target.value;
    const locationDetail = ubication.find(detail => detail.id === parseInt(id));
    setPosition([locationDetail.latitud, locationDetail.longitud]);
  }

  return (
    <>
    <Navbar />
      <select onChange={handleLocation}>
        <option value="">Elige una opción</option>
        {ubication.map(locationDetail => (
          <option value={locationDetail.id}>{locationDetail.address}</option>
        ))}
      </select>
      <Map
        center={position}
        zoom={zoomState}
        ref={mapRef}
        onzoomend={handleOnZoom}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            You are here!
            <span role="img" aria-label="emoji dot position">
              📍
            </span>
          </Popup>
        </Marker>
      </Map>
    </>
  );
}

export default Location;
