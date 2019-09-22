import React, {useState} from 'react';
import {AppBar, Box, Grid, makeStyles, Tab, Tabs, Typography, useTheme} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {theme} from "../../app/Theme";
import SwipeableViews from "react-swipeable-views";
import About from "./inTab/About";

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
}

const useStyles = makeStyles({
    socialIcon: {
        padding: "0 10px"
    },
    pageTabs: {
        margin: "20px 0px",
    },
    eachTab: {
        width: "100%",
        backgroundColor: '#fffbf0'
    }
});

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
        <Grid item xs={12} container justify="center" alignItems="center" className={classes.pageTabs}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="About" {...a11yProps(0)} />
                    <Tab label="Work" {...a11yProps(1)} />
                    <Tab label="Education" {...a11yProps(2)} />
                    <Tab label="Resume" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <div className={classes.eachTab}>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <About />
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        Item Three
                    </TabPanel>
                    <TabPanel value={value} index={3} dir={theme.direction}>
                        Item Four
                    </TabPanel>
                </SwipeableViews>
            </div>
        </Grid>
    );
};

export default PageTags;
