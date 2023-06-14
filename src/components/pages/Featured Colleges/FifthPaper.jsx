import React from "react";
import { Box, Grid, Typography, Paper, Button } from "@mui/material";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
const Placement = ({data}) => {
  if(data.length > 0){
  return (
    <>
      <Paper elevation={3} sx={{ p: "10px"}}>
        <Box sx={{ m: "0px 0px 12px 0px" }}>
          <Typography fontSize="15px">
            <b>Placement info</b>
          </Typography>
        </Box>
        {data.map((item,i)=>{
          return (
            <Grid container key={item+i}>
            <Typography variant="h6" mb="12px">
          Course name: {item.course} (Batch {item.batch})
        </Typography>
        <Grid item container>
          <Grid item>
            <Button disableRipple startIcon={<CheckBoxIcon/>}>Total Companies Visited:<b style={{color:'green',fontWeight:900}}>{item.numberOfCompaniesVisited}</b></Button>
          </Grid>
          <Grid item>
            <Button disableRipple startIcon={<CheckBoxIcon/>}>Maximum Salary Offered:<b style={{color:'green',fontWeight:900}}>{item.maxSalary}</b></Button>
          </Grid>
          <Grid item>
            <Button disableRipple startIcon={<CheckBoxIcon/>}>Total Students Placed:<b style={{color:'green',fontWeight:900}}>{item.numberOfStudentsPlaced}</b></Button>
          </Grid>
           <Grid item>
            <Button disableRipple startIcon={<CheckBoxIcon/>}>Minimum Salary Offered:<b style={{color:'green',fontWeight:900}}>{item.minSalary}</b></Button>
          </Grid>
            <Grid item>
            <Button disableRipple startIcon={<CheckBoxIcon/>}>Average Salary:<b style={{color:'green',fontWeight:900}}>{item.averageSalary
}</b></Button>
          </Grid>
        </Grid>
            </Grid>
          )
        })}

      </Paper>
    </>
  );
  }

};

export default Placement;
