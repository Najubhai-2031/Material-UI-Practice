import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const options = [
  {
    label: "--Select your max education--"
  },
  {
    label: "UG",
    value: "1",
  },
  {
    label: "PG",
    value: "2",
  },
  {
    label: "PHD",
    value: "3",
  },
];


export const FormInputDropdown= ({
  name,
  control,
  label,
}) => {
  const generateSingleOptions = () => {
    return options.map((option) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl size={"small"}  >
      <InputLabel >{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select onChange={onChange} value={value}>
            {generateSingleOptions()}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};
