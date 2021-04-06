import React from "react";
import { useField } from "formik";

import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

// styles
import useStyles from "./styles";

function AppRadioField({ label, ...props }) {
  let classes = useStyles();
  const [field] = useField({ ...props, type: "radio" });

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            control={<Radio {...field} {...props} />}
            label={label}
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default AppRadioField;
