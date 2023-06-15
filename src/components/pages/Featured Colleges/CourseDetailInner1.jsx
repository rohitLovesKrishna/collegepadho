import React from 'react';
import { Grid, Typography, Button, } from '@mui/material';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import FolderIcon from '@mui/icons-material/Folder';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const CourseDetailInner1 = ({ data, handleOpen }) => {

  if (data) {
    return (
      <>
        <Typography fontWeight="900" fontSize="20px" color="#033da9">
          {data.courseName}
        </Typography>
        <Grid container spacing={.5}>
          {data.duration.trim().length > 0 && data.duration != "N/A" ? <Grid item xs={12} sm={3}  >
            <Typography color="gray">COURSE DURATION</Typography>
            <Typography><b>{data.duration}</b></Typography>
          </Grid> : ''}

          <Grid item xs={12} sm={3}  >
            <Typography color="gray">COURSE TYPE</Typography>
            <Typography><b>{data.courseLevel}</b></Typography>
          </Grid>
          <Grid item xs={12} sm={3}  >
            <Typography color="gray">STUDY MODE</Typography>
            <Typography><b>{data.courseMode}</b></Typography>
          </Grid>
          {data.coursefee.trim().length > 0 && data.coursefee != "N/A" ? <Grid item xs={12} sm={3} >
            <Typography color="gray">FEES</Typography>
            <Typography><b>{data.coursefee}</b></Typography>
          </Grid> : ""}
          {data.totalTutionFee.trim().length > 0 && data.totalTutionFee != "N/A" ? <Grid item xs={12} sm={3} >
            <Typography color="gray">TUTION FEES</Typography>
            <Typography><b>{data.totalTutionFee}</b></Typography>
          </Grid> : ""}

          {data.specialisation.trim().length > 0 && data.specialisation != "N/A" ? <Grid item xs={12}>
            <Typography color="gray">SPECIALIZATIONS</Typography>
          </Grid> : ""}

          {data.specialisation.trim().length > 0 && data.specialisation != "N/A" ? <Grid item container >
            {data.specialisation.split(',').map((item) => {
              console.log(item)
              return (<Grid key={item} item lg={6} md={6} sm={6} xs={12}>
                <Button disableRipple sx={{ textDecoration: "unset" }} startIcon={<CheckBoxIcon />}>{item}</Button>
              </Grid>)
            })}
          </Grid> : ""}
          <Grid item xs={12} md={12} lg={12}>
            <Button onClick={handleOpen} variant='contained' sx={{ bgcolor: "#00008b", color: "white" }} fullWidth><TurnedInNotIcon sx={{ fontSize: "17px", mb: "2px", mr: "2px", color: "white" }} /> Get Fee Structure</Button>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button onClick={handleOpen} variant='contained' sx={{ bgcolor: "#004dda", color: "white" }} fullWidth ><FolderIcon sx={{ fontSize: "17px", mb: "2px", mr: "2px", color: "white" }} />Check Eligibility</Button>
          </Grid>
        </Grid>
      </>
    );
  }

}

export default CourseDetailInner1;
