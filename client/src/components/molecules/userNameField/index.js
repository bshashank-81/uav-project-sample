import React from "react";
import {
  makeStyles,
  FormControl,
  TextField,
  Typography,
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

const UserName = ({ label, placeholder }) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.textField} fullWidth>
      <Typography className={classes.label}>{label}</Typography>
      <TextField
        placeholder={placeholder}
        type="text"
        required
        fullWidth
      ></TextField>
    </FormControl>
  );
};

export default UserName;
