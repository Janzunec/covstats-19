import React, { useEffect, useState } from 'react';
import Dropdown from '../../components/Left/CountriesDropdown';
import TotalCases from '../../components/Right/TotalCases/TotalCases';
import './Statistics.css';

export default function Statistcs() {
  const [countries, setCountries] = useState([]);
  const [countryData, setCountryData] = useState({});
  const [country, setCountry] = useState('WorldWide');

  useEffect(async () => {
    const resp = await fetch('https://disease.sh/v3/covid-19/countries/');
    const data = await resp.json();
    const countries = data.map((val) => {
      return val.country;
    });

    setCountries(countries);
  }, []);

  useEffect(async () => {
    const resp = await fetch('https://disease.sh/v3/covid-19/all');
    const data = await resp.json();
    setCountryData(data);
  }, []);

  //HandlerFuntions
  const countryChangeHandler = async (parsedCountry) => {
    let resp, data;

    if (parsedCountry === 'WorldWide') {
      resp = await fetch(`https://disease.sh/v3/covid-19/all`);
    } else {
      resp = await fetch(
        `https://disease.sh/v3/covid-19/countries/${parsedCountry}`
      );
    }

    data = await resp.json();

    setCountryData(data);
    setCountry(parsedCountry);
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
        <h1>COVID 19 ({country})</h1>
        <div>
          <TotalCases
            countriesArr={countries}
            selectedCountry={country}
            data={countryData}
          />
        </div>
        <div className="app">
          {/* THIS IS THE GRAPH DIV */}
          <div></div>
          {/* THIS IS THE SURVEILLANCE TABLE DIV */}
          <div></div>
        </div>
      </div>
    </div>
  );
}
