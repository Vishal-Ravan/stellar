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
  accordion: {
  },
  inputAccordionField: {
    paddingTop: '1.8rem !important',
    paddingBottom: '0.5rem !important',
    fontFamily: 'Montserrat !important',
    color: '#1c1c1c !important',
    fontWeight: 'bold !important',
    fontSize: '16px !important',
    paddingLeft: '0.7rem !important',
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
  accord1: {
    borderBottom: '2px solid #bbbbbb',
    marginBottom: '1rem',
    '&:before': {
      background: 'none',
    },
  },
  dropIcon: {
    color: '#3f3795',
    width: '2rem',
    height: '2rem'
  },
}))

export default function ControlledAccordionss() {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const { t } = useTranslation()
  const classes = useStyles();
  return (
    <div className={classes.accordion}>
      <InputLabel className={classes.inputAccordionField}> {t('common:youbeenMentor', 'For how long have you been a Mentor? ')}</InputLabel>
      <Accordion className={classes.accord} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.dropIcon} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.formInputText} > {t('common:Selectchoices', 'Select choices ')}</Typography>
        </AccordionSummary>
        <hr />
        <AccordionDetails>
          <Typography>
            <Checkbox />
            {t('common:AccordionDataSeventeen', 'A')}
          </Typography>
        </AccordionDetails>
        <hr />
        <AccordionDetails>
          <Typography>
            <Checkbox />
            {t('common:AccordionDataSeventeen', 'B')}
          </Typography>
        </AccordionDetails>
        <hr />
        <AccordionDetails>
          <Typography>
            <Checkbox />
            {t('common:AccordionDataSeventeen', 'C')}
          </Typography>
        </AccordionDetails>
        <hr />
        <AccordionDetails>
          <Typography>
            <Checkbox />
            {t('common:AccordionDataSeventeen', 'D')}
          </Typography>
        </AccordionDetails>
        <hr />
        <AccordionDetails>
          <Typography>
            <Checkbox />
            {t('common:AccordionDataSeventeen', 'E')}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <InputLabel className={classes.inputAccordionField}> {t('common:providementoringon', 'Areas to provide mentoring on? (selected 0/5) ')}*</InputLabel>
      <Accordion className={classes.accord} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.dropIcon} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.formInputText} form_input_text >{t('common:Selectchoicesmaxfive', 'Select 5 choices max ')}</Typography>

        </AccordionSummary>
        <hr />
        <AccordionDetails>
          <Typography>
            <Checkbox /> {t('common:AccordionDataEighteen', 'A')}
          </Typography>
        </AccordionDetails>
        <hr />
        <AccordionDetails>
          <Typography>
            <Checkbox /> {t('common:AccordionDataEighteen', 'B')}
          </Typography>
        </AccordionDetails>
        <hr />
        <AccordionDetails>
          <Typography>
            <Checkbox /> {t('common:AccordionDataEighteen', 'C')}
          </Typography>
        </AccordionDetails>
        <hr />
        <AccordionDetails>
          <Typography>
            <Checkbox /> {t('common:AccordionDataEighteen', 'D')}
          </Typography>
        </AccordionDetails>
        <hr />
        <AccordionDetails>
          <Typography>
            <Checkbox /> {t('common:AccordionDataEighteen', 'E')}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <InputLabel className={classes.inputAccordionField}> {t('common:Menteesmentor', 'How many Mentees could you mentor? ')}*</InputLabel>
      <Accordion className={classes.accord1} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.dropIcon} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.formInputText}> {t('common:Selectchoices', 'Select choices ')}</Typography>

        </AccordionSummary>
        <hr />
        <AccordionDetails>
          <Typography>
            <Checkbox />  {t('common:AccordionDataNinteen', 'A ')}
          </Typography>
        </AccordionDetails>
        <hr />
        <AccordionDetails>
          <Typography>
            <Checkbox />  {t('common:AccordionDataNinteen', 'B ')}
          </Typography>
        </AccordionDetails>
        <hr /> <AccordionDetails>
          <Typography>
            <Checkbox />  {t('common:AccordionDataNinteen', 'C ')}
          </Typography>
        </AccordionDetails>
        <hr /> <AccordionDetails>
          <Typography>
            <Checkbox />  {t('common:AccordionDataNinteen', 'D ')}
          </Typography>
        </AccordionDetails>
        <hr /> <AccordionDetails>
          <Typography>
            <Checkbox />  {t('common:AccordionDataNinteen', 'E ')}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}