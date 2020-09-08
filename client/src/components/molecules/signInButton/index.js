import React from "react";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: "none",
    backgroundColor: "#223080",
    marginTop: "5%",
    borderRadius: "6px",
  },
}));

const SignInButton = ({ buttonText, onClick }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      type="button"
      variant="contained"
      color="primary"
      fullWidth
      onClick={onClick}
    >
      {buttonText}
    </Button>
  );
};

export default SignInButton;
