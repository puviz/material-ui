import React from "react";
import { Typography, Paper, Grid, RadioGroup, Button } from "@material-ui/core";
import * as Yup from "yup";
import { Form, Formik } from "formik";

// components
import {
  RadioField,
  FormField,
  SelectField,
  SubmitButton,
  Checkbox,
} from "../../components/Form";
import PageTitle from "../../components/PageTitle";

// styles
import useStyles from "./styles";
import { permissions } from "./mockData";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  userType: Yup.string().required().label("User Type"),
});

const userTypes = [
  { label: "Internal", value: "internal" },
  { label: "External", value: "external" },
];

function Onboarding() {
  let classes = useStyles();

  const handleSubmit = (value) => {
    console.log("Test", value);
  };

  return (
    <>
      <PageTitle title="User Onboarding" />
      <Formik
        initialValues={{
          name: "",
          username: "",
          email: "",
          status: "active",
          permissions: [],
          userType: "internal",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values, setFieldValue, handleChange }) => {
          console.log(values);
          return (
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper
                    style={{ padding: 36 }}
                    elevation={6}
                    variant="elevation"
                  >
                    <Grid container spacing={3}>
                      <Grid item md={2}>
                        <Typography variant="h6" className={classes.label}>
                          User Type
                        </Typography>
                      </Grid>
                      <Grid item md={4}>
                        <RadioGroup row>
                          {userTypes.map((type) => (
                            <RadioField
                              key={type.value}
                              name="userType"
                              value={type.value}
                              label={type.label}
                              onChange={(e) => {
                                handleChange(e);
                                setFieldValue("permissions", []);
                              }}
                            />
                          ))}
                        </RadioGroup>
                      </Grid>
                    </Grid>

                    <FormField name="username" label="Username" type="text" />
                    <FormField name="name" label="Name" type="text" />
                    <FormField name="email" label="Email" type="text" />
                    <SelectField
                      name="status"
                      label="Status"
                      items={[
                        { value: "active", label: "Active" },
                        { value: "deactive", label: "Deactive" },
                      ]}
                    ></SelectField>

                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <Typography
                          variant="h5"
                          classes={{ root: classes.permission }}
                        >
                          Permissions
                        </Typography>
                        {values && values.userType
                          ? permissions[
                              values.userType
                            ].map((permission, idx) => (
                              <Checkbox
                                key={idx}
                                label={permission}
                                value={permission}
                                name="permissions"
                              />
                            ))
                          : null}
                      </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6} style={{ textAlign: "right" }}>
                        <SubmitButton title="Add" />
                        <Button
                          onClick={handleSubmit}
                          variant="contained"
                          size="medium"
                          color="secondary"
                          classes={{ root: classes.cancelBtn }}
                        >
                          Cancel
                        </Button>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default Onboarding;
