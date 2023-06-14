import {  Select, MenuItem,Typography,Box, Button, Grid, Paper, FormControl, InputLabel, TextField, OutlinedInput} from '@mui/material'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Add, Search } from '@mui/icons-material';
import { useState } from 'react';
import "../AdminMaster.css"
import TableMain2 from '../Global/TableMain2';
import CssBaseline from '@mui/material/CssBaseline';
import SidebarAdmin from '../Global/SisebarAdmin'
import NavBarTop from '../Global/NavBarTop';
import HeaderAdmin from '../Global/HeaderAdmin';
const drawerWidth ="280px"
const dummyData = []


const PaymentHistory = () => {
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
             {/* drawerWidth = '350px' */}
           <Box sx={{ml:{lg: drawerWidth,md:drawerWidth}}}>
               <Box component="main" sx={{ bgcolor: "#f2f3f8", p: 3,width:"100%" }}>
                    <HeaderAdmin /> 
                    {/* pages starts */}
   <Grid container>
          
          <Grid item container justifyContent="space-between" alignItems="center" mt="15px">
           <Grid item>
              <Button id="addnewuser_btnText" startIcon={<ArrowCircleRightOutlinedIcon/>} sx={{fontWeight:500,fontSize:"20px",color:"#212529",textTransform:"unset"}}>Claimed College</Button>
             <Button id="addnewuser_btnText2" sx={{fontWeight:500,fontSize:"20px",color:"#212529",textTransform:"unset"}}>Report</Button>
           </Grid>
          </Grid>
  

          <Grid item container component={Paper} mt="20px">
            <Grid item lg={12} md={12} sm={12} xs={12} >
              <Box sx={{width:"100%",bgcolor:"#282a3c",color:"white",height:"40px",display:"flex",alignItems:"center"}}>
                <Typography ml="10px" fontSize="18px">Purchase histories</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} >
                <Paper sx={{width:"100%",height:"100%"}}>
                  <Grid container  p="12px" >
                    <Grid item sx={{display:{xs:"none",sm:"none",md:"none",lg:"block"}}} lg={4}></Grid>
                    <Grid item xs={12} lg={5} m="5px">
                      <OutlinedInput type='date'  sx={{height:"40px",bgcolor:"#f5f5f6"}} fullWidth/>
                    </Grid>
                    <Grid item xs={12} lg={2} m="5px">
                        <Button variant='contained' sx={{bgcolor:"#42A5F5",borderRadius:"18px"}}>Filter</Button>
                    </Grid>
                  </Grid>
                </Paper>
            </Grid>
              </Grid>  
           


          <Grid item container component={Paper} mt="20px" >
            <Grid item lg={12} md={12} sm={12} xs={12} >
              <Box sx={{width:"100%",bgcolor:"#282a3c",color:"white",height:"40px",display:"flex",alignItems:"center"}}>
                <Typography ml="10px" fontSize="18px">Purchase histories</Typography>
              </Box>
            </Grid>
             
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
          <TableMain2 dummyData={dummyData} rows={rows} setRows={setRows}/>
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

export default PaymentHistory