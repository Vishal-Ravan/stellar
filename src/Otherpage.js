import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { API, graphqlOperation } from "aws-amplify";
import { Typography, Backdrop, CircularProgress, Button, Grid } from '@material-ui/core';
import { useNavigate, useParams,Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'
import clsx from 'clsx';
import DataTable from "App/MuiDataTable";
import { useErrorLib } from "libs/errorLib";
import { useMUITableFormat } from "libs/MUITableFormatLib";
import { getOrganization } from 'graphql/queries';
import { updateProgram, deleteProgram } from 'graphql/mutations';
// import Abc from "../../Register/Abc"


const useStyles = makeStyles((theme) => ({
  root: {
    '&': {
      display: 'flex',
    },
    '& .MuiTypography-h6': {
      marginBottom: 0,
      marginRight: theme.spacing(3),
    }
  },
  logo: {
    width: 50,
  },
  BadgeActivated: {
    '& .MuiBadge-badge': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
      fontSize: 'xx-small',
    }
  },
  BadgeArchived: {
    '& .MuiBadge-badge': {
      backgroundColor: theme.palette.common.lightgrey,
      color: theme.palette.common.white,
      fontSize: 'xx-small',
    }
  },
  BadgeDrafted: {
    '& .MuiBadge-badge': {
      backgroundColor: theme.palette.common.sylver,
      color: theme.palette.common.white,
      fontSize: 'xx-small',
    }
  },
  BadgeError: {
    '& .MuiBadge-badge': {
      backgroundColor: 'red',
      color: theme.palette.common.white,
      fontSize: 'xx-small',
    }
  },
  backdrop: {
    zIndex: 1500,
    color: '#fff',
  },
  
  tableinfoprt:{
    width: '100%',
    
    '& tr':{
      fontSize:'14px',
    },
    
  },
  
 
  
}));







function Programs() {
  const { organization } = useSelector(state => state.app)
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [programs, setPrograms] = useState(null);
  const classes = useStyles();
  const { onError } = useErrorLib();
  const navigate = useNavigate();
  const formaters = useMUITableFormat()
  const { t } = useTranslation(['error', 'common', 'program']);

  const {filter} = useParams()

  useEffect(() => {
    async function fetchData() {
      try {
        const rorganization = await API.graphql(graphqlOperation(getOrganization, { id: organization.id }));
        setPrograms(rorganization['data']['getOrganization']['programs']['items'])
        setIsLoading(false)
      }
      catch (e) {
        onError(t('error:program.list', 'Error loading program list'), e)
        setIsLoading(false)
      }

    }
    fetchData();
  }, [refresh]);

  const setProgram = async (operation, rows) => {
    let input = {}
    if (operation === 'archive') {
      input = {
        status: 'ARCHIVED',
      }
    }
    else if (operation === 'suspend') {
      input = {
        status: 'SUSPENDED',
      }
    }
    else if (operation === 'active') {
      input = {
        status: 'ACTIVATED',
      }
    }
    else if (operation == 'delete') {
      input = {}
    }
    else
      return null;

    try {
      for (let row of rows) {
        input['id'] = row.id
        await API.graphql(graphqlOperation(operation == 'delete' ? deleteProgram : updateProgram, { input: input }));
      }
    }
    catch (e) {
      if (operation === 'archive')
        onError(t('error:program.archiving', 'Error archiving program'))
      else if (operation === 'suspending')
        onError(t('error:program.suspending', 'Error suspending program'))
      else if (operation === 'deleting')
        onError(t('error:program.deleting', 'Error deleting program'))
      else if (operation === 'activate')
        onError(t('error:program.activating', 'Error activating program'))
      setIsLoading(false)
    }
  }

  const handleClick = async (rows, event) => {

    if (event.currentTarget.value === 'edit') {
      navigate(`/console/programs/${rows[0].id}/edit`)
    }
    else if (event.currentTarget.value === 'display') {
      navigate(`/console/programs/${rows[0].id}`)

    }
    else {

      await setProgram(event.currentTarget.value, rows)
      setRefresh(!refresh)

    }

  }

  const columns = [{
      title: t('common:Program Name', 'Program Name'),
      field: 'name',
      render: rowData => <Link to={"/console/programs/"+rowData.id} >{rowData.name}</Link>,
      cellStyle: {
        minWidth: 200,
        textTransform: 'capitalize',
      },
      headerStyle: {
        minWidth: 200,
        whiteSpace: 'nowrap',
        paddingLeft: '2em',
        paddingRight: '2em'
      }
    },
    {
      title: t('common:status', 'Status'),
      field: 'status',
      align: 'center',
      render: rowData => formaters.formatProgramStatus(rowData.status),
      cellStyle: {
        maxWidth: 80,
      },
      headerStyle: {
        maxWidth: 80,
        whiteSpace: 'nowrap',
      }
    },
    {
      title: t('common:start', 'Start'),
      field: 'startdate',
      render: rowData => formaters.formatDate(rowData.startdate),

    },
    
  
    {
      title: t('common:kickoffdd', 'Kickoff'),
      field: 'kickoffdate',
      render: rowData => formaters.formatDate(rowData.kickoffdate),

    },
    {
      title: t('common:end', 'End'),
      field: 'enddate',
      render: rowData => formaters.formatDate(rowData.enddate),
      
    },
    
     
        
    
  ];

  const buttonOptions = [

    { key: 'display', label: t('program:option.display', 'display'), disabled: false },
    { key: 'edit', label: t('program:option.edit', 'edit'), disabled: false },
    { key: 'active', label: t('program:option.active', 'active'), disabled: false },
    { key: 'archive', label: t('program:option.archive', 'archive'), disabled: false },
    { key: 'suspend', label: t('program:option.suspend', 'suspend'), disabled: false },
    { key: 'delete', label: t('program:option.delete', 'delete'), disabled: false }
  ];

  const checkButtonOptions = (options, selectedRows) => {
    options[0].disabled = false
    options[1].disabled = false
    options[2].disabled = false
    options[3].disabled = false
    options[4].disabled = false
    options[5].disabled = false
    const status = selectedRows.map(item => {
      return item.status
    });
    
    if (status.includes('ACTIVATED')) {
      options[2].disabled = true
      options[5].disabled = true
    }
    if (status.includes('ARCHIVED')) {
      options[1].disabled = true
      options[3].disabled = true
      options[4].disabled = true
    }
    if (status.includes('SUSPENDED')) {
      options[4].disabled = true
    }
    if (status.includes('DRAFTED')) {
      options[4].disabled = true
    }

    return options
  };




  return (
    
    
    
    
    <div className={classes.root}>


 <div className="headertop">

    <div className="allprogramsTabs">
          <span>All Programs</span>
          <ul>
              <li className="active"><a href="#!">Add</a></li>
              <li><a href="#!">Export</a></li>
              <li><a href="#!">Import</a></li>
          </ul>
    </div>
    
    <div className="menuBtnsortby">
      <ul>
          <li><a href="#!"><img src="https://itdevelopmentservices.com/design_website/stellar-image/grid-vartical.png"/></a></li>
          <li><a href="#!"><img src="https://itdevelopmentservices.com/design_website/stellar-image/grid-horijontal.png"/></a></li>
          <li className="alltwonty"><a href="#!">All (20)</a></li>
          <li><a href="#!">Sort by <img src="https://itdevelopmentservices.com/design_website/stellar-image/sortbyerrow.png"/></a></li>
      </ul>
      <div className="searchRight">
          <form className="searchform">
            <input type="search" placeholder="Search..." />
            <button type="submit">Search</button>
          </form>
      </div>
    </div>

  </div>


<div className="bg">
   
<table style={{width: '100%'}}>
  <tr>
    <th className="inputCheckbox "><input type="checkbox" className="headCheck" name="scales"/></th>
    <th className="ProgramName">Program Name</th>
    <th className="OrganizationsName">Organizations Name</th>
     <th className="registered">Registered</th>
      <th className="tasks">Tasks</th>
      <th className="milestones">Milestones</th>
        <th className="startwidth">Start</th>
         <th className="endwidth">End</th>
  </tr>
  <tr>
    <td className="inputCheckbox">
    <span>
      <input type="checkbox"name="scales"/>
      </span>
      <div className="leadShap">
      <span></span>
      <div><span>Lead</span></div>
      </div>
    </td>
    <td className="ProgramName">
      <div className="mariaMentoringStellar">
        <span>MariaMentoring Stellar 2020</span>
        <ul>
         
          <li><a href="#">Edit</a></li>
          <li><a href="#">Archive</a></li>
          <li className="active"><a href="#">Delete</a></li>
        </ul>
      </div>
    </td>
    <td className="OrganizationsName">Organizations Name</td>
    <td className="registered">
      <p>3 mentors</p><p> 20 mentees</p>
    </td>
     <td className="tasks">2/5</td>
     <td className="milestones">0/3</td>
     <td className="startwidth"><div className="startdate">Jan<br/> <b>01</b> <br/> 2020</div></td>
      <td className="endwidth"><div>Feb<br/> <b>18</b> <br/> 2020</div></td>
  </tr>
  <tr>
    <td className="inputCheckbox">
      <span>
      <input type="checkbox"name="scales"/>
      </span>
      <div className="leadShap">
      <span></span>
      <div><span>Lead</span></div>
      </div>
    </td>
    <td className="ProgramName">
      <div className="mariaMentoringStellar">
        <span>MariaMentoring Stellar 2020</span>
        <ul>
          <li><a href="#">Edit</a></li>
          <li><a href="#">Archive</a></li>
          <li className="active"><a href="#">Delete</a></li>
        </ul>
      </div>
    </td>
    <td className="OrganizationsName">Organizations Name</td>
    <td className="registered">
      <p>3 mentors</p><p> 20 mentees</p>
    </td>
     <td className="tasks">2/5</td>
     <td className="milestones">0/3</td>
     <td className="startwidth"><div className="startdate">Jan<br/> <b>01</b> <br/> 2020</div></td>
      <td className="endwidth"><div>Feb<br/> <b>18</b> <br/> 2020</div></td>
  </tr>
  <tr className="disabledRowfirst">
    <td className="inputCheckbox">
      <span>
      <input type="checkbox"name="scales"/>
      </span>
      <div className="leadShap">
      <span className="circlebgnone"></span>
      <div><span>Lead</span></div>
      </div>
    </td>
    <td className="ProgramName">
      <div className="mariaMentoringStellar">
        <span>Expertise Hard Skill 2020</span>
        <ul>
          <li><a href="#">Edit</a></li>
          <li><a href="#">Archive</a></li>
          <li className="active"><a href="#">Delete</a></li>
        </ul>
      </div>
    </td>
    <td className="OrganizationsName">Organizations Name</td>
    <td className="registered">
      <p>0 mentors</p><p> 0 mentees</p>
    </td>
     <td className="tasks">0/5</td>
     <td className="milestones">0/3</td>
     <td className="startwidth"><div className="startdate">Jan<br/> <b>01</b> <br/> 2020</div></td>
      <td className="endwidth"><div>Feb<br/> <b>18</b> <br/> 2020</div></td>
  </tr>
  <tr className="disabledRowlast">
    <td className="inputCheckbox">
      <span>
      <input type="checkbox"name="scales"/>
      </span>
      <div className="leadShap">
      <span className="circlebgnone graybgcolor bordergray"></span>
      <div className="graybgcolor"><span className="graybgcolor bordergray">Lead</span></div>
      </div>
    </td>
    <td className="ProgramName">
      <div className="mariaMentoringStellar">
        <span>Know How Prince 2020</span>
        <ul>
          <li><a href="#">View</a></li>
        </ul>
      </div>
    </td>
    <td className="OrganizationsName">Organizations Name</td>
    <td className="registered">
      <p>3 mentors</p><p> 20 mentees</p>
    </td>
     <td className="tasks">5/5</td>
     <td className="milestones">2/2</td>
     <td className="startwidth"><div className="startdate graybgcolor">Jan<br/> <b>01</b> <br/> 2020</div></td>
      <td className="endwidth"><div className="graybgcolor">Feb<br/> <b>18</b> <br/> 2020</div></td>
  </tr>
  <tr className="disabledRowlast">
    <td className="inputCheckbox">
      <span>
      <input type="checkbox"name="scales"/>
      </span>
      <div className="leadShap">
      <span className="circlebgnone graybgcolor bordergray"></span>
      <div className="graybgcolor"><span className="graybgcolor bordergray">Lead</span></div>
      </div>
    </td>
    <td className="ProgramName">
      <div className="mariaMentoringStellar">
        <span>Know How Prince 2020</span>
        <ul>
          <li><a href="#">View</a></li>
        </ul>
      </div>
    </td>
    <td className="OrganizationsName">Organizations Name</td>
    <td className="registered">
      <p>3 mentors</p><p> 20 mentees</p>
    </td>
     <td className="tasks">5/5</td>
     <td className="milestones">2/2</td>
     <td className="startwidth"><div className="startdate graybgcolor">Jan<br/> <b>01</b> <br/> 2020</div></td>
      <td className="endwidth"><div className="graybgcolor">Feb<br/> <b>18</b> <br/> 2020</div></td>
  </tr>
  <tr className="disabledRowlast">
    <td className="inputCheckbox">
      <span>
      <input type="checkbox"name="scales"/>
      </span>
      <div className="leadShap">
      <span className="circlebgnone graybgcolor bordergray"></span>
      <div className="graybgcolor"><span className="graybgcolor bordergray">Lead</span></div>
      </div>
    </td>
    <td className="ProgramName">
      <div className="mariaMentoringStellar">
        <span>Know How Prince 2020</span>
        <ul>
          <li><a href="#">View</a></li>
        </ul>
      </div>
    </td>
    <td className="OrganizationsName">Organizations Name</td>
    <td className="registered">
      <p>3 mentors</p><p> 20 mentees</p>
    </td>
     <td className="tasks">5/5</td>
     <td className="milestones">2/2</td>
     <td className="startwidth"><div className="startdate graybgcolor">Jan<br/> <b>01</b> <br/> 2020</div></td>
      <td className="endwidth"><div className="graybgcolor">Feb<br/> <b>18</b> <br/> 2020</div></td>
  </tr>
  <tr className="tablerowNone">
    <td className="inputCheckbox"><span className={clsx(classes.crical)}></span></td>
  </tr>
</table>
</div>







<div className="headertop paddingTop">

    <div className="allprogramsTabs">
          <span>Mentoring Stellar 2020</span>
          <ul>
              <li className="active"><a href="#!">Edit</a></li>
              <li><a href="#!">Archive</a></li>
              <li><a href="#!">Export</a></li>
              <li><a href="#!">Import</a></li>
              <li><a href="#!">Delete</a></li>
          </ul>
    </div>
    
    <div className="menuBtnsortby">
      <div className="searchRight">
          <form className="searchform">
            <input type="search" placeholder="Search..." />
            <button type="submit">Search</button>
          </form>
      </div>
    </div>

</div>

<div className="bg">
   
<table style={{width: '100%'}}>
  <tr>
    <th className="ProgramName">Type</th>
    <th className="ProgramName">Short Decription</th>
    <th className="OrganizationsName">Organizations Name</th>
    <th className="registered">Registered</th>
    <th className="tasks">Tasks</th>
    <th className="milestones">Milestones</th>
    <th className="startwidth">Start</th>
    <th className="endwidth">End</th>
  </tr>
  <tr>
    <td className="ProgramName">
      <div className="mariaMentoringStellar">
        <span>MariaMentoring Stellar 2020</span>
        <ul>
         
          <li><a href="#">Edit</a></li>
          <li><a href="#">Archive</a></li>
          <li className="active"><a href="#">Delete</a></li>
        </ul>
      </div>
    </td>
    <td className="OrganizationsName">Organizations Name</td>
    <td className="registered">
      <p>3 mentors</p><p> 20 mentees</p>
    </td>
     <td className="tasks">2/5</td>
     <td className="milestones">0/3</td>
     <td className="startwidth"><div className="startdate">Jan<br/> <b>01</b> <br/> 2020</div></td>
      <td className="endwidth"><div>Feb<br/> <b>18</b> <br/> 2020</div></td>
  </tr>
   
  
  
   
</table>
</div>





      <Grid container direction="column" spacing={2} style={{ display: 'none' }}>
        <Grid container direction="row" alignItems="center" spacing={2} item>
          <Grid item>
            <Typography variant="h6">
              {t('program:allprograms','All Programs')}
            </Typography>
          </Grid>
          <Grid item><Button className="outlined-primary" component={Link} to="/console/programs/new" >Add</Button></Grid>
        </Grid>
        <Grid item>
        <Backdrop className={classes.backdrop} open={isLoading}>
      <CircularProgress color="inherit" />
      </Backdrop>
          {!isLoading && <DataTable handleClick={handleClick} buttonOptions={buttonOptions} filter={filter} columns={columns} data={programs} checkButtonOptions={checkButtonOptions} />}
        </Grid>
      </Grid>
    </div>
  );
}

Programs.propTypes = {
  match: PropTypes.object
};

export default Programs;
