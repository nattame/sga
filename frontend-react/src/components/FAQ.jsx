import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
//import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Paper from '@mui/material/Paper';

export function FAQ() {
  const id = React.useId();
  return (
    <div>
        <Paper elevation={2}
        sx={{
            p:3, border:2,borderColor:"divider",borderRadius:3

        }}>
            <Typography variant='h5' sx={{mb:1}}>FAQ (Frequently Asked Questions)</Typography>
            <Typography variant='body2' color='text.secondary' sx={{mb:2}}> Ayuda para utilizar el Sistema de Gestion Academica </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls={`${id}-panel1-content`}
          id={`${id}-panel1-header`}
        >
          <Typography component="span">How to register a student?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           From the Student Form, you can complete legajo, name, career, e-mail. Then you select the Save button.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls={`${id}-panel2-content`}
          id={`${id}-panel2-header`}
        >
          <Typography component="span">How do I modify the data of a student?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           You search the student from the list, and select Edit. The form will complete itself with its data, so you can modify them.
          </Typography>
        </AccordionDetails>
      </Accordion>
         <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls={`${id}-panel2-content`}
          id={`${id}-panel2-header`}
        >
          <Typography component="span">Can I delete a student?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes. From the list of students, select Delete. Before confirmation, you have to verify that you are working with the correct student.
          </Typography>
        </AccordionDetails>
      </Accordion>


    </Paper>
    </div>
  );
}


