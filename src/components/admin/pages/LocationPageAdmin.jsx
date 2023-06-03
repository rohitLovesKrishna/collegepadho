import CssBaseline from '@mui/material/CssBaseline';
import SidebarAdmin from '../Global/SisebarAdmin'
import NavBarTop from '../Global/NavBarTop';
import HeaderAdmin from '../Global/HeaderAdmin';
import {Box,Grid,Button, Paper, Typography, TextField,} from '@mui/material'
import {Add, ArrowCircleRightOutlined} from '@mui/icons-material';
import { useState,useEffect } from 'react';
import TableLocation from '../Global/TableLocation'
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../../constant';
import axios from 'axios';

const drawerWidth = '280px'
// const amenitiesData = [
//   {
//     id: 1,
//     title: "Greater Noida",
// country:"India"
//   },
//   {
//     id: 2,
//     title: "Ghaziabad",
// country:"India"
//   },
//   {
//     id: 3,
//     title: "Bangalore",
// country:"India"
//   },
//   {
//     id: 4,
//     title: "Bareilly",
// country:"India"
//   },
//   {
//     id: 5,
//     title: "Dehradun",
// country:"India"
//   },
//   {
//     id: 6,
//     title: "Haridwar",
// country:"India"
//   },
//   {
//     id: 7,
//     title: "Himachal",
// country:"India"
//   },
//   {
//     id: 8,
//     title: "Jaipur",
// country:"India"
//   },
//   {
//     id: 9,
//     title: "Delhi",
// country:"India"
//   },
//   {
//     id: 10,
//     title: "Pune",
// country:"India"
//   },
//   {
//     id: 11,
//     title: "Noida",
// country:"India"
//   },
//   {
//     id: 12,
//     title: "Haryana",
// country:"India"
//   },
//   {
//     id: 13,
//     title: "Faridabad",
// country:"India"
//   },
//     {
//     id: 14,
//     title: "Gurgaon",
// country:"India"
//   },
//    {
//     id: 15,
//     title: "Murshidabad, West Bengal",
// country:"India"
//   },
//    {
//     id: 16,
//     title: "Mumbai",
// country:"India"
//   },
//    {
//     id: 17,
//     title: "Varanasi",
// country:"India"
//   },
//    {
//     id: 18,
//     title: "Kanpur",
// country:"India"
//   },
//    {
//     id: 19,
//     title: "Rajkot",
// country:"India"
//   },
//    {
//     id: 20,
//     title: "Lucknow",
// country:"India"
//   },
//    {
//     id: 21,
//     title: "Ahmedabad",
// country:"India"
//   },
// ];
const LocationPageAdmin = () => {
  const navigate  = useNavigate()
  const [locationData,setLocationData] = useState([])
  const fetchCountries = ()=>{axios.get(`${BASE_URL}/api/location`).then((res)=>{setLocationData(res.data.response)}).catch((err)=>{console.log(err);})}
useEffect(()=>fetchCountries(),[])

    const [rows,setRows] =useState(10);
      const changeRowsHandler = (e)=>{setRows(e.target.value)}
return (
    <>

        <CssBaseline /> 
        {/* when screen size is small NavBar entry from top  */}
           <Box sx={{alignItems:"center",height:"80px",display:{xs:"flex",md:"none",lg:"none",sm:"flex"},justifyContent:"right",pr:"20px",bgcolor:" #1e1e2d",color:"white"}}>
             <NavBarTop/>
           </Box>

            {/* when screen size is lg and md */}
           <SidebarAdmin />
            <Box sx={{ml:{lg:drawerWidth,md:drawerWidth}}}>
               <Box component="main" sx={{ bgcolor: "#f2f3f8", p: 3,width:"100%" }}>
                   <HeaderAdmin /> 

                {/* pages starts */}
                   <Grid container>
          
          <Grid item container justifyContent="space-between" alignItems="center" mt="15px">
           <Grid item>
              <Button id="addnewuser_btnText" startIcon={<ArrowCircleRightOutlined/>} sx={{fontWeight:500,fontSize:"20px",color:"#212529",textTransform:"unset"}}>Location</Button>
             <Button id="addnewuser_btnText2" sx={{fontWeight:500,fontSize:"20px",color:"#212529",textTransform:"unset"}}>Location</Button>
           </Grid>
               <Grid item>
           <Button onClick={()=>navigate('/admin/addnewlocation')}  id="addnewuser_btn" variant='contained' size='small'  startIcon={<Add/>} sx={{bgcolor:"#5d78ff",borderRadius:"50px",textTransform:"unset"}}>Add new location</Button>
              <Button id="addnewuser_btn2" size='small' variant='contained'sx={{borderRadius:"30px"}} ><Add /></Button>
          </Grid>
          </Grid>

          <Grid item container component={Paper} mt="20px">
           <Grid item lg={12} md={12} sm={12} xs={12}> <Box sx={{width:"100%",bgcolor:"#282a3c",color:"white",height:"40px",display:"flex",alignItems:"center"}}>
                 <Typography ml="10px" fontSize="18px">Location</Typography>
             </Box>
             </Grid>
                   {/* paste your component (code) here  */}
     <Paper id="collegePagePaper" sx={{p:"20px",width:"100%",m:"20px"}} elevation={2} >
      <Grid item container justifyContent='space-evenly' alignItems="center" spacing={2}>
         <Grid item xs={12} lg={6} md={6} sm={6}  >
      <Box sx={{display:"flex",justifyContent:{sm:"left",md:"left",lg:"left",xs:"center"},alignItems:"center"}}>
      <Typography mr="5px" sx={{fontSize:"13px",color:"#6c7293"}}>Show</Typography>
      <div>
     <select onChange={changeRowsHandler}  style={{border:"1px solid #ebedf2",padding:"4px 10px",outline:"none"}} name="ok" >
              <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
            </select>
      </div>

             <Typography ml="5px" sx={{fontSize:"13px",color:"#6c7293"}}>enteries</Typography>
      </Box>

    </Grid>
    <Grid item xs={12} lg={6} md={6} sm={6}>
      <Box sx={{display:"flex",alignItems:"center",justifyContent:{sm:"right",md:"right",lg:"right",xs:"center"}}}>
      <Typography  sx={{fontSize:"13px",color:"#6c7293"}} >Search:</Typography>
       <TextField focused={false} sx={{border:"1px solid #ebedf2"}}  size='small' id="searchInputadmin" label="Search" variant="outlined" />
      </Box>
    </Grid>
    <Grid item xs={12} lg={12} md={12} sm={12}>
          {/* <TableMain dummyData={dummyData} rows={rows} setRows={setRows}/> */}
          <TableLocation  data={locationData} rows={rows} setRows={setRows}/>
    </Grid>
      </Grid>
    </Paper>
        </Grid>

            </Grid>
             </Box>
         </Box>
    </>
  )
}

export default LocationPageAdmin