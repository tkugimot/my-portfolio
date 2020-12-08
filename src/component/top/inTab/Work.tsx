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
  return ['Web Developer at Yahoo! Japan', 'Web Developer at PayPay Corporation', 'Web Developer at Yahoo! Japan'];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return `Update the PHP version of softwares from 5.6 to 7.1, Recreating the software which is originally made by using Seasar2 framework for referencing
Settlement-related information by using Spring Boot framework, Build feature to show PayPay balance in Yahoo Wallet, etc.`;
    case 1:
      return 'Build KYC(Know Your Customer), Payment/Payout management, Bank master for payment/payout features, etc.';
    case 2:
      return 'Designed and developed both back-end and front-end systems for the new Yahoo! Wallet to replace old low-maintainability systems with high-serviceability and high-performance (up to 5000 requests per second maximum) systems.';
    default:
      return 'Default sentence.';
  }
}

const Work: React.FC = () => {
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
            My Work Experience
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

export default Work;
