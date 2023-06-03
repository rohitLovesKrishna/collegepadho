import { AppBar, Box, Button, Container, Grid, Paper, Toolbar, Typography } from '@mui/material';
import React from 'react';
import collegecartoon from '../assets/cartooncllg.jpg'
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import Header from '../Global/Header';
import college from '../assets/college.jpg';
import InputBase from '@mui/material/InputBase';
import Footer from '../Global/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import clg2 from '../assets/clg2.jpg';
import clg3 from '../assets/clg3.jpg';
import clg4 from '../assets/clg4.jpg';
import clg5 from '../assets/clg5.jpg';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ModalPage from '../Global/ModalPage';
const BlogInnerPage = () => {
  const [open , setOpen] = useState(false);
const handleOpen = () =>setOpen(true);
    const param= useParams() 
  const [blogApi,setBlogApi]=useState([])
  const [box , setBox] = useState(false)
    
    const getApi=()=>{
        axios.get("https://www.codebrain.codes/api/blog").then((res)=>{console.log(res);setBlogApi(res.data.response.filter((fil)=>{return fil._id ==param.vid }))}).catch((err)=>{console.log(err)})
      }
      useEffect(()=>{
       
          getApi();
      },[])
     

      const boxHandler=()=>{
        setBox(prev=>{return !prev});
       }
    return (
        <>
           <ModalPage open={open} setOpen={setOpen}/>
            <Container maxWidth={"xl"} sx={{bgcolor:"#f8f8f8"}}>
                <Header isBgColor={true} handleOpen={handleOpen}/>
                <Grid container   mb="50px" mt="80px" spacing={1.2}>
                     <Grid item container xs={12} lg={8}>
                    <Grid item xs={12} sx={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
            <Box sx={{width:'80%', mt:'5px',mb:"10px"}}>
              <img src={college}  style={{cursor:'pointer', width:'100%', height:'100%'}}/>
            </Box>
        </Grid>
                    <Grid item xs={12}  >
                        <Box height="500px">
                            <img src={blogApi.length==0?collegecartoon:"http://codebrain.codes"+blogApi[0].image} height="100%" width="100%"/>
                        </Box>
                    </Grid>
                    <Grid item xs={12}  >
                        <Paper sx={{mt:"10px"}}>
                        <Grid container xs={12} spacing={2} p="25px">
                            <Grid item xs={12} >
                                <Typography variant='h4' mb="10px">{blogApi.length==0?"Please Wait......":blogApi[0].title}</Typography>
                                <Box sx={{ display: "flex", alignItems: "center",flexWrap:"wrap", color: "#777" }}>
                                    <Typography sx={{ display: "flex", alignItems: "center", mr: "15px",fontSize:"1.2rem" }}><FolderOpenIcon sx={{fontSize:"22px",mr:"5px"}}/>{blogApi.length==0?"Please Wait......":blogApi[0].stream}</Typography>
                                    <Typography sx={{ display: "flex", alignItems: "center", mr: "15px",fontSize:"1.2rem"  }}><CalendarTodayIcon sx={{fontSize:"20px",mr:"5px"}}/>{blogApi.length==0?"Please Wait......":blogApi[0].createdAt.slice(0,10)}</Typography>
                                    <Typography sx={{ display: "flex", alignItems: "center", mr: "15px",fontSize:"1.2rem"  }}><Person3OutlinedIcon  sx={{fontSize:"22px"}}/>College Padho</Typography>
                                    <Typography sx={{ display: "flex", alignItems: "center", mr: "15px",fontSize:"1.2rem"  }}><ChatBubbleOutlineOutlinedIcon sx={{fontSize:"22px"}}/>(0)Comments</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12}  sx={{color:"#555"}}>
                                <Typography sx={{fontSize:"1.2rem",}}>{blogApi.length==0?"Please Wait......":blogApi[0].shortDescription} </Typography>
                            </Grid>
                            <Grid item xs={12}  sx={{color:"#555"}}>
                                <Typography variant='h4' sx={{fontSize:"2.39rem",fontWeight:"600",color:"black",mb:"8px"}}>{blogApi.length==0?"Please Wait......":blogApi[0].mainTitle}</Typography>
                            </Grid>

                            {
                                blogApi.length==0?"Please Wait......":blogApi[0].content.map((ele)=>{
                                    return (
                                        <Grid item container xs={12} >
                                        <Grid item xs={12} >
                                          <Typography variant='h4'>{ele.title}</Typography>
                                        </Grid>
        
                                        <Grid item xs={12}>
                                          <Typography sx={{fontSize:"1.2rem",color:"#555"}}>{ele.description}</Typography>
                                        </Grid>
        
                                    </Grid>
                                    )
                                })

                            }
                            
                        </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h5' borderBottom="1px solid #6c757d" pb="25px">Comments</Typography>
                    </Grid>
                    <Grid item xs={12} >
                        <Box mb="15px" >
                        <Typography variant='h5' mb="6px" >Leave a comment</Typography>
                        <input style={{height:"150px",width:"100%",bgcolor:"white",outline:"none"}} placeholder='Comment' />
                        </Box>
                        <Button variant='contained' sx={{width:"150px",height:"50px"}} size='large'> Submit</Button>
                    </Grid>
                     
                     </Grid >



                     <Grid item lg={4} sx={{ml:"10",display:{xs:"none",sm:"none",md:"none",lg:"block"}}}>

            <Grid item xs={10} sm={10}  md={10} lg={10} sx={{mt:'15px'}}>
            <Typography variant='body' fontWeight={600} sx={{color:'#757575'}}>Title, Description, Category</Typography>
            <Box onClick={boxHandler} sx={{bgcolor:'white', padding:'1px', mt:'10px', display:'flex', justifyContent:'space-between', alignItems:'center', border:'0.3px solid #e0e0e0', borderRadius:'6px', boxShadow:box==true?"0px 0px 4px 0px rgba(23,75,232,1)": "" }}>
                <InputBase placeholder='Search...'/>
                <Button variant='contained' color='primary' size='small' sx={{margin:'4px 2px 4px 0px'}}>Search</Button>
            </Box>
            <Typography fontWeight={600} variant='body1' sx={{mt:'25px', color:'#757575'}}>Latest post</Typography>
            <hr></hr>


            <Box sx={{display:'flex',  alignItems:'center', mt:'15px', }}>
              <Box id='rightFirstImg' sx={{width:'125px', height:'100px',  mr:'10px'}}>
              <img src={clg2} width='100px' height='100px' />
              </Box>
              <Box>
                <Typography variant='subtitle2' sx={{color:'#9e9e9e', }}>information technology - 21 Nov 2022</Typography>
                <Typography variant='subtitle' fontWeight='500' sx={{color:'gray'}}>Introduction  The "Bachelor In Computer...</Typography>
              </Box>
            </Box>

              <Box sx={{display:'flex', alignItems:'center', mt:'20px' }}>
              <Box id='secondFirstImg' sx={{width:'125px', height:'100px' , mr:'10px'}}>
              <img src={clg3} width='100px' height='100px'/>
              </Box>
              <Box>
                <Typography variant='subtitle2' sx={{color:'#9e9e9e' ,}}>Management - 16 Nov 2022</Typography>
                <Typography variant='subtitle' fontWeight='500' sx={{color:'gray'}}>It Is Very Important For You To Choose A Good BBA...</Typography>
              </Box>
            </Box>

             <Box sx={{display:'flex', alignItems:'center', mt:'20px' }}>
              <Box id='secondFirstImg' sx={{width:'125px', height:'100px', mr:'10px'}}>
              <img src={clg4} width='100px' height='100px'/>
              </Box>
              <Box>
                <Typography variant='subtitle2' sx={{color:'#9e9e9e' ,}}>Engineering - 12 Nov 2022</Typography>
                <Typography variant='subtitle' fontWeight='500' sx={{color:'gray'}}>Electrical And Electronics Engineers Are Frequently At...</Typography>
              </Box>
            </Box>

             <Box sx={{display:'flex',  alignItems:'center', mt:'20px' }}>
              <Box id='secondFirstImg' sx={{width:'125px', height:'100px',  mr:'10px'}}>
              <img src={clg5} width='100px' height='100px'/>
              </Box>
              <Box>
                <Typography variant='subtitle2' sx={{color:'#9e9e9e' ,}}>commerce and banking - 09 Nov 2022</Typography>
                <Typography variant='subtitle' fontWeight='500' sx={{color:'gray'}}>The Bachelor Of Commerce, Or B. Com. Is The Most...</Typography>
              </Box>
            </Box>

            <Box sx={{mt:'25px'}}>
              <Typography variant='body1'  fontWeight={600} sx={{color:'#757575', }}>Categories</Typography>
            </Box>

            <hr></hr>
            <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center' ,color:'#757575'}}>
              <Typography variant='body' fontWeight={600}>Management</Typography>
              <Typography  variant='body' fontWeight={600}>{`(51)`}</Typography>
            </Box>

             <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', mt:'4px', color:'#757575'}}>
              <Typography  variant='body' fontWeight={600}>Engineering</Typography>
              <Typography  variant='body' fontWeight={600}>{`(35)`}</Typography>
            </Box>

             <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center' , mt:'4px', color:'#757575'}}>
              <Typography  variant='body' fontWeight={600}>information technology</Typography>
              <Typography  variant='body' fontWeight={600}>{`(9)`}</Typography>
            </Box>

             <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center' , mt:'4px', color:'#757575'}}>
              <Typography   variant='body'fontWeight={600}>Management</Typography>
              <Typography  variant='body' fontWeight={600}>{`(1)`}</Typography>
            </Box>

             <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center' , mt:'4px', color:'#757575'}}>
              <Typography  variant='body' fontWeight={600}>commerce and banking</Typography>
              <Typography  variant='body' fontWeight={600}>{`(7)`}</Typography>
            </Box>

             <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center' , mt:'4px', color:'#757575'}}>
              <Typography   variant='body'fontWeight={600}>Education</Typography>
              <Typography   variant='body'fontWeight={600}>{`(12)`}</Typography>
            </Box>

             <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center' , mt:'4px', color:'#757575'}}>
              <Typography   variant='body'fontWeight={600}>Medical</Typography>
              <Typography   variant='body'fontWeight={600}>{`(1)`}</Typography>
            </Box>
           
            </Grid>
            

        </Grid>
                     </Grid>
                <Footer/>
            </Container>
        </>
    );
}

export default BlogInnerPage;