import CssBaseline from '@mui/material/CssBaseline';
import SidebarAdmin from '../Global/SisebarAdmin'
import NavBarTop from '../Global/NavBarTop';
import HeaderAdmin from '../Global/HeaderAdmin';
import {Box,Button, OutlinedInput, TextareaAutosize,} from '@mui/material'
import {  Grid, Typography} from '@mui/material'
import {ArrowCircleRightOutlined} from '@mui/icons-material';

import imglogo from '../../assets/thumbnail.png'

const drawerWidth = '280px'
const TextareaAutosizeComponent=(props)=>{return ( <Grid  mb={2}  item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2}><Grid item lg={8}><Typography mr="14px" fontSize="15px" color="#646c9a">{props.label}</Typography></Grid><Grid item lg={12} md={12} sm={12} xs={12}><TextareaAutosize style={{ width: "100%", outline: "none" }} placeholder={props.placeholder} minRows={props.rows}/></Grid></Grid>)}

const AddNewPage = () => {

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
              <Button id="addnewuser_btnText" startIcon={<ArrowCircleRightOutlined/>} sx={{fontWeight:500,fontSize:"20px",color:"#212529",textTransform:"unset"}}>Add new page</Button>
             <Button id="addnewuser_btnText2" sx={{fontWeight:500,fontSize:"20px",color:"#212529",textTransform:"unset"}}>Add new page</Button>
           </Grid>
          </Grid>
  
        {/* paste your component (code) here  */}
        {/* <Dashboard/> */}
        <Grid item container xs={12} sx={{backgroundColor:'white'}}>
            <Grid item xs={12} sx={{backgroundColor:'#1e1e2d', color:'white', padding:'10px'}}>
                <Typography >Page add form</Typography>
            </Grid>
            <Grid item  xs={12} >
               <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', padding:'10px'}}>
                <Typography sx={{mr:'10px', color:'#646c9a'}} >Page title</Typography>
              
                <OutlinedInput placeholder='Provide page title' sx={{height:'40px', width:'60%'}} />
               </Box>
 <TextareaAutosizeComponent  label="Page text" rows={6} placeholder="Text"/>
               <Grid item container lg={12} xs={9} sx={{display:'felx', ml:'20px'}}>
                 <Grid item xs={10} sm={10}  md={10} lg={6}>
                  <Box>
                    <Typography sx={{color:'#646c9a'}}>Page thumbnail(800 X 533) </Typography>
                    <Box sx={{ width:'250px ', height:'250px'}}>
                      <Button component={'label'} disableFocusRipple>
                      <img src={imglogo} width='100%' height='90%'/>
                      <input type='file' hidden={true}/>
                      </Button>
                    </Box  >
                      <Button variant='outlined'sx={{marginLeft:'10px', }}>Select image</Button>
                  </Box>
               </Grid>
               
                <Grid item  xs={10} sm={10}  md={10} lg={6}>
                  <Box>
                    <Typography sx={{color:'#646c9a'}}>Page cover(900 X 450) </Typography>
                    <Box sx={{ width:'250px ', height:'250px'}}>
                      <Button component={'label'} disableFocusRipple>
                      <img src={imglogo} width='100%' height='90%'/>
                      <input type='file' hidden={true}/>
                      </Button>
                    </Box >
                      <Button variant='outlined'sx={{marginLeft:'10px'}}>Select image</Button>
                  </Box>
               </Grid>

               <Grid item xs={12} sx={{display:'flex', alignItems:'center', justifyContent:'center',  padding:'13px 0px 13px 0px'}}>
                <Button variant='contained' sx={{borderRadius:'7px', padding:'5px 45px 5px 45px'}}>Add Page</Button>
               </Grid>
               </Grid>
            </Grid>
        </Grid>
            </Grid>
             </Box>
         </Box>
    </>
  )
}

export default AddNewPage;