import React, { useState } from "react";
import DaysDropdown from "../DaysDropdown/DaysDropdown";
import { FaSquare } from "react-icons/fa";
import "./TotalCases.css";

export default function TotalCases(props) {
  const allCases = props.data.cases;
  const activeCases = props.data.active;
  const recovered = props.data.recovered;
  const deaths = props.data.deaths;

  console.log(allCases, activeCases, recovered, deaths);

  const calculatePercentage = () => {
    const percentage = {
      activePercentage: 0,
      recoveredPercentage: 0,
      fatalPercentage: 0,
    };

    percentage.activePercentage = Math.ceil((activeCases * 100) / allCases);
    percentage.recoveredPercentage = Math.trunc((recovered * 100) / allCases);
    percentage.fatalPercentage = Math.trunc((deaths * 100) / allCases);

    return percentage;
  };

  const graphPercentage = calculatePercentage();

  console.log(graphPercentage);

  return (
    <div className="total-cases">
      <div className="total-cases-heading">
        <h3>Total Confirmed Cases</h3>
        <DaysDropdown />
      </div>
      <div className="cases-num">
        {Intl.NumberFormat("en-UK").format(allCases)}
      </div>
      <div className="cases-bar">
        <div
          className="recovered"
          style={{ width: `${graphPercentage.recoveredPercentage}%` }}
        ></div>
        <div
          className="active"
          style={{ width: `${graphPercentage.activePercentage}%` }}
        ></div>
        <div
          className="fatal"
          style={{ width: `${graphPercentage.fatalPercentage}%` }}
        ></div>
      </div>
      <ul className="total-list">
        <li className="list-case">
          <div>
            <span className="total-legend__recovered">
              <FaSquare />
            </span>
            &nbsp; Recovered cases
          </div>
          <div>{Intl.NumberFormat("en-UK").format(recovered)}</div>
        </li>
        <li className="list-case">
          <div>
            <span className="total-legend__active">
              <FaSquare />
            </span>
            &nbsp; Active cases
          </div>
          <div>{Intl.NumberFormat("en-UK").format(activeCases)}</div>
        </li>
        <li className="list-case">
          <div>
            <span className="total-legend__fatal">
              <FaSquare />
            </span>
            &nbsp; Fatal cases
          </div>
          <div>{Intl.NumberFormat("en-UK").format(deaths)}</div>
        </li>
      </ul>
    </div>
  );
}
