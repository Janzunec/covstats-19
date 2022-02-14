import React, { useState } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";

export default function DaysDropdown(props) {
  const [days, setDays] = useState("All Time");

  const daysArr = ["Today", "All Time"];

  const daysChangeHandler = (e) => {
    props.updateDays(e.target.value);
    setDays(e.target.value);
  };

  return (
    <div>
      <FormControl className="app__dropdown">
        <Select
          variant="outlined"
          value={days}
          onChange={daysChangeHandler}
          style={{
            height: "40px",
            border: "1px solid #ddd",
            color: "#999",
            minWidth: "100px",
            borderRadius: "12px",
          }}
        >
          return (
          {daysArr.map((el) => {
            if (typeof el === "string") {
              return (
                <MenuItem key={Math.random()} value={el}>
                  {el}
                </MenuItem>
              );
            }
          })}
          );
        </Select>
      </FormControl>
    </div>
  );
}
