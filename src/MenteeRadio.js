import React from 'react';
import { useTranslation } from 'react-i18next';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox, InputLabel } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  radioGroupMentee: {
    width: '100% !important',
    marginTop: '1.8rem !important',
    borderBottom: '2px solid #bbbbbb !important',
    marginBottom: '0rem!important',
    backgroundColor: 'transparent'
  },
  formMentorInputLabelMentee: {
    width: '100%',
    transform: 'none !important',
    fontFamily: 'Montserrat !important',
    color: '#1c1c1c !important',
    fontWeight: 'bold !important',
    fontSize: '16px !important',
    paddingLeft: '0.7rem !important',

    paddingBottom: '0.5rem !important',
    '& label': {
      backgroundColor: 'red',
    },
  },
  butnRadioGroupMentee: {
    marginTop: '1.7rem !important',
    height: '3rem !important',
    paddingLeft: '0.7rem !important',
    marginBottom: '0 !important',
    fontStyle: 'italic !important',
    background: 'white',
  },
  butnRadioGroup2: {
    fontFamily: 'Montserrat !important',
  }
}))
export default function MenteeRadio() {
  const [value, setValue] = React.useState('female');
  const { t } = useTranslation()
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const classes = useStyles();
  return (
    <FormControl component="fieldset" className={classes.radioGroupMentee}>
      <InputLabel className={classes.formMentorInputLabelMentee}>{t('common:communicationformentoring', 'Mode of communication for mentoring: ')}*</InputLabel>
      <RadioGroup value={value} onChange={handleChange}>
        <div className={classes.butnRadioGroupMentee}>
          <FormControlLabel className={classes.butnRadioGroup2} control={<Checkbox />} label={t('common:Online', ' Online ')} />
          <FormControlLabel className={classes.butnRadioGroup2} control={<Checkbox />} label={t('common:FacetoFace', 'Face to Face ')} defaultChecked />
        </div>
      </RadioGroup>
    </FormControl>
  );
}