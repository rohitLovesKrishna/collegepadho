import { Box, Grid, Typography, Button,RadioGroup} from '@mui/material'
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import college from '../assets/college.jpg';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import ApartmentIcon from '@mui/icons-material/Apartment';
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
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import BASE_URL from '../constant';
import { useEffect } from 'react';
import ModalPage from '../Global/ModalPage';
import { Computer, MedicalServices, SportsGymnastics } from '@mui/icons-material';
const icons =[<WifiIcon/>,<PowerSettingsNewIcon/>,<RoofingIcon/>,<CottageIcon/>,<FoodBankIcon/>,<RouterIcon/>,<LibraryBooksIcon/>,<SportsRugbyIcon/>,<DirectionsBusFilledIcon/>,<CoffeeIcon/>,<MedicalServices/>,<SportsGymnastics/>,<Computer/>]
const cat =[<ApartmentIcon />,<MedicationIcon/>,<PersonIcon/>,<SchoolIcon/>,<MarkEmailUnreadIcon/>,<GavelIcon/>,<MedicationIcon/>,<ApartmentIcon/>,<SettingsAccessibilityIcon/>,<TvIcon/>,<AccountBalanceIcon/>,<HMobiledataIcon/>,<DriveFileRenameOutlineIcon/>]

const FilterStream = () => {
const param = useParams();
  const [rad,setRad] =useState("All")
   const handleOpen = () =>setOpen(true);
    const [catFil,setCatFil] =useState([])
      const [open , setOpen] = useState(false);
  const [amenitiesData,setAmenitiesData] = useState([]);
  const navigate= useNavigate()
    const [citiesData,setCities] = useState([]);
    const [streamsData,setStreams] = useState([]);
  const [cardApi,setCardApi] = useState([])
const [courseApi,setCourseApi] = useState([])
  const [filter , setFilter] = useState(false)
  const fetchCities = ()=>{axios.get(`${BASE_URL}/api/location`).then((res)=>{setCities(res.data.response)}).catch((err)=>{console.log(err);})}
useEffect(()=>{fetchCities()},[])
const fetchStream = ()=>{axios.get(`${BASE_URL}/api/stream`).then((res)=>{setStreams(res.data.response)}).catch((err)=>{console.log(err);})}
useEffect(()=>{fetchStream()},[])
const fetchCollege=()=>{axios.get(`${BASE_URL}/api/college`).then((res)=>{setCardApi(res.data.responses.filter((item)=>{ return item.stream.indexOf(param.stream) !== -1}))}).catch((err)=>{console.log(err);})}
useEffect(()=>fetchCollege(),[])
const fetchCourse=()=>{axios.get(`${BASE_URL}/api/course`).then((res)=>{setCourseApi(res.data.response)}).catch((err)=>{console.log(err);})}
useEffect(()=>fetchCourse(),[])
const fetchAmenities = ()=>{axios.get(`${BASE_URL}/api/amenity`).then((res)=>{setAmenitiesData(res.data.response)}).catch((err)=>{console.log(err);})}
useEffect(()=>{fetchAmenities()},[])
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
                        {streamsData.map((item,index)=>{
                    return  <FormControlLabel key={item._id} control={<Checkbox/>} label={ <Button size='small' sx={{color:'#212121',textTransform:"unset"}} startIcon={cat[index]} >{item.parentStream}</Button>}/>
                  })}
                 </FormGroup>
            </Box>

            <hr></hr>

            {/* second filter start */}

            <Box sx={{mt:'5px'}}>
                <Typography>Amenities</Typography>
            </Box>

      <Box >
         <FormGroup>   
      {amenitiesData.map((item,index)=>{
            return <FormControlLabel key={item._id} control={<Checkbox  />} label={ <Button size='small' sx={{color:'#212121',textTransform:"unset"}} startIcon={icons[index]}>{item.amenity}</Button>}/>
          })}
                 </FormGroup>
                 </Box>

            <hr></hr>

{/* third filter start  */}

        <Box>
          <Typography>Cities</Typography>
        </Box>
         
        <Box>
         <RadioGroup value={rad} onChange={(e)=>setRad(e.target.value)}>
            <FormControlLabel  control={<Radio />} value={"All"} label="All" />      
            {citiesData.map((item)=>{
              return  <FormControlLabel key={item._id} value={item.locationName}  control={<Radio />} label={item.locationName} />      
            })}
       
          </RadioGroup>
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
{cardApi.length > 0 ? cardApi.map((ele)=>{
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
              </Box></Grid>)
 })
:<Typography sx={{marginTop:"200px"}}>Sorry no data found!!</Typography>}
        </Grid>

    </Grid>
      <Box sx={{mt:"70px",mb:"90px"}}>
  <Infotag pic={tag}/>
  </Box>
    <Footer/>
    </>
  )
}

export default FilterStream