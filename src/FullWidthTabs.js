import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import React from 'react'
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import { Grid } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "auto",
  },
  bar: {
    background: "hsl(0deg 0% 91%) ",
    border: "none",
    boxShadow: "none",
    borderBottom: '2px solid #7872722e'
  },
  labeltab: {
    fontSize: "12px",
    color: " #303186 !important",
    fontWeight: 'bolder !important',
    padding: '0',
    margin: '0',
    [theme.breakpoints.down('576')]: {
      textAlign: 'center',
      fontSize: '14px'
    },
  },
  acmeFirstLayout: {
    display: 'flex',
    [theme.breakpoints.down('576')]: {
      display: 'inherit',
    },
  },
  tableTime: {
    display: 'flex'
  },
  acmeStart: {
    paddingLeft: "1rem",
    width: "100%",
    [theme.breakpoints.down('576')]: {
      textAlign: 'left',
      marginTop: '1rem',
      width: '100%',
    }
  },
  acmeHeading: {
    textAlign: "left",
    fontSize: "18px",
    fontFamily: "Sen",
    color: "#303186",
    textTransform: "uppercase",
    margin: '0px !important',
    padding: '0px !important'
  },
  acmeParaSpan: {
    fontSize: "15px",
    fontFamily: "Montserrat",
    marginTop: '0.7rem !important',
    marginBottom: '0.7rem',
    padding: '0px !important'
  },
  ospan: {
    fontWeight: "bold !important",
    fontSize: "15px",
    fontFamily: "Montserrat",
    textAlign: "left",
    margin: '0px !important',
    padding: '0px !important'
  },
  acmeParagraph: {
    fontSize: "15px",
    fontFamily: "Montserrat",
    fontWeight: "550",
    color: "#1c1c1c",
    margin: '0px !important',
    padding: '0px !important',
    textAlign: "left",
    width: '100%',
    '& a': {
      textDecoration: 'none',
    },
  },
  tableHead: {
    background: '#3d3795',
    color: 'white',
  },
  tableData1: {
    color: '#3d3795',
    fontWeight: '600',
  },
  tableData2: {
    color: '#3d3795',
    fontWeight: '700',
    '& span': {
      borderBottom: '3px solid #3d3795',
      padding: '0 0.8rem'
    }
  },
  tableData3: {
    color: '#3d3795',
  },
  tableTime1: {
    border: '1px solid #3d3795',
    display: 'flex',
    justyfyContent: 'center',
    textAlign: 'center',
    height: '6.3rem',
  },
  tabletime2: {
    width: '3.7rem',
    borderRight: '1px solid #3d3795',
    [theme.breakpoints.down('576')]: {
      width: '100%',
    }
  },
  tabletime3: {
    width: '3.7rem',
    [theme.breakpoints.down('576')]: {
      width: '100%',
    }
  },
  pbtn: {
    color: "#303186 ",
    margin: '0',
    padding: '0',
    alignItems: 'center',
    width: '100%',
    fontFamily: "Montserrat !important",
    justyfyContent: 'center',
    textAlign: 'center',
  },
  btnDescript1: {
    backgroundColor: '#e8e8e8 !important',
    borderColor: "transparent",
    alignItems: "center  !important ",
    color: "#303186 !important",
    boxShadow: "3px 3px 3px 3px rgb(206, 206, 206)  !important",
    fontWeight: "800 !important",
    fontSize: "13px",
    fontFamily: "Montserrat !important",
    padding: "0.9rem 0rem   !important",
    borderRadius: "0px",
    textAlign: 'center',
    display: 'flex',
    justyfyContent: 'center',
    marginTop: "0.7rem",
    marginBottom: "1rem",
    marginLeft: '1%',
    width: '99%',
    [theme.breakpoints.down('1278')]: {
      fontSize: '12px',
    },
    [theme.breakpoints.down('576')]: {
      marginLeft: '1%',
    },
    [theme.breakpoints.down('1024')]: {
      margin: '0',
      width: '75%',
    },
  },
  ArrowIcon: {
    width: '11% !important',
    color: "#303186 ",
    padding: '0',
    marginLeft: '0',
    [theme.breakpoints.down('1024')]: {
      width: '7%',

      marginLeft: '9%',
    },
  },
  btnDescript: {
    backgroundColor: '#e8e8e8 !important',
    borderColor: "transparent",
    alignItems: "center  !important ",
    color: "#303186 !important",
    boxShadow: "3px 3px 3px 3px rgb(206, 206, 206)  !important",
    fontWeight: "800 !important",
    fontSize: "13px",
    fontFamily: "Montserrat !important",
    padding: "0.9rem 0rem   !important",
    display: 'flex',
    marginRight: '1%',
    textAlign: 'center',
    justyfyContent: 'center',
    borderRadius: "0px",
    width: '99%',
    marginTop: "0.7rem",
    marginBottom: "1rem",
    [theme.breakpoints.down('1278')]: {
      fontSize: '12px',
    },
    [theme.breakpoints.down('576')]: {
      marginRight: '1%',
    },
    [theme.breakpoints.down('1024')]: {
      marginRight: '1%',
      width: '75%',
    },
  },
  btnDescription: {
    display: 'flex',
    [theme.breakpoints.down('576')]: {
      display: 'inherit',
    },
    [theme.breakpoints.down('1024')]: {
      display: 'inherit',
    },
  },
}));

export default function FullWidthTabs() {
  const { t } = useTranslation();
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      <Grid md={12} sm={12} xs={12} className={classes.root}>
        <AppBar position="static" color="default" className={classes.bar}>
          <Tabs md={12} sm={12} xs={12} className={classes.tab}
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab className={classes.labeltab} label={t('common:UPCOMING', "   UPCOMING PROGRAMS")} {...a11yProps(0)} />
            <Tab className={classes.labeltab} label={t('common:CURRENT', "   CURRENT PROGRAMS")} {...a11yProps(1)} />
            <Tab className={classes.labeltab} label={t('common:PAST', "   PAST PROGRAMS")} {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews className='main-tab'
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Grid className={classes.tableBtnFlex}>
              <Grid className={classes.acmeFirstLayout}>
                <Grid className={classes.tableTime1}>
                  <div className={classes.tabletime2}>
                    <Grid className={classes.tableHead} >{t('common:Start', "   Start")}</Grid>
                    <Grid className={classes.tableData1} >{t('common:month', " jun")}</Grid>
                    <Grid className={classes.tableData2}><span>{t('common:date', " 21")} </span></Grid>
                    <Grid className={classes.tableData3}>{t('common:year', " 2021")}</Grid>
                  </div>
                  <div className={classes.tabletime3}>
                    <Grid className={classes.tableHead} >{t('common:End', " End")}</Grid>
                    <Grid className={classes.tableData1} >{t('common:month', " nov")}</Grid>
                    <Grid className={classes.tableData2} ><span> {t('common:date', " 03")}</span></Grid>
                    <Grid className={classes.tableData3} >{t('common:year', " 2021")}</Grid>
                  </div>
                </Grid>
                <Grid className={classes.acmeStart}>
                  <Typography>
                    <h5 className={classes.acmeHeading}>{t('common:AcmeMentorProgram', " ACME_MENTOR MENOTORING PROGRAM")}</h5>
                    <p className={classes.acmeParaSpan}>{t('common:Location', "   Location")}: <span className={classes.ospan}>{t('common:online', "   online")}</span></p>
                    <p className={classes.acmeParagraph}>{t('common:TabParagraph', "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nesciunt voluptatibus odit  eius itaque placeat. Doloribus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veritatis numquam laudantium similique.")} <br /> <a href="http://f">{t('common:MoreDetais', "Read more detail")}</a></p>
                  </Typography>
                  <Grid className={classes.btnDescription}>
                    <Button className={classes.btnDescript}>{<ArrowForwardIosOutlinedIcon className={classes.ArrowIcon} />}<p className={classes.pbtn}> {t('common:MentorButton', "Mentor Registration")} </p></Button>
                    <Button className={classes.btnDescript1} >  {<ArrowForwardIosOutlinedIcon className={classes.ArrowIcon} />}<p className={classes.pbtn}> {t('common:MenteeButton', "Mentee Registration")}  </p></Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <hr />
            <br />
            <Grid className={classes.tableBtnFlex}>
              <Grid className={classes.acmeFirstLayout}>
                <Grid className={classes.tableTime1}>
                  <div className={classes.tabletime2}>
                    <Grid className={classes.tableHead} >{t('common:Start', "   Start")}</Grid>
                    <Grid className={classes.tableData1} >{t('common:month', " jun")}</Grid>
                    <Grid className={classes.tableData2}><span>{t('common:date', " 21")} </span></Grid>
                    <Grid className={classes.tableData3}>{t('common:year', " 2021")}</Grid>
                  </div>
                  <div className={classes.tabletime3}>
                    <Grid className={classes.tableHead} >{t('common:End', " End")}</Grid>
                    <Grid className={classes.tableData1} >{t('common:month', " nov")}</Grid>
                    <Grid className={classes.tableData2} ><span> {t('common:date', " 03")}</span></Grid>
                    <Grid className={classes.tableData3} >{t('common:year', " 2021")}</Grid>
                  </div>
                </Grid>
                <Grid className={classes.acmeStart}>
                  <Typography>
                    <h5 className={classes.acmeHeading}>{t('common:AcmeMentorProgram', " ACME_MENTOR MENOTORING PROGRAM")}</h5>
                    <p className={classes.acmeParaSpan}>{t('common:Location', "   Location")}: <span className={classes.ospan}>{t('common:online', "   online")}</span></p>
                    <p className={classes.acmeParagraph}>{t('common:TabParagraph', "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nesciunt voluptatibus odit  eius itaque placeat. Doloribus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veritatis numquam laudantium similique.")} <br /> <a href="http://f">{t('common:MoreDetais', "Read more detail")}</a></p>
                  </Typography>
                  <Grid className={classes.btnDescription}>
                    <Button className={classes.btnDescript}>{<ArrowForwardIosOutlinedIcon className={classes.ArrowIcon} />}<p className={classes.pbtn}> {t('common:MentorButton', "Mentor Registration")} </p></Button>
                    <Button className={classes.btnDescript1} >  {<ArrowForwardIosOutlinedIcon className={classes.ArrowIcon} />}<p className={classes.pbtn}> {t('common:MenteeButton', "Mentee Registration")}  </p></Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Grid className={classes.tableBtnFlex}>
              <Grid className={classes.acmeFirstLayout}>
                <Grid className={classes.tableTime1}>
                  <div className={classes.tabletime2}>
                    <Grid className={classes.tableHead} >{t('common:Start', "   Start")}</Grid>
                    <Grid className={classes.tableData1} >{t('common:month', " jun")}</Grid>
                    <Grid className={classes.tableData2}><span>{t('common:date', " 21")} </span></Grid>
                    <Grid className={classes.tableData3}>{t('common:year', " 2021")}</Grid>
                  </div>
                  <div className={classes.tabletime3}>
                    <Grid className={classes.tableHead} >{t('common:End', " End")}</Grid>
                    <Grid className={classes.tableData1} >{t('common:month', " nov")}</Grid>
                    <Grid className={classes.tableData2} ><span> {t('common:date', " 03")}</span></Grid>
                    <Grid className={classes.tableData3} >{t('common:year', " 2021")}</Grid>
                  </div>
                </Grid>
                <Grid className={classes.acmeStart}>
                  <Typography>
                    <h5 className={classes.acmeHeading}>{t('common:AcmeMentorProgram', " ACME_MENTOR MENOTORING PROGRAM")}</h5>
                    <p className={classes.acmeParaSpan}>{t('common:Location', "   Location")}: <span className={classes.ospan}>{t('common:online', "   online")}</span></p>
                    <p className={classes.acmeParagraph}>{t('common:TabParagraph', "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nesciunt voluptatibus odit  eius itaque placeat. Doloribus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veritatis numquam laudantium similique.")} <br /> <a href="http://f">{t('common:MoreDetais', "Read more detail")}</a></p>
                  </Typography>
                  <Grid className={classes.btnDescription}>
                    <Button className={classes.btnDescript}>{<ArrowForwardIosOutlinedIcon className={classes.ArrowIcon} />}<p className={classes.pbtn}> {t('common:MentorButton', "Mentor Registration")} </p></Button>
                    <Button className={classes.btnDescript1} >  {<ArrowForwardIosOutlinedIcon className={classes.ArrowIcon} />}<p className={classes.pbtn}> {t('common:MenteeButton', "Mentee Registration")}  </p></Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <hr />
            <br />
            <Grid className={classes.tableBtnFlex}>
              <Grid className={classes.acmeFirstLayout}>
                <Grid className={classes.tableTime1}>
                  <div className={classes.tabletime2}>
                    <Grid className={classes.tableHead} >{t('common:Start', "   Start")}</Grid>
                    <Grid className={classes.tableData1} >{t('common:month', " jun")}</Grid>
                    <Grid className={classes.tableData2}><span>{t('common:date', " 21")} </span></Grid>
                    <Grid className={classes.tableData3}>{t('common:year', " 2021")}</Grid>
                  </div>
                  <div className={classes.tabletime3}>
                    <Grid className={classes.tableHead} >{t('common:End', " End")}</Grid>
                    <Grid className={classes.tableData1} >{t('common:month', " nov")}</Grid>
                    <Grid className={classes.tableData2} ><span> {t('common:date', " 03")}</span></Grid>
                    <Grid className={classes.tableData3} >{t('common:year', " 2021")}</Grid>
                  </div>
                </Grid>
                <Grid className={classes.acmeStart}>
                  <Typography>
                    <h5 className={classes.acmeHeading}>{t('common:AcmeMentorProgram', " ACME_MENTOR MENOTORING PROGRAM")}</h5>
                    <p className={classes.acmeParaSpan}>{t('common:Location', "   Location")}: <span className={classes.ospan}>{t('common:online', "   online")}</span></p>
                    <p className={classes.acmeParagraph}>{t('common:TabParagraph', "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nesciunt voluptatibus odit  eius itaque placeat. Doloribus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veritatis numquam laudantium similique.")} <br /> <a href="http://f">{t('common:MoreDetais', "Read more detail")}</a></p>
                  </Typography>
                  <Grid className={classes.btnDescription}>
                    <Button className={classes.btnDescript}>{<ArrowForwardIosOutlinedIcon className={classes.ArrowIcon} />}<p className={classes.pbtn}> {t('common:MentorButton', "Mentor Registration")} </p></Button>
                    <Button className={classes.btnDescript1} >  {<ArrowForwardIosOutlinedIcon className={classes.ArrowIcon} />}<p className={classes.pbtn}> {t('common:MenteeButton', "Mentee Registration")}  </p></Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className={classes.tableBtnFlex}>
              <div className={classes.acmeFirstLayout}>
                <Grid className={classes.tableTime1}>
                  <div className={classes.tabletime2}>
                    <Grid className={classes.tableHead} >{t('common:Start', "   Start")}</Grid>
                    <Grid className={classes.tableData1} >{t('common:month', " jun")}</Grid>
                    <Grid className={classes.tableData2}><span>{t('common:date', " 21")} </span></Grid>
                    <Grid className={classes.tableData3}>{t('common:year', " 2021")}</Grid>
                  </div>
                  <div className={classes.tabletime3}>
                    <Grid className={classes.tableHead} >{t('common:End', " End")}</Grid>
                    <Grid className={classes.tableData1} >{t('common:month', " nov")}</Grid>
                    <Grid className={classes.tableData2} ><span> {t('common:date', " 03")}</span></Grid>
                    <Grid className={classes.tableData3} >{t('common:year', " 2021")}</Grid>
                  </div>
                </Grid>
                <div className={classes.acmeStart}>
                  <Typography>
                    <h5 className={classes.acmeHeading}>{t('common:AcmeMentorProgram', " ACME_MENTOR MENOTORING PROGRAM")}</h5>
                    <p className={classes.acmeParaSpan}>{t('common:Location', "   Location")}: <span className={classes.ospan}>{t('common:online', "   online")}</span></p>
                    <p className={classes.acmeParagraph}>{t('common:TabParagraph', "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nesciunt voluptatibus odit  eius itaque placeat. Doloribus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veritatis numquam laudantium similique.")} <br /> <a href="http://f">{t('common:MoreDetais', "Read more detail")}</a></p>
                  </Typography>
                  <div className={classes.root}>
                    <Grid md={12}
                      display='flex'>
                    </Grid>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <br />
            <div className={classes.tableBtnFlex}>
              <div className={classes.acmeFirstLayout}>
                <Grid className={classes.tableTime1}>
                  <div className={classes.tabletime2}>
                    <Grid className={classes.tableHead} >{t('common:Start', "   Start")}</Grid>
                    <Grid className={classes.tableData1} >{t('common:month', " jun")}</Grid>
                    <Grid className={classes.tableData2}><span>{t('common:date', " 21")} </span></Grid>
                    <Grid className={classes.tableData3}>{t('common:year', " 2021")}</Grid>
                  </div>
                  <div className={classes.tabletime3}>
                    <Grid className={classes.tableHead} >{t('common:End', " End")}</Grid>
                    <Grid className={classes.tableData1} >{t('common:month', " nov")}</Grid>
                    <Grid className={classes.tableData2} ><span> {t('common:date', " 03")}</span></Grid>
                    <Grid className={classes.tableData3} >{t('common:year', " 2021")}</Grid>
                  </div>
                </Grid>
                <div className={classes.acmeStart}>
                  <Typography>
                    <h5 className={classes.acmeHeading}>{t('common:AcmeMentorProgram', " ACME_MENTOR MENOTORING PROGRAM")}</h5>
                    <p className={classes.acmeParaSpan}>{t('common:Location', "   Location")}: <span className={classes.ospan}>{t('common:online', "   online")}</span></p>
                    <p className={classes.acmeParagraph}>{t('common:TabParagraph', "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nesciunt voluptatibus odit  eius itaque placeat. Doloribus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veritatis numquam laudantium similique.")} <br /> <a href="http://f">{t('common:MoreDetais', "Read more detail")}</a></p>
                  </Typography>
                  <div className={classes.root}>
                    <Grid md={12}
                      display='flex'>
                    </Grid>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Grid>
    </>
  );
}