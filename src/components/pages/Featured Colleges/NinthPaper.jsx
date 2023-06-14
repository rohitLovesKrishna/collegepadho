import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import PublicIcon from '@mui/icons-material/Public';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './mainStyle.css'



const Contact = ({data}) => {
   if(data){
  return (
    <Paper elevation={3} sx={{p:"10px"}}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
         <Typography variant='h4'>Contact</Typography>
      </Grid>
      <Grid item xs={12} sm={6} lg={4} >
        <a href={data.website}> <Button  variant='outlined' sx={{color:"#555",width:"100%",borderColor:"#555"}}><PublicIcon/><b>Website</b></Button></a>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
           <a href={data.email}><Button  variant='outlined' sx={{color:"#555",width:"100%",borderColor:"#555"}}><EmailIcon/><b>Email us</b></Button></a>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
          <a href={data.phone}><Button  variant='outlined' sx={{color:"#555",width:"100%",borderColor:"#555"}}><CallIcon/><b>call now</b></Button></a>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
         <a href={data.facebook}><Button variant='outlined' sx={{color:"#555",width:"100%",borderColor:"#555"}}><FacebookIcon/><b>Facebook</b></Button></a>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
          <a href={data.website}><Button  variant='outlined' sx={{color:"#555",width:"100%",borderColor:"#555"}}><TwitterIcon/><b>Twitter</b></Button></a>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
          <a href={data.linkedin}><Button  variant='outlined' sx={{color:"#555",width:"100%",borderColor:"#555"}}><LinkedInIcon/><b>Linkedin</b></Button></a>
      </Grid>
    </Grid>
    </Paper>
  );
   }

}

export default Contact;
