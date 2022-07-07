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
    paddingLeft: '0.7rem !important',
  },
  accord: {
    borderBottom: '1px solid #bbbbbb',
     '&:before':{
      background:'none',
      
    },
  },
  formInputText: {
    color: '#000000 !important',
    fontfamily: "Montserrat !important",
  },
  accord1: {
    borderBottom: '2px solid #bbbbbb',
    marginBottom:'1rem',
       '&:before':{
      background:'none',
      
    },
  },
     dropIcon:{
    color:'#3f3795',
    width:'2rem',
    height:'2rem'
  },


}))

export default function ControlledAccordionss() {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const classes = useStyles();
  return (
    <div className={classes.accordion}>
      <InputLabel className={classes.inputAccordionField}>For how long have you been a Mentor?</InputLabel>
      <Accordion className={classes.accord}expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
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
      <InputLabel className={classes.inputAccordionField}>Areas to provide mentoring on? (selcted 0/5)*</InputLabel>
      <Accordion className={classes.accord}expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.dropIcon} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.formInputText} form_input_text >Select 5 choices max</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>

      </Accordion>
      <InputLabel className={classes.inputAccordionField}>How many Mentees could you mentor?*</InputLabel>
      <Accordion className={classes.accord1} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
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





    </div>
  );
}