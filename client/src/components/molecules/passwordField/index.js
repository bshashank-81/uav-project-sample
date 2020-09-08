import React from "react";
import {
  makeStyles,
  FormControl,
  Typography,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  label: {
    color: "#333333",
    fontSize: "12px",
    paddingBottom: "8px",
    float: "left",
    alignSelf: "baseline",
  },
  textField: {
    paddingBottom: "9px",
  },
}));

const Password = ({ label, placeholder }) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.textField} fullWidth>
      <Typography className={classes.label}>{label}</Typography>
      <TextField
        placeholder={placeholder}
        required
        fullWidth
        type="Text"
      ></TextField>
    </FormControl>
  );
};

export default Password;
