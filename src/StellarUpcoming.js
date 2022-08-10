import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import FullWidthTabs from './FullWidthTabs';
import { Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import flag from '../../assets/img/flag.png';
import flag1 from '../../assets/img/flag1.png';
import CEME from '../../assets/img/CEME.png';

const useStyles = makeStyles((theme) => ({

    firstLayout: {
        marginTop: "0",
        width: "100%",
        height: "100%",
        textAlign: "left",
    },
    firstLayoutLeft: {
        paddingTop: "12%",
        paddingLeft: "15%",
        width: "100%",
        minHeight: '860px',
        paddingBottom: '30px',
        backgroundColor: "hsl(0deg 0% 96%)",
        alignItems: "left",
        [theme.breakpoints.down('576')]: {
            textAlign: 'left',
            paddingLeft: '6%',
            margin: '0%',
            width: '100%',
        }
    },
    headingFirst: {
        fontSize: "100%",
        fontFamily: "Sen",
        color: "#303186",
        fontWeight: "bold",
        textAlign: "left",
        marginTop: "1rem",
        marginBottom: '0px',
    },
    ceo: {
        fontSize: "15px",
        fontFamily: "Montserrat",
        textAlign: "left",
        marginBottom: '9px',
        marginTop: '0px',
        padding: '0',
        fontWeight: '500'
    },
    ceoSpan: {
        fontWeight: "700",
        fontSize: "15px",
        fontFamily: "Montserrat",
        textAlign: "left"
    },
    staricon: {
        color: " #303186"
    },
    flag: {
        marginLeft: '5px',
        marginTop: '9px',
    },
    firstParagraph: {
        fontSize: "15px",
        fontFamily: "Montserrat",
        color: "#1c1c1c",
        textAlign: "left",
        width: "85%",
        lineHeight: "1.2",
        [theme.breakpoints.down('576')]: {
            textAlign: 'left',
            padding: '0',
            margin: '0',
            width: '100%',
        },
        [theme.breakpoints.down('991')]: {
            textAlign: 'left',
            padding: '0',
            margin: '0',
            width: '100%',
        }
    },
    a: {
        textDecoration: 'none',
    },
    webLink: {
        textDecoration: "none",
        marginTop: "2.5rem",
        marginBottom: "10rem",
        display: "flex"
    },
    secondLayout: {
        textAlign: "left",
        width: "100%",
        backgroundColor: "#e8e8e8",
        borderLeft: "2px solid #e0e0e2"
    },
    secondLayoutRight: {
        paddingTop: "3rem",
        paddingLeft: "1.5rem",
        paddingRight: "0rem",
        [theme.breakpoints.down('576')]: {
            textAlign: 'left',
            padding: '0',
            margin: '0',
            width: '100%',
        },
    }
}));
const StellarUpcoming = () => {
    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <>
            <Grid container md={12} sm={12} xs={12}  >
                <Grid md={5} sm={12} xs={12} className={classes.firstLayout}>
                    <Grid md={12} sm={12} xs={12} >
                        <div md={12} sm={12} xs={12} className={classes.firstLayoutLeft} >
                            <Typography md={12} sm={12} xs={12}>
                                <img src={CEME} width='45%' height='23%' />
                                <h2 className={classes.headingFirst}>{t('common:Acme', " ACME ORGANIZATION")}</h2>
                                <p className={classes.ceo}>{t('common:Ceo', "  CEO")}<span className={classes.ceoSpan}>
                                </span>{t('common:CeoName', "  :Jhon Doe")}</p>
                            </Typography>
                            <Grid md={12} sm={12} xs={12} >
                                <StarOutlinedIcon className={classes.staricon} />
                                <StarOutlinedIcon className={classes.staricon} />
                                <StarOutlinedIcon className={classes.staricon} />
                                <StarOutlinedIcon className={classes.staricon} />
                            </Grid>
                            <Grid md={12} sm={12} xs={12}>
                                <img className={classes.flag} src={flag} width='24px' height='20px' />
                                <img className={classes.flag} src={flag1} width='24px' height='20px' />
                            </Grid>
                            <Typography md={12} sm={12} xs={12}
                                variant='p'>
                                <p className={classes.firstParagraph}>
                                    {t('common:AcmeParagraph', " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, laboriosam excepturi voluptas, dolores labore rem non debitis necessitatibus eaque ipsum numquam, natus um?")} <br />
                                    <a className={classes.a} href="http://j">{t('common:MoreDetais', "Read more detail")}</a></p>
                            </Typography>
                            <Typography md={12} sm={12} xs={12}>
                                <a className={classes.webLink} href="http//">{t('common:AcmeLink', "   Website www.acme.com")} </a>
                                <p className={classes.firstParagraph}>{t('common:StellMentoring', "   Partner with StellarMentoring since 2021")} </p>
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
                <Grid md={7} sm={12} xs={12} className={classes.secondLayout} >
                    <Grid md={12} sm={12} xs={12} className={classes.secondLayoutRight} >
                        <FullWidthTabs />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
export default StellarUpcoming;