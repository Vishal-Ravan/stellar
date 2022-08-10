import React from 'react';
import { useTranslation } from 'react-i18next';
import Radio from '@material-ui/core/Radio';
import { InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  genderButton: {
    marginTop: '0.4rem',
    paddingLeft: '0.4rem',
    width: '100%',
    paddingRight: '0.5rem'
  },
  labelFilled: {
    fontfamily: "Montserrat !important",
    color: '#1c1c1c !important',
    fontWeight: 'bold !important',
    fontSize: '16px !important',
    paddingLeft: '0.7rem !important',
    paddingTop: '0.9rem !important',
    paddingBottom: '0.5rem !important',
    width: '100%',
  },
  dFlexRadio: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100% !important',
    marginBottom: '0rem',
    height: '3.3rem',
    borderBottom: '2px solid #e2e2e2',
  },
  inputLabelRadio: {
    color: "#1c1c1c",
    fontStyle: 'italic',
    fontSize: '16px',
  },
  inputLabelRadio1: {
    color: "#1c1c1c",
    fontStyle: 'italic',
    fontSize: '16px',
    overflow: 'hidden',
    width: '106px',
    textOverflow: 'ellipsis',
    /* display: inline; */
    whiteSpace: 'nowrap',
  },
}))
export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.genderButton}>
      <InputLabel className={classes.labelFilled}>{t('common:Gender', "Gender")}*</InputLabel>
      <div className={classes.dFlexRadio} >
        <Radio
          checked={selectedValue === 'a'}
          onChange={handleChange}
          value="a"
          color="default"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'A' }}
        />
        <InputLabel className={classes.inputLabelRadio} >{t('common:SheHer', "She/Her")}</InputLabel>
        <Radio
          checked={selectedValue === 'b'}
          onChange={handleChange}
          value="b"
          color="default"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'B' }}
        />
        <InputLabel className={classes.inputLabelRadio} >{t('common:HeHim', "He/Him")}</InputLabel>
        <Radio
          checked={selectedValue === 'c'}
          onChange={handleChange}
          value="c"
          color="default"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'C' }}
        />
        <InputLabel className={classes.inputLabelRadio}>{t('common:Other', "Other")}</InputLabel>
        <Radio
          checked={selectedValue === 'd'}
          onChange={handleChange}
          value="d"
          color="default"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'D' }}
        />
        <InputLabel title="Dont want to respond" className={classes.inputLabelRadio1}>{t('common:Dontrespond', "Dont want to respond")}</InputLabel>
      </div>
    </div>
  );
}
