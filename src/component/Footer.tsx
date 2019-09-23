import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
  footer: {
    margin: "50px 0",
    textAlign: "center",
    fontFamily: "Ubuntu",
  },
});

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
      <div className={classes.footer}>
        &copy; Toshimitsu Kugimoto (2019)
      </div>
  )
};

export default Footer;
