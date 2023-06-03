import LoginIcon from '@mui/icons-material/Login';
import {AppBar,Toolbar,CssBaseline,Box,Link,} from '@mui/material';
import logo from '../assets/dark_logo.png'
import { useState } from 'react';
import ScrollToColor from "./ScrollToColor";
import SideMenu from './SideMenu';
import '../Home/Master.css'
import { useNavigate } from 'react-router-dom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import LockOpenIcon from '@mui/icons-material/LockOpen';



export default function Header({isBgColor,handleOpen}) {

  const navigate = useNavigate();
  const [state, setState] = useState(false);

    // header for stream,pricing pages
// sidebar menu is another component for smaller screens plese do 
//look at thatb also if you are changing page on click/ routing

if(isBgColor){
  return (
    <>
      <SideMenu state={state} setState={setState} handleOpen={handleOpen}/>
      <CssBaseline />
        <AppBar sx={{bgcolor:"theme.palette.primary.main"}}>
          <Toolbar>
            <Box sx={{cursor:"pointer"}} id="hamburger" >
              <MenuOpenIcon onClick={()=>setState(prev=>!prev)} sx={{color:"white",fontSize:"35px"}}/>
            </Box>
           <Box id="logoImg" sx={{flexGrow:1}}>
            <img width="165px" height="35px" style={{aspectRatio:"auto 165 / 35"}} src={logo} alt="logo" />
           </Box>
           <Box sx={{display:"flex"}}>
            <Link onClick={()=>navigate('/')} id="navBarHide" sx={{'&:hover':{opacity:0.6},transition:"all 0.70s ease",color:"white",mr:"20px",cursor:"pointer",textDecoration:"none"}}>Home</Link>
            <Link onClick={()=>navigate('/listings')}  id="navBarHide"    sx={{'&:hover':{opacity:0.6},transition:"all 0.70s ease",color:"white",mr:"20px",cursor:"pointer",textDecoration:"none"}}>Listings</Link>
            <Link  onClick={()=>navigate('/stream')} id="navBarHide"   sx={{'&:hover':{opacity:0.6},transition:"all 0.70s ease",color:"white",mr:"20px",cursor:"pointer",textDecoration:"none"}}>Stream</Link>
            <Link onClick={()=>navigate('/pricing')}  id="navBarHide"   sx={{'&:hover':{opacity:0.6},transition:"all 0.70s ease",color:"white",mr:"20px",cursor:"pointer",textDecoration:"none"}}>Pricing</Link>
            <Link onClick={()=>navigate('/posts')}  id="navBarHide"   sx={{'&:hover':{opacity:0.6},transition:"all 0.70s ease",color:"white",mr:"20px",cursor:"pointer",textDecoration:"none"}}>Blog</Link>
            <Link  onClick={handleOpen} id="navBarHide"  sx={{'&:hover':{opacity:0.6},transition:"all 0.70s ease",color:"yellow",mr:"20px",cursor:"pointer",textDecoration:"none"}}>Admission Enquiry</Link>
           <Link onClick={()=>navigate('/admin')} sx={{'&:hover':{opacity:0.6},transition:"all 0.70s ease",color:"white",mr:"20px",cursor:"pointer",textDecoration:"none"}}><LockOpenIcon/></Link>
           </Box>
          </Toolbar>
        </AppBar>
    </>
  );
}
    // Homepage header
if(isBgColor === false){
  return (
    <>
      <SideMenu state={state} setState={setState} handleOpen={handleOpen}/>
      <CssBaseline />
      <ScrollToColor>
        <AppBar>
          <Toolbar>
            <Box sx={{cursor:"pointer"}} id="hamburger" >
              <MenuOpenIcon onClick={()=>setState(prev=>!prev)} sx={{color:"white",fontSize:"35px"}}/>
            </Box>
           <Box id="logoImg" sx={{flexGrow:1}}>
            <img width="165px" height="35px" style={{aspectRatio:"auto 165 / 35"}} src={logo} alt="logo" />
           </Box>
           <Box sx={{display:"flex"}}>
            <Link onClick={()=>navigate('/')} id="navBarHide" sx={{'&:hover':{opacity:0.6},transition:"all 0.70s ease",color:"white",mr:"20px",cursor:"pointer",textDecoration:"none"}}>Home</Link>
            <Link onClick={()=>navigate('/listings')}  id="navBarHide"    sx={{'&:hover':{opacity:0.6},transition:"all 0.70s ease",color:"white",mr:"20px",cursor:"pointer",textDecoration:"none"}}>Listings</Link>
            <Link onClick={()=>navigate('/stream')}  id="navBarHide"   sx={{'&:hover':{opacity:0.6},transition:"all 0.70s ease",color:"white",mr:"20px",cursor:"pointer",textDecoration:"none"}}>Stream</Link>
            <Link onClick={()=>navigate('/pricing')}  id="navBarHide"   sx={{'&:hover':{opacity:0.6},transition:"all 0.70s ease",color:"white",mr:"20px",cursor:"pointer",textDecoration:"none"}}>Pricing</Link>
            <Link onClick={()=>navigate('/posts')}  id="navBarHide"   sx={{'&:hover':{opacity:0.6},transition:"all 0.70s ease",color:"white",mr:"20px",cursor:"pointer",textDecoration:"none"}}>Blog</Link>
            <Link onClick={handleOpen} id="navBarHide"  sx={{'&:hover':{opacity:0.6},transition:"all 0.70s ease",color:"yellow",mr:"20px",cursor:"pointer",textDecoration:"none"}}>Admission Enquiry</Link>
           <Link onClick={()=>navigate('/admin')} sx={{'&:hover':{opacity:0.6},transition:"all 0.70s ease",color:"white",mr:"20px",cursor:"pointer",textDecoration:"none"}}><LockOpenIcon/></Link>
           </Box>
          </Toolbar>
        </AppBar>
        </ScrollToColor>
    </>
  );
}

}