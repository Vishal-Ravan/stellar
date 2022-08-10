import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import u from './assets/img/u.jpeg';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    fullDiv: {
        padding: '1rem 0 0 4rem',
        backgroundColor: 'white',
    },
    descriptinMainDiv: {
        display: 'flex',
        [theme.breakpoints.down('1026')]: {
            display: 'inherit',
        },
    },
    descriptionEvent: {
        width: '100%',
        height: '12rem',
    },
    headingH2Desc: {
        marginBottom: '1rem',
        fontSize: '32px',
        fontFamily: "Sen",
        color: '#303186',
        fontWeight: 'bold',
        textAlign: 'left',
    },
    descPara: {
        width: '80%'
    },
    descPara1: {
        margin: '0',
        padding: '0',
        fontSize: '16px',
        fontFamily: "Montserrat",
        color: '#1c1c1c',
        lineHeight: ' 2',
        textAlign: 'left',
    },
    descPara2: {
        margin: '0',
        padding: '0',
        fontSize: '16px',
        fontFamily: "Montserrat",
        color: '#1c1c1c',
        lineHeight: ' 2',
        textAlign: 'left',
    },
    descPara3: {
        margin: '0',
        padding: '0',
        fontFamily: "Montserrat",
        color: '#1c1c1c',
        lineHeight: ' 2',
        textAlign: 'left',
    },
    descPara4: {
        margin: '0',
        padding: '0',
        fontSize: '16px',
        fontFamily: "Montserrat",
        color: '#1c1c1c',
        lineHeight: ' 2',
        textAlign: 'left',
    },
    descPara5: {
        margin: '0',
        padding: '0',
        fontSize: '16px',
        fontFamily: "Montserrat",
        color: '#1c1c1c',
        lineHeight: ' 2',
        textAlign: 'left',
    },
    // table time
    tableDescription: {
        display: 'flex',
        alignItems: 'center'
    },
    tableData1: {
        color: 'white',
        fontWeight: '500',
        backgroundColor: '#3c3494'
    },
    tableData2: {
        color: 'white',
        fontWeight: '700',
        backgroundColor: '#3c3494',
        padding: '0px 1rem !important',
        '& span': {
            borderBottom: '2px solid #e6e6e7',
            padding: '0 0.6rem'
        },
    },
    tableData3: {
        color: 'white',
        backgroundColor: '#3c3494'
    },
    tableTime1: {
        border: '1px solid ##3c3494',
        display: 'flex',
        justyfyContent: 'center',
        textAlign: 'center',
        width: '7rem',
        height: '3.3rem',
        marginBottom: '1rem',
        [theme.breakpoints.down('1026')]: {
            margin: '2rem',
            padding: '0',
        },
    },
    tabletime2: {
        width: '3.7rem',
        borderRight: '1px solid white'
    },
    tabletime3: {
        width: '3.7rem',
    },
    oll: {
        fontSize: '16px',
        fontFamily: "Montserrat",
        color: '#1c1c1c',
        lineHeight: ' 2',
        textAlign: 'left',
    },
    btnDescription: {
        margin: '2rem 0',
        [theme.breakpoints.down('1026')]: {
            margin: '0',
            display: 'inherit',
            padding: '0',
        },
    },
    btnDescript: {
        backgroundColor: '#e8e8e8 !important',
        borderColor: "transparent",
        alignItems: "center  !important ",
        color: "#303186 !important",
        boxShadow: "3px 3px 3px 3px rgb(206, 206, 206)  !important",
        fontWeight: "800 !important",
        fontSize: "16px",
        fontFamily: "Montserrat !important",
        padding: "0.7rem 0.9rem   !important",
        borderRadius: "0px",
        marginTop: "0.7rem",
        marginBottom: "1rem",
    },
    btnDescript1: {
        backgroundColor: '#e8e8e8 !important',
        borderColor: "transparent",
        alignItems: "center  !important ",
        color: "#303186 !important",
        boxShadow: "3px 3px 3px 3px rgb(206, 206, 206)  !important",
        fontWeight: "800 !important",
        fontSize: "16px",
        fontFamily: "Montserrat !important",
        padding: "0.7rem 0.9rem   !important",
        borderRadius: "0px",
        marginLeft: "1rem",
        marginTop: "0.7rem",
        marginBottom: "1rem",
    },
    pbtn: {
        color: "#303186 !important",
        margin: '0',
        padding: '0',
        display: 'flex',
        fontFamily: "Montserrat !important",
    },
    ol: {
        marginLeft: '0 !important',
        paddingLeft: '1.2rem',
    },
}))
const DescriptionPage = () => {
    const { t } = useTranslation()
    const classes = useStyles();
    return (<>
        <div className={classes.fullDiv}>
            <Typography variant='h1' className={classes.headingH2Desc}>
                {t('common:Program', "   Program Name - Title Description Page")}
            </Typography>
            <Grid className={classes.tableDescription} md={12}>
                <Grid className={classes.tableTime1}>
                    <div className={classes.tabletime2}>
                        <Grid className={classes.tableData1} md={12}>{t('common:month', " jan")}</Grid>
                        <Grid className={classes.tableData2} md={12}><span> 01</span></Grid>
                        <Grid className={classes.tableData3} md={12}>2020</Grid>
                    </div>
                    <div className={classes.tabletime3}>
                        <Grid className={classes.tableData1} md={12}>{t('common:month', " feb")}</Grid>
                        <Grid className={classes.tableData2} md={12}><span> 18</span></Grid>
                        <Grid className={classes.tableData3} md={12}>2020</Grid>
                    </div>
                </Grid>
            </Grid>
            <div className={classes.descriptinMainDiv}>
                <Grid className={classes.descriptionEvent} md={12}>
                    <img src={u} alt="" width='60%' height="190vh" />
                </Grid>
            </div>
            <div className={classes.information}>
                <Typography className={classes.descPara}>
                    <p className={classes.descPara1}>{t('common:Leadershipprogram', " You are enrolling to cohart 1 Leadership program")}</p>
                    <p className={classes.descPara2}>{t('common:mentoringSession', "   The mentor in journy consist of 6 months of mentoring session:")}</p>
                    <ol className={classes.ol}>
                        <li className={classes.oll}>
                            {t('common:6umins', "   In overage 6 one-on-one Mentoring Session 3U TO 6umins each")}
                        </li>
                        <li className={classes.oll}>{t('common: checkpointCall', "   1 Mentor only and 1 Mentee only checkpoint call")}</li>
                        <li className={classes.oll}>{t('common:toolsandResources', "   Acceces to a state-of-a art online platform with toolsand resources.")}</li>
                        <li className={classes.oll}>{t('common:mentoringProgram', "   A badge for completion of the mentoring program")}</li>
                    </ol>
                    <p className={classes.descPara3}>{t('common: ourMentee', "   Our mentor will dedicate their precious time to aharing their experience with our Mentee")}</p>
                    <p className={classes.descPara4}>{t('common:ownership', "   Our Mentor will support you,at the condition that you are motivated and engaged in your own develoment plan. By registering, we expected you to understand this and take ownership.")} </p>
                    <p className={classes.descPara5}>{t('common:expection', "   you will be matched to a potential Mentor and Mentee who is as close as possible to yor expection and needs.")}</p>
                </Typography>
                <br />
            </div>
        </div>
    </>
    )
}
export default DescriptionPage