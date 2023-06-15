import { Box, Button, Divider, Grid, Link, List, ListItem, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css'
import whats from '../assets/whatsapp_icon-icons.com_62756.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import ModalPage from './ModalPage';
export default function Footer() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const navigate = useNavigate();

  const design = {
    head: { width: "100%", bgcolor: "#ff9800", color: "white" },
    lists: { justifyContent: "center", alignItems: "center" }
  }
  return (
    <>
      <ModalPage open={open} setOpen={setOpen} />
      <Grid container sx={{ justifyContent: "center", alignItems: "flex-start", width: '100%' }} spacing={0}>
        <Grid item container lg={3} md={3} sm={6} xs={12} sx={design.lists}>
          <Grid item sx={{ width: "100%" }}>
            <Typography variant='h6' textAlign="center" sx={design.head} ><b>Quick Links</b></Typography>
          </Grid>
          <Grid item container sx={design.lists}>
            <List sx={{ justifyContent: "center", alignItems: "start", display: "flex", flexDirection: "column" }}>
              <ListItem sx={{ cursor: "pointer", display: "flex", justifyContent: "center" }} onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('/footerabout') }}><Link sx={{ color: 'black' }}>About</Link></ListItem>
              <ListItem sx={{ cursor: "pointer", display: "flex", justifyContent: "center" }} onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('/footertermsandcondition') }}><Link sx={{ color: 'black' }}>Terms and conditions</Link></ListItem>
              <ListItem sx={{ cursor: "pointer", display: "flex", justifyContent: "center" }} onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('/footerprivacy') }}><Link sx={{ color: 'black' }}>Privacy policy</Link></ListItem>
              <ListItem sx={{ cursor: "pointer", display: "flex", justifyContent: "center" }} onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('/footerfaq') }}><Link sx={{ color: 'black' }}>Faq</Link></ListItem>
              <ListItem sx={{ cursor: "pointer", display: "flex", justifyContent: "center" }}><Link sx={{ color: 'black' }}>Pages</Link></ListItem>
            </List>
          </Grid>
        </Grid>

        <Grid item container lg={3} md={3} sm={6} xs={12} sx={design.lists}>
          <Grid item sx={{ width: "100%" }}>
            <Typography variant='h6' textAlign="center" sx={design.head} ><b>Streams</b></Typography>
          </Grid>
          <Grid item containersx={design.lists}>
            <List sx={{ justifyContent: "center", alignItems: "start", display: "flex", flexDirection: "column" }}>
              <ListItem onClick={() => navigate(`/filterStreams/Management`)} sx={{ cursor: "pointer", display: "flex", justifyContent: "center" }}>Management</ListItem>
              <ListItem onClick={() => navigate(`/filterStreams/Engineering`)} sx={{ cursor: "pointer", display: "flex", justifyContent: "center" }}>Engineering</ListItem>
              <ListItem onClick={() => navigate(`/filterStreams/Pharmacy`)} sx={{ cursor: "pointer", display: "flex", justifyContent: "center" }}>Pharmacy</ListItem>
              <ListItem onClick={() => navigate(`/filterStreams/Dental`)} sx={{ cursor: "pointer", display: "flex", justifyContent: "center" }}>Dental</ListItem>
              <ListItem onClick={() => navigate(`/listings`)} sx={{ cursor: "pointer", display: "flex", justifyContent: "center" }}>View all categories</ListItem>
            </List>
          </Grid>
        </Grid>

        <Grid item container lg={3} sx={design.lists}>
          <Grid item sx={{ width: "100%" }}>
            <Typography variant='h6' textAlign="center" sx={design.head} ><b>Contact</b></Typography>
          </Grid>
          <Grid item container sx={design.lists}>
            <List sx={{ justifyContent: "center", alignItems: "start", display: "flex", flexDirection: "column" }}>
              <ListItem sx={{ display: "flex", justifyContent: "center" }}>New Delhi, 110053</ListItem>
              <ListItem sx={{ display: "flex", justifyContent: "center" }}>+91 9560377947</ListItem>
              <ListItem sx={{ display: "flex", justifyContent: "center" }}>info@collegepadho.com</ListItem>
            </List>
          </Grid>
        </Grid>

        <Grid item container lg={3} sx={design.lists}>
          <Grid item sx={{ width: "100%" }} >
            <Typography variant='h6' textAlign="center" sx={design.head}><b>Follow us</b></Typography>
          </Grid>
          <Grid item container sx={design.lists}>
            <List sx={{ justifyContent: "center", alignItems: "start", display: "flex", flexDirection: "row" }}>
              <ListItem sx={{ display: "flex", justifyContent: "center" }}><FacebookIcon sx={{ color: "gray", cursor: "pointer" }} /></ListItem>
              <ListItem sx={{ display: "flex", justifyContent: "center" }}><TwitterIcon sx={{ color: "gray", cursor: "pointer" }} /></ListItem>
              <ListItem sx={{ display: "flex", justifyContent: "center" }}><InstagramIcon sx={{ color: "gray", cursor: "pointer" }} /></ListItem>
              <ListItem sx={{ display: "flex", justifyContent: "center" }}><LinkedInIcon sx={{ color: "gray", cursor: "pointer" }} /></ListItem>
            </List>
            <Button onClick={handleOpen} variant='contained' sx={{ borderRadius: "30px", color: "white", p: "10px 12px" }}>Admission Enquiry</Button>
          </Grid>
        </Grid>

      </Grid>
      <Divider sx={{ m: "20px", border: "2px solid #ff9800" }} />
      <Box id="footerItem" sx={{ height: "50px", display: "flex", justifyContent: "right", alignItems: "center" }}>
        <Link onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('/footerabout') }} id="terms" sx={{ cursor: "pointer", fontSize: "12px", ml: "20px", mr: "20px", textDecoration: "none", color: "#555" }}>About</Link>
        <Divider orientation='vertical' sx={{ height: "20%" }} />
        <Link onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('/footertermsandcondition') }} id="terms" sx={{ cursor: "pointer", fontSize: "12px", ml: "20px", mr: "20px", textDecoration: "none", color: "#555" }}>Terms and conditions</Link>
        <Divider orientation='vertical' sx={{ height: "20%" }} />
        <Link onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('/footerprivacy') }} id="terms" sx={{ cursor: "pointer", fontSize: "12px", ml: "20px", mr: "20px", textDecoration: "none", color: "#555" }}>Privacy policy</Link>
        <Divider orientation='vertical' sx={{ height: "20%" }} />
        <Link onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('/footerfaq') }} id="terms" sx={{ cursor: "pointer", fontSize: "12px", ml: "20px", mr: "20px", textDecoration: "none", color: "#555" }}>Faq</Link>
        <Divider orientation='vertical' sx={{ height: "20%" }} />
        <Link onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('/') }} id="terms" sx={{ cursor: "pointer", fontSize: "12px", ml: "20px", mr: "20px", textDecoration: "none", color: "#555" }}>College Padho</Link>
      </Box>
      <Box sx={{ cursor: "pointer", position: "fixed", bottom: "70px", left: "50px", height: "fit-content", width: "fit-content", borderRadius: "50px", display: 'flex', alignItems: 'center' }}>
        <img src={whats} alt='whatsapp' height="50px" width="50px" />
        <span style={{ color: 'orange' }}>👈 Chat with Us!</span>
      </Box>
    </>
  )
}
