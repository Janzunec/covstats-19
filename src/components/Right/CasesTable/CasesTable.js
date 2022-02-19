import React, { useState } from "react";
import { BiSortAlt2 } from "react-icons/bi";
import "./CasesTable.css";

export default function CasesTable(props) {
  const [sortedData, setSortedData] = useState([...props.tableData]);
  const [sortType, setSortType] = useState(null);

  if (sortType === null) {
    setSortedData(
      sortedData.sort((a, b) => {
        if (a.cases > b.cases) return -1;
        return 1;
      })
    );
    setSortType("asc");
  }

  const sortDataHandler = (e) => {
    // let sortDataType;
    // switch (e.target.children) {
    //   case "Country":
    //     break;

    //   default:
    //     break;
    // }
    // console.log(e);

    if (sortType === "asc") {
      setSortedData(
        sortedData.sort((a, b) => {
          if (a.cases < b.cases) return -1;
          return 1;
        })
      );
      setSortType("desc");
      return;
    }
    setSortedData(
      sortedData.sort((a, b) => {
        if (a.cases > b.cases) return -1;
        return 1;
      })
    );
    setSortType("asc");
  };

  return (
    <React.Fragment>
      <h3>SURVEILLANCE TABLE</h3>
      <div className="table">
        <div className="table-headers" key={0}>
          <div className="header heading-country" onClick={sortDataHandler}>
            Country
            <BiSortAlt2 style={{ fontSize: "22px", marginLeft: "40%" }} />
          </div>
          <div className="header">Total Cases</div>
          <div className="header">New cases</div>
          <div className="header">Total deaths</div>
          <div className="header">New Deaths</div>
        </div>
        <div className="table-data">
          {sortedData.map((val, i) => {
            return (
              <div
                className="row"
                key={
                  val.countryInfo._id === null
                    ? Math.random()
                    : val.countryInfo._id
                }
              >
                <div className="row-country attribute">{(i, val.country)}</div>
                <div className="row-cases__total attribute">{val.cases}</div>
                <div className="row-cases__new attribute">{val.todayCases}</div>
                <div className="row-deaths__total attribute">{val.deaths}</div>
                <div className="row-deaths__new attribute">
                  {val.todayDeaths}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
