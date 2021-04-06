import React from "react";
import { useFormikContext } from "formik";
import { Button } from "@material-ui/core";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return (
    <Button
      onClick={handleSubmit}
      variant="contained"
      size="medium"
      color="primary"
    >
      {title}
    </Button>
  );
}

export default SubmitButton;
