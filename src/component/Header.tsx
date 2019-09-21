import React from 'react';
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
  header: {
    marginTop: "50px"
  },
});

const Header: React.FC = () => {
  const classes = useStyles();

  return (
      <div className={classes.header}>
        {/*<ul>*/}
        {/*  <li>*/}
        {/*    <Link to="/">Home</Link>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <Link to="/about">About</Link>*/}
        {/*  </li>*/}
        {/*</ul>*/}
      </div>
  )
};

export default Header;
