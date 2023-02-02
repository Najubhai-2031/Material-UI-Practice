import { Button, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputText } from "../../Components/Form/FormInputText";
import { FormInputRadio } from "../../Components/Form/FormInputRadio";
import { FormInputDate } from "../../Components/Form/formInputDate";
import { FormInputMultiCheckbox } from "../../Components/Form/FormInputMultiCheckbox";
import { FormInputSlider } from "../../Components/Form/FormInputSlider";
import { FormInputDropdown } from "../../Components/Form/FormInputDropdown";

const defaultValues = {
  firstName: "",
  userName: "",
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
  const { handleSubmit, reset, control, setValue } = methods;
  const onSubmit = (data) => console.log(data);

  return (
    <Paper
      style={{
        display: "grid",
        width: "100%",
        padding: "20px 0px",
        justifyContent: "center",
        gridRowGap: "20px",
      }}
    >
      <Typography
        variant="h6"
        style={{ textAlign: "center", fontWeight: "800" }}
      >
        Sign Up
      </Typography>

      <FormInputText name="username" control={control} label="Username" />
      <FormInputText name="firstName" control={control} label="First Name" />
      <FormInputText name="lastName" control={control} label="Last Name" />
      <FormInputText name="email" control={control} label="Email" />

      <FormInputRadio name={"gender"} control={control} label={"Gender"} />
      <FormInputDropdown
        name="education"
        control={control}
        setValue={setValue}
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
        Sign Up
      </Button>
      <Button onClick={() => reset()} variant={"outlined"}>
        Reset
      </Button>
    </Paper>
  );
};
