
import { Checkbox, Grid, Table, TableCell, TableRow, TableHead } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate, Link } from "react-router-dom";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import InputAdornment from "@material-ui/core/InputAdornment";


const useStyles = makeStyles(() => ({

    AllProgramUl: {
        display: 'flex',
        listStyle: 'none',
        marginLeft: '0',
        paddingLeft: '0',
        fontFamily: "Montserrat",
    },
    rowdataCell: {
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#f4f4f4',
        border: '1px solid #d8d8d8',
        alignItems: 'center',
        padding: '0',
        margin: '0',
        height: '5rem',

        fontFamily: "Montserrat",
    },

    rowdataCell1: {
        display: 'flex',


        backgroundColor: '#f4f4f4',
        border: '1px solid #d8d8d8',
        alignItems: 'center',

        margin: '0',
        height: '3.5rem',
        fontFamily: "Montserrat",
        textAlign: 'center',
    },
    tableCell1: {
        border: 'none',


        color: '#3c3494',
        fontWeight: '500',
        fontSize: '15px',
        fontFamily: "Montserrat",
    },
    tableCell1Program: {
        border: 'none',

        paddingLeft: '60px',
        color: '#3c3494',
        fontWeight: '500',
        fontSize: '15px',
        fontFamily: "Montserrat",
    },

    tableCell1check: {
        border: 'none',
        paddingLeft: '0',

        color: '#3c3494',

        fontSize: '15px',
        fontFamily: "Montserrat",
    },
    tableCell1Start: {
        border: 'none',


        color: '#3c3494',
        fontWeight: '500',
        fontSize: '15px',
        fontFamily: "Montserrat",
        display: 'flex',
        justifyContent: 'space-evenly',
        marginLeft: '-10px',
    },
    tableCell1org: {
        border: 'none',

        paddingLeft: '21px',
        color: '#3c3494',
        fontWeight: '500',
        fontSize: '15px',
        fontFamily: "Montserrat",
    },
    tableCell1task: {
        border: 'none',

        paddingLeft: '18px',
        color: '#3c3494',
        fontWeight: '500',
        fontSize: '15px',
        fontFamily: "Montserrat",
    },
    tableCell1Reg: {
        border: 'none',

        paddingRight: '28px',
        color: '#3c3494',
        fontWeight: '500',
        fontSize: '15px',
        fontFamily: "Montserrat",
    },

    tableCell: {
        border: 'none',
        padding: '8px 0',

        color: '#3c3494',
        fontWeight: '500',
        fontSize: '15px',
        fontFamily: "Montserrat",
    },

    tableCellLeftMArgin: {
        border: 'none',
        padding: '8px 0',
        marginLeft: "-15px",
        color: '#3c3494',
        fontWeight: '500',
        fontSize: '15px',
        fontFamily: "Montserrat",
    },

    tableCellColor: {
        border: 'none',
        padding: '8px 0',

        color: '#303030',
        fontWeight: '500',
        fontSize: '15px',
        fontFamily: "Montserrat",
    },
    tableCell2: {
        border: 'none',
        padding: '0px 0',
        marginLeft: '7.5rem',
        color: '#3c3494',
        fontWeight: '500',
        fontSize: '16px',
        fontFamily: "Montserrat",
    },
    tableCell3: {
        border: 'none',
        padding: '0px 0',
        marginLeft: '5.3rem',
        color: '#3c3494',
        fontWeight: '500',
        fontSize: '16px',
        fontFamily: "Montserrat",
    },
    tableCell4: {
        border: 'none',
        padding: '0px 10PX',
        marginLeft: '1.6rem',
        color: '#3c3494',
        fontWeight: '500',
        fontSize: '16px',
        fontFamily: "Montserrat",
    }, tableCell5: {
        border: 'none',
        padding: '0px 0',
        marginLeft: '1.5rem',
        color: '#3c3494',
        fontWeight: '500',
        fontSize: '16px',
        fontFamily: "Montserrat",
    }, tableCell6: {
        border: 'none',
        padding: '0px 0',
        marginLeft: '0.5rem',
        color: '#3c3494',
        fontWeight: '500',
        fontSize: '16px',
        fontFamily: "Montserrat",
    }, tableCell7: {
        border: 'none',
        padding: '0px ',
        marginLeft: '1rem',
        color: '#3c3494',
        fontWeight: '500',
        fontSize: '16px',
        fontFamily: "Montserrat",
    },
    AllProgramli1: {
        padding: '0rem',
        margin: '0',
        color: '#413a97',
        fontSize: "20px",
        fontWeight: '600',
        fontFamily: "Montserrat",
    },
    AllProgramli2: {
        paddingTop: '2px',
        paddingLeft: '2rem',
        paddingBottom: '2px',
        textAlign: 'center',
        paddingRight: '2rem',
        margin: '0 4rem',
        color: '#413a97',
        border: '1px solid #3c3494',
        fontSize: "16px",
        fontWeight: '500',
        fontFamily: "Montserrat",

    },
    AllProgramli: {
        padding: '0 2rem',
        color: '#413a97',
        fontSize: "16px",
        fontFamily: "Montserrat",
        fontWeight: '500',
    },
    flexProgram: {
        display: 'flex',
        padding: '0',
        margin: '0',
        alignItems: 'center',

    },

    circle: {
        height: '1rem',
        width: '1rem',
        borderRadius: '1rem',
        background: '#a44a9d',
        marginRight: '1rem',


    },
    circleBG: {
        height: '1rem',
        width: '1rem',
        borderRadius: '1rem',
        background: '#white',
        marginRight: '1rem',
        border: '2px solid #a44a9d'


    },
    circleColor: {
        height: '1rem',
        width: '1rem',
        borderRadius: '1rem',
        background: '#bbbbbb',
        marginRight: '1rem',


    },
    box: {
        height: '3.5rem',
        width: '1rem',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "Montserrat",
        position: 'relative',
        background: '#a44a9d',
        marginRight: '1rem',
        writingMode: 'vertical-lr',
        color: 'white',
        fontSize: '11px',
        display: 'flex',
        transform: 'rotate(180deg)',
        content: ' ',
        borderBottomRightRadius: '5px',
        borderBottomLeftRadius: '5px',
        left: '0',
        bottom: '0',
        borderTop: '8px solid white',
        borderLeft: '13px solid transparent',
        borderRight: ' 13px solid transparent',


    },


    boxColor: {
        height: '3.5rem',
        width: '1rem',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "Montserrat",
        position: 'relative',
        background: '#bbbbbb',
        marginRight: '1rem',
        writingMode: 'vertical-lr',
        color: 'white',
        fontSize: '11px',
        display: 'flex',
        transform: 'rotate(180deg)',
        content: ' ',
        borderBottomRightRadius: '5px',
        borderBottomLeftRadius: '5px',
        left: '0',
        bottom: '0',
        borderTop: '8px solid white',
        borderLeft: '13px solid transparent',
        borderRight: ' 13px solid transparent',






    },
    boxBG: {
        height: '3.5rem',
        width: '1rem',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "Montserrat",
        position: 'relative',

        marginRight: '1rem',
        writingMode: 'vertical-lr',
        color: 'white',
        fontSize: '11px',
        display: 'flex',
        transform: 'rotate(180deg)',
        content: ' ',
        borderBottomRightRadius: '5px',
        borderBottomLeftRadius: '5px',
        left: '0',
        bottom: '0',
        borderTop: '8px solid white',
        borderLeft: '13px solid transparent',
        borderRight: ' 13px solid transparent',

        background: '#cca3ca',

    },
    ulProgram: {

        display: 'flex',
        textDecoration: 'none',
        listStyle: 'none',
        alignItems: 'center',

        padding: '0',
        margin: '0',


    },
    li1: {

        paddingRight: '6px',
        margin: '0',

        '& a': {
            fontFamily: "Montserrat",
            color: '#3c3494',
            textDecoration: 'none',
        }
    },
    li2: {
        padding: '0 9px',
        borderLeft: '2px solid #cecece',
        textAlign: 'center',

        '& a': {
            fontFamily: "Montserrat",
            color: '#f9361b',
            textDecoration: 'none',
        }
    },

    li: {
        padding: '0 9px',
        borderLeft: '2px solid #cecece',

        textAlign: 'center',
        '& a': {
            fontFamily: "Montserrat",
            color: '#3c3494',
            textDecoration: 'none',
        }
    },


    //  time DAte********************************************

    timeHead: {
        display: 'flex',
        height: '  4rem',
        justifyContent: 'center',
        alignItems: 'center',



    },
    timeLeft: {
        backgroundColor: '#3c3494',
        color: 'white',
        borderRight: '1px solid #f2f2f2',
        textAlign: 'center',
        padding: '2px 15px',

    },
    timeLeftBG: {
        backgroundColor: '#9d9bc6',
        color: 'white',
        borderRight: '1px solid #f2f2f2',
        textAlign: 'center',
        padding: '2px 15px',

    },
    timeLeftColor: {
        backgroundColor: '#929292',
        color: 'white',
        borderRight: '1px solid #f2f2f2',
        textAlign: 'center',
        padding: '2px 15px',

    },
    timeRight: {
        backgroundColor: '#3c3494',
        color: '#f2f2f2',
        textAlign: 'center',
        padding: '2px 15px ',


    },
    timeRightBG: {
        backgroundColor: '#9d9bc6',
        color: '#f2f2f2',
        textAlign: 'center',
        padding: '2px 15px ',


    },
    timeRightColor: {
        backgroundColor: '#929292',
        color: '#f2f2f2',
        textAlign: 'center',
        padding: '2px 15px ',


    },
    timeMonth: {
        fontSize: '15px !important',
        fontFamily: "Montserrat",
    },
    timeDate: {
        fontSize: '15px !important',
        fontFamily: "Montserrat",
        '& span': {

            borderBottom: '2px solid #e6e6e7',

            padding: '0 0.6rem'
        }
    },
    timeYear: {
        fontSize: '15px !important',
        fontFamily: "Montserrat",
    },

    // edw


    pmentor: {
        margin: '0 !important',
        padding: '0 !important',
        fontFamily: "Montserrat",
        '& a': {
            textDecoration: 'none',
            color: '#3c3494',
        }
    },
    pmentorColor: {
        margin: '0 !important',
        padding: '0 !important',
        fontFamily: "Montserrat",
        color: '#303030',
    },

    // btn########################
    tableCell1a: {
        textAlign: 'right',
    },

    btnMentor: {

        backgroundColor: 'white',
        borderColor: '1px solid black',

        boxShadow: "3px 3px 3px 3px rgb(206, 206, 206)  !important",
        marginLeft: "1rem",
        marginTop: "0.7rem",
        marginBottom: "1rem",

        '& p': {
            fontWeight: "700 ! important ",
            fontSize: "13px",
            fontFamily: "Montserrat !important",
            color: '#353535 ',
            borderRadius: "0px",
            padding: '0',
            margin: '0.5rem',

        },

    },

    arrowicon: {
        color: '#1e1e1e',
        fontWeight: '700',
    },
    paraall: {

        '& p': {
            margin: '0px',
            fontFamily: "Montserrat",
        },



    },

    barFlex: {
        display: 'flex',
        height: '3rem',
        alignItems: 'center',
        marginBottom: '0.6rem',
    },
    barImg: {
        height: '1.7rem',

    },
    barImg1: {
        height: '1.7rem',
        marginLeft: '1rem',
    },
    barP: {
        fontSize: '16px',
        fontWeight: 'bold',
        marginLeft: '3rem',
        color: '#1e1e1e'
    },
    barP1: {
        fontSize: '16px',
        fontWeight: '900',
        marginLeft: '1rem',
        paddingLeft: '1rem',
        borderLeft: '2px solid #8b8b8b',
        color: '#8b8b8b',

    },
    iconKey: {
        color: '#403896',
        fontSize: '2rem'


    }
}))
const AllProgram = () => {
    const { t } = useTranslation(['error', 'common', 'organization']);
    const classes = useStyles()
    const navigate = useNavigate()
    const jump = async () => {
        navigate('/console/programs/new')
    }
    return (
        <>

            <Grid md={12}>
                <Grid md={12}>
                    <ul className={classes.AllProgramUl}>
                        <li className={classes.AllProgramli1}>All Programs</li>
                        <li className={classes.AllProgramli2}><Button className="secondary" component={Link} to="/console/programs/home" >{t('common:tetere', 'Add1')}</Button></li>
                        <li className={classes.AllProgramli2}><Link to={'/console/programs/new'} className="link">{t('common:test', 'Add2')}</Link></li>
                        <li className={classes.AllProgramli2}><Button className="secondary" onClick={(e) => { e.preventDefault(); jump() }} >{t('common:test', 'Add3')}</Button></li>
                        <li className={classes.AllProgramli}>Export</li>

                    </ul>
                </Grid>
                <Grid md={12} className={classes.barFlex}>
                    <Grid md={10} className={classes.barFlex}>
                        <img className={classes.barImg} src="https://itdevelopmentservices.com/fortunadata/wp-content/uploads/2022/06/1.png" />
                        <img className={classes.barImg1} src="https://itdevelopmentservices.com/fortunadata/wp-content/uploads/2022/06/2.png" />

                        <p className={classes.barP}>All (20)</p>
                        <p className={classes.barP1}>Sort by

                        </p>
                        <KeyboardArrowDownIcon
                            className={classes.iconKey} />
                    </Grid>
                    <Grid md={2}>
                        <TextField
                            variant="outlined"
                            className="textField"
                            size="small"
                            label="Search"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <div
                                            style={{
                                                width: 15,
                                                height: 22,
                                                color: "#3c3494",
                                            }}
                                        >
                                            <SearchIcon />
                                        </div>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid md={12} sm={12} xs={12}>
                    <Grid md={12} sm={12} xs={12}>
                        <Table>
                            <TableHead md={12} sm={12} xs={12} className={classes.rowdataCell1}>
                                <Grid className={classes.tableCell1check} md={1} sm={1} xs={1}> <Checkbox /></Grid>
                                <Grid className={classes.tableCell1Program} md={3} sm={3} xs={3}>Program Name</Grid>
                                <Grid className={classes.tableCell1org} md={3} sm={3} xs={3}> Organization Name</Grid>
                                <Grid className={classes.tableCell1Reg} md={1} sm={1} xs={1}>Register</Grid>
                                <Grid className={classes.tableCell1task} md={1} sm={1} xs={1}>Tasks</Grid>
                                <Grid className={classes.tableCell1} md={1} sm={1} xs={1}>Mile Stones</Grid>
                                <Grid className={classes.tableCell1Start} md={2} sm={2} xs={2}><span>Start</span> End</Grid>
                            </TableHead>
                            <TableRow className={classes.rowdataCell}>
                                <TableCell md={1} className={classes.tableCell} ><Checkbox /></TableCell>
                                <TableCell md={3} className={classes.tableCell} ><div className={classes.flexProgram}><div className={classes.circle}></div>
                                    <div className={classes.box}>Lead
                                    </div>
                                    <div className={classes.paraall}>
                                        <p className={classes.pmentor}><a href="">Mentoring Stellar 2020</a></p>
                                        <ul className={classes.ulProgram}>
                                            <li className={classes.li1}><a href="">Edit</a></li>
                                            <li className={classes.li}><a href="">Archive</a></li>
                                            <li className={classes.li2}><a href="">Delete</a></li>
                                        </ul>
                                    </div>
                                </div> </TableCell>
                                <TableCell md={3} className={classes.tableCellLeftMArgin} > Organization Name</TableCell>
                                <TableCell md={1} className={classes.tableCell} > 3 Mentors <br /> 20  Mentees</TableCell>
                                <TableCell md={1} className={classes.tableCell} >2/5</TableCell>
                                <TableCell md={1} className={classes.tableCell} >0/3</TableCell>

                                <TableCell md={2} className={classes.tableCell} ><Grid md={12} className={classes.timeHead}>
                                    <Grid md={6} className={classes.timeLeft}>
                                        <Grid md={12} className={classes.timeMonth}>jan</Grid>
                                        <Grid md={12} className={classes.timeDate}><span> 01</span></Grid>
                                        <Grid md={12} className={classes.timeYear}>2020</Grid>
                                    </Grid>
                                    <Grid md={6} className={classes.timeRight}>
                                        <Grid md={12} className={classes.timeMonth}>feb</Grid>
                                        <Grid md={12} className={classes.timeDate}><span> 18</span></Grid>
                                        <Grid md={12} className={classes.timeYear}>2020</Grid>
                                    </Grid>
                                </Grid>
                                </TableCell>
                            </TableRow >
                            <TableRow className={classes.rowdataCell}>
                                <TableCell className={classes.tableCell} ><Checkbox /></TableCell>
                                <TableCell className={classes.tableCell}><div className={classes.flexProgram}><div className={classes.circle}></div>
                                    <div className={classes.box}>Lead
                                    </div>
                                    <div>
                                        <p className={classes.pmentor}><a href="">Mentoring Stellar 2020</a></p>
                                        <ul className={classes.ulProgram}>
                                            <li className={classes.li1}><a href="">Edit</a></li>
                                            <li className={classes.li}><a href="">Archive</a></li>
                                            <li className={classes.li2}><a href="">Delete</a></li>
                                        </ul>
                                    </div>
                                </div> </TableCell>
                                <TableCell className={classes.tableCellLeftMArgin}> Organization Name</TableCell>
                                <TableCell className={classes.tableCell} > 3 Mentors <br /> 20  Mentees</TableCell>
                                <TableCell className={classes.tableCell} >2/5</TableCell>
                                <TableCell className={classes.tableCell} >0/3</TableCell>
                                <TableCell className={classes.tableCell}><Grid md={12} className={classes.timeHead}>
                                    <Grid md={6} className={classes.timeLeft}>
                                        <Grid md={12} className={classes.timeMonth}>jan</Grid>
                                        <Grid md={12} className={classes.timeDate}><span> 01</span></Grid>
                                        <Grid md={12} className={classes.timeYear}>2020</Grid>
                                    </Grid>
                                    <Grid md={6} className={classes.timeRight}>
                                        <Grid md={12} className={classes.timeMonth}>feb</Grid>
                                        <Grid md={12} className={classes.timeDate}><span> 18</span></Grid>
                                        <Grid md={12} className={classes.timeYear}>2020</Grid>
                                    </Grid>
                                </Grid></TableCell>

                            </TableRow>
                            <TableRow className={classes.rowdataCell}>
                                <TableCell className={classes.tableCell} ><Checkbox /></TableCell>
                                <TableCell className={classes.tableCell} ><div className={classes.flexProgram}><div className={classes.circleBG}></div>
                                    <div className={classes.boxBG}>Lead
                                    </div>
                                    <div>
                                        <p className={classes.pmentor}><a href="">Mentoring Stellar 2020</a></p>
                                        <ul className={classes.ulProgram}>
                                            <li className={classes.li1}><a href="">Edit</a></li>
                                            <li className={classes.li}><a href="">Archive</a></li>
                                            <li className={classes.li2}><a href="">Delete</a></li>
                                        </ul>
                                    </div>
                                </div> </TableCell>
                                <TableCell className={classes.tableCellLeftMArgin} > Organization Name</TableCell>
                                <TableCell className={classes.tableCell} > 3 Mentors <br /> 20  Mentees</TableCell>
                                <TableCell className={classes.tableCell}  >2/5</TableCell>
                                <TableCell className={classes.tableCell} >0/3</TableCell>
                                <TableCell className={classes.tableCell} ><Grid md={12} className={classes.timeHead}>
                                    <Grid md={6} className={classes.timeLeftBG}>
                                        <Grid md={12} className={classes.timeMonth}>jan</Grid>
                                        <Grid md={12} className={classes.timeDate}><span> 01</span></Grid>
                                        <Grid md={12} className={classes.timeYear}>2020</Grid>
                                    </Grid>
                                    <Grid md={6} className={classes.timeRightBG}>
                                        <Grid md={12} className={classes.timeMonth}>feb</Grid>
                                        <Grid md={12} className={classes.timeDate}><span> 18</span></Grid>
                                        <Grid md={12} className={classes.timeYear}>2020</Grid>
                                    </Grid>
                                </Grid></TableCell>

                            </TableRow>
                            <TableRow className={classes.rowdataCell}>
                                <TableCell className={classes.tableCell} ><Checkbox /></TableCell>
                                <TableCell className={classes.tableCell} ><div className={classes.flexProgram}><div className={classes.circleColor}></div>
                                    <div className={classes.boxColor}>Lead
                                    </div>
                                    <div>
                                        <p className={classes.pmentorColor}>Mentoring Stellar 2020</p>
                                        <ul className={classes.ulProgram}>
                                            <li className={classes.li1}>View</li>

                                        </ul>
                                    </div>
                                </div> </TableCell>
                                <TableCell className={classes.tableCellColor} > Organization Name</TableCell>
                                <TableCell className={classes.tableCellColor} > 3 Mentors <br /> 20  Mentees</TableCell>
                                <TableCell className={classes.tableCellColor} >2/5</TableCell>
                                <TableCell className={classes.tableCellColor} >0/3</TableCell>
                                <TableCell className={classes.tableCellColor} ><Grid md={12} className={classes.timeHead}>
                                    <Grid md={6} className={classes.timeLeftColor}>
                                        <Grid md={12} className={classes.timeMonth}>jan</Grid>
                                        <Grid md={12} className={classes.timeDate}><span> 01</span></Grid>
                                        <Grid md={12} className={classes.timeYear}>2020</Grid>
                                    </Grid>
                                    <Grid md={6} className={classes.timeRightColor}>
                                        <Grid md={12} className={classes.timeMonth}>feb</Grid>
                                        <Grid md={12} className={classes.timeDate}><span> 18</span></Grid>
                                        <Grid md={12} className={classes.timeYear}>2020</Grid>
                                    </Grid>
                                </Grid></TableCell>

                            </TableRow>
                            <TableRow className={classes.rowdataCell}>
                                <TableCell className={classes.tableCell} ><Checkbox /></TableCell>
                                <TableCell className={classes.tableCell} ><div className={classes.flexProgram}><div className={classes.circleColor}></div>
                                    <div className={classes.boxColor}>Lead
                                    </div>
                                    <div>
                                        <p className={classes.pmentorColor}>Mentoring Stellar 2020</p>
                                        <ul className={classes.ulProgram}>
                                            <li className={classes.li1}>View</li>


                                            <li className={classes.li}></li>
                                            <li className={classes.li2}></li>


                                        </ul>
                                    </div>
                                </div> </TableCell>
                                <TableCell className={classes.tableCellColor} > Organization Name</TableCell>
                                <TableCell className={classes.tableCellColor} > 3 Mentors <br /> 20  Mentees</TableCell>
                                <TableCell className={classes.tableCellColor} >2/5</TableCell>
                                <TableCell className={classes.tableCellColor} >0/3</TableCell>
                                <TableCell className={classes.tableCellColor} ><Grid md={12} className={classes.timeHead}>
                                    <Grid md={6} className={classes.timeLeftColor}>
                                        <Grid md={12} className={classes.timeMonth}>jan</Grid>
                                        <Grid md={12} className={classes.timeDate}><span> 01</span></Grid>
                                        <Grid md={12} className={classes.timeYear}>2020</Grid>
                                    </Grid>
                                    <Grid md={6} className={classes.timeRightColor}>
                                        <Grid md={12} className={classes.timeMonth}>feb</Grid>
                                        <Grid md={12} className={classes.timeDate}><span> 18</span></Grid>
                                        <Grid md={12} className={classes.timeYear}>2020</Grid>
                                    </Grid>
                                </Grid></TableCell>

                            </TableRow>
                            <TableRow className={classes.rowdataCell}>
                                <TableCell className={classes.tableCell} ><Checkbox /></TableCell>
                                <TableCell className={classes.tableCell} ><div className={classes.flexProgram}><div className={classes.circleColor}></div>
                                    <div className={classes.boxColor}>Lead
                                    </div>
                                    <div>
                                        <p className={classes.pmentorColor}>Mentoring Stellar 2020</p>
                                        <ul className={classes.ulProgram}>
                                            <li className={classes.li1}>View</li>

                                        </ul>
                                    </div>
                                </div> </TableCell>
                                <TableCell className={classes.tableCellColor} > Organization Name</TableCell>
                                <TableCell className={classes.tableCellColor} > 3 Mentors <br /> 20  Mentees</TableCell>
                                <TableCell className={classes.tableCellColor} >2/5</TableCell>
                                <TableCell className={classes.tableCellColor} >0/3</TableCell>
                                <TableCell className={classes.tableCellColor} ><Grid md={12} className={classes.timeHead}>
                                    <Grid md={6} className={classes.timeLeftColor}>
                                        <Grid md={12} className={classes.timeMonth}>jan</Grid>
                                        <Grid md={12} className={classes.timeDate}><span> 01</span></Grid>
                                        <Grid md={12} className={classes.timeYear}>2020</Grid>
                                    </Grid>
                                    <Grid md={6} className={classes.timeRightColor}>
                                        <Grid md={12} className={classes.timeMonth}>feb</Grid>
                                        <Grid md={12} className={classes.timeDate}><span> 18</span></Grid>
                                        <Grid md={12} className={classes.timeYear}>2020</Grid>
                                    </Grid>
                                </Grid></TableCell>

                            </TableRow>
                            <TableRow className={classes.rowdataCell}>
                                <TableCell className={classes.tableCell} ><Checkbox /></TableCell>
                                <TableCell className={classes.tableCell} ><div className={classes.flexProgram}><div className={classes.circleColor}></div>
                                    <div className={classes.boxColor}>Lead
                                    </div>
                                    <div>
                                        <p className={classes.pmentorColor}>Mentoring Stellar 2020</p>
                                        <ul className={classes.ulProgram}>
                                            <li className={classes.li1}>View</li>

                                        </ul>
                                    </div>
                                </div> </TableCell>
                                <TableCell className={classes.tableCellColor} > Organization Name</TableCell>
                                <TableCell className={classes.tableCellColor} > 3 Mentors <br /> 20  Mentees</TableCell>
                                <TableCell className={classes.tableCellColor} >2/5</TableCell>
                                <TableCell className={classes.tableCellColor} >0/3</TableCell>
                                <TableCell className={classes.tableCellColor} ><Grid md={12} className={classes.timeHead}>
                                    <Grid md={6} className={classes.timeLeftColor}>
                                        <Grid md={12} className={classes.timeMonth}>jan</Grid>
                                        <Grid md={12} className={classes.timeDate}><span> 01</span></Grid>
                                        <Grid md={12} className={classes.timeYear}>2020</Grid>
                                    </Grid>
                                    <Grid md={6} className={classes.timeRightColor}>
                                        <Grid md={12} className={classes.timeMonth}>feb</Grid>
                                        <Grid md={12} className={classes.timeDate}><span> 18</span></Grid>
                                        <Grid md={12} className={classes.timeYear}>2020</Grid>
                                    </Grid>
                                </Grid></TableCell>

                            </TableRow>

                            <TableHead md={12} sm={12} xs={12} className={classes.rowdataCell1}>
                                <Grid className={classes.tableCell1check} md={1} sm={1} xs={1}> <Checkbox /></Grid>
                                <Grid className={classes.tableCell1} md={3} sm={3} xs={3}>Program Name</Grid>
                                <Grid className={classes.tableCell1org} md={3} sm={3} xs={3}> Organization Name</Grid>
                                <Grid className={classes.tableCell1Reg} md={1} sm={1} xs={1}>Register</Grid>
                                <Grid className={classes.tableCell1task} md={1} sm={1} xs={1}>Tasks</Grid>
                                <Grid className={classes.tableCell1} md={1} sm={1} xs={1}>Mile Stones</Grid>
                                <Grid className={classes.tableCell1Start} md={2} sm={2} xs={2}><span>Start</span> End</Grid>
                            </TableHead>
                        </Table>
                    </Grid>
                </Grid>
                <Button className={classes.btnMentor}><p>Bulk Action  </p> <KeyboardArrowDownIcon className={classes.arrowicon} /></Button>
            </Grid>

        </>
    )
}

export default AllProgram





 // <TableCell className={classes.tableCell1}  ><Checkbox /></TableCell>
                                // <TableCell className={classes.tableCell2}  >Program Name</TableCell>
                                // <TableCell className={classes.tableCell3} >Organization Name</TableCell>
                                // <TableCell className={classes.tableCell4}  >Register</TableCell>
                                // <TableCell className={classes.tableCell5}  >Tasks</TableCell>
                                // <TableCell className={classes.tableCell6} >Mile Stones</TableCell>
                                // <TableCell className={classes.tableCell7} >Start End</TableCell>