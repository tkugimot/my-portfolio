import React from 'react';
import {Grid, makeStyles} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    social: {
        margin: "50px 0",
    },
    socialIcon: {
        margin: "0px 15px",
    }
});

const SocialLinks: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid item xs={12} container justify="center" alignItems="center" className={classes.social}>
            <div className={classes.socialIcon}>
                <a href="https://www.facebook.com/tosimitu.kugimoto"><FontAwesomeIcon size="2x" icon={['fab', 'facebook']} /></a>
            </div>
            <div className={classes.socialIcon}>
                <a href="https://github.com/tkugimot"><FontAwesomeIcon size="2x" icon={['fab', 'github']} /></a>
            </div>
            <div className={classes.socialIcon}>
                <a href="https://www.instagram.com/toshimitsukugimoto"><FontAwesomeIcon size="2x" icon={['fab', 'instagram']} /></a>
            </div>
            <div className={classes.socialIcon}>
                <a href="https://www.linkedin.com/in/toshimitsu-kugimoto/"><FontAwesomeIcon size="2x" icon={['fab', 'linkedin']} /></a>
            </div>
            <div className={classes.socialIcon}>
                <a href="https://note.mu/tkugimot"><FontAwesomeIcon size="2x" icon="sticky-note" /></a>
            </div>
        </Grid>
    );
};

export default SocialLinks;
