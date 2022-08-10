import React from 'react';
import { useTranslation } from 'react-i18next';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Checkbox from '@mui/material/Checkbox';

const useStyles = makeStyles(() => ({
  inputAccordionFieldMentor: {
    paddingTop: '0.2rem ',
    paddingBottom: '0.5rem !important',
    fontFamily: 'Montserrat !important',
    color: '#1c1c1c !important',
    fontWeight: 'bold !important',
    fontSize: '16px !important',
    paddingLeft: '0.7rem !important'
  },
  inputAccordionField: {
    paddingTop: '1.8rem  !important',
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
  const { t } = useTranslation()
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const classes = useStyles();
  return (
    <div className={classes.accordion}>

      <InputLabel className={classes.inputAccordionFieldMentor}>{t('common:Workingexperience', 'Working experience')}*</InputLabel>
      <Accordion className={classes.accord} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.dropIcon} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.formInputText}>{t('common:Selectchoices', 'Select choices ')}</Typography>

        </AccordionSummary>
        <hr />
        <AccordionDetails>
          <Typography>
            <Checkbox />
            {t('common:AccordionDataTwelve', 'A ')}
          </Typography>
        </AccordionDetails>
        <hr />
        <AccordionDetails>
          <Typography>
            <Checkbox />
            {t('common:AccordionDataTwelve', 'B ')}
          </Typography>
        </AccordionDetails>
        <hr /> <AccordionDetails>
          <Typography>
            <Checkbox />
            {t('common:AccordionDataTwelve', 'C ')}
          </Typography>
        </AccordionDetails>
        <hr /> <AccordionDetails>
          <Typography>
            <Checkbox />
            {t('common:AccordionDataTwelve', 'D ')}
          </Typography>
        </AccordionDetails>
        <hr /> <AccordionDetails>
          <Typography>
            <Checkbox />
            {t('common:AccordionDataTwelve', 'E ')}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <InputLabel className={classes.inputAccordionField} >{t('common:jobtitle', 'Your job title ')}</InputLabel>
      <Accordion className={classes.accord} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.dropIcon} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.formInputText}>{t('common:Selectchoices', 'Select choices ')}</Typography>
        </AccordionSummary>
        <hr />
        <AccordionDetails>
          <Typography>
            <Checkbox />
            {t('common:AccordionDataThirteen', 'A ')}
          </Typography>
        </AccordionDetails>
        <hr />
        <AccordionDetails>
          <Typography>
            <Checkbox />
            {t('common:AccordionDataThirteen', 'B ')}
          </Typography>
        </AccordionDetails>
        <hr />    <AccordionDetails>
          <Typography>
            <Checkbox />
            {t('common:AccordionDataThirteen', 'C ')}
          </Typography>
        </AccordionDetails>
        <hr />    <AccordionDetails>
          <Typography>
            <Checkbox />
            {t('common:AccordionDataThirteen', 'D ')}
          </Typography>
        </AccordionDetails>
        <hr />    <AccordionDetails>
          <Typography>
            <Checkbox />
            {t('common:AccordionDataThirteen', 'E ')}
          </Typography>
        </AccordionDetails>

      </Accordion>

      <InputLabel className={classes.inputAccordionField} >{t('common:Employmenttype ', 'Employment type  ')} *</InputLabel>
      <Accordion className={classes.accord} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.dropIcon} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.formInputText}>{t('common:Selectchoices', 'Select choices ')} </Typography>
        </AccordionSummary>
        <hr />
        <AccordionDetails>
          <Checkbox />
          <Typography>
            {t('common:AccordionDataFourteen', 'A ')}
          </Typography>
        </AccordionDetails>
        <hr />
        <AccordionDetails>
          <Checkbox />
          <Typography>
            {t('common:AccordionDataFourteen', 'B ')}
          </Typography>
        </AccordionDetails>
        <hr />  <AccordionDetails>
          <Checkbox />
          <Typography>
            {t('common:AccordionDataFourteen', 'C ')}
          </Typography>
        </AccordionDetails>
        <hr />  <AccordionDetails>
          <Checkbox />
          <Typography>
            {t('common:AccordionDataFourteen', 'D ')}
          </Typography>
        </AccordionDetails>
        <hr />  <AccordionDetails>
          <Checkbox />
          <Typography>
            {t('common:AccordionDataFourteen', 'E ')}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <InputLabel className={classes.inputAccordionField}>{t('common:Functionalrole', 'Functional role (selected 0/3)  ')}*</InputLabel>
      <Accordion className={classes.accord} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.dropIcon} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.formInputText} >{t('common:Selectchoicesmax', 'Select 3 choices max ')}</Typography>

        </AccordionSummary>
        <hr />
        <AccordionDetails>
          <Typography>
            <Checkbox />
            {t('common:AccordionDataFifteen', 'A ')}
          </Typography>
        </AccordionDetails>
        <hr />
        <AccordionDetails>
          <Typography>
            <Checkbox />
            {t('common:AccordionDataFifteen', 'B ')}
          </Typography>
        </AccordionDetails>
        <hr />  <AccordionDetails>
          <Typography>
            <Checkbox />
            {t('common:AccordionDataFifteen', 'C ')}
          </Typography>
        </AccordionDetails>
        <hr />  <AccordionDetails>
          <Typography>
            <Checkbox />
            {t('common:AccordionDataFifteen', 'D ')}
          </Typography>
        </AccordionDetails>
        <hr />  <AccordionDetails>
          <Typography>
            <Checkbox />
            {t('common:AccordionDataFifteen', 'E ')}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <InputLabel className={classes.inputAccordionField}>{t('common:Industrysector', ' Industry sector (selected 0/3) ')}*</InputLabel>
      <Accordion className={classes.accord} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.dropIcon} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.formInputText}> {t('common:Selectchoicesmax', 'Select 3 choices max ')}</Typography>
        </AccordionSummary>
        <hr />
        <AccordionDetails>
          <Typography> <Checkbox />
            {t('common:AccordionDataSixteen', 'A ')}
          </Typography>
        </AccordionDetails>
        <hr /> <AccordionDetails>
          <Typography> <Checkbox />
            {t('common:AccordionDataSixteen', 'B ')}
          </Typography>
        </AccordionDetails>
        <hr /> <AccordionDetails>
          <Typography> <Checkbox />
            {t('common:AccordionDataSixteen', 'C ')}
          </Typography>
        </AccordionDetails>
        <hr /> <AccordionDetails>
          <Typography> <Checkbox />
            {t('common:AccordionDataSixteen', 'D ')}
          </Typography>
        </AccordionDetails>
        <hr /> <AccordionDetails>
          <Typography> <Checkbox />
            {t('common:AccordionDataSixteen', 'E ')}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}