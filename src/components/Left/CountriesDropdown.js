import { FormControl, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import './CountriesDropdown.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Dropdown(props) {
  const countryChangeHandler = (e) => {
    props.onChangeCountry(e.target.value);
  };
  // const [value, setValue] = React.useState(props.countriesArr[0]);
  // const [inputValue, setInputValue] = React.useState('');

  return (
    <div className="app__left">
      <FormControl className="app__dropdown">
        <Select
          variant="outlined"
          value={props.selectedCountry}
          onChange={countryChangeHandler}
        >
          <MenuItem key={Math.random()} value="WorldWide">
            WorldWide
          </MenuItem>
          {props.countriesArr.map((val) => {
            return (
              <MenuItem key={Math.random()} value={val}>
                {val}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {/* <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={props.arrCountries}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
      /> */}
    </div>
  );
}
