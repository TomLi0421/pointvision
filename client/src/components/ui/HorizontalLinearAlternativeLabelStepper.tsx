import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["Prepare", "Shipping", "Delivered"];

export default function HorizontalLinearAlternativeLabelStepper(props: any) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={steps.indexOf(props.status)} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
