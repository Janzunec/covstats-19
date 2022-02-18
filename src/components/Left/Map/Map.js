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
import { popupContent, popupCases } from "./popupStyles";

export default function Map({ countryData, country }) {
  const [center, setCenter] = useState({
    lat: 30.80746,
    lng: 0.4796,
  });
  const [zoom, setZoom] = useState(3);
  const [currCountry, setCurrCountry] = useState("WorldWide");
  const [position, setPosition] = useState([50, 0]);
  const [mapCenter, setMapCenter] = useState(center);
  const [countryIsSelected, setCountryIsSelected] = useState(false);

  let defaultIcon = Leaflet.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [28, 46],
    iconAnchor: [17, 46],
  });

  // function DisplayPosition({ map }) {
  //   const onClick = useCallback(() => {
  //     map.setView(center, zoom);
  //   }, [map]);

  //   return <></>;
  // }

  const [map, setMap] = useState(null);

  const displayMap = (
    <MapContainer center={mapCenter} zoom={zoom} whenCreated={setMap}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {countryIsSelected && (
        <Marker position={position}>
          <Popup>
            <div style={popupContent}>
              <div>{currCountry}:</div>
              <div style={popupCases}>
                {Intl.NumberFormat("en-UK").format(countryData.cases)}
              </div>
            </div>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );

  if (countryData.country !== undefined && country !== currCountry) {
    const latLng = [countryData.countryInfo.lat, countryData.countryInfo.long];
    setZoom(5);
    setCurrCountry(countryData.country);
    setPosition(latLng);
    setMapCenter(latLng);
    setCountryIsSelected(true);
    map.setView(latLng, zoom, {
      Animation: true,
      AnimationTimeline: 500,
    });
  }
  if (country === "WorldWide" && country !== currCountry) {
    setZoom(2);
    setCurrCountry(country);
    setPosition(center);
    setMapCenter(center);
    setCountryIsSelected(true);
  }

  Leaflet.Popup.prototype.options.offset = [-1, -39];
  Leaflet.Marker.prototype.options.icon = defaultIcon;

  return <div className="map">{displayMap}</div>;
}
