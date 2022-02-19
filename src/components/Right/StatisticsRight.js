import React from "react";
import TotalCases from "../../components/Right/TotalCases/TotalCases";
import ActiveCases from "./CasesGraphs/ActiveCases/ActiveCases";
import ClosedCases from "./CasesGraphs/ClosedCases/ClosedCases";
import CasesTable from "./CasesTable/CasesTable";
import "./StatisticsRight.css";

export default function StatisticsRight(props) {
  return (
    <div className="right">
      <h1 className="title">
        <b>COVID 19</b>&nbsp;<span>({props.selectedCountry})</span>
      </h1>
      <div className="right-total">
        <TotalCases
          isAllTime={props.isAllTime}
          updateDays={props.updateDays}
          countriesArr={props.countriesArr}
          selectedCountry={props.selectedCountry}
          data={props.data}
        />
      </div>
      <div className="statistics-right__graphs">
        <div className="graph-active">
          <ActiveCases data={props.data} isAllTime={props.isAllTime} />
        </div>
        <div className="graph-closed">
          <ClosedCases data={props.data} isAllTime={props.isAllTime} />
        </div>
      </div>
      <div className="statistics-right__table">
        <CasesTable tableData={props.tableData}></CasesTable>
      </div>
    </div>
  );
}
