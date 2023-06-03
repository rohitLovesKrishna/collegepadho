import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react';
import bca from '../../assets/Bca.jpg';
import faq from '../../assets/faq.svg';
import Infotag from '../../Home/Infotag';
import Footer from '../../Global/Footer';
import mba from  '../../assets/mba.jpg';
import Header from '../../Global/Header';

const Faq = () => {
  return (
    <>
    <Grid container>
    <Header isBgColor={true}/>
        <Grid item xs={12} sx={{backgroundColor:'#f2f4f8',display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'10px', mt:{lg:'55px', md:'55px', sm:'55px', xs:'45 px'}}}>
            <Box sx={{ width:{lg:'55%', md:'70%', sm:'90%', xs:'90%'}}}>
            <img src={bca} width='100%' height='100%'/>
            </Box>
            </Grid>
            <Grid item xs={12} sx={{backgroundColor:'#f2f4f8',display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column',}}>
                <Box sx={{width:'70px'}}>

                      <img  src={faq} width='100%' height='100%'/>
                </Box>
            <Typography variant='h5' fontWeight={600}>FAQ</Typography>
         </Grid>
         <Grid item xs={12} sx={{ display:'flex', alignItems:'flex-start', padding:'20px 0px 20px 60px'}} >
            <Typography sx={{color:'#555' , ml:{lg:'90px ', md:'60px' , sm:'30px', xs:'-30px', fontSize:'20px'}}}>Faq</Typography>
            </Grid > 

            <Grid item xs={12} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                   <Infotag  pic={mba} sx={{width:{lg:'85%'}}}/> 
            </Grid>
            <Divider></Divider>
                  
            <Footer/>
    </Grid>
    </>

  )
}

export default Faq