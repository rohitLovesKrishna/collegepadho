import { Box, Button, Divider, Grid, OutlinedInput, Typography } from '@mui/material'
import React from 'react'
import BluePrint from '../Global/BluePrint'

const SmtpSetting = () => {
  return (
   <>
   <BluePrint page="Smtp settings">
   <Grid container sx={{backgroundColor:'#f2f4f8'}}>
    
    <Grid item container xs={12} sm={12} md={12} lg={9} >
         <Grid item xs={12} sx={{backgroundColor:'rgb(40, 42, 60)', padding:'10px'}}>
                <Typography sx={{color:'white'}}>Smtp settings</Typography>
            </Grid>

            <Grid item xs={12} sx={{backgroundColor:'white',padding:'10px', display:{lg:'flex', md:'flex', sm:'', xs:'', justifyContent:'space-evenly', alignItems:'center'}}}>
              <Typography  sx={{color:'#646c9a', fontSize:'16px'}}>Smtp protocol</Typography>
            <OutlinedInput placeholder='smtp protocol' sx={{mr:'10px', width:{lg:'70%', md:'70%', sm:'96%', xs:'96%'}}} size='small'/>
            </Grid>
              <Divider></Divider>
            <Grid item xs={12} sx={{backgroundColor:'white',padding:'10px',  display:{lg:'flex', md:'flex', sm:'', xs:'',  justifyContent:'space-evenly', alignItems:'center'}}}>
                <Typography  sx={{color:'#646c9a', fontSize:'16px'}}>Smtp host</Typography>
            <OutlinedInput placeholder='smtp host' sx={{width:{lg:'70%', md:'70%', sm:'96%', xs:'96%', }}} size='small'/>
            </Grid>

               <Divider></Divider>

            <Grid item xs={12} sx={{backgroundColor:'white',padding:'10px', display:{lg:'flex', md:'flex', sm:'', xs:'', justifyContent:'space-evenly', alignItems:'center'}}}>
                <Typography  sx={{color:'#646c9a', fontSize:'16px'}}>Smtp port</Typography>
            <OutlinedInput placeholder='smtp port' sx={{width:{lg:'70%', md:'70%', sm:'96%', xs:'96%'}}} size='small'/>
            </Grid>

               <Divider></Divider>

            <Grid item xs={12} sx={{backgroundColor:'white',padding:'10px', display:{lg:'flex', md:'flex', sm:'', xs:'',  justifyContent:'space-evenly', alignItems:'center'}}}>
                 <Typography  sx={{color:'#646c9a', fontSize:'16px'}}>Smtp user</Typography>
            <OutlinedInput placeholder='smtp user' sx={{width:{lg:'70%', md:'70%', sm:'96%', xs:'96%'}}} size='small'/>
            </Grid>

               <Divider></Divider>

            <Grid item xs={12} sx={{backgroundColor:'white',padding:'10px',  display:{lg:'flex', md:'flex', sm:'', xs:'',  justifyContent:'space-evenly', alignItems:'center'}}}>
                        <Typography  sx={{color:'#646c9a', fontSize:'16px'}}>Smtp password</Typography>
            <OutlinedInput placeholder='smtp password' sx={{mr:'18px',width:{lg:'70%', md:'70%', sm:'96%', xs:'96%'}}} size='small'/>
            </Grid>

               <Divider></Divider>

            <Grid item xs={12} sx={{backgroundColor:'white',padding:'10px', display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
                <Button variant='contained' color='primary' sx={{borderRadius:'15px', padding:'5px 20px 5px 20px '}}>Save</Button>
            </Grid>
    </Grid>

   </Grid>
   </BluePrint>
   </>
  )
}

export default SmtpSetting