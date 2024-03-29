import React, { Fragment, useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { DatePicker } from '@material-ui/pickers';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import dots from '../../assets/img/dots.png';
import '../../Tab.css'
import down2 from '../../assets/img/down2.png';
import down from '../../assets/img/down.png';
import rightarrow2 from '../../assets/img/rightarrow2.png';
import timer from '../../assets/img/timer.png';
// import InputAdornment from "@material-ui/core/InputAdornment";
import { useSelector, useDispatch } from 'react-redux'
import ImageUpload from 'ImageUpload'
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, TextField, FormControlLabel, Switch, MenuItem, CircularProgress } from '@material-ui/core';
// import { createAppProgram, updateAppProgram, batchUpdateProgramEvents, batchUpdateProgramMilestones } from 'stores/app/app.actions';
//import { fetchWaEvents } from 'stores/wa/wa.actions';
import { fetchProgramType } from 'stores/program/program.actions';
// import MuiDataTable from "App/Component/MuiDataTable";
import { useErrorLib } from "libs/errorLib";
// import { useSnackbar } from 'notistack';
import { useFormFields } from "libs/hooksLib";
import Innerlay from 'App/Layout/Innerlay';
import { useStepper } from 'App/Layout/Stepper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import { useMUITableFormat } from "libs/MUITableFormatLib";
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Menu from '@material-ui/core/Menu';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
// import DateRangeIcon from '@material-ui/icons/DateRange';
// import Conformation from '../../Conformation'



const useStyles = makeStyles((theme) => ({
    root: {
        '&': {},
        '& .MuiTypography-h6': {
            marginBottom: 0,
            marginRight: theme.spacing(0),
        }
    },
    grow: {
        flexGrow: 1,
    },

    //    my style***********************************

    programMainBox: {
        padding: '38px 20px 12px 30px',
        background: '#efefef',
        width: '100%',
        marginLeft: '0px',
        height: ' auto',
        marginTop: '0px',
        // width: 'calc(100% + 210px)',
    },
    programMainBox1: {
        padding: '8px 45px 12px 45px',
        width: 'calc(100% + 210px)',
    },
    abc: {
        '& input': {
            backgroundColor: '#fff',
            height: '25px',
        },
        '& Label': {
            zIndex: '999',
            color: '#a9a4a4',
            fontStyle: 'italic',
            fontSize: '14px !important',
        },
    },
    abc1: {
        '& textarea': {
            height: '110px !important',
        },
        '& input': {
            backgroundColor: '#fff',
        },
        '& Label': {
            zIndex: '999',
            color: '#a9a4a4',
            fontStyle: 'italic',
            fontSize: '14px !important',
        },
    },
    Appselectsinfo: {
        '& input': {
        }
    },
    setupsPhase: {
        padding: '0',
        margin: '0',
        display: 'flex',
        marginBottom: '10px',
        alignItems: 'center',
        width: '100%',
        [theme.breakpoints.down('959')]: {
            marginBottom: '0px',
        },
        '& input': {
            backgroundColor: '#fff',
            height: '11px',
            borderBottom: '2px solid #a44a9d',
            padding: '13px 0',
        },
        '& Label': {
            zIndex: '999',
            color: '#1e1e1e',
            fontWeight: 'bold',
            fontSize: '13px',
        },
    },
    datekikoffs: {
        margin: '0',
        padding: '0',
        '& input': {
            backgroundColor: '#fff',
            height: '28px',
            padding: '7px 4px',
            width: '100%',
            marginTop: '10px',
            color: '#1e1e1e',
            fontWeight: 'bold',
            fontSize: '14px',
            borderBottom: '2px solid #a44a9d',
            marginLeft: "0",
            backgroundImage: 'url(https://itdevelopmentservices.com/design_website/stellar-image/dateicon.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '96% 46%',
            backgroundSize: '18px',
        }
    },


    //  secon page stRT************************

    daysbox: {
        backgroundColor: '#3c3494',
        textAlign: 'center',
        color: '#fff',
        fontSize: '18px',
        height: '54px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('959')]: {
            height: '115px',
            width: '108%'
        },
        '& h5': {
            fontSize: '18px',
            fontWeight: '500',
            // margin: '-2px',
            lineHeight: '18px',
            color: '#fff',
        },
        '& span': {
            fontWeight: '500',
            fontSize: '12px',
            color: '#fff',
            borderTop: '2px solid #928ebe',
        }
    },
    daysbox1: {
        backgroundColor: '#3c3494',
        textAlign: 'center',
        color: '#fff',
        height: '53px',
        display: 'flex',
        fontSize: '18px',
        flexDirection: 'column',
        alignItems: 'center',
        opacity: '0.3',
        justifyContent: 'center',
        [theme.breakpoints.down('959')]: {
            height: '115px',
            width: '108%'
        },
        '& h5': {
            fontSize: '18px',
            fontWeight: '500',
            margin: '-2px',
            lineHeight: '18px',
            color: '#fff',
        },
        '& span': {
            fontWeight: '500',
            fontSize: '12px',
            color: '#fff',
            borderTop: '2px solid #928ebe',
        },
    },
    iconimg: {
        // position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        '& img': {
            width: '25%',
            marginRight: '10px',
            marginTop: '7px',
        },
        [theme.breakpoints.down('959')]: {
            width: '25%',
        }
    },
    deletentn: {
        fontSize: '17px',
        color: 'red',
        textDecoration: 'none',
        fontWeight: '400',
        marginTop: '20px',
        textTransform: 'lowercase',
        [theme.breakpoints.down('959')]: {
            position: "absolute",
            top: '-2px',
            left: '50%'
        },
    },
    editntn: {
        marginRight: '9px',
        marginLeft: '9px',
        fontSize: '16px',
        color: '#3c3494',
        textDecoration: 'none',
        fontWeight: '400',
        marginTop: '16px',
        textTransform: 'lowercase',
        [theme.breakpoints.down('959')]: {
            position: "absolute",
            top: '3px',
            left: '30%'
        },
    },
    vishal: {
        background: 'transparent'
    },

    // iconimgleft: {
    //     position: 'absolute',
    // },
    // iconimgleft:{
    //   position: 'absolute',
    //   top:'0',
    //   left: '0',
    // },
    // iconimgcentre: {
    //     transform: 'translate(-51px, 0px)',

    //     top: '0',
    //     right: '0',
    //     position: 'absolute',
    // },
    // iconimgright: {
    //     top: '0',
    //     right: '0',
    //     position: 'absolute',


    // },

    /* Step three setion css here*/
    eventpro: {
        '& input': {
            backgroundColor: '#fff',
            height: '16px',
        },
        '& Label': {
            zIndex: '999',
            padding: '11px 16px',
            color: '#201f1f',
            fontStyle: 'italic',
            fontSize: '14px !important',
            fontWeight: '500',
        },
    },
    eventpro1: {
        '& input': {
            backgroundColor: '#fff',
            height: '16px',
        },
        '& Label': {
            zIndex: '999',
            padding: '11px 16px',
            color: '#201f1f',
            fontSize: '14px !important',
            fontWeight: '600',
        },
    },
    eventprotext: {
        marginTop: '1rem',
        '& textarea': {
            height: '120px !important',
            backgroundColor: '#fff',
            color: '#000',
            padding: '11px 14px',
            zIndex: '999',
            fontStyle: 'italic',
            fontSize: '17px',
            fontWeight: '500'
        },
        '& Label': {
            padding: '11px 16px',
            zIndex: '999',
            fontStyle: 'italic',
            color: '#000',
        },
    },
    sleetcrs: {
        width: '100%',
        height: '51px',
        backgroundColor: '#fff',
        border: '1px solid #dddddd',
        backgroundImage: 'url(https://itdevelopmentservices.com/fortunadata/wp-content/uploads/2022/06/downicon.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '98% 50%',
        backgroundSize: '17px',
        fontSize: '66px',
    },
    startdatestp: {
        '& input': {
            backgroundColor: '#fff',
            height: '28px',
            padding: '7px 17px',
            width: '100%',
            marginTop: '10px',
            color: '#000',
            fontWeight: '400',
            fontSize: '16px',
            borderBottom: '1px solid #bbbbbb',
            fontStyle: 'italic',
        },
    },
    Mentorregistration: {
        '& Label': {
            color: '#1e1e1e',
            padding: '16px 16px',
            zIndex: '999',

            fontWeight: 'bold !important',
            fontStyle: 'italic',
            fontSize: '18px'
        },
        '& input': {
            height: '25px',
            padding: '8px 20px',
            borderBottom: '2px solid #a44a9d',
            backgroundColor: '#fff',
        },
    },
    Mentorregistration1: {
        '& Label': {
            color: '#1e1e1e',
            padding: '16px 16px',
            zIndex: '999',
            fontWeight: 'bold !important',
            fontSize: '18px'
        },
        '& input': {
            height: '25px',
            padding: '8px 20px',
            borderBottom: '2px solid #a44a9d',
            backgroundColor: '#fff',
        },
    },
    slects: {
        width: '100%',
        height: '51px',
        backgroundColor: '#fff',
        border: '1px solid #dddddd',
        backgroundImage: 'url(https://itdevelopmentservices.com/fortunadata/wp-content/uploads/2022/06/downicon.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '98% 50%',
        backgroundSize: '17px',
        marginBottom: '16px',
        fontSize: '66px',
    },
    bottomspace: {
        // marginBottom: '16px',
    },
    selectstepthre: {
        width: '100%',
        border: '1px solid #dddddd',
        height: '51px',
        marginBottom: '16px',
        backgroundSize: '17px',
        backgroundColor: '#fff',
        backgroundImage: 'url(https://itdevelopmentservices.com/fortunadata/wp-content/uploads/2022/06/downicon.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '98% 50%',
        fontSize: '66px',
    },
    switchPara: {
        //   padding:'0',
        marginTop: '11px',
        fontSize: '16px',
        color: '#1c1c1c',
        fontFamily: 'Montserrat'
    },
    paddingBottomForContainer: {
        [theme.breakpoints.down('959')]: {
            marginBottom: '25px',
            padding: '0',
            margin: '0',
            spacing: '0',
            position: 'relative'

        }
    },
    boldtextinfo: {
        '& Label': {
            fontWeight: '600',

            '& input': {
                color: '#000',
                fontWeight: '700',
            },
        },
    },
    // jhswhguegugfhygdhfhgdhgfgh its meeeee********************

    drop: {
        backgroundColor: '#ffffff',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',

        padding: '0 ',
        height: '3rem',
        // marginBottom: '1rem'
    },
    drop1: {
        backgroundColor: '#ffffff',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',

        padding: '0 0px 0 3px',
        height: '3rem',
        marginBottom: '1rem'
    },
    pLeder: {
        color: '#bfbfbf',
        fontSize: '14px',
        fontStyle: 'italic',
        padding: '0px',
        margin: '0',
    },
    Leder: {
        color: '#bfbfbf',
        fontSize: '14px',
        paddingLeft: '4px',
        fontStyle: 'italic',
    },
    cLeder: {
        color: '#bfbfbf',
        fontSize: '14px',
        marginRight: '0',
        padding: '0px',
        fontStyle: 'italic',
        paddingLeft: '4px',
    },
    iconn: {
        width: '40px',
        height: '40px',
        color: '#473f9a',
        padding: '0',
        margin: '0px',
    },
    iconn1: {
        width: '40px',
        height: '40px',
        color: '#473f9a',
        padding: '0',
        margin: '-15px',
    },
    days: {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
        textAlign: 'center',
        width: '80%'
    },
    cicle: {
        height: '17px',
        width: '17px',
        borderRadius: '22px',
        backgroundColor: '#3c3494',
    },
    imgLogo: {
        width: '31px',
        height: '30px',
        padding: '0',
        marginRight: '0'
    },
    headLogoPart: {
        display: 'flex',
        alignItems: 'center',
        '& ul': {
            display: 'flex',
            listStyle: 'none',
            fontSize: '15px',
            marginLeft: '0',
            padding: '0',
        },
        '& ul li': {
            marginLeft: '0.9rem'
        },
    },
    headLogoPart1: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '-2.9rem',
        marginBottom: '0.3rem',
        '& ul': {
            display: 'flex',
            listStyle: 'none',
            fontSize: '15px',
            marginLeft: '0',
            padding: '0',
        },
        '& ul li': {
            marginLeft: '0.9rem'
        },
    },
    editBt: {
        color: '#403896',
        textTransform: "lowercase"
    },
    deleteBt: {
        color: '#d12a13',
        cursor: "pointer",
        '&:hover': {
            background: '#d5d1d1'
        }
    },
    delEdi: {
        display: 'flex',
        alignItems: 'center'
    },
    ulMile: {
        display: 'flex',
        listStyle: 'none',
        '&li1': {
            marginLeft: '10rem',
        },
        '&li4': {
            marginLeft: '10rem',

        }, '&li3': {
            marginLeft: '1rem',
        },
    },
    datePick: {
        margin: '0',
        paddingRight: '11px',
    },
    datePick1: {
        display: 'flex',
        margin: '0',
    },
    datePickMargin: {
        marginLeft: '0.4rem',
        marginTop: '0',
        marginBottom: '0',
        paddingRight: '8px',
        '& input': {
            fontSize: '14px',
            color: '#c1c5cb'
        },
    },
    datePickMargin1: {
        marginTop: '0',
        width: '77%',
        marginBottom: '0',
        '& input': {
            fontSize: '14px',
            color: '#c1c5cb'
        },
    },
    datePickEvent1: {
        margin: ' 1rem 0',
    },
    dropEvent: {
        marginBottom: '0.5rem',
        backgroundColor: '#ffffff',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '3px ',
        height: '3rem',
    },
    switchBtn: {
        marginLeft: '-7px',
        display: 'flex',
        fontFamily: "Montserrat",
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
        width: 66,
        height: 20,
    },
    Switchwidth: {
        width: 'auto'
    },
    eventButton: {
        background: 'transparent',
    },
    eventpara: {
        color: '#3c3494',
        textTransform: 'lowercase !important',
        fontFamily: "Montserrat",
        fontSize: '16px',
    },
    addIconEvent: {
        color: '#3c3494',
    },
    HEadingMilestone: {
        borderBottom: '2px solid #bbbbbb',
        marginTop: '20px',
        textAlign: 'center',
        marginBottom: '0.8rem',
        padding: '0',
        [theme.breakpoints.down('959')]: {
            display: 'none',

        },
        '& p': {
            color: '#3c3c3c',
            fontSize: '16px',
            margin: '0.5rem',
        },
    },
    HeaderIconMilestone: {
        width: '20px',
        height: '20px'
    },

    // conformation page /.................................................

    fulContainer: {
        padding: '2rem 3rem',
        backgroundColor: '#efefef',
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
    Header: {
        backgroundColor: 'red !important'
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
    vishal1: {
        height: '12rem !important',
        fontSize: '45px !important'
    }
    //   thumb: {
    //     width: 24,
    //     height: 24,
    //     color: 'white',
    //   },
    //   checked: {
    // width:'100%',
    //     '& + $track': {
    //       backgroundColor: 'green !important',
    //     },
    //   },
    //   track: {
    //     borderRadius: 26 / 2,
    //     border: '1px solid #b9b9b9',
    //     backgroundColor: 'white',
    //     opacity: 1,
    //     width: 45,
    //     height: 21,

    //   },
    //     Switchwidth:{
    //       width:'auto'
    //   },

    //   switchBtn: {
    //     display: 'flex',
    //     marginTop: '2rem',
    //     alignItems: 'center',


    //         fontFamily: "Montserrat",

    //   },
    // switchPara: {
    //     //   padding:'0',
    //     marginTop: '24px',
    //     fontSize:'18px',
    //     color:'#1c1c1c',
    //     fontFamily:'Montserrat' 
    // },
}));

const setFormState = (program, events, milestones) => {
    const date = new Date().toISOString();
    const initialState = {
        ...(program && program.id ? { programId: program.id } : {}),
        isActive: program ? program.status == 'ACTIVATED' : false,
        isIntegrationWA: program ? program.isIntegrationWA : false,
        eventMentor: program ? program.eventMentor : "",
        eventMentee: program ? program.eventMentee : "",
        isFormChanged: false,
        status: program ? program.status : "DRAFTED",
        name: program ? (program.name || "") : "",
        description: program ? program.description : '',
        startdate: program ? program.startdate : date,
        kickoffdate: program ? program.kickoffdate : date,
        enddate: program ? program.enddate : date,
        milestones: milestones ? milestones || [] : [],
        milestoneKeys: milestones ? milestones.map(item => { return { id: item.id } }) || [] : [],
        events: events ? events || [] : [],
        eventKeys: events ? events.map(item => { return { id: item.id } }) || [] : [],
        programtypeid: program ? program.type.id : '',
        ryvercreation: program ? program.ryvercreation && true : false
    }
    return initialState
}

function ProgramForm(props) {
    const {/* tenant,*/ organization, program, programEvents, programMilestones } = useSelector(state => state.app)
    const [isUpdate, setIsUpdate] = useState(false);

    const { programTypesLoading, programTypes } = useSelector(state => state.program)
    const { waEventsLoading, waEvents } = useSelector(state => state.wa)
    const navigate = useNavigate()
    const { fields, handleFieldChange, setFields } = useFormFields(setFormState(null, null, null));
    const classes = useStyles();
    const dispatch = useDispatch();
    const { onError } = useErrorLib();
    // const { enqueueSnackbar } = useSnackbar();
    const { t } = useTranslation(['error', 'innerlay', 'organization', 'program']);
    const steps = [t('program:steps.general', 'General'), t('program:steps.milestones', 'Milestones'), t('program:steps.events', 'Events'), t('program:steps.confirmation', 'Confirmation')]
    const {
        element,
        activeStep,
        handleNext,
        handleBack,
    } = useStepper(steps);
    // const formaters = useMUITableFormat()

    useEffect(() => {
        if (props.programid && props.programid !== 'new' && !fields.programId) {
            dispatch({ type: 'app/fetchProgram', payload: { id: props.programid } })
            setIsUpdate(true)
        } else
            dispatch({ type: 'app/programAppChange', payload: null })
    }, [props.programid]);

    useEffect(() => {
        setFields(setFormState(program, programEvents, programMilestones))
    }, [program, programEvents, programMilestones]);

    useEffect(() => {
        async function fetchData() {
            dispatch(fetchProgramType())
                .then()
                .catch(() => {
                    onError(t('error:programtypes.loading', 'Error loading program types'));
                })
        }
        fetchData();
    }, []);

    if (fields.milestones.length == 0) {

        const defaultMilestones = [
            { title: t('program:milestone.default.1', 'milestone1'), milestoneType: 'MILESTONE', startdate: '2019-12-31T23:00:00.000Z', enddate: '2019-12-31T23:00:00.000Z' },
            { title: t('program:milestone.default.2', 'milestone2'), milestoneType: 'MILESTONE', startdate: '2019-12-31T23:00:00.000Z', enddate: '2019-12-31T23:00:00.000Z' },
            { title: t('program:milestone.default.3', 'milestone3'), milestoneType: 'MILESTONE', startdate: '2019-12-31T23:00:00.000Z', enddate: '2019-12-31T23:00:00.000Z' },
            { title: t('program:milestone.default.4', 'milestone4'), milestoneType: 'MILESTONE', startdate: '2019-12-31T23:00:00.000Z', enddate: '2019-12-31T23:00:00.000Z' },
            { title: t('program:task.default.1', 'task1'), milestoneType: 'TASK', startdate: '2019-12-31T23:00:00.000Z', enddate: '2019-12-31T23:00:00.000Z' },
            { title: t('program:task.default.2', 'task2'), milestoneType: 'TASK', startdate: '2019-12-31T23:00:00.000Z', enddate: '2019-12-31T23:00:00.000Z' },
        ]
        setFields({ milestones: defaultMilestones })
    }
    if (fields.events.length == 0) {

        const defaultEvents = [
            { title: t('program:event.default.1.name', 'Mentor Subscription'), description: t('program:event.default.1.desc', 'Mentor Subscription description'), eventType: 'SUBMENTOR', location: t('program:event.default.1.location', 'Munich'), registration: false, startdate: '2019-12-31T23:00:00.000Z', enddate: '2019-12-31T23:00:00.000Z' },
            { title: t('program:event.default.2.name', 'Mentee Subscription'), description: t('program:event.default.2.desc', 'Mentee Subscription description'), eventType: 'SUBMENTEE', location: t('program:event.default.2.location', 'Munich'), registration: false, startdate: '2019-12-31T23:00:00.000Z', enddate: '2019-12-31T23:00:00.000Z' },
            { title: t('program:event.default.3.name', 'Kickoff'), description: t('program:event.default.3.desc', 'Kickoff description'), eventType: 'EVENT', location: t('program:event.default.3.location', 'Munich'), registration: true, startdate: '2019-12-31T23:00:00.000Z', enddate: '2019-12-31T23:00:00.000Z' },
            { title: t('program:event.default.4.name', 'Closure'), description: t('program:event.default.4.desc', 'Closure description'), eventType: 'EVENT', location: t('program:event.default.4.location', 'Munich'), registration: true, startdate: '2019-12-31T23:00:00.000Z', enddate: '2019-12-31T23:00:00.000Z' },
            { title: t('program:event.default.5.name', 'Follow-up 1'), description: t('program:event.default.5.desc', 'Follow-up 1 description'), eventType: 'EVENT', location: t('program:event.default.5.location', 'Munich'), registration: false, startdate: '2019-12-31T23:00:00.000Z', enddate: '2019-12-31T23:00:00.000Z' },
            { title: t('program:event.default.6.name', 'Follow-up 2'), description: t('program:event.default.6.desc', 'Follow-up 2 description'), eventType: 'EVENT', location: t('program:event.default.6.location', 'Munich'), registration: false, startdate: '2019-12-31T23:00:00.000Z', enddate: '2019-12-31T23:00:00.000Z' },
        ]


        setFields({ events: defaultEvents })
    }

    function validateGeneralForm() {
        return fields.name.length > 0 && fields.startdate.length > 0 && fields.enddate.length > 0 && fields.kickoffdate.length > 0 && fields.programtypeid.length > 0
    }

    function validateConfirmationForm() {
        return fields.isActive
    }

    const handleCancel = async () => {
        navigate('/console/programs')
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        /* if (fields.programId){
             const programInput = {
               id: fields.programId,
               status: fields.isActive ? 'ACTIVATED' : fields.status,
               name: fields.name,
               description: fields.description,
               programTypeId: fields.programtypeid,
               startdate: fields.startdate,
               kickoffdate: fields.kickoffdate,
               enddate: fields.enddate,
               isIntegrationWA: fields.isIntegrationWA,
               eventMentor: fields.eventMentor,
               eventMentee: fields.eventMentee,
               ryvercreation: fields.ryvercreation,
               programOrganizationId: organization.id,
             }
             
             dispatch(updateAppProgram(programInput))
             .then(() =>{
               dispatch(batchUpdateProgramEvents(fields))
                 .then()
                 .catch((e) => {
                     onError(t('error:program.events.saving', 'Error saving program events'), e)
                   })
               dispatch(batchUpdateProgramMilestones(fields))
                 .then()
                 .catch((e) => {
                     onError(t('error:program.milestones.saving', 'Error saving program milestones'), e)
                   })
               enqueueSnackbar(t('program:saved', 'Program saved successfully'), { variant: 'success' });
               })
               .catch((e) => {
                 onError(t('error:program.saving', 'Error saving program'), e)
               })
         }else{
             
             dispatch(createAppProgram(fields))
             .then(() =>{
               dispatch(batchUpdateProgramEvents(fields))
                 .then()
                 .catch((e) => {
                     onError(t('error:program.events.saving', 'Error saving program events'), e)
                   })
               dispatch(batchUpdateProgramMilestones(fields))
                 .then()
                 .catch((e) => {
                     onError(t('error:program.milestones.saving', 'Error saving program milestones'), e)
                   })
               enqueueSnackbar(t('program:saved', 'Program saved successfully'), { variant: 'success' });
               })
               .catch((e) => {
                 onError(t('error:program.saving', 'Error saving program'), e)
               })
         }*/
    }
    const createHandleDataChange = (id) => (date) => {
        setFields({
            [id]: date.toISOString()
        })
    }

    /*const GeneralForm = () => {
      return (
        <Fragment>
        <Innerlay.Body>
        
        <Innerlay.Item xs={3}>
                <TextField
                  select
                  fullWidth
                  required
                  name="programtypeid"
                  label={t('leadership program:type','Leadership Program')}
                  id="programtypeid"
                  value={fields.programtypeid}
                  onChange={handleFieldChange}
              >
              <MenuItem value="">{t('organization:adm.select','Select a membership')}</MenuItem>
              {programTypes.map(row => <MenuItem key={row.id} value={row.id}>{row.name}</MenuItem>)}
                  
                </TextField>
            </Innerlay.Item >
            <Innerlay.Item xs={12}>
                <TextField 
                    autoFocus
                    required
                    fullWidth
                    id="name"
                    label={t('program:name','Program name')}
                    value={fields.name}
                    onChange={handleFieldChange}
                />
              </Innerlay.Item >
              <Innerlay.Item xs={12}>
              <TextField 
                  required
                  fullWidth
                  id="description"
                  label={t('program:description','Description')}
                  value={fields.description}
                  onChange={handleFieldChange}
              />
            </Innerlay.Item>
              <Innerlay.Item xs={3}>
                <DatePicker
                autoOk
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="startdate"
                label={t('program:startdate','Start date')}
                value={fields.startdate}
                onChange={createHandleDataChange('startdate')}
              />                  
            </Innerlay.Item>
            <Innerlay.Item xs={3}>
                <DatePicker
                autoOk
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="kickoffdate"
                label={t('program:kickoffdate','Kickoff date')}
                value={fields.kickoffdate}
                onChange={createHandleDataChange('kickoffdate')}
              />                  
            </Innerlay.Item>
            <Innerlay.Item xs={3}>
                <DatePicker
                autoOk
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="enddate"
                label={t('program:enddate','End date')}
                value={fields.enddate}
                onChange={createHandleDataChange('enddate')}
              />                  
            </Innerlay.Item>
            
            
              <Innerlay.Item xs={3}>
                              
            </Innerlay.Item>
            
            
            
            <Innerlay.Item xs={3}>
                <TextField
                  select
                  fullWidth
                  required
                  name="programtypeid"
                  label={t('Mentor:Pool','Mentor Pool')}
                  id="programtypeid"
                  value={fields.programtypeid}
                  onChange={handleFieldChange}
              >
              <MenuItem value="">{t('organization:adm.select','Select a membership')}</MenuItem>
              {!programTypesLoading && programTypes && programTypes.map(row => <MenuItem key={row.id} value={row.id}>{row.name}</MenuItem>)}
                  
                </TextField>
            </Innerlay.Item >
            
            <Innerlay.Item xs={3}>
                <TextField
                  select
                  fullWidth
                  required
                  name="programtypeid"
                  label={t('mentor:pool','Mentor Pool')}
                  id="programtypeid"
                  value={fields.programtypeid}
                  onChange={handleFieldChange}
              >
              <MenuItem value="">{t('organization:adm.select','Select a membership')}</MenuItem>
              {programTypes.map(row => <MenuItem key={row.id} value={row.id}>{row.name}</MenuItem>)}
                  
                </TextField>
            </Innerlay.Item >
            
            <Innerlay.Item xs={3}>
                <TextField
                  select
                  fullWidth
                  required
                  name="programtypeid"
                  label={t('coordinator:pool','Coordinator Pool')}
                  id="programtypeid"
                  value={fields.programtypeid}
                  onChange={handleFieldChange}
              >
              <MenuItem value="">{t('organization:adm.select','Select a membership')}</MenuItem>
              {programTypes.map(row => <MenuItem key={row.id} value={row.id}>{row.name}</MenuItem>)}
                  
                </TextField>
            </Innerlay.Item >
            
            <Innerlay.Item xs={3}>
                <TextField 
                    autoFocus
                    required
                    fullWidth
                    id="name"
                    label={t('Max.:number of ragistrations','Max. number of ragistrations')}
                    value={fields.name}
                    onChange={handleFieldChange}
                />
              </Innerlay.Item >
              
          </Innerlay.Body>
          <Innerlay.Footer custom={true}>
          <Button className="primary" disabled={activeStep==0} onClick={(e) => {e.preventDefault(); handleBack()}} >{t('innerlay:back','< Back')}</Button>
          <Button onClick={(e) => {e.preventDefault(); handleCancel()}} >{t('innerlay:cancel','Cancel')}</Button>
            <div className={classes.grow} />
            <Button type="submit" id="exit" disabled={!validateGeneralForm()}>
            {props.isSaving && <CircularProgress size={30} color="primary" />}
            {!props.isSaving && t('innerlay:save','Save')}
            </Button>
            <Button className="secondary"  onClick={(e) =>{ e.preventDefault(); handleNext()}} >{t('innerlay:next','Next >')}</Button>
          </Innerlay.Footer>
          </Fragment>
      );
    }
  
    const MilestonesForm = () => {
  
      const columns = [{
          title: t('program:title', 'Title'),
          field: 'title',
          cellStyle: {
            width: 200,
            minWidth: 80,
            textTransform: 'capitalize',
          },
          headerStyle: {
            width: 200,
            minWidth: 80,
            whiteSpace: 'nowrap',
            paddingLeft: '2em',
            paddingRight: '2em'
          }
        },
        {
          title: t('program:startdate', 'Start Date'),
          field: 'startdate',
          render: rowData => formaters.formatDate(rowData.startdate),
  
        },
        {
          title: t('program:enddate', 'End Date'),
          field: 'enddate',
          render: rowData => formaters.formatDate(rowData.enddate),
        },
      ];
  
      const options = {
        sorting: true,
        showTitle: true,
        search: false,
        paging: false
      }    
      const setData = data => {
        setFields({ milestones: data, isFormChanged: true })
      }
  
      return (
        <Fragment>
        <Innerlay.Body>
           <MuiDataTable columns={columns} editable options={options} data={fields.milestones} setData={setData} editCallback={() =>{} }/>
          </Innerlay.Body>
          <Innerlay.Footer custom={true}>
          <Button className="primary" disabled={activeStep==0} onClick={(e) => {e.preventDefault(); handleBack()}} >{t('innerlay:back','< Back')}</Button>
          <Button onClick={(e) => {e.preventDefault(); handleCancel()}} >{t('innerlay:cancel','Cancel')}</Button>
             <div className={classes.grow} />
            <Button type="submit" id="exit" disabled={props.isSaving || !fields.isFormChanged}>
            {props.isSaving && <CircularProgress size={30} color="primary" />}
            {!props.isSaving && t('innerlay:save','Save')}
            </Button>
            <Button className="secondary"  onClick={(e) =>{ e.preventDefault(); handleNext()}} >{t('innerlay:next','Next >')}</Button>
          </Innerlay.Footer>
          </Fragment>
      );
    }*/

    //  ***************************general form************************************

    const GeneralForm = () => {
        return (
            <Fragment>
                <Innerlay.Body  >
                    <div className={classes.programMainBox}>
                        <Grid item md={3} sm={12} xs={12} className={classes.firstDrop}>
                            <div className="AddUpperDepartmentDiv">
                                <PopupState variant="popover" popupId="demo-popup-menu">
                                    {(popupState) => (
                                        <React.Fragment>
                                            <Button variant="contained" className={classes.drop1} endIcon={<KeyboardArrowDownIcon className={classes.iconn} />} {...bindTrigger(popupState)}>
                                                <p className={classes.pLeder}>{t('common:Leadership', " Leadership Program")}  </p>
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
                        <Grid container md={12} spacing={2}>
                            <Grid item md={12} sm={12} xs={12} className={classes.bottomspace}>
                                <TextField className={classes.abc} id="standard-basic" label={t('common:ProgramName', "  Program Name")} variant="standard" fullWidth />
                            </Grid>
                            <Grid item md={12} sm={12} xs={12} className={classes.bottomspace}>
                                <TextField className={classes.abc1} id="standard-basic1"
                                    variant="standard" label={t('common:Description', "  Description")} fullWidth
                                    multiline
                                />
                            </Grid>
                            <Grid item md={12} sm={12} className={classes.datePick1}>
                                <Grid md={3} sm={12} xs={12} className={classes.datePick}  >
                                    <DatePicker className={classes.datePickMargin1}
                                        autoOk
                                        fullWidth
                                        variant="inline"
                                        format="dd/MM/yyyy"
                                        margin="normal"
                                        id="startdate"
                                        label={t('program:startdate', 'Start date')}
                                        value={fields.startdate}
                                        onChange={createHandleDataChange('startdate')}
                                    />
                                </Grid >
                                <Grid md={3} sm={12} xs={12} className={classes.datePickMargin}>
                                    <DatePicker
                                        autoOk
                                        className={classes.datePick1}
                                        variant="inline"
                                        format="dd/MM/yyyy"
                                        margin="normal"
                                        fullWidth
                                        id="kickoffdate"
                                        label={t('program:kickoffdate', 'Kickoff date')}
                                        value={fields.kickoffdate}
                                        onChange={createHandleDataChange('kickoffdate')}
                                    />
                                </Grid >
                                <Grid md={3} sm={12} xs={12} className={classes.datePickMargin}>
                                    <DatePicker
                                        autoOk
                                        className={classes.datePick1}
                                        variant="inline"
                                        format="dd/MM/yyyy"
                                        margin="normal"
                                        id="enddate"
                                        fullWidth
                                        label={t('program:enddate', 'End date')}
                                        value={fields.enddate}
                                        onChange={createHandleDataChange('enddate')}
                                    />
                                </Grid >
                                <Grid md={3}></Grid>
                            </Grid>
                            <Grid item md={3} sm={12} xs={12} >
                                <div className="AddUpperDepartmentDiv">
                                    <PopupState variant="popover" popupId="demo-popup-menu">
                                        {(popupState) => (
                                            <React.Fragment>
                                                <Button fullWidth variant="contained" className={classes.drop1} endIcon={<KeyboardArrowDownIcon className={classes.iconn} />} {...bindTrigger(popupState)}>
                                                    <p className={classes.Leder}>{t('common:Mentorpool', " Mentor pool")}</p>
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
                            <Grid item md={3} sm={12} xs={12} >
                                <div className="AddUpperDepartmentDiv">
                                    <PopupState variant="popover" popupId="demo-popup-menu">
                                        {(popupState) => (
                                            <React.Fragment>
                                                <Button fullWidth variant="contained" className={classes.drop1} endIcon={<KeyboardArrowDownIcon className={classes.iconn} />} {...bindTrigger(popupState)}>
                                                    <p className={classes.Leder}>{t('common:Mentee pool', "Mentee pool")} </p>
                                                </Button>
                                                <Menu {...bindMenu(popupState)} fullWidth>
                                                    <MenuItem fullWidth onClick={popupState.close}>1</MenuItem>
                                                    <MenuItem fullWidth onClick={popupState.close}>2</MenuItem>
                                                </Menu>
                                            </React.Fragment>
                                        )}
                                    </PopupState>
                                </div>
                            </Grid>
                            <Grid item md={3} sm={12} xs={12} >
                                <div className="AddUpperDepartmentDiv">
                                    <PopupState variant="popover" popupId="demo-popup-menu">
                                        {(popupState) => (
                                            <React.Fragment>
                                                <Button fullWidth variant="contained" className={classes.drop1} endIcon={<KeyboardArrowDownIcon className={classes.iconn} />} {...bindTrigger(popupState)}>
                                                    <p className={classes.cLeder}>{t('common:Coordinatorpool ', " Coordinator pool ")} </p>
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
                            <Grid item md={3} sm={12} xs={12}>
                                <div className="AddUpperDepartmentDiv">
                                    <PopupState variant="popover" popupId="demo-popup-menu">
                                        {(popupState) => (
                                            <React.Fragment>
                                                <Button fullWidth variant="contained" className={classes.drop1} {...bindTrigger(popupState)}>
                                                    <p className={classes.pLeder}>{t('common:Maxregistration', " Max no. of registration")}</p>
                                                </Button>
                                            </React.Fragment>
                                        )}
                                    </PopupState>
                                </div>
                            </Grid>
                        </Grid>
                        <ImageUpload />
                    </div>
                    <Innerlay.Item xs={3} style={{ display: 'none' }}>
                        <TextField
                            select
                            fullWidth
                            required
                            name="programtypeid"
                            label={t('leadership program:type', 'Leadership Program')}
                            id="programtypeid"
                            value={fields.programtypeid}
                            onChange={handleFieldChange}
                        >
                            <MenuItem value="">{t('organization:adm.select', 'Select a membership')}</MenuItem>
                            {!programTypesLoading && programTypes && programTypes.map(row => <MenuItem key={row.id} value={row.id}>{row.name}</MenuItem>)}
                        </TextField>
                    </Innerlay.Item >
                    <Innerlay.Item xs={12} style={{ display: 'none' }}>
                        <TextField
                            autoFocus
                            required
                            fullWidth
                            id="name"
                            label={t('program:name', 'Program name')}
                            value={fields.name}
                            onChange={handleFieldChange}
                        />
                    </Innerlay.Item >
                    <Innerlay.Item xs={3} style={{ display: 'none' }}>
                        <DatePicker
                            autoOk
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="startdate"
                            label={t('program:startdate', 'Start date')}
                            value={fields.startdate}
                            onChange={createHandleDataChange('startdate')}
                        />
                    </Innerlay.Item>
                    <Innerlay.Item xs={3} style={{ display: 'none' }}>
                        <DatePicker
                            autoOk
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="kickoffdate"
                            label={t('program:kickoffdate', 'Kickoff date')}
                            value={fields.kickoffdate}
                            onChange={createHandleDataChange('kickoffdate')}
                        />
                    </Innerlay.Item>
                    <Innerlay.Item xs={3} style={{ display: 'none' }}>
                        <DatePicker
                            autoOk
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="enddate"
                            label={t('program:enddate', 'End date')}
                            value={fields.enddate}
                            onChange={createHandleDataChange('enddate')}
                        />
                    </Innerlay.Item>
                    <Innerlay.Item xs={3}>
                    </Innerlay.Item>
                    <Innerlay.Item xs={3} style={{ display: 'none' }}>
                        <TextField
                            select
                            fullWidth
                            required
                            name="programtypeid"
                            label={t('Mentor:Pool', 'Mentor Pool')}
                            id="programtypeid"
                            value={fields.programtypeid}
                            onChange={handleFieldChange}
                        >                            <MenuItem value="">{t('organization:adm.select', 'Select a membership')}</MenuItem>
                            {!programTypesLoading && programTypes && programTypes.map(row => <MenuItem key={row.id} value={row.id}>{row.name}</MenuItem>)}
                        </TextField>
                    </Innerlay.Item >
                    <Innerlay.Item xs={3} style={{ display: 'none' }}>
                        <TextField
                            select
                            fullWidth
                            required
                            name="programtypeid"
                            label={t('mentor:pool', 'Mentor Pool')}
                            id="programtypeid"
                            value={fields.programtypeid}
                            onChange={handleFieldChange}
                        >
                            <MenuItem value="">{t('organization:adm.select', 'Select a membership')}</MenuItem>
                            {!programTypesLoading && programTypes && programTypes.map(row => <MenuItem key={row.id} value={row.id}>{row.name}</MenuItem>)}
                        </TextField>
                    </Innerlay.Item >
                    <Innerlay.Item xs={3} style={{ display: 'none' }}>
                        <TextField
                            select
                            fullWidth
                            required
                            name="programtypeid"
                            label={t('coordinator:pool', 'Coordinator Pool')}
                            id="programtypeid"
                            value={fields.programtypeid}
                            onChange={handleFieldChange}
                        >
                            <MenuItem value="">{t('organization:adm.select', 'Select a membership')}</MenuItem>
                            {!programTypesLoading && programTypes && programTypes.map(row => <MenuItem key={row.id} value={row.id}>{row.name}</MenuItem>)}
                        </TextField>
                    </Innerlay.Item >
                    <Innerlay.Item xs={3} style={{ display: 'none' }}>
                        <TextField
                            autoFocus
                            required
                            fullWidth
                            id="name"
                            label={t('Max.:number of ragistrations', 'Max. number of ragistrations')}
                            value={fields.name}
                            onChange={handleFieldChange}
                        />
                    </Innerlay.Item >
                </Innerlay.Body>
                <Innerlay.Footer custom={true} style={{ display: 'none' }}>
                    <Button className="primary" disabled={activeStep == 0} onClick={(e) => { e.preventDefault(); handleBack() }} >{t('innerlay:back', '< Back')}</Button>
                    <Button onClick={(e) => { e.preventDefault(); handleCancel() }} >{t('innerlay:cancel', 'Cancel')}</Button>
                    <div className={classes.grow} />
                    <Button type="submit" id="exit" disabled={props.isSaving || !fields.isFormChanged}>
                        {props.isSaving && <CircularProgress size={30} color="primary" />}
                        {!props.isSaving && t('innerlay:save', 'Save')}
                    </Button>
                    <Button className="secondary" onClick={(e) => { e.preventDefault(); handleNext() }} >{t('innerlay:next', 'Next >')}</Button>
                </Innerlay.Footer>
            </Fragment>
        );
    }

    // **********************Milestone**************************** 
    const arr = [<><Grid container spacing={1} className={classes.paddingBottomForContainer} >
        <Grid item md={2} sm={12} xs={12}>
            <div className={classes.iconimg} md={12}>
                <img src={dots} className={classes.iconimgleft}></img>
                <img src={rightarrow2} className={classes.iconimgright}></img>
            </div>
        </Grid>
        <Grid item md={3} sm={12} xs={12}>
            <TextField className={classes.setupsPhase} id="standard-basic2" label={t('common: ProgramSetup', " Phase 0 - Program 1 Setup")} variant="standard" fullWidth />
        </Grid>
        <Grid item md={4} sm={10} xs={10} container spacing={1}>
            <Grid item md={6} sm={12} xs={12}>
                <div className={classes.datekikoffs}>
                    <form className={classes.container1} noValidate>
                        <DatePicker
                            autoOk
                            className={classes.datePick1}
                            // variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            fullWidth
                            value={fields.enddate}
                            onChange={createHandleDataChange('enddate')}
                        />
                    </form>
                </div>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
                <div className={classes.datekikoffs}>
                    <form className={classes.container} noValidate>
                        <DatePicker
                            autoOk
                            className={classes.datePick1}
                            // variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            fullWidth
                            value={fields.enddate}
                            onChange={createHandleDataChange('enddate')}
                        />
                    </form>
                </div>
            </Grid>
        </Grid>
        <Grid item md={1} sm={2} xs={2} >
            <Typography variant="h5" className={classes.daysbox}
                fullWidth>
                19<br></br>
                <span>{t('common:days', " days")}</span>
            </Typography>
        </Grid>
        <Grid item md={2} sm={12} xs={12}>
            <Typography variant="h5" fullWidth>
                <a href="#" className={classes.editntn}>{t('common:edit', " edit")}</a>
            </Typography>
        </Grid>
    </Grid></>,
    <><Grid container spacing={1} className={classes.paddingBottomForContainer} >
        <Grid item md={2} sm={12} xs={12}>
            <div className={classes.iconimg}>
                <img src={dots} className={classes.iconimgleft}></img>
                <img src={down} className={classes.iconimgcentre}></img>
                <img src={rightarrow2} className={classes.iconimgright}></img>
            </div>
        </Grid>
        <Grid item md={3} sm={12} xs={12}>
            <TextField className={classes.setupsPhase} id="standard-basic2" label={t('common: Mentordatacollect', " Phase 1 - Mentor data collect")} variant="standard" fullWidth />
        </Grid>
        <Grid item md={4} sm={10} xs={10} container spacing={1}>
            <Grid item md={6} sm={12} xs={12}>
                <div className={classes.datekikoffs}>
                    <form className={classes.container} noValidate>
                        <DatePicker
                            autoOk
                            className={classes.datePick1}
                            // variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            fullWidth
                            value={fields.enddate}
                            onChange={createHandleDataChange('enddate')}
                        />
                    </form>
                </div>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
                <div className={classes.datekikoffs}>
                    <form className={classes.container} noValidate>
                        <DatePicker
                            autoOk
                            className={classes.datePick1}
                            // variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            fullWidth
                            value={fields.enddate}
                            onChange={createHandleDataChange('enddate')}
                        />
                    </form>
                </div>
            </Grid>
        </Grid>
        <Grid item md={1} sm={2} xs={2} >
            <Typography variant="h5" fullWidth className={classes.daysbox1}>
                19<br></br>
                <span>{t('common:days', " days")}</span>
            </Typography>
        </Grid>
        <Grid item md={2} sm={4} xs={4} className={classes.delEdi}>
            <Typography variant="p" fullWidth>
                <a href="#" className={classes.editntn}>{t('common:edit', " edit")}</a>
                <a href="#" className={classes.deletentn}>{t('common:delete', " delete")}</a>
            </Typography>
        </Grid>
    </Grid>
    </>,
    <><Grid container spacing={1} className={classes.paddingBottomForContainer}>
        <Grid item md={2} sm={12} xs={12}>
            <div className={classes.iconimg}>
                <img src={dots} className={classes.iconimgleft}></img>
                <img src={rightarrow2} className={classes.iconimgright}></img>
            </div>
        </Grid>
        <Grid item md={3} sm={12} xs={12}>
            <TextField className={classes.setupsPhase} id="standard-basic2" label={t('common:Menteedatacollection', " Phase 2 -Mentee data collection")} variant="standard" fullWidth />
        </Grid>
        <Grid item md={4} sm={10} xs={10} container spacing={1}>
            <Grid item md={6} sm={12} xs={12}>
                <div className={classes.datekikoffs}>
                    <form className={classes.container} noValidate>
                        <DatePicker
                            autoOk
                            className={classes.datePick1}
                            // variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            fullWidth
                            value={fields.enddate}
                            onChange={createHandleDataChange('enddate')}
                        />
                    </form>
                </div>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
                <div className={classes.datekikoffs}>
                    <form className={classes.container} noValidate>
                        <DatePicker
                            autoOk
                            className={classes.datePick1}
                            // variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            fullWidth
                            value={fields.enddate}
                            onChange={createHandleDataChange('enddate')}
                        />
                    </form>
                </div>
            </Grid>
        </Grid>
        <Grid item md={1} sm={2} xs={2} >
            <Typography variant="h5" fullWidth className={classes.daysbox}>
                19<br></br>
                <span>{t('common:days', " days")}</span>
            </Typography>
        </Grid>
        <Grid item md={2} sm={4} xs={4} className={classes.delEdi}>
            <Typography variant="h5" fullWidth>
                <a href="#" className={classes.editntn}>{t('common:edit', " edit")}</a>
                <a href="#" className={classes.deletentn}>{t('common:delete', " delete")}</a>
            </Typography>
        </Grid>
    </Grid>
    </>,
    <><Grid container spacing={1} className={classes.paddingBottomForContainer} >
        <Grid item md={2} sm={12} xs={12}>
            <div className={classes.iconimg}>
                <img src={dots} className={classes.iconimgleft}></img>
                <img src={down2} className={classes.iconimgright}></img>
            </div>
        </Grid>
        <Grid item md={3} sm={12} xs={12}>
            <TextField className={classes.setupsPhase} id="standard-basic2" label={t('common:CheckpointThird', " Phase 3 - Checkpoint")} variant="standard" fullWidth />
        </Grid>
        <Grid item md={4} sm={10} xs={10} container spacing={1}>
            <Grid item md={6} sm={12} xs={12}>
                <div className={classes.datekikoffs}>
                    <form className={classes.container} noValidate>
                        <DatePicker
                            autoOk
                            className={classes.datePick1}
                            // variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            fullWidth
                            value={fields.enddate}
                            onChange={createHandleDataChange('enddate')}
                        />
                    </form>
                </div>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
                <div className={classes.datekikoffs}>
                    <form className={classes.container} noValidate>
                        <DatePicker
                            autoOk
                            className={classes.datePick1}
                            // variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            fullWidth
                            value={fields.enddate}
                            onChange={createHandleDataChange('enddate')}
                        />
                    </form>
                </div>
            </Grid>
        </Grid>
        <Grid item md={1} sm={2} xs={2} className={classes.days}>
            <div className={classes.cicle}></div>
        </Grid>
        <Grid item md={2} sm={4} xs={4} fullWidth className={classes.delEdi}>
            <Typography variant="h5" fullWidth>
                <a href="#" className={classes.editntn}>{t('common:edit', " edit")}</a>
                <a href="#" className={classes.deletentn}>{t('common:delete', " delete")}</a>
            </Typography>
        </Grid>
    </Grid></>
        , <> <Grid container spacing={1} className={classes.paddingBottomForContainer}>
            <Grid item md={2} sm={12} xs={12}>
                <div className={classes.iconimg}>
                    <img src={dots} className={classes.iconimgleft}></img>
                    <img src={rightarrow2} className={classes.iconimgright}></img>
                </div>
            </Grid>
            <Grid item md={3} sm={12} xs={12}>
                <TextField className={classes.setupsPhase} id="standard-basic2" label={t('common:Kickoffwebinar', " Phase 4 -Kickoff webinar")} variant="standard" fullWidth />
            </Grid>
            <Grid item md={4} sm={10} xs={10} container spacing={1}>
                <Grid item md={6} sm={12} xs={12}>
                    <div className={classes.datekikoffs}>
                        <form className={classes.container} noValidate>
                            <DatePicker
                                autoOk
                                className={classes.datePick1}
                                // variant="inline"
                                format="dd/MM/yyyy"
                                margin="normal"
                                fullWidth
                                value={fields.enddate}
                                onChange={createHandleDataChange('enddate')}
                            />
                        </form>
                    </div>
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                    <div className={classes.datekikoffs}>
                        <form className={classes.container} noValidate>
                            <DatePicker
                                autoOk
                                className={classes.datePick1}
                                // variant="inline"
                                format="dd/MM/yyyy"
                                margin="normal"
                                fullWidth
                                value={fields.enddate}
                                onChange={createHandleDataChange('enddate')}
                            />
                        </form>
                    </div>
                </Grid>
            </Grid>
            <Grid item md={1} sm={2} xs={2} >
                <Typography variant="h5" fullWidth className={classes.daysbox}>
                    19<br></br>
                    <span>{t('common:days', " days")}</span>
                </Typography>
            </Grid>
            <Grid item md={2} sm={4} xs={4} className={classes.delEdi}>
                <Typography variant="h5" fullWidth>
                    <a href="#" className={classes.editntn}>{t('common:edit', " edit")}</a>
                </Typography>
            </Grid>
        </Grid></>,
    <><Grid container spacing={1} className={classes.paddingBottomForContainer}>
        <Grid item md={2} sm={12} xs={12}>
            <div className={classes.iconimg}>
                <img src={dots} className={classes.iconimgleft}></img>
                <img src={down2} className={classes.iconimgright}></img>
            </div>
        </Grid>
        <Grid item md={3} sm={12} xs={12}>
            <TextField className={classes.setupsPhase} id="standard-basic2" label={t('common:CheckpointFive', " Phase 5 Checkpoint")} variant="standard" fullWidth />
        </Grid>
        <Grid item md={4} sm={10} xs={10} container spacing={1}>
            <Grid item md={6} sm={12} xs={12}>
                <div className={classes.datekikoffs}>
                    <form className={classes.container} noValidate>
                        <DatePicker
                            autoOk
                            className={classes.datePick1}
                            // variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            fullWidth
                            value={fields.enddate}
                            onChange={createHandleDataChange('enddate')}
                        />
                    </form>
                </div>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
                <div className={classes.datekikoffs}>
                    <form className={classes.container} noValidate>
                        <DatePicker
                            autoOk
                            className={classes.datePick1}
                            // variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            fullWidth
                            value={fields.enddate}
                            onChange={createHandleDataChange('enddate')}
                        />
                    </form>
                </div>
            </Grid>
        </Grid>
        <Grid item md={1} sm={2} xs={2} className={classes.days}>
            <div className={classes.cicle}></div>
        </Grid>
        <Grid item md={2} sm={4} xs={4} className={classes.delEdi}>
            <Typography fullWidth variant="h5">
                <a href="#" className={classes.editntn}>{t('common:edit', " edit")}</a>
                <a href="#" className={classes.deletentn}>{t('common:delete', " delete")}</a>
            </Typography>
        </Grid>
    </Grid></>,
    <>  <Grid container spacing={1} >
        <Grid item md={2} sm={12} xs={12}>
            <div className={classes.iconimg}>
                <img src={dots} className={classes.iconimgleft}></img>
                <img src={down2} className={classes.iconimgright}></img>
            </div>
        </Grid>
        <Grid item md={3} sm={12} xs={12}>
            <TextField className={classes.setupsPhase} id="standard-basic2" label={t('common:CheckpointSix', " Phase 6 - Checkpoint")} variant="standard" fullWidth />
        </Grid>
        <Grid item md={4} sm={10} xs={10} container spacing={1}>
            <Grid item md={6} sm={12} xs={12}>
                <div className={classes.datekikoffs}>
                    <form className={classes.container} noValidate>
                        <DatePicker
                            autoOk
                            className={classes.datePick1}
                            // variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            fullWidth
                            value={fields.enddate}
                            onChange={createHandleDataChange('enddate')}
                        />
                    </form>
                </div>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
                <div className={classes.datekikoffs}>
                    <form className={classes.container} noValidate>
                        <DatePicker
                            autoOk
                            className={classes.datePick1}
                            // variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            fullWidth
                            value={fields.enddate}
                            onChange={createHandleDataChange('enddate')}
                        />
                    </form>
                </div>
            </Grid>
        </Grid>
        <Grid item md={1} sm={2} xs={2} className={classes.days}>
            <div className={classes.cicle}></div>
        </Grid>
        <Grid item md={2} sm={4} xs={4} className={classes.delEdi}>
            <Typography fullWidth variant="h5">
                <a href="#" className={classes.editntn}>{t('common:edit', " edit")}</a>

            </Typography>
        </Grid>
    </Grid>
    </>]
    const MilestonesForm = () => {
        const dragItem = useRef();
        const dragOverItem = useRef();
        const [list, setList] = useState(arr);

        const dragStart = (e, position) => {
            dragItem.current = position;
            console.log(e.target.innerHTML);
        };
        const dragEnter = (e, position) => {
            dragOverItem.current = position;
            console.log(e.target.innerHTML);
        };
        const drop = () => {
            const copyListItems = [...list];
            const dragItemContent = copyListItems[dragItem.current];
            copyListItems.splice(dragItem.current, 1);
            copyListItems.splice(dragOverItem.current, 0, dragItemContent);
            dragItem.current = null;
            dragOverItem.current = null;
            setList(copyListItems);
        };
        // const columns = [
        // {
        //     title: t('program:title', 'Title'),
        //     field: 'title',
        //     cellStyle: {
        //         width: 200,
        //         minWidth: 80,
        //         textTransform: 'capitalize',
        //     },
        //     headerStyle: {
        //         width: 200,
        //         minWidth: 80,
        //         whiteSpace: 'nowrap',
        //         paddingLeft: '2em',
        //         paddingRight: '2em'
        //     }
        // },
        // {
        //     title: t('program:startdate', 'Start Date'),
        //     field: 'startdate',
        //     render: rowData => formaters.formatDate(rowData.startdate),

        // },
        // {
        //     title: t('program:enddate', 'End Date'),
        //     field: 'enddate',
        //     render: rowData => formaters.formatDate(rowData.enddate),
        // },
        // ];
        // const options = {
        //     sorting: true,
        //     showTitle: true,
        //     search: false,
        //     paging: false
        // }
        // const setData = data => {
        //     setFields({ milestones: data, isFormChanged: true })
        // }
        const abc = () => {
            setList(prevState => [...prevState, <><Grid container spacing={1} >
                <Grid item md={2} sm={12} xs={12}>
                    <div className={classes.iconimg}>
                        <img src={dots} className={classes.iconimgleft}></img>
                        <img src={down} className={classes.iconimgcentre}></img>
                        <img src={rightarrow2} className={classes.iconimgright}></img>
                    </div>
                </Grid>
                <Grid item md={3} sm={12} xs={12}>
                    <TextField className={classes.setupsPhase} id="standard-basic2" label={t('common: Mentordatacollect', " Phase 1 - Mentor data collect")} variant="standard" fullWidth />
                </Grid>
                <Grid item md={2} sm={12} xs={12}>
                    <div className={classes.datekikoffs}>
                        <form className={classes.container} noValidate>
                            <DatePicker
                                autoOk
                                className={classes.datePick1}
                                // variant="inline"
                                format="dd/MM/yyyy"
                                margin="normal"
                                fullWidth
                                value={fields.enddate}
                                onChange={createHandleDataChange('enddate')}
                            />
                        </form>
                    </div>
                </Grid>
                <Grid item md={2} sm={12} xs={12}>
                    <div className={classes.datekikoffs}>
                        <form className={classes.container} noValidate>
                            <DatePicker
                                autoOk
                                className={classes.datePick1}
                                // variant="inline"
                                format="dd/MM/yyyy"
                                margin="normal"
                                fullWidth
                                value={fields.enddate}
                                onChange={createHandleDataChange('enddate')}
                            />
                        </form>
                    </div>
                </Grid>
                <Grid item md={1} sm={8} xs={8} >
                    <Typography variant="h5" fullWidth className={classes.daysbox1}>
                        19<br></br>
                        <span>{t('common:days', " days")}</span>
                    </Typography>
                </Grid>
                <Grid item md={2} sm={4} xs={4} className={classes.delEdi}>
                    <Typography variant="p" fullWidth>
                        <a href="#" className={classes.editntn}>{t('common:edit', " edit")}</a>
                        <a href="#" className={classes.deletentn}>{t('common:delete', " delete")}</a>
                    </Typography>
                </Grid>
            </Grid>
            </>]);
            console.log('addingelement')
            console.log(list, 'array')
        }
        return (
            <Fragment>
                <Innerlay.Body>
                    <Button className="secondary" onClick={() => { abc() }}>+ add task or milestone</Button>
                    <Grid md={12} container spacing={1} className={classes.HEadingMilestone}>
                        <Grid md={5}>
                            <p>{t('common:Title', "Title")}</p>
                        </Grid>
                        <Grid md={2}>
                            <p>{t('common:Startdate', "Start date")}</p>
                        </Grid>
                        <Grid md={2}>
                            <p>{t('common:Enddate', "End date")}</p>
                        </Grid>
                        <Grid md={1}>
                            <p> <img src={timer} className={classes.HeaderIconMilestone} /></p>
                        </Grid>
                        <Grid md={2}>
                        </Grid>
                    </Grid>
                    {
                        list.map((item, index) => (
                            <div
                                style={{ height: '100%', width: '100%' }}
                                onDragStart={(e) => dragStart(e, index)}
                                onDragEnter={(e) => dragEnter(e, index)}
                                onDragEnd={drop}
                                key={index}
                                draggable>
                                {item}
                            </div>
                        ))}

                </Innerlay.Body>
                <Innerlay.Footer custom={true}>
                    <Button className="primary" disabled={activeStep == 0} onClick={(e) => { e.preventDefault(); handleBack() }} >{t('innerlay:back', '< Back')}</Button>
                    <Button onClick={(e) => { e.preventDefault(); handleCancel() }} >{t('innerlay:cancel', 'Cancel')}</Button>
                    <div className={classes.grow} />
                    <Button type="submit" id="exit" disabled={props.isSaving || !fields.isFormChanged}>
                        {props.isSaving && <CircularProgress size={30} color="primary" />}
                        {!props.isSaving && t('innerlay:save', 'Save')}
                    </Button>
                    <Button className="secondary" onClick={(e) => { e.preventDefault(); handleNext() }} >{t('innerlay:next', 'Next >')}</Button>
                </Innerlay.Footer>
            </Fragment>
        );
    }
    const EventsForm = () => {

        // const columns = [
        //     {
        //     title: t('program:title', 'Title'),
        //     field: 'title',
        //     cellStyle: {
        //         width: 200,
        //         minWidth: 80,
        //         textTransform: 'capitalize',
        //     },
        //     headerStyle: {
        //         width: 200,
        //         minWidth: 80,
        //         whiteSpace: 'nowrap',
        //         paddingLeft: '2em',
        //         paddingRight: '2em'
        //     }
        // },
        // {
        //     title: t('program:type', 'Type'),
        //     field: 'eventType',
        //     align: 'center',
        //     render: rowData => formaters.formatEventType(rowData.eventType),
        //     cellStyle: {
        //         width: 80,
        //         maxWidth: 80,
        //     },
        //     headerStyle: {
        //         width: 80,
        //         maxWidth: 80,
        //         whiteSpace: 'nowrap',
        //     }
        // },
        // {
        //     title: t('program:description', 'Description'),
        //     field: 'description',
        //     hidden: true,
        // },
        // {
        //     title: t('program:startdate', 'Start Date'),
        //     field: 'startdate',
        //     render: rowData => formaters.formatDate(rowData.startdate),
        // },
        // {
        //     title: t('program:enddate', 'End Date'),
        //     field: 'enddate',
        //     render: rowData => formaters.formatDate(rowData.enddate),
        // },
        // {
        //     title: t('program:location', 'Location'),
        //     field: 'location',
        //     hidden: true,
        // },
        // {
        //     title: t('program:registration', 'Registration'),
        //     field: 'registration',
        //     hidden: true,
        // },
        // ];
        // const options = {
        //     sorting: true,
        //     showTitle: true,
        //     search: false,
        //     paging: false
        // }
        // const setData = data => {
        //     setFields({ events: data, isFormChanged: true })
        // }
        const [inputFields, setInputFields] = useState([{
            fullName: '',
        }]);
        const addInputField = () => {

            setInputFields([...inputFields, {
                fullName: '',
            }])
        }
        const removeInputFields = (index) => {
            const rows = [...inputFields];
            rows.splice(index, 1);
            setInputFields(rows);
        }
        const handleChange = (index, evnt) => {
            const { name, value } = evnt.target;
            const list = [...inputFields];
            list[index][name] = value;
            setInputFields(list);
        }
        return (
            <Fragment>
                <Innerlay.Body>
                    {/* Step 3 Section Start Here */}
                    <Grid md={12} sm={12} xs={12} className={classes.headLogoPart}>
                        <img className={classes.imgLogo} src={dots} />
                        <ul>
                            <li className={classes.editBt}>{t('common:edit', " edit")}</li>
                            <li className={classes.deleteBt}>{t('common:delete', " delete")}</li>
                        </ul>
                    </Grid>
                    <div className={classes.programMainBox1}>
                        <Grid container spacing={2}>
                            <Grid item md={7} sm={12} xs={12}>
                                <Grid item className={classes.bottomspace}>
                                    <TextField className={classes.eventpro} id="standard-basic33" label={t('common:EventName', " Event Name")} variant="standard" fullWidth />
                                </Grid>
                                <div>
                                    <Grid item>
                                        <TextField className={classes.eventprotext}
                                            placeholder={t('common:Description', " Description")} fullWidth
                                            multiline
                                        />
                                    </Grid>
                                </div>
                            </Grid>
                            <Grid item md={5} sm={12} xs={12} className={classes.datePickEventFlex}>
                                <Grid md={12} sm={12} xs={12} className={classes.datePickEvent}  >
                                    <DatePicker className={classes.datePickMargin1}
                                        autoOk
                                        fullWidth
                                        // variant="inline"
                                        format="dd/MM/yyyy"
                                        margin="normal"
                                        id="startdate"
                                        label={t('program:startdate', 'Start date')}
                                        value={fields.startdate}
                                        onChange={createHandleDataChange('startdate')}
                                    />
                                </Grid >
                                <Grid md={12} sm={12} xs={12} className={classes.datePickEvent1}  >
                                    <DatePicker
                                        autoOk
                                        className={classes.datePickMargin1}
                                        // variant="inline"
                                        format="dd/MM/yyyy"
                                        margin="normal"
                                        id="enddate"
                                        fullWidth
                                        label={t('program:enddate', 'End date')}
                                        value={fields.enddate}
                                        onChange={createHandleDataChange('enddate')}
                                    />
                                </Grid >
                                <div className={classes.AddUpperDepartmentDiv}>
                                    <PopupState variant="popover" popupId="demo-popup-menu">
                                        {(popupState) => (
                                            <React.Fragment>
                                                <Button variant="contained" className={classes.dropEvent} endIcon={<KeyboardArrowDownIcon className={classes.iconn1} />} {...bindTrigger(popupState)}>
                                                    <p className={classes.cLeder}>{t('common:ChooseLocation', " Choose Location")} </p>
                                                </Button>
                                                <Menu {...bindMenu(popupState)} fullWidth>
                                                    <MenuItem fullWidth onClick={popupState.close}>1</MenuItem>
                                                    <MenuItem fullWidth onClick={popupState.close}>2</MenuItem>
                                                </Menu>
                                            </React.Fragment>
                                        )}
                                    </PopupState>
                                </div>
                                <Grid md={12} sm={12} xs={12} className={classes.switchBtn}>
                                    <Switch
                                        classes={{
                                            root: classes.Switchwidth,
                                            switchBase: classes.switchBase,
                                            thumb: classes.thumb,
                                            track: classes.track,
                                            checked: classes.checked,
                                        }} />
                                    <p className={classes.switchPara}>{t('common:AllowRegistration', " Allow Registration")} </p>

                                </Grid>
                            </Grid>
                        </Grid>
                        <br />
                        <hr />
                        {
                            inputFields.map((data, index) => {
                                const { fullName, } = data;
                                return (
                                    <div key={index}>
                                        <div onChange={(evnt) => handleChange(index, evnt)} value={fullName} name="fullName"  >
                                            <Grid md={12} sm={12} xs={12} className={classes.headLogoPart1}>
                                                <img className={classes.imgLogo} src={dots} />
                                                <ul>
                                                    <li className={classes.editBt}>{t('common:edit', " edit")}</li>
                                                    {(inputFields.length !== -1) ? <li className={classes.deleteBt} onClick={removeInputFields}>{t('common:delete', " delete")}</li> : ''}
                                                </ul>
                                            </Grid>
                                            <Grid container spacing={2}>
                                                <Grid item md={7} sm={12} xs={12} >
                                                    <Grid item className={classes.bottomspace}>
                                                        <TextField className={classes.eventpro1} id="standard-basic33" label={t('common:Mentorregistration', " Mentor registration")} variant="standard" fullWidth />
                                                    </Grid>
                                                    <div>
                                                        <Grid item>
                                                            <TextField className={classes.eventprotext}
                                                                placeholder={t('common:Description', " Description")} fullWidth
                                                                multiline
                                                            />
                                                        </Grid>
                                                    </div>
                                                </Grid>
                                                <Grid item md={5} sm={12} xs={12} className={classes.datePickEventFlex}>
                                                    <Grid md={12} sm={12} xs={12} className={classes.datePickEvent}  >
                                                        <DatePicker className={classes.datePickMargin1}
                                                            autoOk
                                                            fullWidth
                                                            // variant="inline"
                                                            format="dd/MM/yyyy"
                                                            margin="normal"
                                                            id="startdate"
                                                            label={t('program:startdate', 'Start date')}
                                                            value={fields.startdate}
                                                            onChange={createHandleDataChange('startdate')}
                                                        />
                                                    </Grid >
                                                    <Grid md={12} sm={12} xs={12} className={classes.datePickEvent1}  >
                                                        <DatePicker
                                                            autoOk
                                                            className={classes.datePickMargin1}
                                                            // variant="inline"
                                                            format="dd/MM/yyyy"
                                                            margin="normal"
                                                            id="enddate"
                                                            fullWidth
                                                            label={t('program:enddate', 'End date')}
                                                            value={fields.enddate}
                                                            onChange={createHandleDataChange('enddate')}
                                                        />
                                                    </Grid >
                                                    <div className={classes.AddUpperDepartmentDiv}>
                                                        <PopupState variant="popover" popupId="demo-popup-menu">
                                                            {(popupState) => (
                                                                <React.Fragment>
                                                                    <Button variant="contained" className={classes.dropEvent} endIcon={<KeyboardArrowDownIcon className={classes.iconn1} />} {...bindTrigger(popupState)}>
                                                                        <p className={classes.cLeder}>  {t('common:Onlineregistration', "  Online registration")}</p>
                                                                    </Button>
                                                                    <Menu {...bindMenu(popupState)} fullWidth>
                                                                        <MenuItem fullWidth onClick={popupState.close}>1</MenuItem>
                                                                        <MenuItem fullWidth onClick={popupState.close}>2</MenuItem>
                                                                    </Menu>
                                                                </React.Fragment>
                                                            )}
                                                        </PopupState>
                                                    </div>
                                                    <Grid md={12} sm={12} xs={12} className={classes.switchBtn}>
                                                        <Switch
                                                            classes={{
                                                                root: classes.Switchwidth,
                                                                switchBase: classes.switchBase,
                                                                thumb: classes.thumb,
                                                                track: classes.track,
                                                                checked: classes.checked,
                                                            }} />

                                                        <p className={classes.switchPara}> {t('common:AllowRegistration', " Allow Registration")}</p>
                                                    </Grid>
                                                </Grid>

                                            </Grid>
                                        </div>
                                        <div className="col">
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <Button onClick={addInputField} className={classes.eventButton}><AddIcon className={classes.addIconEvent} /> <p className={classes.eventpara}>{t('common:addevent', " add event")}</p></Button>
                    </div>

                    {/* Step 3 Section End Here */}

                </Innerlay.Body>
                <Innerlay.Footer custom={true}>
                    <Button className="primary" disabled={activeStep == 0} onClick={(e) => { e.preventDefault(); handleBack() }} >{t('innerlay:back', '< Back')}</Button>
                    <Button onClick={(e) => { e.preventDefault(); handleCancel() }} >{t('innerlay:cancel', 'Cancel')}</Button>
                    <div className={classes.grow} />
                    <Button type="submit" id="exit" disabled={props.isSaving || !fields.isFormChanged}>
                        {props.isSaving && <CircularProgress size={30} color="primary" />}
                        {!props.isSaving && t('innerlay:save', 'Save')}
                    </Button>
                    <Button className="secondary" disabled={validateGeneralForm()} onClick={(e) => { e.preventDefault(); handleNext() }} >{t('innerlay:next', 'Next >')}</Button>
                </Innerlay.Footer>
            </Fragment>
        );
    }
    const ConfirmationForm = () => {
        return (
            <>
                <Fragment>
                    <Innerlay.Body>
                        <div className={classes.fulContainer}>
                            <Innerlay.Item xs={12}  >
                                <Grid container md={12} sm={12} xs={12} >
                                    <Typography variant='p'>
                                        <p className={classes.conformationPara}>{t('common:Dear', 'Dear')}<span>@</span>{t('common:programManager', ' Name of the program Manager')}</p>
                                        <p className={classes.conformationPara1}>{t('common:pressaddProgram', 'You are about to activate your program. Plese review the data below and press add Program')}</p>
                                        <p className={classes.conformationPara}>{t('common:ProgramName', 'Program Name:')} <span>{t('common:Cohort', 'Cohort')} 1 2022</span></p>
                                        <p className={classes.conformationPara}>{t('common:StartDate', 'Start Date:')} <span>18 {t('common:January', 'January')} 2022</span></p>
                                        <p className={classes.conformationPara}>{t('common:EndDate', 'End Date:')} <span>15 {t('common:December', 'December')} 2022</span></p>
                                        <p className={classes.conformationPara}>{t('common:MenteeRegistration', 'Mentee Registration')} <span>XXXX  <a href="1"> Url</a> {t('common:DDMM', 'DDMM.YYYY')}</span></p>
                                        <p className={classes.conformationPara}>{t('common:MentorRegistration', 'Mentor Registration')} <span>XXXX  <a href="1"> Url</a> {t('common:DDMM', 'DDMM.YYYY')}</span></p>
                                    </Typography>
                                </Grid>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            id="isActive"
                                            checked={fields.isActive}
                                            onChange={handleFieldChange}
                                            color="secondary"
                                        />
                                    }
                                    label={t('program:activate', 'Activate the program.')}
                                />
                            </Innerlay.Item>
                            {organization.isWA && <Innerlay.Item xs={12} container spacing={1}>
                                <Innerlay.Item xs={12}>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                id="isIntegrationWA"
                                                checked={fields.isIntegrationWA}
                                                onChange={handleFieldChange}
                                                color="secondary"
                                            />
                                        }
                                        label={t('program:useWA', 'Use WA already defined events for program mentee and mentor subscriptions')}
                                    />
                                </Innerlay.Item >
                                <Innerlay.Item xs={12}>
                                    <TextField
                                        select
                                        fullWidth
                                        required
                                        disabled={!fields.isIntegrationWA}
                                        name="eventMentor"
                                        label={t('program:WAmentorpool', 'WA Mentor pool')}
                                        id="eventMentor"
                                        value={fields.eventMentor}
                                        onChange={handleFieldChange}
                                    >
                                        <MenuItem value="">{t('program:selectmentorpool', 'Select the mentor pool')}</MenuItem>
                                        {!waEventsLoading && waEvents && waEvents.map(row => <MenuItem key={row.Id} value={row.Id}>{row.Name}</MenuItem>)}

                                    </TextField>
                                </Innerlay.Item>
                                <Innerlay.Item xs={12}>
                                    <TextField
                                        select
                                        fullWidth
                                        required
                                        disabled={!fields.isIntegrationWA}
                                        name="eventMentee"
                                        label={t('program:WAmenteepool', 'WA Mentee pool')}
                                        id="eventMentee"
                                        value={fields.eventMentee}
                                        onChange={handleFieldChange}
                                    >
                                        <MenuItem value="eventMentee">{t('program:selectmenteepool', 'Select the mentee pool')}</MenuItem>
                                        {!waEventsLoading && waEvents && waEvents.map(row => <MenuItem key={row.Id} value={row.Id}>{row.Name}</MenuItem>)}

                                    </TextField>
                                </Innerlay.Item>
                            </Innerlay.Item>}
                        </div>
                    </Innerlay.Body>
                    <Innerlay.Footer custom={true}>
                        <Button className="primary" disabled={activeStep == 0} onClick={(e) => { e.preventDefault(); handleBack() }} >{t('innerlay:back', '< Back')}</Button>
                        <Button onClick={(e) => { e.preventDefault(); handleCancel() }} >{t('innerlay:cancel', 'Cancel')}</Button>
                        <div className={classes.grow} />
                        <Button type="submit" id="exit" disabled={props.isSaving || !fields.isFormChanged}>
                            {props.isSaving && <CircularProgress size={30} color="primary" />}
                            {!props.isSaving && t('innerlay:save', 'Save')}
                        </Button>
                        <input
                            id="action"
                            type="text"
                            value="save"
                            hidden={true}
                        />
                        <Button type="submit" className="secondary" name="add" disabled={props.isSaving || !validateConfirmationForm()} value="add" >
                            {props.isSaving && <CircularProgress size={30} color="primary" />}
                            {!props.isSaving && isUpdate ? t('program:update', 'Update Program') : t('program:add', 'Add Program')}
                        </Button>
                    </Innerlay.Footer>
                </Fragment>
            </>);
    }
    function getStepContent(step) {
        switch (step) {
            case 0:
                return <GeneralForm />
            case 1:
                return <MilestonesForm />
            case 2:
                return <EventsForm />
            case 3:
                return <ConfirmationForm />
            default:
                return null;
        }
    }
    return (
        <div className={classes.root}>
            <Grid
                container
                direction="column"
                spacing={2}
            >
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    item
                >
                    <Grid item>
                        <Typography variant="h6">
                            {isUpdate ? fields.name : t('program:new', "New Program")}
                        </Typography>
                    </Grid>
                    {isUpdate && <Grid item><Button className="outlined-primary" component={Link} to={'/console/programs/' + fields.programId} >Display</Button></Grid>}
                </Grid>
                <Grid item className={classes.vishal}>
                    <Innerlay item md={12} sm={6} handleSubmit={handleSubmit} className={classes.vishal1}>
                        <Innerlay.Header justify="center" className={classes.vishal1}>
                            {element}
                        </Innerlay.Header>
                        {getStepContent(activeStep)}
                    </Innerlay>
                </Grid>
            </Grid>

        </div>
    );
}
ProgramForm.propTypes = {
    isSaving: PropTypes.bool,
    programid: PropTypes.string
}
export default ProgramForm;