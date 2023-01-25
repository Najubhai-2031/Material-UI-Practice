// import { Button, Paper, Typography } from "@material-ui/core";
import { Button, Paper, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { FormInputText } from "./Components/FormInputText";
import { FormInputRadio } from "./Components/FormInputRadio";
import { FormInputDropdown } from "./Components/FormInputDropdown";
import { FormInputDate } from "./Components/formInputDate";
import { FormInputSlider } from "./Components/FormInputSlider";
import { FormInputMultiCheckbox } from "./Components/FormInputMultiCheckbox";


const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  coures: [],
  birthDate: new Date(),
  education: "",
  selfRating: 0,
};

export const SignUp = () => {
  const methods = useForm({ defaultValues: defaultValues });
  const { handleSubmit, reset, control, setValue, watch } = methods;
  const onSubmit = (data) => console.log(data);

  return (
    <Paper
      style={{
        display: "grid",
        width: "100%",
        justifyContent: "center",
        gridRowGap: "20px",
      }}
    >
      <Typography variant="h6" style={{ textAlign: "center" }}>
        {" "}
        Sign Up{" "}
      </Typography>

      <FormInputText name="firstName" control={control} label="First Name" />
      <FormInputText name="lastName" control={control} label="Last Name" />
      <FormInputText name="email" control={control} label="Email" />

      <FormInputRadio name={"gender"} control={control} label={"Gender"} />
      <FormInputDropdown
        name="education"
        control={control}
        label="Select your highest Education"
      />
      <FormInputDate name="birthDate" control={control} label="Birth Date" />
      <FormInputMultiCheckbox
        control={control}
        setValue={setValue}
        name={"coures"}
        label={"Select Courses"}
      />
      <FormInputSlider
        name={"selfRating"}
        control={control}
        setValue={setValue}
        label={"Rate Your Self"}
      />

      <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
        {" "}
        Submit{" "}
      </Button>
      <Button onClick={() => reset()} variant={"outlined"}>
        {" "}
        Reset{" "}
      </Button>
    </Paper>
  );
};
