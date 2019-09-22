import React from 'react';
import {Avatar, Grid, makeStyles} from "@material-ui/core";
import profileImage from '../../static/images/toshi.jpg';

const useStyles = makeStyles({
    bigAvatar: {
        margin: 10,
        width: 120,
        height: 120,
        boxShadow: "1px 0 5px 1px #999"
    },
});

const ProfileImage: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid item xs={12} container justify="center" alignItems="center">
            <Avatar alt="Remy Sharp" src={profileImage} className={classes.bigAvatar} />
        </Grid>
    )
};

export default ProfileImage;