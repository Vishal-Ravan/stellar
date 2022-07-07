import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import Switch from '@material-ui/core/Switch';
import React from 'react'

const useStyles = makeStyles(() => ({
  fulContainer: {
    padding: '2rem 3rem'
  },
  conformationPara: {
    fontSize: '17px',
    fontFamily: "Montserrat",
    color: '#1c1c1c',
    padding: '0px 0px 13px 0px',
    borderBottom: '1px solid #c7bfbf',
    marginTop: '15px',

    marginBottom: '0 !important',
    textAlign: 'left',
    fontWeight: '600',

    '& span': {

      fontWeight: '500',
      marginLeft: '15px',
      display: 'inline-block',
    },

  },




  conformationPara1: {
    padding: '0',
    marginBottom: '2rem',
    marginTop: '0',
    fontSize: '18px',
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

    '& + $track': {
      backgroundColor: 'blue !important',
    },
  },
  track: {
    borderRadius: 26 / 2,
    border: '1px solid black',
    backgroundColor: 'white',
    opacity: 1,
    width: '19rem',
    height: 20,

  },
  switchBtn: {
    display: 'flex',
    marginTop: '2rem',
    alignItems: 'center',
  },
  switchPara: {
    fontSize: '18px',
    fontFamily: "Montserrat",
    color: '#1c1c1c',

    textAlign: 'left'
  }
}))
const Conformation = () => {
  const classes = useStyles()
  return (
    <>
      <Grid container md={12} sm={12} xs={12} className={classes.fulContainer}>
        <Typography variant='p'>
          <p className={classes.conformationPara}>Dear <span>@</span> Name of the program Manager</p>
          <p className={classes.conformationPara1}>You are about to activate your program. Plese review the data below and press add Program</p>
          <p className={classes.conformationPara}>Program Name: <span>Cohort 1 2022</span></p>
          <p className={classes.conformationPara}>Start Date: <span>18 January 2022</span></p>
          <p className={classes.conformationPara}>End Date: <span>15 December 2022</span></p>
          <p className={classes.conformationPara}>Mentee Registration <span>XXXX  <a href="1"> Url</a> DDMM.YYYY</span></p>
          <p className={classes.conformationPara}>Mentee Registration <span>XXXX  <a href="1"> Url</a> DDMM.YYYY</span></p>

          <Grid md={12} className={classes.switchBtn}>
            <Switch
              classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
              }} />

            <p className={classes.switchPara}> Activate Program</p>

          </Grid>
        </Typography>


      </Grid>
    </>
  )
}

export default Conformation