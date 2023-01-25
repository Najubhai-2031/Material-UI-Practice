import { Button, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputText } from "../../Components/Form/FormInputText";

const defaultValues = {
  name: "",
  email: "",
};

export const SignIn = () => {
  const methods = useForm({ defaultValues: defaultValues });
  const { handleSubmit, reset, control } = methods;
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
        Sign In{" "}
      </Typography>

      <FormInputText name="firstName" control={control} label="Name" />
      <FormInputText name="email" control={control} label="Email" />

      <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
        {" "}
        Sign In{" "}
      </Button>
      <Button onClick={() => reset()} variant={"outlined"}>
        {" "}
        Reset{" "}
      </Button>
    </Paper>
  );
};
