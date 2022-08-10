import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import Switch from '@material-ui/core/Switch';
import { useTranslation } from 'react-i18next';
import React from 'react'

const useStyles = makeStyles(() => ({
  fulContainer: {
    padding: '2rem 3rem',
    backgroundColor: 'white',
  },
  conformationPara: {
    fontSize: '1rem',
    fontFamily: "Montserrat",
    color: '#1c1c1c',
    padding: '0px 0px 13px 0px',
    // borderBottom: '1px solid #c7bfbf',
    marginTop: '5px',
    marginBottom: '0 !important',
    textAlign: 'left',
    fontWeight: '600',
    '& span': {
      fontWeight: '500',
      marginLeft: '7px',
      display: 'inline-block',
    },
  },
  conformationPara1: {
    padding: '0',
    marginBottom: '13px',
    marginTop: '0',
    fontSize: '1rem',
    fontFamily: "Montserrat",
    color: '#1c1c1c',
    textAlign: 'left'
  },
  thumb: {
    width: 24,
    height: 24,
    color: 'white',
  },
  checked: {
    width: '100%',
    '& + $track': {
      backgroundColor: 'green !important',
    },
  },
  track: {
    borderRadius: 26 / 2,
    border: '1px solid #b9b9b9',
    backgroundColor: 'white',
    opacity: 1,
    width: 45,
    height: 21,
  },
  Switchwidth: {
    width: 'auto'
  },
  switchBtn: {
    display: 'flex',
    marginTop: '2rem',
    alignItems: 'center',
    fontFamily: "Montserrat",
  },
  switchPara: {
    //   padding:'0',
    marginTop: '24px',
    fontSize: '1rem',
    color: '#1c1c1c',
    fontFamily: 'Montserrat'
  },
}))
const Conformation = () => {
  const { t } = useTranslation(['error', 'common', 'organization']);
  const classes = useStyles()
  return (
    <>
      <Grid container md={12} sm={12} xs={12} className={classes.fulContainer}>
        <Typography variant='p'>
          <p className={classes.conformationPara}>{t('common:Dear', 'Dear')}<span>@</span>{t('common:programManager', ' Name of the program Manager')}</p>
          <p className={classes.conformationPara1}>{t('common:pressaddProgram', 'You are about to activate your program. Plese review the data below and press add Program')}</p>
          <p className={classes.conformationPara}>{t('common:ProgramName', 'Program Name:')} <span>{t('common:Cohort', 'Cohort')} 1 2022</span></p>
          <p className={classes.conformationPara}>{t('common:StartDate', 'Start Date:')} <span>18 {t('common:January', 'January')} 2022</span></p>
          <p className={classes.conformationPara}>{t('common:EndDate', 'End Date:')} <span>15 {t('common:December', 'December')} 2022</span></p>
          <p className={classes.conformationPara}>{t('common:MenteeRegistration', 'Mentee Registration')} <span>XXXX  <a href="1"> Url</a> {t('common:DDMM', 'DDMM.YYYY')}</span></p>
          <p className={classes.conformationPara}>{t('common:MentorRegistration', 'Mentor Registration')} <span>XXXX  <a href="1"> Url</a> {t('common:DDMM', 'DDMM.YYYY')}</span></p>
          <Grid md={12} className={classes.switchBtn}>
            <Switch
              classes={{
                root: classes.Switchwidth,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
              }} />
            <p className={classes.switchPara}>{('common:AllowRegistration', " Activate Program")} </p>
          </Grid>
        </Typography>
      </Grid>
    </>
  )
}

export default Conformation