import React from "react";
import { useField } from "formik";

import { TextField, Grid, Typography } from "@material-ui/core";

// components
import ErrorMessage from "./ErrorMessage";

// styles
import useStyles from "./styles";

function AppFormField({ label, ...props }) {
  let classes = useStyles();

  const [field, meta] = useField(props);

  return (
    <>
      <Grid container spacing={3} style={{alignItems: "center", marginBottom: "10px"}}>
        <Grid item md={2}>
          <Typography variant="h6" classes={{root: classes.label}}>
            {label}
          </Typography>
        </Grid>
        <Grid item md={4}>
          <TextField
            variant="outlined"
            fullWidth
            {...field}
            {...props}
          />
          <ErrorMessage
            error={meta.error}
            visible={!!(meta.touched && meta.error)}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default AppFormField;
