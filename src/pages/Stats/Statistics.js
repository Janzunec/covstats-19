import React, { useEffect, useState } from "react";
import Dropdown from "../../components/Left/CountriesDropdown";
import StatisticsRight from "../../components/Right/StatisticsRight";
import "./Statistics.css";

export default function Statistcs() {
  const [countries, setCountries] = useState([]);
  const [countryData, setCountryData] = useState({});
  const [country, setCountry] = useState("WorldWide");

  useEffect(async () => {
    const resp = await fetch("https://disease.sh/v3/covid-19/countries/");
    const data = await resp.json();
    const countries = data.map((val) => {
      return val.country;
    });

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

  return (
    <div className="statistics">
      <div className="statistics-left">
        <Dropdown
          countriesArr={countries}
          selectedCountry={country}
          onChangeCountry={countryChangeHandler}
        />
      </div>
      <div className="statistics-right">
        <StatisticsRight
          countriesArr={countries}
          selectedCountry={country}
          data={countryData}
        />
      </div>
    </div>
  );
}
