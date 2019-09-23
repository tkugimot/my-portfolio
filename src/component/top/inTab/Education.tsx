import React from 'react';
import {
  Button,
  Checkbox,
  Grid,
  IconButton,
  List,
  ListItem, ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles, Paper, Step, StepContent, StepLabel, Stepper,
  Typography
} from "@material-ui/core";
import {orange} from "@material-ui/core/colors";
import {theme} from "../../../app/Theme";

const useStyles = makeStyles({
  work: {
    width: '100%'
  },
  title: {
    padding: "24px"
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
});

function getSteps() {
  return ['Fukuoka Prefectural Kurume High School',
    'Chiba University',
    'Chiba University'];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return `General course`;
    case 1:
      return 'Faculty of Engineering, Image Science.';
    case 2:
      return 'Graduate School of Advanced Integration Science, Department of Information Science. Spent one year at University of Eastern Finland, Computer Science as an exchange student.';
    default:
      return 'Unknown step';
  }
}

const Education: React.FC = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
      <Grid item xs={12} container justify="center" className={classes.work}>
        <Grid item xs={12} container justify="center" alignItems="center">
          <Typography variant="h5" component="h5" gutterBottom color="secondary" className={classes.title}>
            My School Experience
          </Typography>
        </Grid>
        <Grid item xs={12} container justify="center" alignItems="center" className={classes.work}>
          <Stepper activeStep={activeStep} orientation="vertical" className={classes.work}>
            {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                    <Typography>{getStepContent(index)}</Typography>
                    <div className={classes.actionsContainer}>
                      <div>
                        <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            className={classes.button}
                        >
                          Back
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}
                            disabled={activeStep === steps.length - 1}
                        >
                          Next
                        </Button>
                      </div>
                    </div>
                  </StepContent>
                </Step>
            ))}
          </Stepper>
        </Grid>
      </Grid>
  )
};

export default Education;
