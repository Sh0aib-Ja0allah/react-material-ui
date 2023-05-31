import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
function MUIAccordion() {
  return (
    <div>
        <Accordion >
            <AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel1-content' id='panel1-header'><Typography> Accordion 1</Typography></AccordionSummary>
            <AccordionDetails>
                <Typography >Lorem ipsum dolor sit, 
                    amet consectetur adipisicing elit. 
                    Dolores commodi deserunt nemo? Amet atque rem, 
                    aliquid distinctio quibusdam, voluptatibus porro fugiat i
                    n odit vitae aliquam quam ea, 
                    praesentium eos architecto.</Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel2-content' id='panel2-header'><Typography> Accordion 2</Typography></AccordionSummary>
            <AccordionDetails>
                <Typography >Lorem ipsum dolor sit, 
                    amet consectetur adipisicing elit. 
                    Dolores commodi deserunt nemo? Amet atque rem, 
                    aliquid distinctio quibusdam, voluptatibus porro fugiat i
                    n odit vitae aliquam quam ea, 
                    praesentium eos architecto.</Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel3-content' id='panel3-header'><Typography> Accordion 3</Typography></AccordionSummary>
            <AccordionDetails>
                <Typography >Lorem ipsum dolor sit, 
                    amet consectetur adipisicing elit. 
                    Dolores commodi deserunt nemo? Amet atque rem, 
                    aliquid distinctio quibusdam, voluptatibus porro fugiat i
                    n odit vitae aliquam quam ea, 
                    praesentium eos architecto.</Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default MUIAccordion