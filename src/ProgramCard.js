import React from 'react'
import { Typography, Grid, Card } from '@material-ui/core'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { makeStyles } from '@material-ui/styles'
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
    mentoringtitlt: {
        '& h5': {
            fontSize: '16px',
            color: '#3c3494',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginTop: "14px"
        },
    },
    mentoringtitltlist: {
        '& ul': {
            display: 'flex',
            listStyle: 'none'
        },
        '& ul li a': {
            textDecoration: 'none',
            fontSize: '15px',
            listStyle: 'none',
            textTransform: 'capitalize',
            fontWeight: '500',
            padding: '0px 8px',
            color: '#3c3494',
        },
    },
    li: {
        marginLeft: '40px'
    },
    liBorder: {
        borderRight: '2px solid #3c3494',
    },
    liBorder1: {
        borderLeft: '2px solid #3c3494',
        borderRight: '2px solid #3c3494',
    },
    crdcntrebox: {
        textAlign: 'center',
        position: 'relative',
        margin: '30px 0',
        //   boxShadow:'0px 2px 0px 2px blue',
        '& h5': {
            margin: '0px',
            padding: '4px',
            borderRadius: '0px',
            fontSize: '16px',
            fontWeight: '400',
        },
    },
    menteebg: {
        backgroundColor: '#a44a9d',
        color: '#fff',
    },
    menteeuser: {
        marginTop: '20px',

        '& h3': {
            color: '#3c3494',
            fontSize: '22px',
            margin: '5px 0px -13px 0px',
        },
        '& p': {
            color: '#3c3494',
            fontSize: '15px',
            marginBottom: '0px',
        },
        '& span': {
            fontWeight: '300',
        },
    },
    h4hide: {
        color: 'red',
        fontWeight: '300',
        fontSize: '17px',
        margin: '16px 0px -19px 0px',
        '& span': {
            marginRight: '8px',
            borderRight: '1px solid #a44a9d',
            paddingRight: '8px',
            color: '#a44a9d'
        }
    },
    cricalupimg: {
        width: '16px',
        height: '16px',
        backgroundColor: '#a44a9d',
        position: 'absolute',
        top: '55px',
        right: '-52px',
        left: '0',
        margin: 'auto',
        borderRadius: '50%',
    },
    cricalupimg1: {
        width: '16px',
        height: '16px',
        border: '1px solid #a44a9d',
        position: 'absolute',
        top: '55px',
        right: '-52px',
        left: '0px',
        margin: 'auto',
        borderRadius: '50%',
    },
    menteeborder: {
        border: '1px solid #a44a9d',
        '& h5menteeborder': {
            color: '#000',
        },
    },
    detailbtnbottm: {
        '& h6': {
            fontSize: '16px',
            fontWeight: '500',
            marginBottom: '0px',
            borderTop: '1px solid #bfbfbf',
            padding: '4px  ',
            color: '#000',
            display: 'flex',
            justifyContent: 'center',
        },
    },
    h4hide1: {
        color: "white",
        fontWeight: '300',
        fontSize: '17px',
        margin: '16px 0px -19px 0px',
    },
    icon: {
        color: '#3c3494',
        height: '20px',
        width: '30px',
        marginLeft: "15px",
    }
}))
const ProgramCard = () => {
    const { t } = useTranslation(['error', 'common', 'organization']);
    const classes = useStyles()


    return (<>
        <Grid container>
            <Grid item md={1} className={classes.mentoringtitlt} >
                <Typography>
                    <h5>{t('common:Registered', 'Registered')}</h5>
                </Typography>
            </Grid>
            <Grid item md={11} className={classes.mentoringtitltlist} >
                <ul>
                    <li className={classes.li}><a href="#" className={classes.active}>{t('common:All', 'All(25)')}</a></li>
                    <li ><a className={classes.liBorder1} href="#">{t('common:Mentees', ' Mentees  (20)')}</a></li>
                    <li className={classes.liBorder}><a href="#">{t('common:Mentors', 'Mentors (3)')}</a></li>
                    <li className={classes.li1}><a href="#">{t('common:NotAssigned ', 'Not Assigned (5)')}</a></li>
                </ul>
            </Grid>
        </Grid>
        <Grid container spacing={1} >
            <Grid item md={4} sm={12} xs={12} className={classes.crdcntrebox} >
                <Card>
                    <Typography>
                        <h5 className={classes.menteebg}>{t('common:Mente', 'Mentee')}</h5>
                        <div className={classes.menteeuser}>
                            <img src="https://itdevelopmentservices.com/fortunadata/wp-content/uploads/2022/06/user.png"></img>
                            <div className={classes.cricalupimg}></div>
                            <h3>{t('common:KimZanthoff', 'Kim Zanthoff')} <span>{t('common:Percent', '(78%)')}</span></h3>
                            <p><b>{t('common:Position', 'Position')}</b>{t('common:atOrganizationsName', 'at Organizations Name')} </p>
                            <h4 className={classes.h4hide1}>{t('common:Detach', 'Detach')}</h4>
                        </div>
                    </Typography>
                    <div className={classes.detailbtnbottm}>
                        <h6 >{t('common:Details', 'Details')}  <KeyboardArrowDownOutlinedIcon className={classes.icon} /></h6>
                    </div>
                </Card>
            </Grid>
            <Grid item md={4} sm={12} xs={12} className={classes.crdcntrebox} >
                <Card>
                    <Typography>
                        <h5 className={classes.menteebg}>{t('common:KimsMentor', 'Kims Mentor')}</h5>
                        <div className={classes.menteeuser}>
                            <img src="https://itdevelopmentservices.com/fortunadata/wp-content/uploads/2022/06/user.png"></img>
                            <div className={classes.cricalupimg}></div>
                            <h3>{t('common:AudreyGerardin', 'Audrey Gerardin')} </h3>
                            <p><b>{t('common:Position', 'Position')}</b> {t('common:atOrganizationsName', 'at Organizations Name')}</p>
                            <h4 className={classes.h4hide}>{t('common:Detach', 'Detach')}</h4>
                        </div>
                    </Typography>
                    <div className={classes.detailbtnbottm}>
                        <h6 >{t('common:Details', 'Details')}  <KeyboardArrowDownOutlinedIcon className={classes.icon} /></h6>
                    </div>
                </Card>
            </Grid>
            <Grid item md={4} sm={12} xs={12} className={classes.crdcntrebox} >
                <Card>
                    <Typography>
                        <h5 className={classes.menteebg}>{t('common:Coordinator', 'Coordinator')}</h5>
                        <div className={classes.menteeuser}>
                            <img src="https://itdevelopmentservices.com/fortunadata/wp-content/uploads/2022/06/user.png"></img>
                            <div className={classes.cricalupimg}></div>
                            <h3>{t('common:JhonDoe', 'Jhon Doe')} </h3>
                            <p><b>Position</b> {t('common:atOrganizationsName', 'at Organizations Name')}</p>
                            <h4 className={classes.h4hide}>{t('common:Detach', 'Detach')}</h4>
                        </div>
                    </Typography>
                    <div className={classes.detailbtnbottm}>
                        <h6 >{t('common:Details', 'Details')}  <KeyboardArrowDownOutlinedIcon className={classes.icon} /></h6>
                    </div>
                </Card>
            </Grid>
            <Grid item md={4} sm={12} xs={12} className={classes.crdcntrebox} >
                <Card>
                    <Typography>
                        <h5 className={classes.menteeborder}>{t('common:Mente', 'Mentee')}</h5>
                        <div className={classes.menteeuser}>
                            <img src="https://itdevelopmentservices.com/fortunadata/wp-content/uploads/2022/06/user.png"></img>
                            <div className={classes.cricalupimg1}></div>
                            <h3>{t('common:JaneDowsen', 'Jane Dowsen')} </h3>
                            <p><b>Position</b> {t('common:atOrganizationsName', 'at Organizations Name')}</p>
                            <h4 className={classes.h4hide1}>{t('common:Detach', 'Detach')}</h4>
                        </div>
                    </Typography>
                    <div className={classes.detailbtnbottm}>
                        <h6 >{t('common:Details', 'Details')}  <KeyboardArrowDownOutlinedIcon className={classes.icon} /></h6>
                    </div>
                </Card>
            </Grid>
            <Grid item md={4} sm={12} xs={12} className={classes.crdcntrebox} >
                <Card>
                    <Typography>
                        <h5 className={classes.menteeborder}>{t('common:SuggestedMentorforJane', 'Suggested Mentor for Jane')} </h5>
                        <div className={classes.menteeuser}>
                            <img src="https://itdevelopmentservices.com/fortunadata/wp-content/uploads/2022/06/user.png"></img>
                            <div className={classes.cricalupimg1}></div>
                            <h3>Audrey Gerardin <span>{t('common:percents', '(65%)')}</span></h3>
                            <p><b>{t('common:Position', 'Position')}</b> {t('common:atOrganizationsName', 'at Organizations Name')}</p>
                            <h4 className={classes.h4hide}><span>{t('common:Attach', 'Attach')}</span>{t('common:Next', 'Next')}</h4>
                        </div>
                    </Typography>
                    <div className={classes.detailbtnbottm}>
                        <h6 >{t('common:Details', 'Details')}  <KeyboardArrowDownOutlinedIcon className={classes.icon} /></h6>
                    </div>
                </Card>
            </Grid>
            <Grid item md={4} sm={12} xs={12} className={classes.crdcntrebox} >
                <Card>
                    <Typography>
                        <h5 className={classes.menteeborder}>{t('common:SuggestedCoordinator', 'Suggested Coordinator')}</h5>
                        <div className={classes.menteeuser}>
                            <img src="https://itdevelopmentservices.com/fortunadata/wp-content/uploads/2022/06/user.png"></img>
                            <div className={classes.cricalupimg1}></div>
                            <h3>{t('common:JhonDoe', 'Jhon Doe')}</h3>
                            <p><b> {t('common:Position', 'Position')}</b> {t('common:atOrganizationsName', 'at Organizations Name')}</p>
                            <h4 className={classes.h4hide}><span>{t('common:Attach', 'Attach')}</span>{t('common:Next', 'Next')}</h4>
                        </div>
                    </Typography>
                    <div className={classes.detailbtnbottm}>
                        <h6 >{t('common:Details', 'Details')}  <KeyboardArrowDownOutlinedIcon className={classes.icon} /></h6>
                    </div>
                </Card>
            </Grid>
        </Grid>
    </>
    )
}
export default ProgramCard