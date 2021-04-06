import React from "react";
import { useField } from "formik";

import { Select, Grid, Typography, MenuItem } from "@material-ui/core";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ label, items, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item md={2}>
          <Typography variant="h6" style={{ fontWeight: 400 }}>
            {label}
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Select {...field} {...props}>
            {items.map((item, key) => (
              <MenuItem value={item.value} key={key}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
          <ErrorMessage
            error={meta.error}
            visible={meta.touched && meta.error}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default AppFormField;
