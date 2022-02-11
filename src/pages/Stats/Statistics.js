import { React, useState, useEffect } from "react";
import "./Statistics.css";
import { Select, MenuItem, FormControl } from "@material-ui/core";

export default function Statistcs() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryData, setCountryData] = useState({});
  const [days, setDays] = useState(7);
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
  const countryChangeHandler = async (e) => {
    const resp = await fetch(
      `https://disease.sh/v3/covid-19/countries/${e.target.value}`
    );
    const data = await resp.json();
    setCountryData(data);
    setCountry(e.target.value);
  };
  const daysChangeHandler = (e) => {
    setDays(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="statistics">
      <div className="app">
        <div className="app__left">
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              value={country}
              onChange={countryChangeHandler}
            >
              <MenuItem key={Math.random()} value="worldwide">
                WorldWide
              </MenuItem>
              {countries.map((val) => {
                return (
                  <MenuItem key={Math.random()} value={val}>
                    {val}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        <div className="app__right">
          {/* THIS IS THE HEADING DIV */}
          <div>
            <h2>Covid-19 ({country})</h2>
          </div>
          {/* THIS IS THE TOTAL CONFIRMED CASES AND COLOR BRICK INFORMATION DIV */}
          <div>
            <h3>Total Confirmed Cases</h3>
            <h4>{countryData.cases}</h4>
            <FormControl className="app__dropdown">
              <Select
                variant="outlined"
                value={days}
                onChange={daysChangeHandler}
              >
                return (
                <MenuItem key={Math.random()} value="2">
                  2
                </MenuItem>
                <MenuItem key={Math.random()} value="3">
                  3
                </MenuItem>
                <MenuItem key={Math.random()} value="4">
                  4
                </MenuItem>
                <MenuItem key={Math.random()} value="5">
                  5
                </MenuItem>
                <MenuItem key={Math.random()} value="6">
                  6
                </MenuItem>
                <MenuItem key={Math.random()} value="7">
                  7
                </MenuItem>
                );
              </Select>
            </FormControl>
          </div>
          {/* THIS IS THE GRAPH DIV */}
          <div></div>
          {/* THIS IS THE SURVEILLANCE TABLE DIV */}
          <div></div>
        </div>
      </div>
    </div>
  );
}
