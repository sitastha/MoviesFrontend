import React from "react";
import Toolbar from "@material-ui/core/Toolbar";

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Login from "./Login";
import Main from "../../pages/home";
import Trend from "../../pages/Trend";
import Last from "../../pages/Last";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuItem: {
    color: "white",
    textDecoration: "none",
    margin: 10,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to={"/Main"} color="inherit" className={classes.menuItem}>
          New Movie{" "}
        </Link>
        <Link to={"/Trend"} color="inherit" className={classes.menuItem}>
          Trending Movie{" "}
        </Link>
        <Link to={"/Last"} color="inherit" className={classes.menuItem}>
          Last Seen Movie{" "}
        </Link>

        <Link to={"/Login"} color="inherit" className={classes.menuItem}>
          Log In
          {" "}
        </Link>
        <Link to={"/SignUp"} color="inherit" className={classes.menuItem}>
          Sign Up
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
