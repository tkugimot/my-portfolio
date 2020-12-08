import React from 'react';
import {Grid, List, ListItem, ListItemText, makeStyles, Typography} from "@material-ui/core";
import {Circle} from "react-circle";

const useStyles = makeStyles({
  about: {
  },
  title: {
    padding: "24px"
  },
  body: {
  },
  eachContent: {
    marginBottom: '16px',
    padding: '10px',
    backgroundColor: 'white'
  },
  profile: {
    padding: "0 8px"
  },
  skill: {
    padding: "0 8px"
  },
  profileList: {
    textAlign: "left"
  }
});

const About: React.FC = () => {
  const classes = useStyles();

  return (
      <Grid item xs={12} container justify="center"  className={classes.about}>
        <Grid item xs={12} container justify="center" alignItems="center">
          <Typography variant="h5" component="h5" gutterBottom color="secondary" className={classes.title}>
            Get to know me.
          </Typography>
        </Grid>
        <Grid item xs={12} container className={classes.profile}>
          <Grid item xs={12} container justify="center"  >
            <Typography variant="h5" component="h5" gutterBottom color="primary" className={classes.title}>
              My Profile
            </Typography>
          </Grid>

          <Grid item xs={12} container justify="center" className={classes.eachContent} >
            <Typography variant="body1" gutterBottom className={classes.body}>
              I am a software engineer, web developer and a problem solver.
              I am always trying to improve people's lives, and looking for what makes the world a better place.
              Other than work, I love playing baseball, watching dramas/movies and spending time with my family/friends.
            </Typography>

            <List className={classes.profileList}>
              <ListItem>
                <ListItemText
                    primary="Name: Toshimitsu Kugimoto"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="Place of Birth: Fukuoka, Japan"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="Current Location: Tokyo, Japan"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="Current Job: Back-end Web Developer"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="Current Workplace: Yahoo! Japan"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="Education: Master's in Computer Science, Chiba University"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="Email: toshimitsu_kugimoto@yahoo.co.jp"
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid item xs={12} container className={classes.skill}>
          <Grid item xs={12} container justify="center" >
            <Typography variant="h5" component="h5" gutterBottom color="primary" className={classes.title}>
              Skill
            </Typography>
          </Grid>

          <Grid item xs={12} container justify="center" className={classes.eachContent} >
            <Grid item xs={12} container justify="center" className={classes.eachContent} >
              <Typography variant="body1" gutterBottom>
                I have been developing many kinds of web software for years.
                you will find some of my favorite skills in the list below. Recently I have been
                focusing on writing back-end services with Java and Spring Boot at work, but I have a
                strong interest in all kinds of techniques related to Internet.
              </Typography>
            </Grid>

            <Grid item xs={12} container justify="center" >
              <Typography variant="h5" component="h5" gutterBottom color="primary" className={classes.title}>
                Language
              </Typography>
            </Grid>
            <Grid item xs={6} container justify="center" className={classes.eachContent} >
              <Grid item xs={12} container justify="center" >
                <Circle
                    progress={80}
                    animate={true} // Boolean: Animated/Static progress
                    animationDuration="1s" // String: Length of animation
                    responsive={false} // Boolean: Make SVG adapt to parent size
                    size="100" // String: Defines the size of the circle.
                    lineWidth="25" // String: Defines the thickness of the circle's stroke.
                    progressColor="Maroon" // String: Color of "progress" portion of circle.
                    bgColor="Moccasin" // String: Color of "empty" portion of circle.
                    textColor="Maroon" // String: Color of percentage text color.
                    showPercentage={true} // Boolean: Show/hide percentage.
                    showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                />
              </Grid>
              <Grid item xs={12} container justify="center"  >
                <Typography variant="subtitle2" gutterBottom color="secondary">
                  Java
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={6} container justify="center" className={classes.eachContent} >
              <Grid item xs={12} container justify="center" >
                <Circle
                    progress={60}
                    animate={true} // Boolean: Animated/Static progress
                    animationDuration="1s" // String: Length of animation
                    responsive={false} // Boolean: Make SVG adapt to parent size
                    size="100" // String: Defines the size of the circle.
                    lineWidth="25" // String: Defines the thickness of the circle's stroke.
                    progressColor="Maroon" // String: Color of "progress" portion of circle.
                    bgColor="Moccasin" // String: Color of "empty" portion of circle.
                    textColor="Maroon" // String: Color of percentage text color.
                    showPercentage={true} // Boolean: Show/hide percentage.
                    showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                />
              </Grid>
              <Grid item xs={12} container justify="center"  >
                <Typography variant="subtitle2" gutterBottom color="secondary">
                  Python
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={6} container justify="center" className={classes.eachContent} >
              <Grid item xs={12} container justify="center" >
                <Circle
                    progress={20}
                    animate={true} // Boolean: Animated/Static progress
                    animationDuration="1s" // String: Length of animation
                    responsive={false} // Boolean: Make SVG adapt to parent size
                    size="100" // String: Defines the size of the circle.
                    lineWidth="25" // String: Defines the thickness of the circle's stroke.
                    progressColor="Maroon" // String: Color of "progress" portion of circle.
                    bgColor="Moccasin" // String: Color of "empty" portion of circle.
                    textColor="Maroon" // String: Color of percentage text color.
                    showPercentage={true} // Boolean: Show/hide percentage.
                    showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                />
              </Grid>
              <Grid item xs={12} container justify="center"  >
                <Typography variant="subtitle2" gutterBottom color="secondary">
                  TypeScript
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={6} container justify="center" className={classes.eachContent} >
              <Grid item xs={12} container justify="center" >
                <Circle
                    progress={20}
                    animate={true} // Boolean: Animated/Static progress
                    animationDuration="1s" // String: Length of animation
                    responsive={false} // Boolean: Make SVG adapt to parent size
                    size="100" // String: Defines the size of the circle.
                    lineWidth="25" // String: Defines the thickness of the circle's stroke.
                    progressColor="Maroon" // String: Color of "progress" portion of circle.
                    bgColor="Moccasin" // String: Color of "empty" portion of circle.
                    textColor="Maroon" // String: Color of percentage text color.
                    showPercentage={true} // Boolean: Show/hide percentage.
                    showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                />
              </Grid>
              <Grid item xs={12} container justify="center"  >
                <Typography variant="subtitle2" gutterBottom color="secondary">
                  Rust
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={12} container justify="center" >
              <Typography variant="h5" component="h5" gutterBottom color="primary" className={classes.title}>
                Framework, Library
              </Typography>
            </Grid>

            <Grid item xs={6} container justify="center" className={classes.eachContent} >
              <Grid item xs={12} container justify="center" >
                <Circle
                    progress={80}
                    animate={true} // Boolean: Animated/Static progress
                    animationDuration="1s" // String: Length of animation
                    responsive={false} // Boolean: Make SVG adapt to parent size
                    size="100" // String: Defines the size of the circle.
                    lineWidth="25" // String: Defines the thickness of the circle's stroke.
                    progressColor="Maroon" // String: Color of "progress" portion of circle.
                    bgColor="Moccasin" // String: Color of "empty" portion of circle.
                    textColor="Maroon" // String: Color of percentage text color.
                    showPercentage={true} // Boolean: Show/hide percentage.
                    showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                />
              </Grid>
              <Grid item xs={12} container justify="center"  >
                <Typography variant="subtitle2" gutterBottom color="secondary">
                  Spring Boot
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={6} container justify="center" className={classes.eachContent} >
              <Grid item xs={12} container justify="center" >
                <Circle
                    progress={60}
                    animate={true} // Boolean: Animated/Static progress
                    animationDuration="1s" // String: Length of animation
                    responsive={false} // Boolean: Make SVG adapt to parent size
                    size="100" // String: Defines the size of the circle.
                    lineWidth="25" // String: Defines the thickness of the circle's stroke.
                    progressColor="Maroon" // String: Color of "progress" portion of circle.
                    bgColor="Moccasin" // String: Color of "empty" portion of circle.
                    textColor="Maroon" // String: Color of percentage text color.
                    showPercentage={true} // Boolean: Show/hide percentage.
                    showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                />
              </Grid>
              <Grid item xs={12} container justify="center"  >
                <Typography variant="subtitle2" gutterBottom color="secondary">
                  Ruby on Rails
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={6} container justify="center" className={classes.eachContent} >
              <Grid item xs={12} container justify="center" >
                <Circle
                    progress={30}
                    animate={true} // Boolean: Animated/Static progress
                    animationDuration="1s" // String: Length of animation
                    responsive={false} // Boolean: Make SVG adapt to parent size
                    size="100" // String: Defines the size of the circle.
                    lineWidth="25" // String: Defines the thickness of the circle's stroke.
                    progressColor="Maroon" // String: Color of "progress" portion of circle.
                    bgColor="Moccasin" // String: Color of "empty" portion of circle.
                    textColor="Maroon" // String: Color of percentage text color.
                    showPercentage={true} // Boolean: Show/hide percentage.
                    showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                />
              </Grid>
              <Grid item xs={12} container justify="center"  >
                <Typography variant="subtitle2" gutterBottom color="secondary">
                  React, Redux
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={6} container justify="center" className={classes.eachContent} >
              <Grid item xs={12} container justify="center" >
                <Circle
                    progress={50}
                    animate={true} // Boolean: Animated/Static progress
                    animationDuration="1s" // String: Length of animation
                    responsive={false} // Boolean: Make SVG adapt to parent size
                    size="100" // String: Defines the size of the circle.
                    lineWidth="25" // String: Defines the thickness of the circle's stroke.
                    progressColor="Maroon" // String: Color of "progress" portion of circle.
                    bgColor="Moccasin" // String: Color of "empty" portion of circle.
                    textColor="Maroon" // String: Color of percentage text color.
                    showPercentage={true} // Boolean: Show/hide percentage.
                    showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                />
              </Grid>
              <Grid item xs={12} container justify="center"  >
                <Typography variant="subtitle2" gutterBottom color="secondary">
                  Flask
                </Typography>
              </Grid>
            </Grid>


            <Grid item xs={12} container justify="center" >
              <Typography variant="h5" component="h5" gutterBottom color="primary" className={classes.title}>
                Infrastructure
              </Typography>
            </Grid>

            <Grid item xs={6} container justify="center" className={classes.eachContent} >
              <Grid item xs={12} container justify="center" >
                <Circle
                    progress={80}
                    animate={true} // Boolean: Animated/Static progress
                    animationDuration="1s" // String: Length of animation
                    responsive={false} // Boolean: Make SVG adapt to parent size
                    size="100" // String: Defines the size of the circle.
                    lineWidth="25" // String: Defines the thickness of the circle's stroke.
                    progressColor="Maroon" // String: Color of "progress" portion of circle.
                    bgColor="Moccasin" // String: Color of "empty" portion of circle.
                    textColor="Maroon" // String: Color of percentage text color.
                    showPercentage={true} // Boolean: Show/hide percentage.
                    showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                />
              </Grid>
              <Grid item xs={12} container justify="center"  >
                <Typography variant="subtitle2" gutterBottom color="secondary">
                  Chef
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={6} container justify="center" className={classes.eachContent} >
              <Grid item xs={12} container justify="center" >
                <Circle
                    progress={50}
                    animate={true} // Boolean: Animated/Static progress
                    animationDuration="1s" // String: Length of animation
                    responsive={false} // Boolean: Make SVG adapt to parent size
                    size="100" // String: Defines the size of the circle.
                    lineWidth="25" // String: Defines the thickness of the circle's stroke.
                    progressColor="Maroon" // String: Color of "progress" portion of circle.
                    bgColor="Moccasin" // String: Color of "empty" portion of circle.
                    textColor="Maroon" // String: Color of percentage text color.
                    showPercentage={true} // Boolean: Show/hide percentage.
                    showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                />
              </Grid>
              <Grid item xs={12} container justify="center"  >
                <Typography variant="subtitle2" gutterBottom color="secondary">
                  Docker, k8s
                </Typography>
              </Grid>
            </Grid>

            ...etc
          </Grid>
        </Grid>

        <Grid item xs={12} container className={classes.skill}>
          <Grid item xs={12} container justify="center">
            <Typography variant="h5" component="h5" gutterBottom color="primary" className={classes.title}>
              License
            </Typography>
          </Grid>

          <Grid item xs={12} container justify="center" className={classes.eachContent}>
            <List className={classes.profileList}>
              <ListItem>
                <ListItemText
                    primary="TOEIC 935"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="Applied Information Technology Engineer Examination"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="First degree black belt of Shorinji Kenpo"
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
  )
};

export default About;
