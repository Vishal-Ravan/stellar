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
  inputAccordionFieldWork: {
    paddingTop: '0rem !important',
    paddingBottom: '0.5rem !important',
    fontFamily: 'Montserrat !important',
    color: '#1c1c1c !important',
    fontWeight: 'bold !important',
    fontSize: '16px !important',
    paddingLeft: '0.7rem !important',
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
  inputAccordionField1: {
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
  dropIcon: {
    color: '#3f3795',
    width: '2rem',
    height: '2rem'
  },
  formInputText: {
    color: '#000000 !important',
    fontfamily: "Montserrat !important",
    fontSize: '16px',
    fontStyle: 'italic'
  }
}))
export default function MenteeAccordion() {
  const { t } = useTranslation()
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const classes = useStyles();
  return (
    <div className={classes.accordion}>
      <InputLabel className={classes.inputAccordionFieldWork}>{t('common:Workingexperience', 'Working experience')} *</InputLabel>
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
          <Typography> <Checkbox />
            {t('common:AccordionDataFir', 'A ')}
          </Typography>
        </AccordionDetails>
        <hr />
        <AccordionDetails>
          <Typography> <Checkbox />
            {t('common:AccordionDataFir', 'B ')}
          </Typography>
        </AccordionDetails>
        <hr />
        <AccordionDetails>
          <Typography> <Checkbox />
            {t('common:AccordionDataFir', 'C ')}
          </Typography>
        </AccordionDetails>
        <hr />
        <AccordionDetails>
          <Typography> <Checkbox />
            {t('common:AccordionDataFir', 'D ')}
          </Typography>
        </AccordionDetails>
        <hr />
        <AccordionDetails>
          <Typography> <Checkbox />
            {t('common:AccordionDataFir', 'E ')}
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
          <Typography><Checkbox />
            {t('common:AccordionDataSec', 'A ')}
          </Typography>
        </AccordionDetails>
        <hr />
        <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataSec', 'B ')}
          </Typography>
        </AccordionDetails>
        <hr />
        <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataSec', 'C ')}
          </Typography>
        </AccordionDetails>
        <hr />
        <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataSec', 'D ')}
          </Typography>
        </AccordionDetails>
        <hr />  <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataSec', 'E ')}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <InputLabel className={classes.inputAccordionField} > {t('common:Employmenttype ', 'Employment type  ')}*</InputLabel>
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
          <Typography>
            <Checkbox />
            {t('common:AccordionDataThi', 'A ')}
          </Typography>
        </AccordionDetails>
        <hr /> <AccordionDetails>
          <Typography>
            <Checkbox />
            {t('common:AccordionDataThi', 'B ')}
          </Typography>
        </AccordionDetails>
        <hr /> <AccordionDetails>
          <Typography>
            <Checkbox />
            {t('common:AccordionDataThi', 'C ')}
          </Typography>
        </AccordionDetails>
        <hr /> <AccordionDetails>
          <Typography>
            <Checkbox />
            {t('common:AccordionDataThi', 'D ')}
          </Typography>
        </AccordionDetails>
        <hr /> <AccordionDetails>
          <Typography>
            <Checkbox />
            {t('common:AccordionDataThi', 'E ')}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <InputLabel className={classes.inputAccordionField}>{t('common:Functionalrole', 'Functional role (selected 0/3)  ')} *</InputLabel>
      <Accordion className={classes.accord} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.dropIcon} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.formInputText} >{t('common:Selectchoicesmax', 'Select 3 choices max ')} </Typography>
        </AccordionSummary>
        <hr />
        <AccordionDetails>
          <Typography>    <Checkbox />
            {t('common:AccordionDataFou', 'A ')}
          </Typography>
        </AccordionDetails>
        <hr />  <AccordionDetails>
          <Typography>    <Checkbox />
            {t('common:AccordionDataFou', 'B ')}
          </Typography>
        </AccordionDetails>
        <hr />  <AccordionDetails>
          <Typography>    <Checkbox />
            {t('common:AccordionDataFou', 'C ')}
          </Typography>
        </AccordionDetails>
        <hr />  <AccordionDetails>
          <Typography>    <Checkbox />
            {t('common:AccordionDataFou', 'D ')}
          </Typography>
        </AccordionDetails>
        <hr />  <AccordionDetails>
          <Typography>    <Checkbox />
            {t('common:AccordionDataFou', 'E ')}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <InputLabel className={classes.inputAccordionField}>{t('common:Industrysector', ' Industry sector (selected 0/3) ')} *</InputLabel>
      <Accordion className={classes.accord} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.dropIcon} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.formInputText}>{t('common:Selectchoicesmax', 'Select 3 choices max ')}</Typography>
        </AccordionSummary>
        <hr />
        <AccordionDetails>
          <Typography>  <Checkbox />
            {t('common:AccordionDataFiv', 'A')}
          </Typography>
        </AccordionDetails>
        <hr />
        <AccordionDetails>
          <Typography>  <Checkbox />
            {t('common:AccordionDataFiv', 'B')}
          </Typography>
        </AccordionDetails>
        <hr />   <AccordionDetails>
          <Typography>  <Checkbox />
            {t('common:AccordionDataFiv', 'C')}
          </Typography>
        </AccordionDetails>
        <hr />   <AccordionDetails>
          <Typography>  <Checkbox />
            {t('common:AccordionDataFiv', 'D')}
          </Typography>
        </AccordionDetails>
        <hr />   <AccordionDetails>
          <Typography>  <Checkbox />
            {t('common:AccordionDataFiv', 'E')}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <InputLabel className={classes.inputAccordionField}>{t('common:peoplemanagement', 'Year of people management experience (Direct or Indirect)')} *</InputLabel>
      <Accordion className={classes.accord} expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.dropIcon} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.formInputText}> {t('common:Selectchoices', 'Select choices ')}</Typography>
        </AccordionSummary>
        <hr />
        <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataSix', 'A ')}
          </Typography>
        </AccordionDetails>
        <hr />
        <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataSix', 'B ')}
          </Typography>
        </AccordionDetails>
        <hr />   <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataSix', 'C ')}
          </Typography>
        </AccordionDetails>
        <hr />   <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataSix', 'D ')}
          </Typography>
        </AccordionDetails>
        <hr />   <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataSix', 'E ')}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <InputLabel className={classes.inputAccordionField}>{t('common:directreports', 'Maximum number of direct reports you had ever managed:  ')} *</InputLabel>
      <Accordion className={classes.accord} expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.dropIcon} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.formInputText}>{t('common:Selectchoices', 'Select choices ')}</Typography>
        </AccordionSummary>
        <hr />
        <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataSev', 'A ')}
          </Typography>
        </AccordionDetails>
        <hr />
        <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataSev', 'B ')}
          </Typography>
        </AccordionDetails>
        <hr />   <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataSev', 'C ')}
          </Typography>
        </AccordionDetails>
        <hr />   <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataSev', 'D ')}
          </Typography>
        </AccordionDetails>
        <hr />   <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataSev', 'E ')}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <InputLabel className={classes.inputAccordionField}>{t('common: YourIdeaMentor: ', ' Your Ideal Mentor:  ')}*</InputLabel>
      <Accordion className={classes.accord} expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.dropIcon} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.formInputText}>{t('common:Selectchoices', 'Select choices ')}   </Typography>
        </AccordionSummary>
        <hr />
        <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataEig', 'A ')}
          </Typography>
        </AccordionDetails>
        <hr />  <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataEig', 'B ')}
          </Typography>
        </AccordionDetails>
        <hr />  <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataEig', 'C ')}
          </Typography>
        </AccordionDetails>
        <hr />  <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataEig', 'D ')}
          </Typography>
        </AccordionDetails>
        <hr />  <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataEig', 'E ')}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <InputLabel className={classes.inputAccordionField}>{t('common:mentoringon', ' Areas to receive mentoring on ? (selected 0/3)  ')}*</InputLabel>
      <Accordion className={classes.accord} expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.dropIcon} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.formInputText}>{t('common:Selectchoicesmax', 'Select 3 choices max ')} </Typography>
        </AccordionSummary>
        <hr />
        <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataNin', 'A')}
          </Typography>
        </AccordionDetails>
        <hr />      <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataNin', 'B')}
          </Typography>
        </AccordionDetails>
        <hr />      <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataNin', 'C')}
          </Typography>
        </AccordionDetails>
        <hr />      <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataNin', 'D')}
          </Typography>
        </AccordionDetails>
        <hr />      <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataNin', 'E')}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <InputLabel className={classes.inputAccordionField}>{t('common:aftermentoring', 'Your expected outcomes after mentoring (selected 0/3) ')}  *</InputLabel>
      <Accordion className={classes.accord} expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.dropIcon} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.formInputText}>{t('common:Selectchoicesmax', 'Select 3 choices max ')}</Typography>
        </AccordionSummary>
        <hr />
        <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataTen', 'A')}
          </Typography>
        </AccordionDetails>
        <hr />    <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataTen', 'B')}
          </Typography>
        </AccordionDetails>
        <hr />    <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataTen', 'C')}
          </Typography>
        </AccordionDetails>
        <hr />    <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataTen', 'D')}
          </Typography>
        </AccordionDetails>
        <hr />    <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataTen', 'E')}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <InputLabel className={classes.inputAccordionField}>{t('common: languagspeak', ' Which language(s) do you speak? ')} *</InputLabel>
      <Accordion className={classes.accord} expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.dropIcon} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.formInputText}> {t('common:Selectchoices', 'Select choices ')}</Typography>
        </AccordionSummary>
        <hr />
        <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataEle', 'B ')}
          </Typography>
        </AccordionDetails>
        <hr />
        <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataEle', 'B ')}
          </Typography>
        </AccordionDetails>
        <hr />     <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataEle', 'C ')}
          </Typography>
        </AccordionDetails>
        <hr />     <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataEle', 'D ')}
          </Typography>
        </AccordionDetails>
        <hr />     <AccordionDetails>
          <Typography><Checkbox />
            {t('common:AccordionDataEle', 'E ')}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}