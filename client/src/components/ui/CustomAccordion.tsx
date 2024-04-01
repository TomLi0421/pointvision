import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function CustomAccordion(props: any) {
  return (
    <Accordion style={{ boxShadow: "none", padding: "30px 0" }}>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <Typography variant="h5">{props.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body1">{props.description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
