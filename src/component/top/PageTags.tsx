import React, {useState} from 'react';
import {AppBar, Box, Grid, makeStyles, Tab, Tabs, Typography, useTheme} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {theme} from "../../app/Theme";
import SwipeableViews from "react-swipeable-views";

const useStyles = makeStyles({
    socialIcon: {
        padding: "0 10px"
    },
});

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

function a11yProps(index: any) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const PageTags: React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);

    function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
        setValue(newValue);
    }

    function handleChangeIndex(index: number) {
        setValue(index);
    }

    return (
        <Grid item xs={12} container justify="center" alignItems="center">
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    Item Three
                </TabPanel>
            </SwipeableViews>
        </Grid>
    );
};

export default PageTags;
