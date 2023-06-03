import { Box, Grid, Typography } from '@mui/material'
import React from 'react';
import bca from '../../assets/Bca.jpg';
import earth from '../../assets/earth.svg';
import Infotag from '../../Home/Infotag';
import mba from '../../assets/mba.jpg'
import Footer from '../../Global/Footer';
import Header from '../../Global/Header';

const About = () => {
  return (
    <>
    <Grid container >
      <Header isBgColor={true} />
        <Grid item xs={12} sx={{backgroundColor:'#f2f4f8',display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'10px', mt:{lg:'50px', md:'49px', sm:'53px' , xs:'38px'}}}>
            <Box sx={{width:{lg:'55%', md:'70%', sm:'90%', xs:'90%', padding:'10px'}}}>
            <img src={bca} width='100%' height='100%'/>
            </Box>
            </Grid>
            <Grid item xs={12} sx={{backgroundColor:'#f2f4f8',display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column',}}>
                <Box sx={{width:'70px'}}>

                      <img  src={earth} width='100%' height='100%'/>
                </Box>
            <Typography variant='h5' fontWeight={600}>About</Typography>

            </Grid>
            <Grid item container xs={12} sx={{ justifyContent:'center', alignItems:'center'}}>
                <Grid item lg={8.5} md={10}  sm={10} xs={10} sx={{ mt:'70px'}}>
                  <Typography sx={{fontSize:'14px'}}>CollegePadho is an easy to reach online platform for aspiring students, parents, and educational professionals to seek end-to-end information on pioneer colleges, courses, processes, and fee structure. We provide real-time information on pioneer institutes, establishments, courses offered, placements, and opportunities for students. At the time of admission or finding the apt university for availing an enriched level of knowledge and skills, simply reach us to grab detailed information with ease.</Typography>
                </Grid>
                  <Grid item lg={8.5} md={10} sm={10} xs={10}sx={{marginTop:'20px'}}>
              <Typography variant='h5' fontWeight={600}>Our Mission</Typography>
            </Grid>

             <Grid item lg={8.5} md={10} sm={10} xs={10} sx={{mt:'20px'}}>
                  <Typography sx={{fontSize:'14px'}}>Selecting a particular college is an imperative decision to make by students and parents. We provide complete college-related details while accessing our user-friendly dashboard because we aspire to maintain a level of transparency between students and their institutional choices ahead..</Typography>
                </Grid>

                <Grid item lg={8.5} md={10} sm={10} xs={10} sx={{marginTop:'20px'}}>
              <Typography variant='h5' fontWeight={600}>Our Vision</Typography>
            </Grid>
                
                  <Grid item lg={8.5} md={10} sm={10} xs={10}  sx={{mt:'20px'}}>
                  <Typography sx={{fontSize:'14px'}}>CollegePadho.com aims to assist students in making the right decision to let grow the successful career ahead. We provide empowering and updated information to all and wisely shape up the fortune as per the personal set of requirements. Thus, find what you strive for with an easily accessible online platform.</Typography>
                </Grid>

                 <Grid item lg={8.5} md={10} sm={10} xs={10}  sx={{marginTop:'20px'}}>
              <Typography variant='h5' fontWeight={600}> CollegePadho for Students</Typography>
            </Grid>
               
                <Grid item lg={8.5} md={10} sm={10} xs={10} sx={{ mt:'20px'}}>
                  <Typography sx={{fontSize:'14px'}}>Students across India can access CollegePadho.com to seek college, courses, admission process, eligibility criteria, fee structure, placement, and university infrastructure-related information without going anywhere. Here, we provide the single best source of the repository containing information of more than 20,000 colleges and 6,000 courses offered with real-time updates and notices. Students and their counterparts can seek a preferred choice of course information related to different fields like Medical, Engineering, Business Management, Arts, Commerce, and more. Moreover, classify the extensive list of colleges based on distinctive parameters including ratings, feedback, ranking, fees, cutoff, and different competitive exams.</Typography>
                </Grid>

                   <Grid item lg={8.5} md={10} sm={10} xs={10}  sx={{marginTop:'20px'}}>
              <Typography variant='h5' fontWeight={600}> CollegePadho for Institutions</Typography>
            </Grid>

            <Grid item lg={8.5} md={10} sm={10} xs={10}  sx={{ mt:'20px'}}>
                  <Typography sx={{fontSize:'14px'}}>CollegePadho.com is a technically enriched platform that showcases the well-defined segregation of universities and colleges. We follow the segregation of institutions based on real-time data collection and filter out the top-rated colleges offering particular courses in a preferred timeline. Thus, it assists students and parents to think carefully about a quality institution in advance or at the time of admission</Typography>
                </Grid>

                 <Grid item lg={8.5} md={10} sm={10} xs={10} sx={{marginTop:'20px'}}>
              <Typography variant='h5' fontWeight={600}>  CollegePadho for Parents</Typography>
            </Grid>

            <Grid item lg={8.5} md={10} sm={10} xs={10} sx={{ mt:'20px'}}>
                  <Typography sx={{fontSize:'14px'}}>Here, we meet the preferred requirements of parents as well by showing the extensive list of institutions and courses that are perfect for their wards. The data filtration technology on our platform helps find the most appropriate college, based on ranking, fees, and cutoff. It further allows parents to make the right decision for their kids. Additionally, our skilled team of data miners showcases the information in an interactive manner that allows you to make a decision in an informed way possible.</Typography>
                </Grid>

               <Grid item xs={12} padding='10px' sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                   <Infotag  pic={mba} width='18rem'/> 
            </Grid>

             <Footer/>





            </Grid>
          
         
       

    </Grid>
    </>
  )
}

export default About