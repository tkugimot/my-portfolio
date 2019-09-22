import React from 'react';
import {Grid, makeStyles, Typography} from "@material-ui/core";
import ProfileImage from "./ProfileImage";
import SocialLinks from "./SocialLinks";

const useStyles = makeStyles({
    helloWorld: {
        width: "100%",
        textAlign: "center",
    },
    typography: {
        width: "100%",
        textAlign: "center",
    },
    myname: {
        textAlign: "center",
        fontWeight: 900,
        margin: "20px 0px",
        color: '#141414',
    },
    grid: {
    }
});

const Top: React.FC = () => {
    const classes = useStyles();

    return (
      <Grid container justify="center" spacing={5}>
          <Grid item xs={12} className={classes.grid}>
              <ProfileImage />
          </Grid>
          <Grid item xs={12} container justify="center" alignItems="center">
              <Typography variant="h4" component="h4" className={classes.helloWorld} gutterBottom>
                  Hello World :)
              </Typography>
              <Typography variant="h5" component="h5" className={classes.myname} gutterBottom>
                  I'm Toshimitsu Kugimoto.
              </Typography>
              <Typography variant="h5" component="h5" className={classes.typography} gutterBottom>
                  Software Engineer.
              </Typography>
          </Grid>
          <Grid item xs={12} container justify="center" alignItems="center">
              <SocialLinks />
          </Grid>
      </Grid>
    )
};

export default Top;