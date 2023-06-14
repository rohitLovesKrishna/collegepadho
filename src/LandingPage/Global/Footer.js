import { Box,Button,Divider,Grid,Link, List, ListItem, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../../components/Global/Footer.css';
import whats from '../../components/assets/whatsapp_icon-icons.com_62756.png'

export default function Footer() {

const design = {
  head:{width:"100%",bgcolor:"#ff9800",color:"white"},
  lists:{justifyContent:"center",alignItems:"center"}
}
  return (
    <>

        <Grid container sx={{justifyContent:"center",alignItems:"flex-start",width:'100%'}} spacing={2}>
          <Grid item container lg={3} md={3} sm={6} xs={12} sx={design.lists}>
            <Grid item sx={{width:"100%"}}>
               <Typography variant='h6'  textAlign="center" sx={design.head} ><b>Quick Links</b></Typography>
            </Grid>
            <Grid item container sx={design.lists}>
               <List sx={{justifyContent:"center",alignItems:"start",display:"flex",flexDirection:"column"}}>
                           <ListItem  sx={{cursor:"pointer",display:"flex",justifyContent:"center"}} ><Link sx={{color:'black'}}>About</Link></ListItem>
                      <ListItem  sx={{cursor:"pointer",display:"flex",justifyContent:"center"}} ><Link sx={{color:'black'}}>Terms and conditions</Link></ListItem>
                      <ListItem  sx={{cursor:"pointer",display:"flex",justifyContent:"center"}} ><Link sx={{color:'black'}}>Privacy policy</Link></ListItem>
                      <ListItem  sx={{cursor:"pointer",display:"flex",justifyContent:"center"}}  ><Link sx={{color:'black'}}>Faq</Link></ListItem>
                      <ListItem  sx={{cursor:"pointer",display:"flex",justifyContent:"center"}}><Link sx={{color:'black'}}>Pages</Link></ListItem>
            </List>
            </Grid>
          </Grid>

            <Grid item container lg={3} md={3} sm={6} xs={12} sx={design.lists}>
            <Grid item sx={{width:"100%"}}>
               <Typography variant='h6'  textAlign="center"  sx={design.head} ><b>Streams</b></Typography>
            </Grid>
            <Grid item containersx={design.lists}>
               <List sx={{justifyContent:"center",alignItems:"start",display:"flex",flexDirection:"column"}}>
                        <ListItem sx={{cursor:"pointer",display:"flex",justifyContent:"center"}}>Management</ListItem>
                      <ListItem sx={{cursor:"pointer",display:"flex",justifyContent:"center"}}>Engineering</ListItem>
                      <ListItem sx={{cursor:"pointer",display:"flex",justifyContent:"center"}}>Pharmacy</ListItem>
                      <ListItem sx={{cursor:"pointer",display:"flex",justifyContent:"center"}}>Dental</ListItem>
                      <ListItem sx={{cursor:"pointer",display:"flex",justifyContent:"center"}}>View all categories</ListItem>
            </List>
            </Grid>
          </Grid>

                <Grid item container lg={3}sx={design.lists}>
            <Grid item sx={{width:"100%"}}>
               <Typography variant='h6'  textAlign="center"  sx={design.head} ><b>Contact</b></Typography>
            </Grid>
            <Grid item container sx={design.lists}>
               <List sx={{justifyContent:"center",alignItems:"start",display:"flex",flexDirection:"column"}}>
                      <ListItem  sx={{display:"flex",justifyContent:"center"}}>New Delhi, 110053</ListItem>
                      <ListItem  sx={{display:"flex",justifyContent:"center"}}>+91 9560377947</ListItem>
                      <ListItem  sx={{display:"flex",justifyContent:"center"}}>info@collegepadho.com</ListItem>
            </List>
            </Grid>
          </Grid>

           <Grid item container lg={3} sx={design.lists}>
            <Grid item sx={{width:"100%"}} >
               <Typography variant='h6'  textAlign="center" sx={design.head}><b>Follow us</b></Typography>
            </Grid>
            <Grid item container sx={design.lists}>
               <List sx={{justifyContent:"center",alignItems:"start",display:"flex",flexDirection:"row"}}>
                        <ListItem sx={{display:"flex",justifyContent:"center"}}><FacebookIcon sx={{color:"gray",cursor:"pointer"}}/></ListItem>
                      <ListItem sx={{display:"flex",justifyContent:"center"}}><TwitterIcon sx={{color:"gray",cursor:"pointer"}}/></ListItem>
                      <ListItem sx={{display:"flex",justifyContent:"center"}}><InstagramIcon sx={{color:"gray",cursor:"pointer"}}/></ListItem>
                      <ListItem sx={{display:"flex",justifyContent:"center"}}><LinkedInIcon sx={{color:"gray",cursor:"pointer"}}/></ListItem>
            </List>
            <Button  variant='contained' sx={{borderRadius:"30px",color:"white",p:"10px 12px"}}>Admission Enquiry</Button>
            </Grid>
          </Grid>

            </Grid>
       <Divider sx={{m:"20px",border:"2px solid #ff9800"}}/>
       <Box id="footerItem" sx={{height:"50px",display:"flex",justifyContent:"right",alignItems:"center"}}>
        <Link id="terms" sx={{ cursor:"pointer",fontSize:"12px",ml:"20px",mr:"20px",textDecoration:"none",color:"#555"}}>About</Link>
        <Divider orientation='vertical' sx={{height:"20%"}}/>
         <Link id="terms" sx={{cursor:"pointer",fontSize:"12px",ml:"20px",mr:"20px",textDecoration:"none",color:"#555"}}>Terms and conditions</Link>
           <Divider orientation='vertical' sx={{height:"20%"}}/>
          <Link id="terms" sx={{cursor:"pointer",fontSize:"12px",ml:"20px",mr:"20px",textDecoration:"none",color:"#555"}}>Privacy policy</Link>
            <Divider orientation='vertical' sx={{height:"20%"}}/>
           <Link id="terms" sx={{cursor:"pointer",fontSize:"12px",ml:"20px",mr:"20px",textDecoration:"none",color:"#555"}}>Faq</Link>
             <Divider orientation='vertical' sx={{height:"20%"}}/>
            <Link id="terms" sx={{cursor:"pointer",fontSize:"12px",ml:"20px",mr:"20px",textDecoration:"none",color:"#555"}}>College Padho</Link>
       </Box>
       <Box  sx={{cursor:"pointer",position:"fixed",bottom:"70px",left:"50px",height:"fit-content",width:"fit-content",borderRadius:"50px",display:'flex',alignItems:'center'}}>
            <img src={whats} alt='whatsapp' height="50px" width="50px"/>
            <span style={{color:'orange'}}>👈 Chat with Us!</span>
           </Box>
    </>
  )
}
