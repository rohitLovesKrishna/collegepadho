import CssBaseline from '@mui/material/CssBaseline';
import SidebarAdmin from '../Global/SisebarAdmin'
import NavBarTop from '../Global/NavBarTop';
import HeaderAdmin from '../Global/HeaderAdmin';
import { Box, Grid, Button, Typography, OutlinedInput, Paper} from '@mui/material'
import { ArrowCircleRightOutlined } from '@mui/icons-material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleIcon from '@mui/icons-material/AddCircle';


const drawerWidth = '280px'
const LanguageSettings = () => {

    const [lstborder, setLstBorder]=useState(true)
    const [phborder, setPhBorder]=useState(false)
    const [lngborder, setLngBorder]=useState(false)

    const dataChanger=(data)=>{
         if(data==="LanguageList"){
            setLstBorder(true)
            setLngBorder(false)
            setPhBorder(false)
         }
         if(data==="Phrase"){
            setPhBorder(true)
            setLngBorder(false)
            setLstBorder(false)
            console.log("hello")
         }
         if(data==="Language"){
            setLngBorder(true)
            setPhBorder(false)
            setLstBorder(false)
         }
    }


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
                                <Button id="addnewuser_btnText" startIcon={<ArrowCircleRightOutlined />} sx={{ fontWeight: 500, fontSize: "20px", color: "#212529", textTransform: "unset" }}> Add New User</Button>
                                <Button id="addnewuser_btnText2" sx={{ fontWeight: 500, fontSize: "20px", color: "#212529", textTransform: "unset" }}>Add New User</Button>
                            </Grid>
                        </Grid>
                       
                       <Grid item container  >
                        <Paper sx={{width:"100%",p:"18px"}}>
                            <Grid  container xs={12} >
                                <Grid item container  xs={12} sx={{display:"flex",justifyContent:{xs:"center",sm:"center",md:"flex-start",lg:"flex-start"}}} spacing={1}>
                                   
                                        <Grid item xs={6} sm={6} md={6} lg={2} sx={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.1rem",cursor:"pointer",'&:hover':{opacity:"0.7"},borderBottom:lstborder?"2px solid blue":"",color:lstborder?"blue":""}} onClick={()=>{dataChanger("LanguageList")}}><MenuIcon sx={{fontSize:"15px",mr:"6px"}}/>Language list</Grid>

                                        <Grid item xs={6} sm={6} md={6} lg={2} sx={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.1rem",cursor:"pointer",'&:hover':{opacity:"0.7"},borderBottom:phborder?"2px solid blue":"",color:phborder?"blue":""}}  onClick={()=>{dataChanger("Phrase")}}><AddCircleIcon sx={{fontSize:"15px",mr:"6px"}}/>Add phrase</Grid>

                                        <Grid item xs={7} sm={7} md={6} lg={2} sx={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.1rem",cursor:"pointer",'&:hover':{opacity:"0.7"},borderBottom:lngborder?"2px solid blue":"",color:lngborder?"blue":""}}  onClick={()=>{dataChanger("Language")}}><AddCircleIcon sx={{fontSize:"15px",mr:"6px"}}/>Add language</Grid>
                                </Grid>
                                <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>
                                 
                                 {
                                    lstborder? <Grid item xs={12} sx={{p:"15px"}}>
                                    <Grid item  container sx={{ border: "1px solid  #ebedf2" }}>
                                     <Grid item xs={4} sx={{borderBottom: "1px solid  #ebedf2",borderRight: "1px solid #ebedf2"}}>
                                       <Typography variant='body2' sx={{color:"#6c7293",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:{xs:"0.8rem",sm:"80%",md:"0.7rem",lg:"1rem"}}}>Languages</Typography>
                                     </Grid>
                                     <Grid item xs={8} sx={{p:"12px",borderBottom: "1px solid  #ebedf2"}}>
                                     <Typography sx={{color:"#6c7293",fontSize:{xs:"0.8rem",sm:"80%",md:"0.7rem",lg:"1rem"}}}>Option</Typography>
                                     </Grid>
                                     <Grid item xs={4} sx={{p:"7px",borderRight: "1px solid  #ebedf2"}}>
     
                                     </Grid>
                                     <Grid item xs={8} sx={{p:"7px",borderBottom: "1px solid  #ebedf2"}}>
                                        <Button sx={{bgcolor:"#21a9e1",color:"white",borderRadius:"18px",m:"7px",fontSize:"0.7rem"}} variant='contained'>Edit phrase</Button>
                                        <Button sx={{bgcolor:"#cc2424",color:"white",fontSize:"0.7rem",borderRadius:"18px",m:"7px",whiteSpace:"nowrap"}} variant='contained' >Delete language</Button>
                                     </Grid>
                                     <Grid item xs={4} sx={{p:"7px",borderTop: "1px solid  #ebedf2",borderRight: "1px solid  #ebedf2"}}>
                                        <Typography sx={{color:"#6c7293",fontSize:{xs:"0.8rem",sm:"80%",md:"0.7rem",lg:"1rem",display:"flex",alignItems:"center",justifyContent:"center",}}}>English</Typography>
                                     </Grid>
                                     <Grid item xs={8} sx={{p:"7px"}}>
                                        <Button sx={{bgcolor:"#21a9e1",color:"white",borderRadius:"18px",m:"7px",fontSize:"0.7rem"}} variant='contained'>Edit phrase</Button>
                                        <Button sx={{bgcolor:"#cc2424",color:"white",borderRadius:"18px",fontSize:"0.7rem",m:"7px",whiteSpace:"nowrap"}} variant='contained'>Delete language</Button>
                                     </Grid>
                                     </Grid>
                                     </Grid>:""

                                 }
                                 {
                                    phborder?<Grid item container xs={12} sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <Grid item xs={12} md={6} mt="15px" >
                                    <Paper sx={{width:"100%",p:"15px"}}>
                                        <Typography sx={{color:"#646c9a",mt:"20px",mb:"10px"}}>Add new phrase</Typography>
                                        <OutlinedInput fullWidth sx={{height:"45px",mb:"10px"}}></OutlinedInput>
                                        <Button sx={{bgcolor:"#5d78ff",color:"white",borderRadius:"18px"}} variant='contained'>save</Button>
                                    </Paper>
                                    </Grid>
                                </Grid>:""
                                 }
                                 {
                                   lngborder?<Grid item container xs={12} sx={{display:"flex",alignItems:"center",justifyContent:"center",mt:"15px"}}>
                                   <Grid item xs={12} md={6} >
                                   <Paper sx={{width:"100%",p:"15px"}}>
                                       <Typography sx={{color:"#646c9a",mt:"20px",mb:"10px"}}>Add new language</Typography>
                                       <OutlinedInput fullWidth sx={{height:"45px",mb:"10px"}}></OutlinedInput>
                                       <Button sx={{bgcolor:"#5d78ff",color:"white",borderRadius:"18px"}} variant='contained'>save</Button>
                                   </Paper>
                                   </Grid>
                               </Grid>:""

                                 }
                             
                            </Grid>
                        </Paper>
                       </Grid>
                       
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default LanguageSettings;