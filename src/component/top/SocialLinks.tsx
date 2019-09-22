import React from 'react';
import {Grid, makeStyles} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const useStyles = makeStyles({
    socialIcon: {
        padding: "10px 15px",
        margin: "50px 0px",
    },
});

const SocialLinks: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid item xs={12} container justify="center" alignItems="center">
            <FontAwesomeIcon size="2x" icon={['fab', 'facebook']} className={classes.socialIcon} />
            <FontAwesomeIcon size="2x" icon={['fab', 'github']} className={classes.socialIcon} />
            <FontAwesomeIcon size="2x" icon={['fab', 'instagram']} className={classes.socialIcon} />
            <FontAwesomeIcon size="2x" icon={['fab', 'linkedin']} className={classes.socialIcon} />
            <FontAwesomeIcon size="2x" icon="sticky-note" className={classes.socialIcon} />
        </Grid>
    );
};

export default SocialLinks;
