import React, { useEffect, useState } from "react";
import CountriesDropdown from "../../components/Left/CountriesDropdown";
import StatisticsRight from "../../components/Right/StatisticsRight";
import Map from "../../components/Left/Map";
import "./Statistics.css";
import "leaflet/dist/leaflet.css";
export default function Statistcs() {
  const [countries, setCountries] = useState([]);
  const [countryData, setCountryData] = useState({});
  const [country, setCountry] = useState("WorldWide");
  const [isAllTime, setIsAllTime] = useState(true);
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({
    lat: 34.80746,
    lng: -40.4796,
  });
  const [mapZoom, setMapZoom] = useState(3);

  useEffect(async () => {
    const resp = await fetch("https://disease.sh/v3/covid-19/countries/");
    const data = await resp.json();
    const countries = data.map((val) => {
      return val.country;
    });
    const sortedData = [...data];
    sortedData.sort((a, b) => {
      if (a.cases > b.cases) {
        return -1;
      } else {
        return 1;
      }
    });
    setTableData(sortedData);
    setCountries(countries);
  }, []);

  useEffect(async () => {
    const resp = await fetch("https://disease.sh/v3/covid-19/all");
    const data = await resp.json();
    setCountryData(data);
  }, []);

  //HandlerFuntions
  const countryChangeHandler = async (parsedCountry) => {
    let resp, data;
    let selectedCountry;
    if (parsedCountry === null || parsedCountry === "WorldWide") {
      resp = await fetch(`https://disease.sh/v3/covid-19/all`);
      selectedCountry = "WorldWide";
    } else {
      resp = await fetch(
        `https://disease.sh/v3/covid-19/countries/${parsedCountry}`
      );
      selectedCountry = parsedCountry;
    }

    data = await resp.json();

    setCountryData(data);
    setCountry(selectedCountry);
  };
  //Driller fucntion
  const updateDays = (e) => {
    console.log(e);
    setIsAllTime(e);
  };

  return (
    <div className="statistics">
      <div className="statistics-left">
        <CountriesDropdown
          countriesArr={countries}
          selectedCountry={country}
          onChangeCountry={countryChangeHandler}
        />
        <Map center={mapCenter} zoom={mapZoom}></Map>
      </div>
      <div className="statistics-right">
        <StatisticsRight
          updateDays={updateDays}
          isAllTime={isAllTime}
          countriesArr={countries}
          selectedCountry={country}
          data={countryData}
          tableData={tableData}
        />
      </div>
    </div>
  );
}
