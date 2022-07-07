import React from 'react';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(() => ({
  accordion: {

  },
  inputAccordionField: {
    paddingTop: '0.7rem !important',
    paddingBottom: '0.5rem !important',
    fontFamily: 'Montserrat !important',
    color: '#1c1c1c !important',
    fontWeight: 'bold !important',
    fontSize: '16px !important',
    paddingLeft: '0.7rem !important'
  },
  accord: {
    borderBottom: '1px solid #bbbbbb',
    '&:before': {
      background: 'none',

    },
  },
  formInputText: {
    color: '#000000 !important',
    fontfamily: "Montserrat !important",
  },
  dropIcon: {
    color: '#3f3795',
    width: '2rem',
    height: '2rem'
  },


}))
export default function ControlledAccordions() {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const classes = useStyles();
  return (
    <div className={classes.accordion}>
      <InputLabel className={classes.inputAccordionField} >Myers-Briggs Type Indicator(MBTI)</InputLabel>
      <Accordion className={classes.accord} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.dropIcon} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.formInputText} >Select choices</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>

      </Accordion>
      <InputLabel className={classes.inputAccordionField}>Working experience *</InputLabel>
      <Accordion className={classes.accord} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.dropIcon} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.formInputText}>Select choices</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>

      </Accordion>
      <InputLabel className={classes.inputAccordionField} >Your job title</InputLabel>
      <Accordion className={classes.accord} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.dropIcon} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.formInputText}>Select choices</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>

      </Accordion>

      <InputLabel className={classes.inputAccordionField} >Employment type *</InputLabel>
      <Accordion className={classes.accord} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.dropIcon} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.formInputText}>Select choices </Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>

      </Accordion>
      <InputLabel className={classes.inputAccordionField}>Functional role (selected 0/3) *</InputLabel>
      <Accordion className={classes.accord} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.dropIcon} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.formInputText} >Select 3 choices max</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>

      </Accordion>
      <InputLabel className={classes.inputAccordionField}>Industry sector (selected 0/3)</InputLabel>
      <Accordion className={classes.accord} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.dropIcon} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.formInputText}> Select 3 choices max</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>

      </Accordion>






    </div>
  );
}