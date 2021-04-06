import React from "react";
import { useField } from "formik";

import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

// styles
import useStyles from "./styles";

function AppCheckbox({ label, ...props }) {
  let classes = useStyles();
  const [field] = useField({ ...props, type: 'checkbox' });

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
              {...field} {...props}
              />
            }
            label={label}
          />
      
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default AppCheckbox;