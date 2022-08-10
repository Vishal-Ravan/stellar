import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { useTranslation } from 'react-i18next';
import { InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  radioGroup: {
    width: '100% !important',
    marginTop: '0.7rem !important',
    borderBottom: '2px solid #bbbbbb !important',
    backgroundColor: 'transparent',
  },
  formMentorInputLabel: {
    width: '100%',
    position: 'none !important',
    transform: 'none !important',
    fontFamily: "Montserrat",
    color: '#1c1c1c !important',
    fontWeight: 'bold !important',
    fontSize: '16px !important',
    paddingLeft: '0.7rem !important',
    paddingBottom: '0.5rem !important',
  },
  butnRadioGroup: {
    display: ' flex',
    backgroundColor: 'white',
    marginTop: '1.7rem !important',
    height: '3rem !important',
    paddingLeft: '0.7rem !important',
    marginBottom: '0 !important'
  },
  butnRadioGroup2: {

  }
}))
export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('female');
  const { t } = useTranslation()
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const classes = useStyles();
  return (
    <FormControl component="fieldset" className={classes.radioGroup}>
      <RadioGroup value={value} onChange={handleChange}>
        <InputLabel className={classes.formMentorInputLabel}>{t('common:alreadymentoredpeople', '  Have you already mentored people? ')} *</InputLabel>
        <div className={classes.butnRadioGroup}>
          <FormControlLabel className={classes.butnRadioGroup2} value="female" control={<Radio />} label={t('common:Yes', ' Yes ')} />
          <FormControlLabel className={classes.butnRadioGroup2} value="male" control={<Radio />} label={t('common:No', ' No ')} />
        </div>
      </RadioGroup>
    </FormControl>
  );
}