import CssBaseline from '@mui/material/CssBaseline';
import SidebarAdmin from '../Global/SisebarAdmin'
import NavBarTop from '../Global/NavBarTop';
import HeaderAdmin from '../Global/HeaderAdmin';
import { Box, Grid, Button, Typography, Paper} from '@mui/material'
import { ArrowCircleRightOutlined } from '@mui/icons-material';
import ForwardIcon from '@mui/icons-material/Forward';
import HelpIcon from '@mui/icons-material/Help';


const drawerWidth = '280px'
const SettingAbout = () => {
    return (
        <>

            <CssBaseline />
            {/* when screen size is small NavBar entry from top  */}
            <Box sx={{ alignItems: "center", height: "80px", display: { xs: "flex", md: "none", lg: "none", sm: "flex" }, justifyContent: "right", pr: "20px", bgcolor: " #1e1e2d", color: "white" }}>
                <NavBarTop />
            </Box>

            {/* when screen size is lg and md */}
            <SidebarAdmin />
            <Box sx={{ ml: { lg: drawerWidth, md: drawerWidth } }}>
                <Box component="main" sx={{ bgcolor: "#f2f3f8", p: 3, width: "100%",height:"100vh" }}>
                    <HeaderAdmin />

                    {/* pages starts */}
                    <Grid container spacing={2}>

                        <Grid item container justifyContent="space-between" alignItems="center" mt="15px">
                            <Grid item>
                                <Button id="addnewuser_btnText" startIcon={<ArrowCircleRightOutlined />} sx={{ fontWeight: 500, fontSize: "20px", color: "#212529", textTransform: "unset" }}> About</Button>
                                <Button id="addnewuser_btnText2" sx={{ fontWeight: 500, fontSize: "20px", color: "#212529", textTransform: "unset" }}>About</Button>
                            </Grid>
                        </Grid>
                       
                       <Grid item container xs={12}  sx={{display:"flex",alignItems:"center",justifyContent:"center"}} >
                          <Grid item container xs={12} lg={7}>
                            <Paper sx={{width:"100%"}}>
                                <Grid container>
                                    <Grid item xs={12} p="15px">
                                        <Typography  sx={{fontSize:"18px",color:"#373e4a"}}>College Padho</Typography>
                                    </Grid>

                                    <Grid item xs={6} b>
                                        <Typography sx={{color:"#8d929a",display:"flex",alignItems:"center",fontSize:"15px",border:"1px solid #ebedf2",p:"15px"}}><ForwardIcon/>Software version</Typography>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <Typography sx={{color:"#8d929a",display:"flex",alignItems:"center",justifyContent:"right",fontSize:"15px",border:"1px solid #ebedf2",p:"15px",height:"100%"}} ><b>2.8</b></Typography>
                                    </Grid>


                                    <Grid item xs={6} >
                                        <Typography sx={{color:"#8d929a",display:"flex",alignItems:"center",fontSize:"15px",border:"1px solid #ebedf2",p:"15px",height:"100%"}}><ForwardIcon/>Php version</Typography>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <Typography sx={{color:"#8d929a",display:"flex",alignItems:"center",justifyContent:"right",fontSize:"15px",border:"1px solid #ebedf2",p:"15px",height:"100%"}} ><b>8.1.19</b></Typography>
                                    </Grid>


                                    <Grid item xs={6} >
                                        <Typography sx={{color:"#8d929a",display:"flex",alignItems:"center",fontSize:"15px",border:"1px solid #ebedf2",p:"15px",height:"100%"}}><ForwardIcon/>Curl enable</Typography>
                                    </Grid>
                                    <Grid item xs={6} >
                                       <Box p="15px" sx={{display:"flex",justifyContent:"right",height:"100%",border:"1px solid #ebedf2"}}>
                                       <Button variant='contained' color='success' size='small' sx={{fontSize:"10px",p:"3px 0px 3px 0px"}}><b>Enabled</b></Button></Box>  
                                    </Grid>


                                    <Grid item xs={6} >
                                        <Typography sx={{color:"#8d929a",display:"flex",alignItems:"center",fontSize:"15px",border:"1px solid #ebedf2",p:"15px",height:"100%"}}><ForwardIcon/> Support expiry date</Typography>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <Typography sx={{color:"#8d929a",display:"flex",alignItems:"center",justifyContent:"right",fontSize:"15px",border:"1px solid #ebedf2",p:"15px",height:"100%"}} ><b>20 May, 2022</b></Typography>
                                    </Grid>


                                    <Grid item xs={6} >
                                        <Typography sx={{color:"#8d929a",display:"flex",alignItems:"center",fontSize:"15px",border:"1px solid #ebedf2",p:"15px",height:"100%"}}><ForwardIcon/>  Customer name</Typography>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <Typography sx={{color:"#8d929a",display:"flex",alignItems:"center",justifyContent:"right",fontSize:"15px",border:"1px solid #ebedf2",p:"15px",height:"100%"}} ><b>ashishverma1986</b></Typography>
                                    </Grid>

                                    <Grid item xs={6} >
                                        <Typography sx={{color:"#8d929a",display:"flex",alignItems:"center",fontSize:"15px",border:"1px solid #ebedf2",p:"15px",height:"100%"}}><ForwardIcon/> Get customer support</Typography>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <Typography sx={{color:"#373e4a",display:"flex",alignItems:"center",justifyContent:"right",fontSize:"15px",border:"1px solid #ebedf2",p:"15px"}} ><Box sx={{'&:hover':{bgcolor:"#ebedf2",cursor:"pointer"},display:"flex",alignItems:"center",p:"5px",borderRadius:"7px",height:"100%"}}><HelpIcon fontSize='17px' sx={{mr:"5px"}}/><b> Customer support</b></Box></Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                          </Grid>
                       </Grid>
                       
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default SettingAbout;