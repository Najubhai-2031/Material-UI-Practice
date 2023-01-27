import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { Stack } from "@mui/system";

const option = [
  { label: "UG", value: 1 },
  { label: "PG", value: 2 },
  { label: "PHD", value: 3 },
];

export const FormInputDropdown = () => {
  const defaultProps = {
    options: option,
    getOptionLabel: (option) => option.label,
  };

  return (
    <>
      <Stack spacing={1} sx={{ width: "100%" }}>
        <Autocomplete
          {...defaultProps}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Your Highest Education"
              variant="standard"
            />
          )}
        />
      </Stack>
    </>
  );
};
