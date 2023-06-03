import { Button, Grid, OutlinedInput, Paper, Typography } from '@mui/material';


import React, { useState } from 'react';
import SendDataBtn from '../../Global/SendDataBtn';
import axios from 'axios';
import BASE_URL from '../../../constant';

const PlacementInner = (props) => {
  const [dataForm,setDataForm] = useState([{placementcourse:""},{placementyear:""},{companyvisited:""},{studentsplaced:""},{minsalary:""},{maxsalary:""},{avgsalary:""}]);
const dataToServer=(e)=>{
  e.preventDefault()
  const collegeId=localStorage.getItem('COLLEGE_ID')
  axios.post(`${BASE_URL}/api/placementinfo`,{
    course:dataForm[0].placementcourse,batch:dataForm[1].placementyear,
    numberOfCompaniesVisited:dataForm[2].companyvisited,
    numberOfStudentsPlaced:dataForm[3].studentsplaced,
    minSalary:dataForm[4].minsalary,maxSalary:dataForm[5].maxsalary,
    averageSalary:dataForm[6].avgsalary,
    cid:JSON.parse(collegeId)
  }).then((res)=>{alert('Data sent successfully');}).catch((err)=>{console.log(err);})
}
  return (
    <>
    <form onSubmit={dataToServer}>

      <Grid item container spacing={2}>
            <Grid item xs={12}>
              <Typography sx={{fontSize:"13px"}}>Add Course</Typography>
                {props.first === false ?<Button  onClick={props.onClick}>Remove</Button>:""} 
            </Grid>
            <Grid item xs={12}>
              <Typography color="#646c9a" sx={{fontSize:"17px",mb:"4px"}}>Course name</Typography>
              <OutlinedInput required onChange={(e)=>{const newList = [...dataForm]; newList[0].placementcourse = e.target.value;setDataForm(newList)}} value={dataForm[0].placementcourse} sx={{height:"40px"}} fullWidth name='Course name' ></OutlinedInput>
            </Grid>
            <Grid item xs={12} color="#646c9a">
            <Typography color="#646c9a" sx={{fontSize:"17px",mb:"4px"}}>Batch / year</Typography>
            <OutlinedInput required sx={{height:"40px"}} fullWidth onChange={(e)=>{const newList=[...dataForm];newList[1].placementyear=e.target.value;setDataForm(newList)}} value={dataForm[1].placementyear}></OutlinedInput>
            </Grid>
            
            <Grid item xs={12}>
            <Typography color="#646c9a" sx={{fontSize:"17px",mb:"4px"}}>Number of companies visited</Typography>
              <OutlinedInput required sx={{height:"40px"}} fullWidth onChange={(e)=>{const newList=[...dataForm];newList[2].companyvisited=e.target.value;setDataForm(newList)}}></OutlinedInput>
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
            <Typography xs={12} color="#646c9a" sx={{fontSize:"17px",mb:"4px"}}>Number of students placed</Typography>
            <OutlinedInput required sx={{height:"40px"}} fullWidth onChange={(e)=>{const newList=[...dataForm];newList[3].studentsplaced=e.target.value;setDataForm(newList)}} value={dataForm[3].studentsplaced}></OutlinedInput>
            </Grid>

            <Grid item xs={12}>
            <Typography item xs={12} color="#646c9a" sx={{fontSize:"17px",mb:"4px"}}>Minimum salary</Typography>
              <OutlinedInput required sx={{height:"40px"}} fullWidth onChange={(e)=>{const newList=[...dataForm];newList[4].minsalary=e.target.value;setDataForm(newList)}} value={dataForm[4].minsalary}></OutlinedInput>
            </Grid>

            <Grid item xs={12}>
            <Typography xs={12} color="#646c9a" sx={{fontSize:"17px",mb:"4px"}}>Maximum salary</Typography>
              <OutlinedInput required sx={{height:"40px"}} fullWidth  onChange={(e)=>{const newList=[...dataForm];newList[5].maxsalary=e.target.value;setDataForm(newList)}} value={dataForm[5].maxsalary}></OutlinedInput>
            </Grid>
            <Grid item xs={12}>
            <Typography xs={12} color="#646c9a" sx={{fontSize:"17px",mb:"4px"}}>Average salary</Typography>
              <OutlinedInput  required sx={{height:"40px"}} fullWidth  onChange={(e)=>{const newList=[...dataForm];newList[6].avgsalary=e.target.value;setDataForm(newList)}} value={dataForm[6].avgsalary}></OutlinedInput>
            </Grid>
           
            <Grid item xs={12} md={12} lg={12}>
            <Typography xs={12} color="#646c9a" sx={{fontSize:"17px",mb:"4px"}}>Placement report pdf <span style={{fontSize:"13px"}}>If available</span></Typography>
            <input type='file'/>
            </Grid>

          </Grid> 
  
          <Grid item container>
    <SendDataBtn type="Send" disabled={!true} >Send Data</SendDataBtn>
          </Grid>
   </form>
    </>
  );
}

export default PlacementInner;