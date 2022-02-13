import React, { useState } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  Autocomplete,
  TextField,
  styled,
} from "@mui/material";
import { IoLocationOutline } from "react-icons/io";
import "./CountriesDropdown.css";

export default function Dropdown(props) {
  const countryChangeHandler = (e, newValue) => {
    console.log(newValue);
    props.onChangeCountry(newValue);
  };

  const [value, setValue] = useState(props.countriesArr[0]);

  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "gray",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "gray",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#eceff1",
        borderRadius: 30,
      },
      "&:hover fieldset": {
        borderColor: "#eceff1",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#eceff1",
      },
    },
  });

  return (
    <div className="dropdown">
      <Autocomplete
        value={value}
        id="combo-box-demo"
        options={props.countriesArr}
        sx={{
          width: "100%",
          backgroundColor: "#eceff1",
          borderRadius: "30px",
        }}
        onChange={countryChangeHandler}
        renderInput={(params) => {
          // return <TextField {...params} label="🌍 Search location" fullWidth />;
          return (
            <CssTextField
              {...params}
              label="&nbsp;🌍 Search location"
              id="custom-css-input"
              style={{
                borderRadius: "30px",
              }}
            />
          );
        }}
      />
    </div>
  );
}
