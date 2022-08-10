import { Typography, Grid, InputLabel } from '@material-ui/core'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import flag from './assets/img/flag.png';
import flag1 from './assets/img/flag1.png';
import down2 from './assets/img/down2.png';
import { useTranslation } from 'react-i18next';
// import ProgramCard from 'ProgramCard'
import Taab from 'Taab'
import Waffle from 'App/Component/Waffle';

const useStyles = makeStyles((theme) => ({
    headOrganization: {
        display: 'flex',
        [theme.breakpoints.down('1076')]: {
            display: 'inherit',
        }
    },

    tableTM: {
        [theme.breakpoints.down('1076')]: {
            width: '100%',
        }
    },
    tableFW: {
        [theme.breakpoints.down('1076')]: {
            width: '100%',
        }
    },
    oreganizationH3: {
        marginBottom: '0.5rem',
        fontSize: '18px',
        fontFamily: "Sen",
        color: '#303186',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'left',
        [theme.breakpoints.down('1076')]: {
            width: '100%',
        }
    },
    organizationP: {
        fontSize: ' 18px',
        color: '#1c1c1c',
        textAlign: 'left',
        fontFamily: 'Montserrat',
        marginBottom: '0rem',
        padding: '0'
    },
    oreganizationH6: {
        backgroundColor: '#3d3795',
        color: 'white',
        width: '80%',
        padding: '0.5rem',
        fontWeight: '600',
        fontFamily: 'Montserrat',
    },
    headTop1: {
        width: '40%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '1rem',
        [theme.breakpoints.down('1076')]: {
            width: '100%',
        }
    },
    tableTime: {
        border: '2px solid #3d3795',
        display: 'flex'
    },
    gridOrg1: {
        display: 'flex',
        width: '100%',
        marginTop: '0',
        padding: '0 2.5rem'
    },
    gridOrg2: {
        background: '#3d3795',
        padding: '0.1rem 0',
        textAlign: 'center',
        color: 'white',
        margin: '0',
        width: '100% !important',
    },
    gridOrg3: {
        background: '#aeadcb',
        borderRight: '2px solid #b99ac2',
        display: 'flex',
        justifyContent: 'right',
        [theme.breakpoints.down('1076')]: {
            display: 'none',
        }

    },
    gridOrg4: {
        background: '#d1d0dd',
        [theme.breakpoints.down('1076')]: {
            display: 'none',
        }
    },
    gridOrg5: {
        background: '#d1d0dd',
        borderLeft: '2px solid #8c89bc',
        display: 'flex',
        justifyContent: 'right',
        [theme.breakpoints.down('1076')]: {
            display: 'none',
        }
    },
    gridOrg6: {
        background: '#d1d0dd',
        borderLeft: '2px solid #8c89bc',
        [theme.breakpoints.down('1076')]: {
            display: 'none',
        }
    },
    flexIcon: {
        width: '61%',
        display: 'flex',
        textAlign: 'center',
        marginLeft: '13rem',
        alignItem: 'center'
    },
    flexIconOrg: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        color: '#3d3795',
        padding: '4px',
        [theme.breakpoints.down('1076')]: {
            display: 'none',
        }
    },
    spanP: {
        fontWeight: '900',
        fontFamily: 'Montserrat',
    },
    spanForColor: {
        color: '#3d3795',
        fontWeight: '500'
    },
    orgPara: {
        fontSize: ' 15px',
        color: '#1c1c1c',
        marginTop: '0',
        marginBottom: '0',
        textAlign: 'left',
        fontFamily: 'Montserrat',
    },
    descriptionPara: {
        fontSize: ' 15px',
        color: '#1c1c1c',
        marginTop: '0',
        textAlign: 'left',
        width: '95%',
        fontFamily: 'Montserrat',
    },
    description: {
        fontWeight: "900",
        fontFamily: 'Montserrat',
    },
    starOrg: {
        color: "#3d3795"
    },
    paragraphOrg1: {
        fontWeight: "700",
        fontSize: ' 16px',
        color: '#1c1c1c',
        textAlign: 'left',
        fontFamily: 'Montserrat',
    },
    paragraphOrg2: {
        fontSize: ' 16px',
        color: '#1c1c1c',
        textAlign: 'left',
        fontFamily: 'Montserrat',
        margin: '0',
    },
    paragraphOrg3: {
        fontSize: ' 16px',
        color: '#303186',
        marginTop: '0',
        marginBottom: '30px',
        padding: '0',
        textAlign: 'left',
        fontFamily: 'Montserrat',
        fontWeight: '800'
    },
    paragraphOrg31: {
        fontSize: ' 16px',
        color: '#303186',
        margin: '0',
        padding: '0',
        textAlign: 'left',
        fontFamily: 'Montserrat',
        fontWeight: '800'
    },
    paragraphOrg: {
        fontSize: ' 16px',
        color: '#1c1c1c',
        textAlign: 'left',

        marginBottom: '0',
        fontFamily: 'Montserrat',
    },
    detach: {
        color: '#f17a6e'
    },
    // table time
    tableHead: {
        background: '#3d3795',
        color: 'white',
    },
    tableData1: {
        color: '#3d3795',
        fontWeight: '500',
    },
    tableData2: {
        color: '#3d3795',
        fontWeight: '700',
        '& span': {
            borderBottom: '2px solid #3d3795',
            padding: '0 0.8rem'
        }
    },
    tableDatas: {
        color: 'white',
        fontWeight: '700',
        '& span': {
            borderBottom: '2px solid white',
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
        width: '7rem',
        height: '5.3rem',
        marginBottom: '1rem',
        marginTop: '3rem',
        [theme.breakpoints.down('1076')]: {
            width: '100%'
        }
    },
    tabletime2: {
        width: '3.7rem',
        borderRight: '1px solid #3d3795',
        [theme.breakpoints.down('1076')]: {
            width: '100%'
        }
    },
    tabletime3: {
        width: '3.7rem',
        [theme.breakpoints.down('1076')]: {
            width: '100%'
        }
    },
    imggg: {
        width: '20px',
        height: '20px',
    },
    imggga: {
        width: '20px',
        height: '20px',
        opacity: '0.2',
    },
    imggg1: {
        width: '20px',
        height: '20px',
    },
    centerG: {
        textAlign: 'center',
        color: '#c08dbc',
        marginRight: '142px',
        [theme.breakpoints.down('1076')]: {
            display: 'none'
        },
    },
    // Border grid start
    gridSpaceBtn1: {
        height: '1rem',
        marginTop: '1rem',
        width: '100%',
        alignItem: 'center',
        display: 'flex',
        marginBottom: '1rem',
    },
    gridSpanSet: {
        background: '#c1c0d4',
        borderRadius: '13px',
        padding: '3px 50px 3px 10px',
    },
    gridSpaceBtn: {
        [theme.breakpoints.down('1076')]: {
            width: '100%',
            marginLeft: '2.5rem'
        },
    },
    gridSpanSet1: {
        background: '#c1c0d4',
        borderRadius: '13px',
        padding: '3px 10px'
    },
    gridSpaceBtn2: {
        height: '1rem',
        marginBottom: '1rem',
        width: '100%',
        alignItem: 'center',
        display: 'flex',
    },
    gridSpaceBtn3: {
        height: '1rem',
        marginTop: '1rem',
        width: '100%',
        alignItem: 'center',
        display: 'flex',
    },
    gridSpaceBtn4: {
        height: '1rem',
        marginBottom: '1rem',
        width: '100%',
        marginTop: '1rem',
        alignItem: 'center',
        display: 'flex',
    },
    gridSpaceBtn5: {
        height: '1rem',
        marginBottom: '1rem !important',
        width: '100%',
        alignItem: 'center',
        display: 'flex',
    },
    gridProgram: {
        borderLeft: '2px solid #3d3795',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '0.5rem',
        color: '#3d3795'
    },

    // ul ********************

    ul: {
        display: 'flex',
        alignItems: 'center',
        listStyle: 'none',
        width: ' 34vw',
        margin: '0',
        padding: '0',
        [theme.breakpoints.down('1076')]: {
            width: '100%',
            marginTop: '1rem',
            padding: '1rem'
        },
        [theme.breakpoints.down('804')]: {
            display: 'inherit',
        }
    },
    li: {
        fontSize: '13px',
        fontFamily: 'Montserrat',
        color: '#3d3795',
        border: '1px solid #b1aecd',
        lineHeight: '2',
        textAlign: 'center',
        padding: ' 10px',
        fontWeight: '600',
        [theme.breakpoints.down('1076')]: {
            width: '100%',
            marginTop: '1rem',
            padding: '1rem'
        }
    },
    li1: {
        fontSize: '15px',
        fontFamily: 'Montserrat',
        color: '#3d3795',
        padding: '0 20px',
        lineHeight: '2',
        textAlign: 'center',
        fontWeight: '600',
    },
    li2: {
        fontSize: '15px',
        fontFamily: 'Montserrat',
        color: '#f17a6e',
        lineHeight: '2',
        textAlign: 'center',
        margin: '0 10px',
        padding: '0 20px',
        fontWeight: '600',
    },
    li3: {
        fontSize: '15px',
        fontFamily: 'Montserrat',
        color: '#3d3795',
        fontWeight: '600',
        padding: '0 20px',
        lineHeight: '2',
        textAlign: 'center',
    },
    // border****************
    borderBoxS: {
        border: '5px solid #6d2965',
    },
    // flag
    flag1: {
        marginLeft: '0.5rem',
        width: '1.4rem',
        height: '1.4rem',
        marginTop: '0.2rem',
        marginBottom: '0.2rem',
        padding: '0',
    },
    flag: {
        marginTop: '0.2rem',
        padding: '0',
        width: '1.4rem',
        marginBottom: '0.2rem',
        height: '1.4rem'
    },

    //  aaaaaaaaa
    aMore: {
        fontSize: '15px',
        fontFamily: "Montserrat",
        color: '#736fae',
        padding: '0',
        display: 'flex',
        margin: '0.2rem 9.8rem',
        fontWeight: '600'
    },
    pMore: {
        padding: '0',
        margin: '0 1rem',
        [theme.breakpoints.down('1076')]: {
            fontSize: '3vw',
            textAlign: 'center'
        }
    },
    iconPar: {
        display: 'flex'
    },
    iconParaa: {
        display: 'flex',
        alignItem: 'center',
    },
    line: {
        borderLeft: '2px solid #8c89bc',
        width: '20px',
        height: '64px',
    },
    line1: {
        borderLeft: '2px solid #8c89bc',
        width: '20px',
        height: '64px',
    },
}))
const ProgramDetails = () => {
    const { t } = useTranslation()
    const classes = useStyles();
    return (
        <>
            <Waffle text='All Program' url={'console/programs'} />
            <Grid md={12} container className={classes.headOrganization}>
                <Grid md={2} className={classes.tableTM} >
                    <Grid className={classes.tableTime1}>
                        <div className={classes.tabletime2}>
                            <Grid className={classes.tableHead} md={12}>{t('common:Start', "   Start")}</Grid>
                            <Grid className={classes.tableData1} md={12}>{t('common:Date', " jan")}</Grid>
                            <Grid className={classes.tableData2} md={12}><span> 01</span></Grid>
                            <Grid className={classes.tableData3} md={12}>2020</Grid>
                        </div>
                        <div className={classes.tabletime3}>
                            <Grid className={classes.tableHead} md={12}>{t('common:End', "   End")}</Grid>
                            <Grid className={classes.tableData1} md={12}>{t('common:Date', " feb")}</Grid>
                            <Grid className={classes.tableData2} md={12}><span> 18</span></Grid>
                            <Grid className={classes.tableData3} md={12}>2020</Grid>
                        </div>
                    </Grid>
                    <Grid md={12}  >
                        <StarOutlinedIcon className={classes.starOrg} />
                        <StarOutlinedIcon className={classes.starOrg} />
                        <StarOutlinedIcon className={classes.starOrg} />
                        <StarOutlinedIcon className={classes.starOrg} />
                    </Grid>
                </Grid>
                <Grid md={5} className={classes.tableFW} >
                    <Typography>
                        <h3 className={classes.oreganizationH3}>{t('common:MENTORINGSTELLAR', "   MENTORING STELLAR 2020")}</h3>
                    </Typography>
                    <Grid md={12}>
                        <InputLabel variant='h6' fullwidth className={classes.oreganizationH6}>  {t('common: Organizationname', "   Organization name")}</InputLabel> </Grid>
                    <Typography>
                        <p className={classes.organizationP}><span className={classes.spanP}>{t('common:President', "   President")}</span>{t('common:at', " at")}  <span className={classes.spanForColor}>{t('common:Society', "Society name")}</span></p>
                        <p className={classes.orgPara}>{t('common:Startsends', "Starts January 1,2020, ends February 18,2020")}</p>
                    </Typography>
                    <Grid md={12}>
                        <img className={classes.flag} src={flag} width='24px' height='20px' />
                        <img className={classes.flag1} src={flag1} width='24px' height='20px' />
                    </Grid>
                    <Typography>
                        <p className={classes.descriptionPara}><span className={classes.description}>{t('common:ShortDescription', " Short Description:")}</span><br />{t('common:ShortDescOraganizastion', "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad neque at illum, possimus architecto officia. Tempora voluptatum laudantium, aliquam illum in voluptates, vero veritatis aliquid atque aspern")}</p>
                    </Typography>
                </Grid>
                <Grid md={5} className={classes.headTop1}>
                    <Grid md={12}>
                        <ul className={classes.ul}>
                            <li className={classes.li}>{t('common:EditProgram', " Edit Program")}</li>
                            <li className={classes.li1}>{t('common:Archive', " Archive")}</li>
                            <li className={classes.li2}>{t('common:Delete', " Delete")}</li>
                            <li className={classes.li3}>{t('common:Export', " Export")}</li>
                        </ul>
                    </Grid>
                    <Typography>
                        <p className={classes.paragraphOrg}>{t('common:MentorsName', " Mentors Name:")}  <span className={classes.paragraphOrg1}>{t('common:Liselotte', " Liselotte Beer")}</span> (59%) <span className={classes.detach}>{t('common:Detach', " Detach")}</span></p>
                        <p className={classes.paragraphOrg2}>{t('common:affisate', " Program affisate:")} </p>
                        <p className={classes.paragraphOrg31}>{t('common:MENTORINGSTELLAR', " Mentoring Stellar 2020")} </p>
                        <p className={classes.paragraphOrg3}>{t('common:quarter', " Mentoring Stellar 2020 quarter")} </p>
                    </Typography>
                </Grid>
            </Grid>
            <Grid md={12} className={classes.borderBoxS}>
                <Grid className={classes.iconParaa}>
                    <p className={classes.aMore}>{t('common:More', " More Details")} <KeyboardArrowDownIcon /></p>
                </Grid>
                <Typography>
                    <h1 className={classes.pMore}>{t('common:Timeline', " Timeline displayed in a program details")} </h1></Typography>
                <div className={classes.flexIcon}>
                    <Grid md={12} className={classes.flexIconOrg}>
                        <Grid className={classes.iconPar}><img className={classes.imggg} src={down2} />12{t('common:Date', " Jan")}</Grid>
                        <Grid className={classes.iconPar}><img className={classes.imggga} src={down2} />28{t('common:Date', " Jan")}</Grid>
                        <Grid className={classes.iconPar}><img className={classes.imggga} src={down2} />10{t('common:Date', " Feb")}</Grid>
                    </Grid>
                </div>
                <div className={classes.gridOrg1}>
                    <Grid md={1} className={classes.gridOrg2}>
                        <Grid>{t('common:Date', " jan")}</Grid>
                        <Grid className={classes.tableDatas}><span> 01</span></Grid>
                        <Grid>2020</Grid>
                    </Grid>
                    <Grid md={4} className={classes.gridOrg3}> <div className={classes.line1}></div></Grid>
                    <Grid md={3} className={classes.gridOrg4}></Grid>
                    <Grid md={2} className={classes.gridOrg5}><div className={classes.line}></div></Grid>
                    <Grid md={1} className={classes.gridOrg6}></Grid>
                    <Grid md={1} className={classes.gridOrg2}>
                        <Grid>{t('common:Date', " feb")}</Grid>
                        <Grid className={classes.tableDatas}><span>18</span></Grid>
                        <Grid>2020</Grid>
                    </Grid>
                </div>
                <Grid md={12} className={classes.centerG}>22 {t('common:Date', " Jan")}</Grid>
                <div className={classes.gridSpaceBtn}>
                    <Grid className={classes.gridSpaceBtn1} >
                        <Grid md={2} sm={0}></Grid>
                        <Grid className={classes.gridProgram} md={10} sm={12}>
                            <p className={classes.gridProgramP}> 01 {t('common:Date', " Jan")} <span className={classes.gridSpanSet}>{t('common:  Setup', "  Program Setup")}</span> </p></Grid>
                        <Grid md={5} sm={0}></Grid>
                    </Grid>
                    <Grid className={classes.gridSpaceBtn2} >
                        <Grid md={5} sm={0}></Grid>
                        <Grid className={classes.gridProgram} md={7} sm={12}>
                            <p className={classes.gridProgramP}> 19 {t('common:Date', " Jan")} <span className={classes.gridSpanSet1}>{t('common:collection', "  Mentor data collection")}</span> </p></Grid>
                        <Grid md={2} sm={0}></Grid>
                    </Grid>
                    <Grid className={classes.gridSpaceBtn3} >
                        <Grid md={6} sm={0}></Grid>
                        <Grid className={classes.gridProgram} md={6} sm={12}>
                            <p className={classes.gridProgramP}> 01 {t('common:Date', " Feb")} <span className={classes.gridSpanSet1}>{t('common:collection', "  Mentor data collection")}</span> </p></Grid>
                    </Grid>
                    <Grid className={classes.gridSpaceBtn4} >
                        <Grid md={7} sm={0}></Grid>
                        <Grid className={classes.gridProgram} md={5} sm={12}>
                            <p className={classes.gridProgramP}> 13 {t('common:Date', " Feb")} <span className={classes.gridSpanSet}>{t('common:Kickoff', " Kickoff webinar")}</span> </p></Grid>
                    </Grid>
                    <Grid className={classes.gridSpaceBtn5} >
                        <Grid md={8} sm={0}></Grid>
                        <Grid className={classes.gridProgram} md={4} sm={12}>
                            <p className={classes.gridProgramP1}> 14 {t('common:Date', " Feb")} <span className={classes.gridSpanSet}>{t('common:Reporting', " Reporting")}</span> </p></Grid>
                    </Grid>
                </div>
            </Grid>
            <br />
            <br />
            <br />
            <hr />

            <Taab />
        </>
    )
}
export default ProgramDetails





