import { Grid , Box, Typography,Button, Paper, Divider, CssBaseline} from '@mui/material';
import React, { useState } from 'react';
import { IconPickerItem } from 'react-fa-icon-picker'
import SidebarAdmin from '../Global/SisebarAdmin'
import './Stream.css';
import NavBarTop from '../Global/NavBarTop';
import HeaderAdmin from '../Global/HeaderAdmin';
import { ArrowCircleRightOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BASE_URL from '../../constant';
import { useEffect } from 'react';

const drawerWidth = '280px'
const StreamAdmin = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])

    const fetchStreams = ()=>{
        axios.get(`${BASE_URL}/api/stream`).then((res)=>{setData(res.data.response)})
    }
    useEffect(()=>fetchStreams(),[])
    
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
              <Button id="addnewuser_btnText" startIcon={<ArrowCircleRightOutlined/>} sx={{fontWeight:500,fontSize:"20px",color:"#212529",textTransform:"unset"}}>Stream</Button>
              {/* for smaller screen */}
             <Button id="addnewuser_btnText2" sx={{fontWeight:500,fontSize:"20px",color:"#212529",textTransform:"unset"}}>Stream</Button>
           </Grid>
           <Grid item>
            <Button onClick={()=>navigate('/admin/addnewstream')} variant='contained' size='small' sx={{borderRadius:'7px'}}>+ Add new stream</Button>
           </Grid>
          </Grid>
  
        {/* paste your component (code) here  */}
    <Grid  container sx={{backgroundColor: "#f2f4f8 " , padding:'10px'}}>


        <Grid item container id='particularcard' xs={12} sx={{ mt:'20px',  display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap'}}>
            {
                data.map((ele,index)=>{
                    return (
                <Grid key={ele._id} item    xs={11.5} sm={11.5} md={3.1} lg={3.1} sx={{ margin:'0px 0px 50px 0px', cursor:'pointer'}}>
                <Paper elevation={5}>
                <img src={`${BASE_URL}`+ele.image} height='100%' width='100%'/>
                <Box sx={{  padding:'0px 0px 0px 7px',display:"flex",alignItems:"center"}}>
                     <Button disableRipple sx={{textTransform:"unset",color:'#212121'}} size='small' startIcon={<IconPickerItem icon={ele.icon} size={24} color="#000" />}>{ele.parentStream}</Button>
                </Box>
                <Typography variant='body' sx={{padding:'0px 0px 2px 14px', color:'#9e9e9e'}}>
                    {ele.stream ? '1 sub stream':'0 sub stream'}
                    </Typography>
                <Divider sx={{marginTop:'5px'}}></Divider>
                   <Box    sx={{ height:'fit-content'}}>
                    <span style={{display:'flex', justifyContent:'space-between',alignItems:'center', padding:'12px 10px 15px 12px'}}>
                    <Button variant='contained' color='primary' size='small'  >Edit</Button>
                    <Button   variant='contained' color='error' size='small' >Delete</Button>
                    </span>
                </Box>
                </Paper>
            </Grid>
                    )
                })
            }
        </Grid>
    </Grid>
            {/* <Dashboard/> */}
            </Grid>
             </Box>
         </Box>
        </>
  )
}

export default StreamAdmin