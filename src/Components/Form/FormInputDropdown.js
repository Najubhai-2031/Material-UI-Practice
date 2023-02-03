import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { Stack } from "@mui/system";

const options = [
  { label: "UG", value: 1 },
  { label: "PG", value: 2 },
  { label: "PHD", value: 3 },
];

export const FormInputDropdown = (name) => {
  const defaultProps = {
    options: options,
    getOptionLabel: (option) => option.label,
  };

  return (
    <>
      <Stack spacing={1} sx={{ width: "100%" }}>
        <Autocomplete
          {...defaultProps}
          id="clear-on-escape"
          clearOnEscape
          renderInput={(params) => (
            <TextField
              name={name}
              required
              {...params}
              label="Select your highest Education"
              variant="standard"
            />
          )}
        />
      </Stack>
    </>
  );
};
