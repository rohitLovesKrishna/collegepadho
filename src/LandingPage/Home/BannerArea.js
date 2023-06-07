import { Box, Grid } from '@mui/material'
import '../../components/Home/Master.css'
import ContactForm from '../Global/ContactForm'
import '../Global/ContactForm.css';
const BannerArea = () => {
  return (
    <>
      <Box className="bannerAreaa">
        <Box height="100%">
          <Box sx={{ color: "white", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <Grid container justifyContent={'center'} alignItems={'center'}>
              <Grid item lg={6} sm={12} xs={12} sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
<div className="content" style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
          <h1 style={{textAlign:"center"}}>Welcome to College Padho</h1>
          <p style={{textAlign:"center"}}>
Discover colleges and their diverse streams on our website. Find the perfect fit for your academic journey with detailed information on admission criteria, courses, and faculty. Make informed decisions and pave the way for a successful future in just a few clicks. Start exploring now!</p>
</div>
              </Grid>
              <Grid item lg={6} sm={12} xs={12} >
                <ContactForm/>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default BannerArea