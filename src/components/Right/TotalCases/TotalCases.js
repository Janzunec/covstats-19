import { FormControl, MenuItem, Select } from '@material-ui/core';
import React, { useState } from 'react';
import './TotalCases.css';

export default function TotalCases(props) {
  const [days, setDays] = useState(7);

  const daysChangeHandler = (e) => {
    setDays(e.target.value);
  };

  const daysArr = ['Yesterday', 2, 3, 4, 5, 6, 7];

  return (
    <div className="total-cases">
      <div>
        <h3>Total Confirmed Cases</h3>
        <h4>{props.data.cases}</h4>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value={days} onChange={daysChangeHandler}>
            return (
            {daysArr.map((el) => {
              if (el === 'Yesterday') {
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
    </div>
  );
}
