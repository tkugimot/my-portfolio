import React from 'react';
import {Grid, makeStyles, Typography} from "@material-ui/core";
import {orange} from "@material-ui/core/colors";

const useStyles = makeStyles({
  about: {
  },
  title: {
    padding: "24px"
  },
  profile: {
    padding: "0 8px"
  },
  skill: {
    padding: "0 8px"
  }
});

const About: React.FC = () => {
  const classes = useStyles();

  return (
      <Grid item xs={12} container justify="center" alignItems="center" className={classes.about}>
        <Grid item xs={12} container justify="center" alignItems="center">
          <Typography variant="h5" component="h5" gutterBottom color="secondary" className={classes.title}>
            Get to know me.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} container justify="center" alignItems="center" className={classes.profile}>
          <Typography variant="h5" component="h5" gutterBottom color="primary" className={classes.title}>
            My Profile
          </Typography>
          <Typography variant="body1" gutterBottom>
            I am a software engineer, web developer and a problem solver.
            I am always trying to improve people's lives, and looking for what makes the world a better place.
            Other than work, I love playing baseball, watching dramas/movies and spending time with my family/friends.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} container justify="center" alignItems="center" className={classes.profile}>
          <Typography variant="h5" component="h5" gutterBottom color="primary" className={classes.title}>
            Skills
          </Typography>
          <Typography variant="body1" gutterBottom>
            I have been developing many kinds of web softwares for years.
            You will find some of my favorite skills in the list below. Recently I have been
            writing back-end services with Java and Spring Boot at work, but I have a strong interest
            in all kinds of techniques related to Internet.
          </Typography>
        </Grid>
      </Grid>
  )
};

export default About;
