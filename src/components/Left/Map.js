import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import Leaflet from "leaflet";
import "./Map.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { Container } from "@mui/material";

export default function Map({ center, zoom, countryData, country }) {
  // const position = [country.countryInfo.lat, country.countryInfo.long];
  const [currCountry, setCurrCountry] = useState("WorldWide");
  const [position, setPosition] = useState([50, 0]);
  const [mapCenter, setMapCenter] = useState(center);

  let defaultIcon = Leaflet.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [30, 46],
    iconAnchor: [17, 46],
  });

  function DisplayPosition({ map }) {
    const onClick = useCallback(() => {
      map.setView(center, zoom);
    }, [map]);

    return <></>;
  }

  const [map, setMap] = useState(null);

  const displayMap = (
    <MapContainer center={mapCenter} zoom={zoom} whenCreated={setMap}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          {currCountry}: <br />{" "}
          {Intl.NumberFormat("en-UK").format(countryData.cases)}
        </Popup>
      </Marker>
    </MapContainer>
  );

  if (countryData.country !== undefined && country !== currCountry) {
    const latLng = [countryData.countryInfo.lat, countryData.countryInfo.long];
    setCurrCountry(countryData.country);
    setPosition(latLng);
    setMapCenter(latLng);
    map.setView(latLng, zoom, {
      Animation: true,
      AnimationTimeline: 500,
    });
  }
  if (country === "WorldWide" && country !== currCountry) {
    setCurrCountry(country);
    setPosition(center);
    setMapCenter(center);
  }

  Leaflet.Popup.prototype.options.offset = [-1, -39];
  Leaflet.Marker.prototype.options.icon = defaultIcon;

  return <div className="map">{displayMap}</div>;
}
