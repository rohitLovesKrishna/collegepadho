import { Box, Grid, Typography, Button, FormControl, AppBar, Toolbar } from '@mui/material'
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import college from '../assets/college.jpg';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import ApartmentIcon from '@mui/icons-material/Apartment';
import EngineeringIcon from '@mui/icons-material/Engineering';
import MedicationIcon from '@mui/icons-material/Medication';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import GavelIcon from '@mui/icons-material/Gavel';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HMobiledataIcon from '@mui/icons-material/HMobiledata';
import TvIcon from '@mui/icons-material/Tv';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import WifiIcon from '@mui/icons-material/Wifi';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import RoofingIcon from '@mui/icons-material/Roofing';
import CottageIcon from '@mui/icons-material/Cottage';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import RouterIcon from '@mui/icons-material/Router';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SportsRugbyIcon from '@mui/icons-material/SportsRugby';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import CoffeeIcon from '@mui/icons-material/Coffee';
import Radio from '@mui/material/Radio';
import React, { useState } from 'react'
import tag from '../assets/tag.jpg'
import './FilterColleges.css';
import Header from '../Global/Header';
import Footer from '../Global/Footer';
import Infotag from '../Home/Infotag';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BASE_URL from '../constant';
import { useEffect } from 'react';
import ModalPage from '../Global/ModalPage';

const FilterColleges = () => {
     const [open , setOpen] = useState(false);
    const handleOpen = () =>setOpen(true);
useEffect(()=>{
  setTimeout(()=>{
handleOpen()
  },3000)
},[])
const navigate= useNavigate()
const [filter , setFilter] = useState(false)
const [cardApi,setCardApi] = useState([])
const [courseApi,setCourseApi] = useState([])
const fetchCollege=()=>{axios.get(`${BASE_URL}/api/college`).then((res)=>{setCardApi(res.data.responses)}).catch((err)=>{console.log(err);})}
useEffect(()=>fetchCollege(),[])
const fetchCourse=()=>{axios.get(`${BASE_URL}/api/course`).then((res)=>{setCourseApi(res.data.response)}).catch((err)=>{console.log(err);})}
useEffect(()=>fetchCourse(),[])
useEffect(()=>{window.scrollTo(0,0);},[])
  return (
      <>
         <ModalPage open={open} setOpen={setOpen}/>
        <Header isBgColor={true} handleOpen={handleOpen}/>
    <Grid container sx={{backgroundColor:'#f8f8f8',mb:"20px"}}>

        <Grid item xs={12} sx={{mt:"100px",display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
            <Box sx={{width:'53.4%', mt:'5px'}}>
              <img src={college} alt="ok"  style={{cursor:'pointer', width:'100%', height:'100%'}}/>
            </Box>
        </Grid>
        <Grid item  xs={12} sm={12} md={4} lg={4} >
           <Box   sx={{ width:{md:'80%', lg:'67%', sm:'80%', xs:'80%', backgroundColor:'white', margin:' 60px auto', padding:'20px', borderRadius:'7px' , boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)'}}}>
            <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', height:'13px', }}>
                <Typography fontWeight={600} sx={{color:'#424242y',cursor:'pointer'}}>Filter</Typography>
                <TuneRoundedIcon sx={{color:'#424242',cursor:'pointer'}} onClick={()=>setFilter(prev=>{return !prev})}/>
            </Box>

            {/* dropFilter  */}
            <Box sx={{display:{lg:!filter?'block':'none',md:!filter?'block':'none',sm:!filter?'none':'block',xs:!filter?'none':'block'}}}>
            <Box sx={{mt:'8px' , borderTop:'1px solid gray'}}>
                <Typography mt='5px'>Category</Typography>
            </Box>
            <Box >
                 <FormGroup>   
                   <FormControlLabel control={<Checkbox/>} label={ <Button size='small' sx={{color:'#212121'}} startIcon={<ApartmentIcon />}>Management</Button>}/>
                   <FormControlLabel control={<Checkbox  />} label={ <Button size='small' sx={{color:'#212121'}} startIcon={<EngineeringIcon />}>Engineering</Button>}/>
                  <FormControlLabel control={<Checkbox  />} label={ <Button size='small' sx={{color:'#212121'}} startIcon={<MedicationIcon />}>Pharmacy</Button>}/>
                  <FormControlLabel control={<Checkbox  />} label={ <Button size='small' sx={{color:'#212121'}} startIcon={<PersonIcon />}>Doctor</Button>}/>
                   <FormControlLabel control={<Checkbox  />} label={ <Button size='small' sx={{color:'#212121'}} startIcon={<SchoolIcon />}>Education</Button>}/>
                    <FormControlLabel control={<Checkbox  />} label={ <Button size='small' sx={{color:'#212121'}} startIcon={<MarkEmailUnreadIcon />}>Journalism</Button>}/>
                     <FormControlLabel control={<Checkbox  />} label={ <Button size='small' sx={{color:'#212121'}} startIcon={<GavelIcon />}>Law</Button>}/>
                     <FormControlLabel control={<Checkbox  />} label={ <Button size='small'  sx={{color:'#212121'}} startIcon={<MedicationIcon />}>Medical</Button>}/>
                    <FormControlLabel control={<Checkbox  />} label={ <Button size='small' sx={{color:'#212121'}} startIcon={<ApartmentIcon />}>Architecture</Button>}/>
                     <FormControlLabel control={<Checkbox  />} label={ <Button size='small' sx={{color:'#212121'}} startIcon={<SettingsAccessibilityIcon />}>Arts and humanities</Button>}/>
                    <FormControlLabel control={<Checkbox  />} label={ <Button size='small' sx={{color:'#212121'}} startIcon={<TvIcon />}>Information technology</Button>}/>
                     <FormControlLabel control={<Checkbox  />} label={ <Button size='small' sx={{color:'#212121'}} startIcon={<AccountBalanceIcon />}>commerce and banking</Button>}/>
                     <FormControlLabel control={<Checkbox  />} label={ <Button size='small' sx={{color:'#212121'}} startIcon={<HMobiledataIcon />}>hotel management</Button>}/>
                    <FormControlLabel control={<Checkbox  />} label={ <Button size='small' sx={{color:'#212121'}} startIcon={<DriveFileRenameOutlineIcon />}>design colleges</Button>}/>
                 </FormGroup>
            </Box>

            <hr></hr>

            {/* second filter start */}

            <Box sx={{mt:'5px'}}>
                <Typography>Amenities</Typography>
            </Box>

      <Box >
         <FormGroup>   
            <FormControlLabel control={<Checkbox  />} label={ <Button size='small' sx={{color:'#212121'}} startIcon={<WifiIcon />}>wifi-campus</Button>}/>
            <FormControlLabel control={<Checkbox  />} label={ <Button size='small' sx={{color:'#212121'}} startIcon={<PowerSettingsNewIcon />}>24X7 power backup</Button>}/>
            <FormControlLabel control={<Checkbox  />} label={ <Button size='small' sx={{color:'#212121'}} startIcon={<RoofingIcon />}>boys hostal</Button>}/>
           <FormControlLabel control={<Checkbox  />} label={ <Button size='small' sx={{color:'#212121'}} startIcon={<CottageIcon />}>girls hostal</Button>}/>
            <FormControlLabel control={<Checkbox  />} label={ <Button size='small' sx={{color:'#212121'}} startIcon={<FoodBankIcon />}>college canteen</Button>}/>
            <FormControlLabel control={<Checkbox  />} label={ <Button size='small' sx={{color:'#212121'}} startIcon={<RouterIcon />}>internet center</Button>}/>
            <FormControlLabel control={<Checkbox  />} label={ <Button size='small' sx={{color:'#212121'}} startIcon={<LibraryBooksIcon />}>library</Button>}/>
           <FormControlLabel control={<Checkbox  />} label={ <Button size='small' sx={{color:'#212121'}} startIcon={<SportsRugbyIcon />}>play ground</Button>}/>
          <FormControlLabel control={<Checkbox  />} label={ <Button  size='small'sx={{color:'#212121'}} startIcon={<DirectionsBusFilledIcon />}>transport</Button>}/>
          <FormControlLabel control={<Checkbox  />} label={ <Button size='small' sx={{color:'#212121' }} startIcon={<CoffeeIcon />}>cafeteria</Button>}/>
                 </FormGroup>
                 </Box>

            <hr></hr>

{/* third filter start  */}

        <Box>
          <Typography>Cities</Typography>
        </Box>
         
        <Box>
          <FormControl>
           <FormControlLabel  control={<Radio />} label="All" />
           <FormControlLabel  control={<Radio />} label="Greater Noida" />
           <FormControlLabel  control={<Radio />} label="Ghaziabad" />
           <FormControlLabel  control={<Radio />} label="Bangalore" />
           <FormControlLabel  control={<Radio />} label="Bareilly" />
           <FormControlLabel  control={<Radio />} label="Dehradun" />
           <FormControlLabel  control={<Radio />} label="Haridwar" />
           <FormControlLabel  control={<Radio />} label="Himachal" />
           <FormControlLabel  control={<Radio />} label="Jaipur" />
           <FormControlLabel  control={<Radio />} label="Delhi" />
           <FormControlLabel  control={<Radio />} label="Pune" />
           <FormControlLabel  control={<Radio />} label="Noida" />
           <FormControlLabel  control={<Radio />} label="Haryana" />
           <FormControlLabel  control={<Radio />} label="Faridabad" />
           <FormControlLabel  control={<Radio />} label="Gurgaon" />
           <FormControlLabel  control={<Radio />} label="Murshidabad, West Bengal" />
           <FormControlLabel  control={<Radio />} label="Mumbai" />
           <FormControlLabel  control={<Radio />} label="Kolkata" />
           <FormControlLabel  control={<Radio />} label="Varanasi" />
           <FormControlLabel  control={<Radio />} label="Kanpur" />
             <FormControlLabel  control={<Radio />} label="Rajkot" />
          <FormControlLabel  control={<Radio />} label="Lucknow" />
               <FormControlLabel  control={<Radio />} label="Ahmedabad" />
               
               
          </FormControl>
        </Box>
        <Box>
          <Typography>Show less</Typography>
        </Box>
        
        <hr></hr>
        <Box>
          <Typography>Opening status</Typography>
        </Box>
        <FormGroup>
           <FormControlLabel control={<Checkbox  />} label="Open now" />
        </FormGroup>

          <hr></hr>
        <Box>
          <Typography>Video</Typography>
        </Box>
        <FormGroup>
           <FormControlLabel control={<Checkbox  />} label="With video" />
        </FormGroup>
        </Box>
           
           </Box>
           
        </Grid>
        <Grid item container   xs={12} sm={12} md={8} lg={8} sx={{justifyContent:'center', alignItems:'flex-start',height:'fit-content' }}>

          {
            cardApi.map((ele)=>{
              return(
                 <Grid key={ele._id}  onClick={()=>navigate(`/college/${ele._id}`)} item id='rightBox' xs={12} sm={6}  md={4} lg={4} sx={{height:"420px",backgroundColor:'#feffed', boxShadow: '0px 0px 5px 0px rgba(181,132,16,1)', borderRadius:'7px', margin:'48px 20px 0px 20px' }}>
                  <Box  id='clgimg'>
            <img  src={`${BASE_URL}`+ele.image} alt="ok" width='100%' height='200px'style={{ boxSizing:'border-box', borderRadius:'7px 7px 0px 0px'}}/>

                  </Box>
            <Box sx={{ margin:'5px'}}>
            <Typography variant='h5' sx={{color:'#1565c0', m:'0px 0px 2px 10px'}}>{ele.collegeName}</Typography>
            <Typography fontWeight={600} sx={{m:'0px 0px 2px 10px'}}>{ele.location},{ele.country}</Typography>
            <Typography sx={{fontSize:'12px',m:'0px 0px 2px 10px'}}>{ele.shortDescription}</Typography>
             
             <Grid item container lg={12} md={12} sm={12} xs={12}>
             {courseApi.filter((item)=>{return item.cid === ele._id}).map((course,index)=>{return (
             <Grid item key={course+index} sx={{padding:'1px 5px 1px 5px'}} lg={6} md={6} sm={12} xs={12}>
              <Typography sx={{color:'#388e3c', border:'1px solid #388e3c', fontSize:'13px', padding:'1px 4px 1px 4px', }}>{course.courseName}</Typography>
            </Grid>)})}
             </Grid>

            </Box>
              <Box sx={{width:'100%', backgroundColor:'#fffad5', height:'50px', mt:'10px', display:'flex', justifyContent:'space-around', alignItems:'center'}}>
              <Button variant='contained' size='small'>Apply Now</Button>
              <Box sx={{height:'100%', display:'flex' }} >
                <Box sx={{mr:'8px'}}>
                  <Typography variant='body' fontWeight={600}>Unreviewed</Typography>
                  <Typography variant='subtitle1'>0 Reviews</Typography>
                </Box>
                <Box sx={{display:'flex', justifyContent:'cnter', alignItems:'center', padding:'10px' , backgroundColor:'#43a047', borderRadius:'5px 5px 5px 0px', margin:'5px'}}>
                  <Typography variant='body1' fontWeight={600} sx={{color:'white'}} >0.0</Typography>
                </Box>
              </Box>
              
             </Box>
           
          </Grid>
              )
            })
          }

        </Grid>

    </Grid>
      <Box sx={{mt:"70px",mb:"90px"}}>
  <Infotag pic={tag}/>
  </Box>
    <Footer/>
    </>
  )
}

export default FilterColleges