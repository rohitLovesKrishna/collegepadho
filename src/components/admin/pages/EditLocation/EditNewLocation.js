import { Add, ArrowCircleRightOutlined } from '@mui/icons-material';
import { Box, Button, CssBaseline,  FormControl, Grid,MenuItem, OutlinedInput, Paper, Select, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import thumbNail from '../../../assets/thumbnail.png'
import NavBarTop from '../../Global/NavBarTop';
import SidebarAdmin from '../../Global/SisebarAdmin'
import HeaderAdmin from '../../Global/HeaderAdmin';
import axios from 'axios';
import BASE_URL from '../../../constant';
import { useParams } from 'react-router-dom';
import Loader from '../../../Loader';

const drawerWidth ='280px'
const EditNewLocation = () => {
    const param = useParams();
    const [data,setData] = useState([])
    const [isLocation,setIsLocation] = useState([]);
    const [imageUrl, setImageUrl] = useState(thumbNail);
    const [selectedImage, setSelectedImage] = useState(null);
    const [locName, setLocName]=useState('')
    const [countryName, setCountryName]=useState('');
    const fetchLocation = ()=>{
        axios.get(`${BASE_URL}/api/location`).then((res)=>{setIsLocation(res.data.response.filter((item)=>{return item._id === param.id}))}).catch((err)=>{console.log(err);});
    }
useEffect(()=>{fetchLocation()},[isLocation]);
useEffect(()=>{if(isLocation.length > 0){setLocName(isLocation[0].locationName);setCountryName(isLocation[0].country);setImageUrl(`${BASE_URL}${isLocation[0].image}`)}},[isLocation])
    const getApi =()=>{axios.get(`${BASE_URL}/api/country`).then((res)=>{setData(res.data.response)}).catch((err)=>{console.log(err)})}
    useEffect(()=>{getApi()},[])
    const sendData =()=>{
        //  const formdata=new FormData();
        //  formdata.append('locationName',locName)
        //  formdata.append('country',countryName)
        //  formdata.append('myFile',selectedImage)
        // axios.post(`${BASE_URL}/api/location`,formdata).then((res)=>{alert("successfull");console.log(res)}).catch((err)=>{console.log(err);alert("Unsuccessfull")})    
    }
     
    if(isLocation.length > 0){
 return (
        <>
           <CssBaseline />
              {/* when screen size is small NavBar entry from top  */}
            <Box sx={{alignItems:"center",height:"80px",display:{xs:"flex",md:"none",lg:"none",sm:"flex"},justifyContent:"right",pr:"20px",bgcolor:" #1e1e2d",color:"white"}}>
                <NavBarTop/>
            </Box>
              {/* when screen size is lg and md */}
           <SidebarAdmin />
              {/* drawerWidth = '280px' */} 
            <Box sx={{ml:{lg:drawerWidth,md:drawerWidth}}}>
                <Box component="main" sx={{ bgcolor: "#f2f3f8", p: 3,width:"100%" }}>
                     <HeaderAdmin /> 
                       <Grid container>
          
           <Grid item container justifyContent="space-between" alignItems="center" mt="15px">
            <Grid item>
               <Button id="addnewuser_btnText" startIcon={<ArrowCircleRightOutlined/>} sx={{fontWeight:500,fontSize:"20px",color:"#212529",textTransform:"unset"}}> Add new location</Button>
              <Button id="addnewuser_btnText2" sx={{fontWeight:500,fontSize:"20px",color:"#212529",textTransform:"unset"}}> Add new location</Button>
            </Grid>
           </Grid>
           <Grid item container  mt="20px" >
             <Grid item lg={12} md={12} sm={12} xs={12}>
               <Box sx={{width:"100%",bgcolor:"#282a3c",color:"white",height:"40px",display:"flex",alignItems:"center"}}>
                 <Typography ml="10px" fontSize="18px"> Add new location</Typography>
               </Box>
             </Grid>
      <Paper sx={{p:"10px",width:"100%"}} elevation={2} >
                <Grid container spacing={2} p="15px">
                    <Grid item xs={12} md={4}>
                        <Typography sx={{ mr: "20px", display: "flex", alignItems: "center", justifyContent: "flex-end", height: "100%" }} color="#646c9a">Location name</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <OutlinedInput placeholder='Location name' fullWidth sx={{height:"35px"}} onChange={(e)=>{setLocName(e.target.value)}} value={locName}></OutlinedInput>
                    </Grid>
                    <Grid item xs={12} borderBottom="1px solid #ebedf2"></Grid>

                    <Grid item xs={12} md={4}>
                        <Typography sx={{ mr: "20px", display: "flex", alignItems: "center", justifyContent: "flex-end",  height: "100%" }} color="#646c9a">Country</Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <FormControl sx={{width:"100%"}}>
                            <Select labelId='mylabel'
                            value={countryName}
                            onChange={(e)=>{setCountryName(e.target.value)}}
                            displayEmpty
                            >
                                <MenuItem value="" disabled>
                                    <em>Select Country</em>
                                </MenuItem>
                               {
                                data.map((ele)=>{
                                   return <MenuItem value={ele.country}>{ele.country}</MenuItem>
                                })
                               }
                               
                            </Select>
                            
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} borderBottom="1px solid #ebedf2"></Grid>
                    <Grid item container>
                    <Grid item xs={12} md={3}>
                        <Typography color="#646c9a" align='right' mr="30px">Location thumbnail (400 X 255)</Typography>
                    </Grid>
                    <Grid item>
                        <Box  sx={{border:"1px solid #ebedf2"}}>
                            <Button component={"label"} disableRipple ><img  src={imageUrl} height="220px" width="220px"/><input type='file' hidden={true} onChange={(e) => {setImageUrl(URL.createObjectURL(e.target.files[0]));setSelectedImage(e.target.files[0])}}/></Button>
                        </Box>
                        <Button  component="label" htmlFor="searchInputadmin9" sx={{borderRadius:"20px",color:"black",border:"1px solid #ebedf2",mt:"8px"}}  >Select Image
                        <TextField onChange={(e) => {setImageUrl(URL.createObjectURL(e.target.files[0]));setSelectedImage(e.target.files[0])}} style={{display:"none"}} accept="image/jpg"  type='file' hidden  fullWidth size="small" id="searchInputadmin9"   variant="outlined"/>
                         </Button>
                    </Grid>
                    <Grid item xs={12} borderBottom="1px solid #ebedf2" mt="30px"></Grid>
                    <Grid item xs={3} sx={{display:{xs:"none",sm:"none",md:"block",lg:"block"}}} ></Grid>
                    <Button variant="contained" sx={{borderRadius:"20px",color:"black",mt:"15px",bgcolor:"#42A5F5"}} disableRipple  onClick={sendData}> Submit Data</Button>
                    </Grid>
                      
                </Grid>
            </Paper>
         </Grid>

        
           </Grid>

              </Box>
            </Box>

        </>
    );
    }
   else{
    return <Loader/>
   }
}

export default EditNewLocation;