
import { Typography, Grid, InputLabel } from '@material-ui/core'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';


const useStyles = makeStyles((theme) => ({
    headOrganization: {
        display: 'flex',
        [theme.breakpoints.down('1076')]: {
            display: 'inherit',
        }
    },
    headTop: {
        width: '40%',
        marginLeft: '5rem',
        marginTop: '1rem',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('1076')]: {
            width: '100%',
            marginLeft: '0rem',
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

    },
    organizationP: {
        fontSize: ' 18px',
        color: '#1c1c1c',
        textAlign: 'left',
        fontFamily: 'Montserrat',
        marginBottom: '0',
        paddingBottom: '0',
    },
    oreganizationH6: {
        backgroundColor: '#3d3795',
        color: 'white',
        width: '80%',
        padding: '0.5rem',
        fontWeight: '600',
        fontFamily: 'Montserrat',
        [theme.breakpoints.down('1076')]: {
            width: '100%',

        }
    },



    headTop1: {
        width: '40%',
        marginLeft: '0rem',
        marginTop: '3rem',
        [theme.breakpoints.down('1076')]: {
            width: '100%',
            marginLeft: '0rem',
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
        padding: '0 2.5rem',
        [theme.breakpoints.down('1076')]: {
            width: '100%',
            padding: '0',
            marginTop: '2rem',

        }
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
        borderRight: '2px solid #b99ac2',
        display: 'flex',
        justifyContent: 'right',
        background: '#aeadcb',
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
        justifyContent: 'space-around',
        textAlign: 'center',
        marginLeft: '13rem',
        alignItem: 'center'
    },
    flexIconOrg: {
        width: '100%',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'space-around',
        alignItem: 'center',
        color: '#3d3795',
        padding: '4px',
        [theme.breakpoints.down('1076')]: {
            display: 'none',
        }

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
        textAlign: 'left',
        padding: '0',
        fontFamily: 'Montserrat',
        margin: '0',
    },
    descriptionPara: {
        fontSize: ' 16px',
        color: '#1c1c1c',
        width: '100%',
        textAlign: 'left',
        marginTop: '0',

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
        [theme.breakpoints.down('1076')]: {
            marginLeft: '0',
        }

    },
    paragraphOrg2: {
        fontSize: ' 16px',
        color: '#1c1c1c',
        marginLeft: '1rem',
        textAlign: 'left',

        margin: '0',
        fontFamily: 'Montserrat',
        [theme.breakpoints.down('1076')]: {
            marginLeft: '0',
        }

    },

    paragraphOrg3: {
        fontSize: ' 16px',
        color: '#303186',
        textAlign: 'left',
        fontFamily: 'Montserrat',
        fontWeight: '800',
        marginLeft: '1rem',
        margin: '0',
        [theme.breakpoints.down('1076')]: {
            marginLeft: '0',
        }

    },
    paragraphOrg: {
        fontSize: ' 16px',
        color: '#1c1c1c',
        textAlign: 'left',
        marginLeft: '1rem',
        marginTop: '55px',
        marginBottom: '0',


        fontFamily: 'Montserrat',
        [theme.breakpoints.down('1076')]: {
            marginLeft: '0',
        }


    },
    // table time
    tableDatas: {
        color: 'white',
        fontWeight: '700',

        '& span': {

            borderBottom: '2px solid white',

            padding: '0 0.8rem'
        },
    },
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
        [theme.breakpoints.down('1076')]: {
            width: '100%'

        }

    },
    tabletime2: {
        width: '100%',
        borderRight: '1px solid #3d3795'
    },
    tabletime3: {
        width: '100%',


    },


    centerG: {
        textAlign: 'center',
        color: '#c08dbc',
        marginRight: '142px',
    },

    // Border grid start
    gridProgramP1: {
        marginLeft: '0rem',
    },

    gridSpaceBtn1: {
        height: '1rem',
        marginTop: '1rem',
        width: '100%',
        alignItem: 'center',
        display: 'flex',
        marginBottom: '1rem',


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

    gridSpanSet: {
        background: '#c1c0d4',
        borderRadius: '13px',

        padding: '3px 50px 3px 10px',
    },
    gridSpanSet1: {
        background: '#c1c0d4',
        borderRadius: '13px',

        padding: '3px 10px'
    },
    imggg: {
        width: '20px',
        height: '20px',
        marginRight: '3px'
    },
    imggg1: {
        opacity: ' 0.2',
        width: '20px',
        height: '20px',
        marginRight: '3px'
    },
    iconPar: {
        display: 'flex'
    },
    tableFW: {
        [theme.breakpoints.down('1076')]: {
            width: '100%',

        }
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
const OrganizationStellar = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.headOrganization}>
                <div className={classes.headTop}>
                    <Grid container md={12}>
                        <Grid className={classes.tableFW} >
                            <Typography>
                                <h3 className={classes.oreganizationH3}>MENTORING STELLAR 2020</h3>

                            </Typography>
                            <Grid md={12}>
                                <InputLabel variant='h6' fullwidth className={classes.oreganizationH6}>  Organization name</InputLabel> </Grid>
                            <Typography>
                                <p className={classes.organizationP}><span className={classes.spanP}>President</span> at <span className={classes.spanForColor}>Society name</span></p>
                                <p className={classes.orgPara}>Starts January 1,2020, ends February 18,2020</p>
                            </Typography>
                            <Grid md={12}>
                                <img className={classes.flag} src="https://itdevelopmentservices.com/fortunadata/wp-content/uploads/2022/06/us-f.png" width='24px' height='20px' />
                                <img className={classes.flag1} src=" https://itdevelopmentservices.com/fortunadata/wp-content/uploads/2022/06/gfg.png" width='24px' height='20px' />
                            </Grid>
                            <Typography color="red">
                                <p className={classes.descriptionPara}><span className={classes.description}>Short Description:</span><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad neque at illum, possimus architecto officia. Tempora voluptatum laudantium, aliquam illum in voluptates, vero veritatis aliquid atque aspern</p>
                            </Typography>

                        </Grid>


                    </Grid>
                </div>

                <div className={classes.headTop1}>
                    <Grid className={classes.tableTime1}>
                        <div className={classes.tabletime2}>
                            <Grid className={classes.tableHead} md={12}>START</Grid>
                            <Grid className={classes.tableData1} md={12}>jan</Grid>
                            <Grid className={classes.tableData2} md={12}><span> 01</span></Grid>
                            <Grid className={classes.tableData3} md={12}>2020</Grid>
                        </div>
                        <div className={classes.tabletime3}>
                            <Grid className={classes.tableHead} md={12}>END</Grid>
                            <Grid className={classes.tableData1} md={12}>feb</Grid>
                            <Grid className={classes.tableData2} md={12}><span> 18</span></Grid>
                            <Grid className={classes.tableData3} md={12}>2020</Grid>
                        </div>
                    </Grid>
                    <Grid md={6}  >
                        <StarOutlinedIcon className={classes.starOrg} />
                        <StarOutlinedIcon className={classes.starOrg} />
                        <StarOutlinedIcon className={classes.starOrg} />
                        <StarOutlinedIcon className={classes.starOrg} />

                    </Grid>

                    <Typography >
                        <p className={classes.paragraphOrg}>Mentors Name: <span className={classes.paragraphOrg1}>Liselotte Beer</span> (59%)</p>
                        <p className={classes.paragraphOrg2}>Program affisate:</p>

                        <p className={classes.paragraphOrg3}>Mentoring Stellar 2020</p>
                        <p className={classes.paragraphOrg3}>Mentoring Stellar 2020 quarter</p>
                    </Typography>
                </div>
            </div>
            < div className={classes.flexIcon}>
                <Grid md={12} className={classes.flexIconOrg}>
                    <Grid className={classes.iconPar}><img className={classes.imggg} src="https://itdevelopmentservices.com/fortunadata/wp-content/uploads/2022/06/down-arrow2.png" />12Jan</Grid>
                    <Grid className={classes.iconPar}><img className={classes.imggg1} src="https://itdevelopmentservices.com/fortunadata/wp-content/uploads/2022/06/down-arrow2.png" />28Jan</Grid>
                    <Grid className={classes.iconPar}><img className={classes.imggg1} src="https://itdevelopmentservices.com/fortunadata/wp-content/uploads/2022/06/down-arrow2.png" />10Feb</Grid>
                </Grid>
            </div>

            <div className={classes.gridOrg1}>
                <Grid md={1} className={classes.gridOrg2}>
                    <Grid>jan</Grid>
                    <Grid className={classes.tableDatas}><span> 01</span></Grid>
                    <Grid>2020</Grid>

                </Grid>

                <Grid md={4} className={classes.gridOrg3}> <div className={classes.line1}></div></Grid>

                <Grid md={3} className={classes.gridOrg4}></Grid>
                <Grid md={2} className={classes.gridOrg5}><div className={classes.line}></div></Grid>
                <Grid md={1} className={classes.gridOrg6}></Grid>

                <Grid md={1} className={classes.gridOrg2}>
                    <Grid>feb</Grid>
                    <Grid className={classes.tableDatas}><span> 18</span></Grid>
                    <Grid>2020</Grid>
                </Grid>
            </div>
            <Grid md={12} className={classes.centerG}>22 jan</Grid>
            <div className={classes.gridSpaceBtn}>
                <Grid className={classes.gridSpaceBtn1} >
                    <Grid md={2} sm={0}></Grid>
                    <Grid className={classes.gridProgram} md={10} sm={12}>
                        <p className={classes.gridProgramP}> 01 Jan <span className={classes.gridSpanSet}>Program Setup</span> </p></Grid>
                    <Grid md={5} sm={0}></Grid>
                </Grid>


                <Grid className={classes.gridSpaceBtn2} >
                    <Grid md={5} sm={0}></Grid>
                    <Grid className={classes.gridProgram} md={7} sm={12}>
                        <p className={classes.gridProgramP}> 19 Jan <span className={classes.gridSpanSet1}>Mentor data collection</span> </p></Grid>
                    <Grid md={2} sm={0}></Grid>
                </Grid>
                <Grid className={classes.gridSpaceBtn3} >
                    <Grid md={6} sm={0}></Grid>
                    <Grid className={classes.gridProgram} md={6} sm={12}>
                        <p className={classes.gridProgramP}> 01 Feb <span className={classes.gridSpanSet1}>Mentor data collection</span> </p></Grid>

                </Grid>

                <Grid className={classes.gridSpaceBtn4} >
                    <Grid md={7} sm={0}></Grid>
                    <Grid className={classes.gridProgram} md={5} sm={12}>
                        <p className={classes.gridProgramP}> 13 Feb <span className={classes.gridSpanSet}>Kickoff webinar</span> </p></Grid>

                </Grid>

                <Grid className={classes.gridSpaceBtn5} >
                    <Grid md={8} sm={0}></Grid>
                    <Grid className={classes.gridProgram} md={4} sm={12}>
                        <p className={classes.gridProgramP1}> 14 Feb <span className={classes.gridSpanSet}>Reporting</span> </p></Grid>

                </Grid>
            </div>
        </>
    )
}

export default OrganizationStellar