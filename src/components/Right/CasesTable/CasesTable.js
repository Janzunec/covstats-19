import React from "react";
import "./CasesTable.css";

export default function CasesTable(props) {
  console.log(props.tableData);
  return (
    <React.Fragment>
      <h3>SURVEILLANCE TABLE</h3>
      <div className="table">
        {props.tableData.map((val) => {
          return (
            <tr className="spaced">
              <td>{val.country}</td>
              <td>{val.cases}</td>
            </tr>
          );
        })}
      </div>
    </React.Fragment>
  );
}
