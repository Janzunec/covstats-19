import React, { useEffect, useState } from "react";
import CountriesDropdown from "../../components/Left/CountriesDropdown";
import StatisticsRight from "../../components/Right/StatisticsRight";
import "./Statistics.css";

export default function Statistcs() {
  const [countries, setCountries] = useState([]);
  const [countryData, setCountryData] = useState({});
  const [country, setCountry] = useState("WorldWide");
  const [isAllTime, setIsAllTime] = useState(true);
  const [tableData, setTableData] = useState([]);

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
