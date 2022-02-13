import React, { useState } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";

export default function DaysDropdown(props) {
  const [days, setDays] = useState(7);

  const daysArr = ["Today", "Yesterday", 3, 5, 7];

  const daysChangeHandler = (e) => {
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
            return (
              <MenuItem key={Math.random()} value={el}>
                Last {el} days
              </MenuItem>
            );
          })}
          );
        </Select>
      </FormControl>
    </div>
  );
}
