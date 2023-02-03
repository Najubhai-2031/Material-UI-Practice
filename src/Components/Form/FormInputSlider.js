import { FormLabel, Slider } from "@mui/material";
import React, { useEffect } from "react";
import { Controller } from "react-hook-form";

export const FormInputSlider = ({
  name,
  control,
  setValue,
  label,
}) => {
  const [sliderValue, setSliderValue] = React.useState(5);

  useEffect(() => {
    if (sliderValue) setValue(name, sliderValue);
  }, [sliderValue]);

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <>
      <FormLabel component="legend" required>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState, formState }) => (
          <Slider
            value={sliderValue}
            onChange={handleChange}
            valueLabelDisplay="auto"
            min={0}
            max={10}
            step={1}
          />
        )}
      />
    </>
  );
};
