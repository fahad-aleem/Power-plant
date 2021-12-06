import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((them) => ({
  root: {
    display: "flex !important",
    justifyContent: "space-between !important",
  },
  link: {
    color: "#fff",
    padding: "1rem",
    textDecoration: "none",
    fontSize: "1rem",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="relative" color="primary">
      <Toolbar className={classes.root}>
        <Typography variant="h6">Power Generation</Typography>
        <div>
          <Link className={classes.link} to="/">
            Home
          </Link>
          <Link className={classes.link} to="/user">
            User
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
