import React, { useState } from "react";
import TotalCases from "../../components/Right/TotalCases/TotalCases";
import "./StatisticsRight.css";
import ActiveCases from "./CasesGraphs/ActiveCases/ActiveCases";
import ClosedCases from "./CasesGraphs/ClosedCases/ClosedCases";

export default function StatisticsRight(props) {
  return (
    <div className="right">
      <h1 className="title">
        <b>COVID 19</b>&nbsp;<span>({props.selectedCountry})</span>
      </h1>
      <div className="right-total">
        <TotalCases
          countriesArr={props.countriesArr}
          selectedCountry={props.selectedCountry}
          data={props.data}
        />
      </div>
      <div className="statistics-right__graphs">
        <div className="graph-active">
          <ActiveCases />
        </div>
        <div className="graph-closed">
          <ClosedCases />
        </div>
      </div>
      <div className="statistics-right__table"></div>
    </div>
  );
}
