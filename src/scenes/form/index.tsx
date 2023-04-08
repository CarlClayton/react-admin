import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { fields, FormValues, initialValues, phoneRegExp } from "./fields";

const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("Invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values: FormValues) => {
    console.log(values);
  };
  return (
    <Box m={"20px"}>
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display={"grid"}
              gap={"30px"}
              gridTemplateColumns={"repeat(4, minmax(0, 1fr)"}
              sx={{
                "& > div": {
                  gridColumn: isNonMobile ? undefined : "span 4",
                },
              }}
            >
              {fields.map((field, index) => (
                <TextField
                  key={index}
                  fullWidth
                  variant="filled"
                  type="text"
                  label={field.label}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name={field.name}
                  error={
                    !!touched[field.name as keyof FormValues] &&
                    !!errors[field.name as keyof FormValues]
                  }
                  helperText={
                    touched[field.name as keyof FormValues] &&
                    errors[field.name as keyof FormValues]
                  }
                  sx={{ gridColumn: `span ${field.span}` }}
                />
              ))}
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
