import CssBaseline from '@mui/material/CssBaseline';
import SidebarAdmin from './Global/SisebarAdmin'
import NavBarTop from './Global/NavBarTop';
import HeaderAdmin from './Global/HeaderAdmin';
import {Box,Grid,Button,} from '@mui/material'
import {ArrowCircleRightOutlined} from '@mui/icons-material';
import Dashboard from './pages/Dashboard';
const drawerWidth = '280px'
const HomepageAdmin = () => {
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
              <Button id="addnewuser_btnText" startIcon={<ArrowCircleRightOutlined/>} sx={{fontWeight:500,fontSize:"20px",color:"#212529",textTransform:"unset"}}>Dashboard</Button>
             <Button id="addnewuser_btnText2" sx={{fontWeight:500,fontSize:"20px",color:"#212529",textTransform:"unset"}}>Dashboard</Button>
           </Grid>
          </Grid>
  
        {/* paste your component (code) here  */}
        <Dashboard/>
            </Grid>
             </Box>
         </Box>
    </>
  )
}

export default HomepageAdmin