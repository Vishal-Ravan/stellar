import React from 'react'
import Typography from '@material-ui/core/Typography'
import logo from '../src/logo.png';
import Button from '@material-ui/core/Button';
import flag1 from '../src/flag1.png'
import flag2 from '../src/flag2.png'
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import './index.css'


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2, 0),


        },
    },
}));
const StellarUpcoming = () => {

    const classes = useStyles();
   
    
    return (
        <>

            <div className="main" style={{ display: 'flex' }}>
                <div className="first-layout " style={{ marginTop: "0", width: '70%', height: "100vh", align: 'left' }}>
                    <div className="first-layout-left" style={{ paddingTop: "5rem", paddingLeft: '5rem', width: '100%%', height: "100%", backgroundColor: 'hsl(0deg 0% 96%)', align: 'left' }}>
                        <Typography height="11rem"
                            width="12rem" >
                            <img src={logo} alt="hjh" height="100%"
                                width="50%" /></Typography>
                        <Typography

                            color='primary'

                        > <h2 className='heading-first'> ACME ORGANIZATION </h2></Typography>
                        <Typography
                        >
                            <p className='ceo'><span>CEO</span>:Jhon Doe</p></Typography>
                        <Typography>
                            <StarOutlinedIcon style={{ color: '#303186' }} />
                            <StarOutlinedIcon style={{ color: '#303186' }} />
                            <StarOutlinedIcon style={{ color: '#303186' }} />
                            <StarOutlinedIcon style={{ color: '#303186' }} />


                        </Typography>

                        <Typography>
                            <img style={{ margin: '5px' }} src={flag1} alt="f" width="20px" />
                            <img style={{ margin: '5px' }} src={flag2} alt="f" width="20px" />

                        </Typography>
                        <Typography
                            variant='p'


                        >
                            <p className='first-paregraph'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, laboriosam excepturi voluptas, dolores labore rem non debitis necessitatibus eaque ipsum numquam, natus um?<br /> <a href="http://j">Read more detail</a></p>
                        </Typography>
                        <Typography>
                            <a className='web-link' href="http://"> Website www.acme.com </a>
                        </Typography>
                    </div>
                </div>
                <div className="second-layout" style={{ align: 'left', width: '100%' }}>
                    <div className="second-layout-right" style={{ paddingTop: '5rem', paddingLeft: "3rem", paddingRight: '2.5rem' }}>
                        <Typography
                            style={{ display: 'flex' }}
                        >
                            <nav>
                                <ul style={{ display: 'flex', listStyle: 'none', }}>
                                    <li className='active'><a > UPCOMING PROGRAMS</a></li>
                                    <li><a>CURRENT PROGRAMS</a></li>
                                    <li><a >PAST PROGRAMS</a></li>
                                </ul>
                            </nav>
                    </Typography>
                        <div className="table-btn-flex">
                            <div className="acme-first-layout" style={{ display: "flex" }}>
                                <Typography variant='table'>
                                    <div className="s-date">
                                        <table>
                                            <thead className="bgColor">
                                                <tr>
                                                    <th>Start</th>
                                                    <th>End</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className='td'>
                                                        <ul>
                                                            <li className='bold'>Jan</li>
                                                            <li className='li'>21</li>
                                                            <li>2021</li>
                                                        </ul>
                                                    </td>
                                                    <td className='td1'>
                                                        <ul>
                                                            <li className='bold'>Nov</li>
                                                            <li className='li '>03</li>
                                                            <li>2021</li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>


                                    </div>
                                </Typography>
                                <div className="acme-start">
                                    <Typography>
                                        <h5 className='acme-heading'>ACME_MENTOR MENOTORING PROGRAM</h5>
                                        <p className='acme-para-span'>Location: <span>online</span></p>
                                        <p className='acme-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nesciunt voluptatibus odit  eius itaque placeat. Doloribus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veritatis numquam laudantium similique. <br /> <a href="http://f">Read more details</a></p>
                                    </Typography>
                                    <div className={classes.root}>
                                        <Typography
                                            display='flex'>
                                            <Button variant="outlined" startIcon={<ArrowForwardIosOutlinedIcon />} >MENTOR REGISTRATION</Button>
                                            <Button variant="outlined" startIcon={<ArrowForwardIosOutlinedIcon />} >MENTEE REGISTRATION</Button>

                                        </Typography>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <br />
                        <hr />
                        <div className="table-btn-flex">
                            <div className="acme-first-layout" style={{ display: "flex" }}>
                                <Typography variant='table'>
                                    <div className="s-date">
                                        <table>
                                            <thead className="bgColor">
                                                <tr>
                                                    <th>Start</th>
                                                    <th>End</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className='td'>
                                                        <ul>
                                                            <li className='bold'>Jan</li>
                                                            <li className='li'>21</li>
                                                            <li>2021</li>
                                                        </ul>
                                                    </td>
                                                    <td className='td1'>
                                                        <ul>
                                                            <li className='bold'>Nov</li>
                                                            <li className='li '>03</li>
                                                            <li>2021</li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>


                                    </div>
                                </Typography>
                                <div className="acme-start">
                                    <Typography>
                                        <h5 className='acme-heading'>ACME_MENTOR MENOTORING PROGRAM</h5>
                                        <p className='acme-para-span'>Location: <span>online</span></p>
                                        <p className='acme-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nesciunt voluptatibus odit  eius itaque placeat. Doloribus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veritatis numquam laudantium similique. <br /> <a href="http://f">Read more details</a></p>
                                    </Typography>
                                    <div className={classes.root}>
                                        <Typography
                                            display='flex'>
                                            <Button variant="outlined" startIcon={<ArrowForwardIosOutlinedIcon />} >MENTOR REGISTRATION</Button>
                                            <Button variant="outlined" startIcon={<ArrowForwardIosOutlinedIcon />} >MENTEE REGISTRATION</Button>

                                        </Typography>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>


        </>
    )
}

export default StellarUpcoming