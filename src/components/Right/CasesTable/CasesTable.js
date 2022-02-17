import React from "react";
import "./CasesTable.css";

export default function CasesTable(props) {
  return (
    <React.Fragment>
      <h3>SURVEILLANCE TABLE</h3>
      <div className="table">
        {props.tableData.map((val, i) => {
          return (
            <div
              className="row"
              key={
                val.countryInfo._id === null
                  ? Math.random()
                  : val.countryInfo._id
              }
            >
              <div className="row-country">{(i, val.country)}</div>
              <div className="row-cases">{val.cases}</div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
