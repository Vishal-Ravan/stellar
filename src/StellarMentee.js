
import React from 'react'
import { CardContent, Grid, Typography, TextField, MenuItem } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import RadioButtons from 'RadioButtons';
import MenteeAccordion from 'MenteeAccordion';
import Menu from '@material-ui/core/Menu';
import MenteeRadio from 'MenteeRadio';
import { useTranslation } from 'react-i18next';

import PhoneInputGfg from 'PhoneInputGfg'

import { Checkbox } from '@material-ui/core';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';



const useStyles = makeStyles((theme) => ({
    stellarMain: {
        display: "flex",
        backgroundColor: "#e8e8e8",
        [theme.breakpoints.down('1024')]: {
            display: 'inherit',
            width: '100%',
        },
    },

    stellarLeftSide: {
        width: "40%",
        [theme.breakpoints.down('1024')]: {
            width: '100%',
            padding: '0',
        },

    },
    materialButton: {
        boxShadow: "none",
        fontSize: "16px !important",
        textTransform: "none !important",
        color: "#303186 !important",
        fontFamily: "Montserrat !important",
        marginLeft: "2rem !important"
    },
    forpaddingLeft: {
        paddingLeft: "2rem",
        paddingTop: "2.5rem",
        [theme.breakpoints.down('1024')]: {
            width: '100%',
            padding: '0',
        },
    },
    Headingh4: {
        fontSize: "16px",
        fontFamily: "Sen",
        color: "#303186",
        fontWeight: "bold",

        textAlign: "left"
    },
    paraP: {
        fontSize: "16px",
        fontFamily: "Montserrat",
        color: "#1c1c1c",
        fontWeight: "500",

        textAlign: "left",
    },

    paraPSpan: {
        fontWeight: "bold"
    },
    flexTable: {
        display: "flex"
    },
    calender: {
        paddingLeft: "0.4rem",
        fontSize: '1vw',
        fontWeight: '590',
        fontFamily: "Montserrat !important",
        margin: '0'
    },
    firstParegraph: {
        fontSize: "16px",
        fontFamily: "Montserrat",
        color: "#1c1c1c",
        fontWeight: "500",
        marginTop: "1rem",
        textAlign: "left",
        width: "100%",
        '& a': {
            textDecoration: 'none',
        },
    },
    stellarRightSide: {
        padding: "3.4rem 2rem",
        width: '60%',
        [theme.breakpoints.down('1024')]: {
            width: '100%',
            padding: '0',
        },
    },
    rightStellarh4: {
        fontSize: "18px",
        fontFamily: "Sen",
        color: "#303186",
        fontWeight: "bold",
        padding: '0',
        marginBottom: '0.5rem',
        textAlign: "left",
    },
    rightStellarPargraph: {
        fontSize: "13px",
        fontFamily: "Montserrat",
        color: "#1c1c1c",
        textAlign: "left",
        fontWeight: "600",
        marginTop: '0',
        marginBottom: "2rem"
    },
    formStartBg: {
        backgroundColor: "#f4f4f4",
        boxShadow: "1px 1px 6px 2px rgba(71, 24, 54, 0.356)"
    },
    headingRight: {
        display: "flex",
        backgroundColor: "#3c3494",
        color: "white",
        fontfamily: "Montserrat !important",
        marginbottom: "1rem",
        height: "4rem",
        alignItems: "center"
    },
    headingInRight: {
        width: "2.3rem",
        height: "2.2rem",
        borderRadius: "5rem",
        backgroundColor: "#a44a9d",
        display: "flex",
        fontFamily: "Montserrat !important",
        marginLeft: "2rem",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold"
    },
    headingInRightPara: {
        marginLeft: "1rem",
        fontSize: "18px",
        fontFamily: "sen !important",
    },

    formInputText: {
        '& input': {
            height: "0.5rem !important",
            display: "flex !important",
            alignItems: 'center !important',
            backgroundColor: 'rgb(255, 255, 255) !important',
            paddingLeft: '0.5rem !important',
            fontWeight: '800 !important',
            color: 'black',
            borderBottom: '1px solid #e2e2e2',
            fontFamily: "Montserrat",
            fontStyle: 'italic',
            [theme.breakpoints.down('1025')]: {

                width: '100%',
            },
            [theme.breakpoints.down('688')]: {

                width: '100%',
            },

        },
    },
    formInputText1: {
        '& input': {
            height: "0.5rem !important",
            display: "flex !important",
            alignItems: 'center !important',
            backgroundColor: 'rgb(255, 255, 255) !important',
            paddingLeft: '0.5rem !important',
            fontWeight: 'bold',
            color: '#000000 !important',
            borderBottom: '1px solid #e2e2e2',
            fontFamily: "Montserrat",
            fontStyle: 'italic',
            [theme.breakpoints.down('1025')]: {

                width: '100%',
            },
            [theme.breakpoints.down('688')]: {

                width: '100%',
            },

        },
    },
    formInputText2: {
        '& input': {
            height: "0.5rem !important",
            display: "flex !important",
            alignItems: 'center !important',
            backgroundColor: 'rgb(255, 255, 255) !important',
            paddingLeft: '0.5rem !important',
            fontWeight: 'bold',
            color: '#000000 !important',
            borderBottom: '1px solid #e2e2e2',
            fontFamily: "Montserrat",
            fontStyle: 'italic',
            [theme.breakpoints.down('1025')]: {

                width: '100%',
            },
            [theme.breakpoints.down('688')]: {

                width: '100%',
            },

        },
    },
    formInputText3: {
        '& input': {
            height: "4rem !important",
            display: "flex !important",
            alignItems: 'center !important',
            backgroundColor: 'rgb(255, 255, 255) !important',
            paddingLeft: '0.5rem !important',
            fontWeight: 'bold',
            color: '#000000 !important',
            borderBottom: '1px solid #e2e2e2',
            fontFamily: "Montserrat",
            fontStyle: 'italic',
            textTransform: 'italic',
            [theme.breakpoints.down('1025')]: {

                width: '100%',
            },
            [theme.breakpoints.down('688')]: {

                width: '100%',
            },

        },
    },
    formInputText4: {
        '& input': {
            height: "0.5rem !important",
            display: "flex !important",
            alignItems: 'center !important',
            backgroundColor: 'rgb(255, 255, 255) !important',
            paddingLeft: '0.5rem !important',
            fontWeight: 'bold',
            color: '#000000 !important',
            borderBottom: '1px solid #e2e2e2',
            fontFamily: "Montserrat",
            fontStyle: 'italic',
            [theme.breakpoints.down('1025')]: {

                width: '100%',
            },
            [theme.breakpoints.down('688')]: {

                width: '100%',
            },

        },
    },
    formInputText5: {
        '& input': {
            height: "0.5rem !important",
            display: "flex !important",
            alignItems: 'center !important',
            backgroundColor: 'rgb(255, 255, 255) !important',
            paddingLeft: '0.5rem !important',
            fontWeight: 'bold',
            color: '#000000 !important',
            borderBottom: '1px solid #e2e2e2',
            fontFamily: "Montserrat",
            fontStyle: 'italic',
            [theme.breakpoints.down('1025')]: {

                width: '100%',
            },
            [theme.breakpoints.down('688')]: {

                width: '100%',
            },

        },
    },


    labelFilled: {
        fontfamily: "Montserrat !important",
        color: '#1c1c1c !important',
        fontWeight: 'bold !important',
        fontSize: '16px !important',
        paddingLeft: '0.7rem !important',
        paddingTop: '1.3rem !important',
        paddingBottom: '0.5rem !important',
        [theme.breakpoints.down('1025')]: {
            fontSize: '10px',
            width: '45vw',
        },
    },
    labelFilledLinked: {
        fontfamily: "Montserrat !important",
        color: '#1c1c1c !important',
        fontWeight: 'bold !important',
        fontSize: '16px !important',
        paddingLeft: '0.7rem !important',
        paddingTop: '1.3rem !important',
        paddingBottom: '0.5rem !important'
    },
    labelFilledstate: {
        fontfamily: "Montserrat !important",
        color: '#1c1c1c !important',
        fontWeight: 'bold !important',
        fontSize: '16px !important',
        paddingLeft: '0.7rem !important',
        paddingTop: '1.3rem !important',
        paddingBottom: '0.5rem !important',

    },
    recaptcha: {
        display: 'flex',
        backgroundColor: 'white',
        alignItems: 'center',
        width: '40%',
        height: '3rem',
        border: '1px solid rgba(121, 115, 115, 0.486)',
        margin: '1rem 0.9rem'
    },
    recaptchaP: {
        fontFamily: "Montserrat"
    },
    captchaPara: {
        width: '95%',
        fontSize: '16px',
        paddingLeft: '0.9rem !important',
        paddingBottom: '0.7rem',
        fontFamily: 'sen !important'

    },
    captchaParaSpan: {
        color: '#3c3494',
        fontStyle: 'italic'
    },

    finalFirstBtn: {
        fontSize: '15px !important',
        width: '64% !important',
        fontFamily: "Montserrat",
        boxShadow: '0px !important',
        margin: '0 !important',
        height: '3.5rem',
        color: 'white !important',
        borderRadius: '0px !important',
        background: 'linear-gradient(90deg, #a14a9d 0%, #753f99 35%, #463795 100%)',
        padding: '0 !important',

        fontWeight: '0 !important',
    },
    finalSecondBtn: {
        fontSize: '15px !important',
        width: '36% !important',
        fontFamily: "Montserrat",
        boxShadow: '0px !important',
        margin: '0 !important',
        height: '3.5rem',
        color: 'white !important',
        borderRadius: '0px !important',
        backgroundColor: '#a44a9d',
        padding: '0 !important',

        fontWeight: '0 !important',
    },
    paraLastRight: {
        marginTop: '2rem',
        fontStyle: "italic",
        fontFamily: 'Montserrat'
    },
    cardCont: {
        paddingBottom: '0',
        marginBottom: '0.7rem',
    },


    // table time

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

        height: 'auto',

    },
    tabletime2: {
        width: '3.7rem',
        borderRight: '1px solid #3d3795'
    },
    tabletime3: {
        width: '3.7rem',


    },
    imgggClen: {
        width: '20px',
        height: '20px',
        marginLeft: '0.2rem',
    },
    finalFirstBtn1: {
        textTransform: 'none !important',
        fontSize: '12px',
        fontWeight: 'bold',
    },


    drop1: {
        background: 'white',
        height: '2.8rem',
        color: '#000000 !important',
        display: 'flex',
        justifyContent: 'space-between',
        fontStyle: 'italic',
        fontSize: '16px',
        borderBottom: '1px solid #e2e2e2',

    },
    iconn: {
        color: '#a7a5a5',
        fontWeight: '600',

        height: '2rem',
        width: '2rem'

    },
    cLeder: {
        color: '#a7a5a5',
        fontWeight: '600',

    },
    eventprotext: {
        marginTop: '0rem',
        '& textarea': {
            height: '120px !important',
            backgroundColor: '#fff',
            color: '#000',
            padding: '11px 14px',
            zIndex: '999',

            fontSize: '17px',
            fontWeight: '600'
        },
    },
}));



const StellarMentee = () => {
    const { t } = useTranslation()



    const classes = useStyles();
    return (
        <>


            <div className={classes.stellarMain}>

                <div className={classes.stellarLeftSide}>

                    <Grid container md={12}>
                        <Button className={classes.materialButton} startIcon={<ArrowBackIosOutlinedIcon />}>Return to all upcoming programs</Button>
                    </Grid>
                    <Grid container md={12}>
                        <div className={classes.forpaddingLeft}>

                            <Typography>
                                <img src=" https://itdevelopmentservices.com/fortunadata/wp-content/uploads/2022/06/logo.png" width='200px' height='123px' />
                                <h4 className={classes.Headingh4}>{t('common:AcmeMentorProgram', " ACME_MENTOR MENOTORING PROGRAM")}</h4>
                                <p className={classes.paraP}>{t('common:Location', "   Location")}: <span className={classes.paraPSpan}>{t('common:online', "   online")}</span></p>
                            </Typography>
                            <Typography>
                                <div className={classes.flexTable}>
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
                                    <p className={classes.calender} >{t('common:calendar', "   Add to many calendar")}
                                        <img src="https://www.data-storage.uk/wp-content/uploads/2022/06/addcalendar.png" className={classes.imgggClen} /></p>
                                </div>
                            </Typography>
                            <Typography
                                variant='p' >
                                <p className={classes.firstParegraph}> {t('common:MenteeParagraph', "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nesciunt voluptatibus odit  eius itaque placeat. Doloribus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veritatis numquam laudantium similique.")} <br /> <a href="http://f">{t('common:MoreDetais', "Read more detail")}</a></p>
                            </Typography>
                        </div>
                    </Grid>

                </div>

                <div className={classes.stellarRightSide}>
                    <Grid md={12}>
                        <Typography>

                            <h4 className={classes.rightStellarh4}>{t('common:Welcome', "Welcome to the Registration as Mentee")}</h4>
                            <p className={classes.rightStellarPargraph}>{t('common:RegistrationParagraph', "   Now,you will fillin the application form to proceed with your final enrollment step. It might take you 5 minutes to complete it. The quality of your entry will determine the match with  a potential mentor.")}</p>
                        </Typography>
                    </Grid>
                    <div className={classes.formStartBg}>
                        <Typography >
                            <div className={classes.headingRight}>

                                <div className={classes.headingInRight}>{t('common:Number', "   1")}</div>
                                <div className={classes.headingInRightPara}>{t('common:Personal', "   Personal Details")}</div>
                            </div>
                        </Typography>

                        <div className={classes.forPadingForRight}>
                            <CardContent className={classes.cardContent}>
                                <form>
                                    <Grid container spacing={1}>
                                        <Grid item md={12} sm={12} xs={12}>
                                            <InputLabel className={classes.labelFilled}>{t('common:FirstName', "   First Name *")}</InputLabel>
                                            <TextField className={classes.formInputText} placeholder={t('common:Jhon', "   Jhon")} variant='filled' fullWidth required />
                                        </Grid>
                                        <Grid item md={12} sm={12} xs={12}>
                                            <InputLabel className={classes.labelFilled}>{t('common:LastName ', "   Last Name *")}</InputLabel>
                                            <TextField className={classes.formInputText} placeholder={t('common:Doe', "   Doe")} variant='filled' fullWidth required />
                                        </Grid>
                                        <Grid item md={12} sm={12} xs={12}>
                                            <InputLabel className={classes.labelFilled}>{t('common:Email', "   Email *")}</InputLabel>
                                            <TextField className={classes.formInputText1} type='email' placeholder={t('common:Jhondoe', "   Jhondoe@email.com")} variant='filled' fullWidth required />
                                        </Grid>


                                        <Grid item md={12} sm={12} xs={12}>
                                            <InputLabel
                                                className={classes.labelFilled}>{t('common:Phone', "  Phone ")} *</InputLabel>

                                            <PhoneInputGfg />
                                        </Grid>

                                        <RadioButtons />
                                    </Grid>
                                </form>

                            </CardContent>
                        </div>

                        <Grid >
                            <div className={classes.headingRight}>

                                <div className={classes.headingInRight}>{t('common:Number', "2")}</div>
                                <div className={classes.headingInRightPara}>{t('common:Professional', "   Professional Experience")}</div>
                            </div>
                            <div className={classes.forPadingFormRight}>
                                <CardContent className={classes.cardCont}>
                                    <Grid container spacing={2}>
                                        <Grid item md={12} sm={12} xs={12}>
                                            <InputLabel className={classes.labelFilled} >{t('common:ShortBio', "   Short Bio about you *(250 characters) ")} </InputLabel>
                                            <Grid item>
                                                <TextField className={classes.eventprotext}
                                                    placeholder={t('common:Description', "   Description")} fullWidth
                                                    multiline
                                                />
                                            </Grid>

                                        </Grid>
                                        <Grid item md={12} sm={12} xs={12}>
                                            <InputLabel className={classes.labelFilledLinked} >{t('common:LinkedIn', "   LinkedIn Profile")}* </InputLabel>
                                            <TextField className={classes.formInputText4} type={t('common:url', "   url")} placeholder='URL Address' variant='filled' fullWidth required />
                                        </Grid>
                                    </Grid>
                                </CardContent>


                                <CardContent>
                                    <Grid container spacing={1}>
                                        <Grid item md={12} sm={12} xs={12}>

                                            <MenteeAccordion />

                                            <MenteeRadio />


                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </div>
                        </Grid>

                        <Grid>
                            <div className={classes.headingRight}>

                                <div className={classes.headingInRight}>{t('common:number', "   3")}</div>
                                <div className={classes.headingInRightPara}>{t('common:Company', "   Company Details")}</div>
                            </div>
                            <div className={classes.forPadingFormRight}>
                                <CardContent>
                                    <form>
                                        <Grid container spacing={1}>
                                            <Grid item md={12} sm={12} xs={12}>
                                                <InputLabel className={classes.labelFilled}>{t('common:CompanyName', "   Company Name")}</InputLabel>
                                                <TextField className={classes.formInputText} type="text" placeholder='' variant='filled' fullWidth required />
                                            </Grid>
                                            <Grid item md={12} sm={12} xs={12}>
                                                <InputLabel className={classes.labelFilled}>{t('common:Address', "   Address Line 1")}</InputLabel>
                                                <TextField className={classes.formInputText5} placeholder={t('common:street', "   street")} type='address' variant='filled' fullWidth required />
                                            </Grid>
                                            <Grid item md={12} sm={12} xs={12}>
                                                <InputLabel className={classes.labelFilled}>{t('common:AddressSecond', "   Address Line 2")}</InputLabel>
                                                <div>
                                                    <TextField className={classes.formInputText5} placeholder={t('common:Apt', "   Apt/Suite/Other")} type='address' variant='filled' fullWidth required />
                                                </div>
                                            </Grid>
                                            <Grid item md={6} sm={12} xs={12}>
                                                <InputLabel className={classes.labelFilledstate}>{t('common:Postal', "   Postal Code")}</InputLabel>
                                                <TextField className={classes.formInputText} placeholder='------' type='number' variant='filled' fullWidth required />
                                            </Grid>


                                            <Grid item md={6} sm={12} xs={12}>
                                                <InputLabel className={classes.labelFilledstate}>{t('common:Country', "   Country")}</InputLabel>
                                                <div className={classes.AddUpperDepartmentDiv}>
                                                    <PopupState variant="popover" popupId="demo-popup-menu">
                                                        {(popupState) => (
                                                            <React.Fragment>
                                                                <Button fullWidth variant="contained" className={classes.drop1} endIcon={<KeyboardArrowDownIcon className={classes.iconn} />} {...bindTrigger(popupState)}>
                                                                    <p className={classes.cLeder}>{t('common:Select', "   Select")}  </p>
                                                                </Button>
                                                                <Menu {...bindMenu(popupState)}>
                                                                    <MenuItem fullWidth onClick={popupState.close}>1</MenuItem>
                                                                    <MenuItem fullWidth onClick={popupState.close}>2</MenuItem>
                                                                </Menu>
                                                            </React.Fragment>
                                                        )}
                                                    </PopupState>
                                                </div>
                                            </Grid>
                                            <Grid item md={6} sm={12} xs={12}>
                                                <InputLabel className={classes.labelFilledstate}>{t('common:City', "   City")}</InputLabel>
                                                <div className={classes.AddUpperDepartmentDiv}>
                                                    <PopupState variant="popover" popupId="demo-popup-menu">
                                                        {(popupState) => (
                                                            <React.Fragment>
                                                                <Button fullWidth variant="contained" className={classes.drop1} endIcon={<KeyboardArrowDownIcon className={classes.iconn} />} {...bindTrigger(popupState)}>
                                                                    <p className={classes.cLeder}>{t('common:Select', "   Select")}  </p>
                                                                </Button>
                                                                <Menu {...bindMenu(popupState)}>
                                                                    <MenuItem fullWidth onClick={popupState.close}>1</MenuItem>
                                                                    <MenuItem fullWidth onClick={popupState.close}>2</MenuItem>
                                                                </Menu>
                                                            </React.Fragment>
                                                        )}
                                                    </PopupState>
                                                </div>
                                            </Grid>
                                            <Grid item md={6} sm={12} xs={12}>
                                                <InputLabel className={classes.labelFilledstate}>{t('common:State', "   State/Province/Region")}</InputLabel>
                                                <TextField className={classes.formInputText5} placeholder='' type='address' variant='filled' fullWidth required />
                                            </Grid>
                                        </Grid>
                                    </form>
                                </CardContent>

                                <br />
                                <hr />
                            </div>
                        </Grid>
                        <div className={classes.forPadingFormRight}>
                            <div className={classes.recaptcha}>
                                <Checkbox />

                                <p> I am not a Robot</p>

                            </div>
                            <p className={classes.captchaPara}><i>{t('common:By', "   By clicking Accept and register, you agree to the ")}<span className={classes.captchaParaSpan}>{t('common:Terms', "   Terms of Use")}</span>,{t('common:the ', "   the ")} <span className={classes.captchaParaSpan}>{t('common:Privacy', "   Privacy Policy")}</span>{t('common:and', "   and")}  <span className={classes.captchaParaSpan}>{t('common:cookies', "   cookies Policy")}</span>{t('common:ofStellar', "   of Stellar Mentoring ")} </i></p>
                        </div>
                        <div className={classes.finalButtons}>
                            <Button className={classes.finalFirstBtn}><p className={classes.finalFirstBtn1}>{t('common:SaveButton', "   Save and returns to all upcoming programs")}</p></Button>
                            <Button className={classes.finalSecondBtn}><p className={classes.finalFirstBtn1}>{t('common:AcceptButton', "   Accept and Register")} </p><ArrowForwardIosOutlinedIcon /></Button>
                        </div>

                    </div>
                    <p className={classes.paraLastRight}>*{t('common:Neccessary', "   Neccessary Field")} </p>
                </div>
            </div>



        </>
    )
}

export default StellarMentee;