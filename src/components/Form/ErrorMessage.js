import React from "react";
import { Typography, Fade } from "@material-ui/core";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return (
    <Fade in={visible}>
      <Typography color="secondary">{error}</Typography>
    </Fade>
  );
}

export default ErrorMessage;
