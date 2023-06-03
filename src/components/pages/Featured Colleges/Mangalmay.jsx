import { Box, Grid, Typography, Container, Button, Paper } from "@mui/material";
import React, { useEffect,useState } from "react";
import ExploreIcon from "@mui/icons-material/Explore";
import HomeIcon from "@mui/icons-material/Home";
import collegePadho from "../../assets/collegePadho.jpg";
import SchoolIcon from "@mui/icons-material/School";
import SendIcon from "@mui/icons-material/Send";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import CourseDetailInner1 from "./CourseDetailInner1";
import AmenitiesSection from "./FourthPaper";
import Placement from "./FifthPaper";
import Recruiters from "./SixthPaper";
import PhotoGallery from "./SeventhPaper";
import Contact from "./NinthPaper";
import TenthPaper from "./TenthPaper";
import mba from "../../assets/mba.jpg";
import Header from "../../Global/Header";
import Footer from "../../Global/Footer";
import { useParams } from "react-router-dom";
import empty from '../../assets/noimage.gif'
import axios from "axios";
import BASE_URL from "../../constant";
import Loader from "../../Loader";
import ModalPage from "../../Global/ModalPage";

const IndividualCollegeInfo = () => {
     const [open , setOpen] = useState(false);
    const handleOpen = () =>setOpen(true);
useEffect(()=>{
  setTimeout(()=>{
handleOpen()
  },3000)
},[])
  const param = useParams()
  const navBars ={info:false,course:false,amenities:false,placement:false,gallery:false,video:false,contact:false,reviews:false}
  const [tabBars,setTabBars] = useState({info:true,course:false,amenities:false,placement:false,gallery:false,video:false,contact:false,reviews:false})
  const {id} = param
  const [collegeData,setCollege] = useState([])
  const [readMore,setReadMore] = useState(false);
  const collegeInfo=()=>{
    axios.get(`${BASE_URL}/api/collegeinfo/${id}`).then((res)=>{setCollege([res.data.response]);}).catch((err)=>{console.log(err);})
  }
  useEffect(collegeInfo,[id])
  const [data] = collegeData
  if(collegeData.length > 0){
  return (
        <>
      <Container maxWidth={"xl"} disableGutters>
     <ModalPage open={open} setOpen={setOpen}/>
           <Header isBgColor={true} handleOpen={handleOpen}/>
        <Grid container spacing={2} mb="70px" sx={{position:'relative'}}>
          <Grid item xs={12} >
            <Grid container>
              <Grid item xs={12}>
                <Box sx={{ overflow: "hidden" }}>
                  <img
                  alt="pic"
                   src={data.collegeCover === null ?empty :`${BASE_URL}`+data.collegeCover.image}
                    style={{ position: "relative", scale: "1.3" }}
                    width="100%"
                    height="250px"
                  />
                </Box>
              </Grid>
              <Grid item xs={3}  sx={{bgcolor: "#1d3f7c",display:{xs:"none",sm:"none",md:"none",lg:"block"}}}></Grid>

              <Grid item   xs={12}  lg={6}  sx={{   bgcolor: "#1d3f7c",color: "white", p:"10px"}} >
                <Typography variant="h5"  sx={{ fontWeight: "500", mt: "2px", fontSize: "30px" }}>
                  {data.college.collegeName}
                </Typography>
                <Typography mt="2px">
                   {data.college.approvedBy}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between",     textAlign: "left",   mt: "2px",    flexWrap:"wrap"}}>
                  <Typography align="left"sx={{whiteSpace:"nowrap",mb:"3px"}}>Established In: {data.college.established_in}</Typography>
                  <Typography mb="3px">College Type: {data.college.college_type}</Typography>
                  <Typography mb="3px">Total No. of Courses Offered: {data.college.total_course_offered}</Typography>
                </Box>

                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "12px",
                    mt: "2px",}}  >
                  <ExploreIcon sx={{mr:"10px"}}/>
                  {data.college.fullAddress},  {data.college.state},  {data.college.country},
                </Typography>
              </Grid>
              <Grid
                item
                xs={4}
                lg={3}
                
                sx={{
                  bgcolor: "#1d3f7c",
                  color: "white",display:{xs:"none",sm:"none",md:"none",lg:"block"}}} >
                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
                  <Box mr="5px">
                    <Typography >Unreviewed</Typography>
                    <Typography sx={{fontSize:"12px",fontStyle:"italic"}}>0 Reviews</Typography>
                  </Box>
                  <Box sx={{bgcolor:"#32a067",p:"13px",borderRadius:"8px 8px 8px 0px"}}>
                    <Typography>0.0</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            <Grid item >
              <Box  sx={{   position: "absolute",top: "180px",  left: "60px",    height: "150px",    width: "150px",  display: { xs: "none", sm: "none", md: "none", lg: "block" },}}>
                <img alt="pic" src={data.collegeLogo === null ?`${BASE_URL}`+data.college.image :`${BASE_URL}`+data.collegeLogo.image} height="100%" width="100%" />
              </Box>
            </Grid>
              <Grid item xs={12}
                sx={{
                  display: "flex",
                  p: "16px",
                  flexWrap: "wrap",
                  bgcolor: "#004DDA",
                  color: "white",
                  justifyContent:{sm:"space-evenly"}
                }} >
                    {data.collegeDescription.length > 0 ?<Typography sx={{opacity:tabBars.info?1:'0.6'}} onClick={()=>{const element = document.getElementById('InfoSection');element.scrollIntoView({behavior:'smooth',block:'center'});const newFi = {...navBars};newFi.info = true;setTabBars(newFi)}} mr="17px" fontSize="1.1rem">
                  Info
                </Typography>:""}
                  {data.collegeCourse.length > 0 ? <Typography sx={{opacity:tabBars.course?1:'0.6'}} onClick={()=>{const element = document.getElementById('courseSection');element.scrollIntoView({behavior:'smooth',block:'center'});const newFi = {...navBars};newFi.course = true;setTabBars(newFi)}} mr="17px" fontSize="1.1rem">
                  Course
                </Typography> :""}

                {data.collegeAmenities.length > 0 ?<Typography sx={{opacity:tabBars.amenities?1:'0.6'}} onClick={()=>{const element = document.getElementById('amenitySection');element.scrollIntoView({behavior:'smooth',block:'center'});const newFi = {...navBars};newFi.amenities = true;setTabBars(newFi)}} mr="17px" fontSize="1.1rem">
                  Amenties
                </Typography> :"" }
                    {data.collegePlacement.length > 0 ?<Typography sx={{opacity:tabBars.placement?1:'0.6'}} onClick={()=>{const element = document.getElementById('placementSection');element.scrollIntoView({behavior:'smooth',block:'center'});const newFi = {...navBars};newFi.placement = true;setTabBars(newFi)}} mr="17px" fontSize="1.1rem">
                  Placement
                </Typography> : ""}
                  {data.collegeGallery.length > 0 ?<Typography sx={{opacity:tabBars.gallery?1:'0.6'}} onClick={()=>{const element = document.getElementById('gallerySection');element.scrollIntoView({behavior:'smooth',block:'center'});const newFi = {...navBars};newFi.gallery = true;setTabBars(newFi)}}  mr="17px" fontSize="1.1rem">
                  Gallery
                </Typography> : ""}
                     {data.collegeVideoURL!== null ?<Typography sx={{opacity:tabBars.video?1:'0.6'}} onClick={()=>{const element = document.getElementById('videoSection');element.scrollIntoView({behavior:'smooth',block:'center'});const newFi = {...navBars};newFi.video = true;setTabBars(newFi)}} mr="17px" fontSize="1.1rem">
                  Video
                </Typography>: ""}
                  {data.collegeContact !==  null ?<Typography sx={{opacity:tabBars.contact?1:'0.6'}} onClick={()=>{const element = document.getElementById('contactSection');element.scrollIntoView({behavior:'smooth',block:'center'});const newFi = {...navBars};newFi.contact = true;setTabBars(newFi)}} mr="17px" fontSize="1.1rem">
                  Contact
                </Typography> : ""}
                <Typography sx={{opacity:tabBars.reviews?1:'0.6'}} onClick={()=>{const element = document.getElementById('reviewSection');element.scrollIntoView({behavior:'smooth',block:'center'});const newFi = {...navBars};newFi.reviews = true;setTabBars(newFi)}}  mr="17px" fontSize="1.1rem">
                  Reviews
                </Typography>
              </Grid>
         
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", alignItems: "center", p: "8px" }}>
              <Typography mt="2px" color="#004DDA">
                <HomeIcon sx={{ fontSize: "20px" }} />{" "}
              </Typography>
              <Typography fontSize="15px">&gt;</Typography>
              <Typography color="#004DDA" fontSize="15px" letterSpacing="2px">
                College{" "}
              </Typography>
              <Typography fontSize="15px">&gt;</Typography>
              <Typography fontSize="15px" letterSpacing="2px">
                Group of institutions
              </Typography>
            </Box>
          </Grid>
          <Grid item justifyContent="center" display="flex" xs={12}>
            <Box>
              <img alt="pic" src={collegePadho} height="100%" width="100%" />
            </Box>
          </Grid>

          <Grid item xs={12} >
            <Grid container spacing={1}>
              <Grid item xs={12} lg={8}>
                <Box mb="10px" ml="10px">
                  { data.college.stream.map((item)=>{
                    return (<Button
                    key={item}
                    variant="outlined"
                    color="success"
                    sx={{ height: "25px", mr: "5px" }}>
                    {item}
                  </Button>)
                  })}

                </Box>
                <Paper id="InfoSection" sx={{ p: "10px",height:"fit-content", ml:'12px' }} elevation={1}>
                  <Typography fontWeight="550" fontSize="22px">
                    About - {data.college.shortDescription}
                  </Typography>
                  {data.collegeDescription.slice(0,1).map((item,index)=>{
                    return <Typography key={index} variant="h4">
                    <b>
                      {item.title}
                    </b>
                    <Typography >{!readMore?item.description.slice(0,100)+'...':item.description}</Typography>
                  </Typography>
                  })}
                  {data.collegeDescription.slice(1).map((item,index)=>{
                    if(readMore){
                             return ( <Typography key={index+2}  variant="h6">
                    <b>
                      {item.title}
                    </b>
                    <Typography >{item.description}</Typography>
                  </Typography>)
                    }
                  else{
                    return ("")
                  }
                  })}
                  <Button onClick={()=>setReadMore(prev=>{return !prev})} disableRipple
                    sx={{bgcolor: "#004DDA", borderRadius: "25px",height: "30px",  fontSize: "11px",mt: "8px",color:"white"}}variant="contained" >
                    {!readMore?'Read More':'Read less'}
                  </Button>
                </Paper>
              </Grid>
              <Grid
                item
                xs={3.5}
                height="fit-content"
                sx={{
                  position: "sticky",
                  top: "100px",
                  display: { xs: "none", sm: "none", md: "none", lg: "block" },
                   }} >
                 <Paper elevation={1} sx={{ p: "10px", height: "100%" }}>
                  <Button onClick={handleOpen}
                    variant="contained"
                    sx={{ bgcolor: "#004dda", m: "5px", p: "12px",color:"white" }}
                    fullWidth
                  >
                    <SchoolIcon />
                    Apply Now
                  </Button>
                  <Button onClick={handleOpen}
                    variant="contained"
                    sx={{ bgcolor: " #663399", m: "5px", p: "12px",color:"white" }}
                    fullWidth
                  >
                    <SendIcon />
                    Free Counselling
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "black",
                      borderColor: "black",
                      m: "2px",
                      p: "12px",
                    }}
                    fullWidth
                  >
                    <FavoriteIcon />
                    <b>Add to Wishlist</b>
                  </Button>
                  <Typography align="center" fontSize="11px" m="2px">
                    No money charged in this step
                  </Typography>
                </Paper>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    mt: "30px",
                    position: "sticky",
                    top: "50px",
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      color: "#303f9f",
                      borderRadius: "25px",
                      borderColor: "#303f9f",
                      fontSize: "13px",
                    }} >
                    <FacebookIcon />
                    Share
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "#1da1f2",
                      borderRadius: "25px",
                      borderColor: "#1da1f2",
                      fontSize: "13px",
                    }}>
                    <TwitterIcon />
                    TWEET
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "#dd4b39",
                      borderRadius: "25px",
                      borderColor: "#dd4b39",
                      fontSize: "13px",
                    }}
                  >
                    <PinterestIcon />
                    Pin
                  </Button>
                </Box>
              </Grid>

              <Grid item xs={12} lg={8}>
                <Paper elevation={3} sx={{ p: "10px" }}>
                  <Typography variant="h6" ml="10px">
                    <b>Awards and recognitions</b>
                  </Typography>
                  <Box sx={{ lineHeight: "25px" }}>
                    <ul>
                      {data.college.awards.map((item)=>{
                        return ( <li key={item}>
                        <Typography variant="body1">
                          {item}
                        </Typography>
                      </li>)})}</ul>
                  </Box>
                </Paper>
              </Grid>
              <Grid id="courseSection" item xs={12} md={12} lg={8}>
                <Paper sx={{ p: "10px",ml:"10px" }} elevation={3}>
                  <Typography variant="h6">
                    <b>Course details</b>
                  </Typography>
                  {/* component */}
                  {data.collegeCourse.map((item)=>{
                    return (<div key={item._id}>
                             <CourseDetailInner1 data={item} handleOpen={handleOpen}/>
                               <Box sx={{ borderBottom: "1px dashed gray", mt: "8px" }}></Box>
                    </div>)
                  })}
           
                </Paper>
              </Grid>

          {data.collegeAmenities.length > 0 ? <Grid id={"amenitySection"}   item xs={12} lg={8} ml="10px">
                <AmenitiesSection data={data.collegeAmenities}/>
              </Grid>:""}
              {data.collegePlacement.length > 0? <Grid id="placementSection" item xs={12} lg={8} ml="10px">
                <Placement data={data.collegePlacement} />
              </Grid>:""}   

              <Grid item xs={12} lg={8} ml="10px">
                <Recruiters data={data.collegeRecruitersImage} />
              </Grid>
              <Grid id="gallerySection" item xs={12} lg={8} ml="10px">
                <PhotoGallery data={data.collegeGallery} />
              </Grid>
              {data.collegeVideoURL!== null ? <Grid item id="videoSection"  xs={12}>
                <iframe title="youtube" style={{overflow:'hidden'}} width="70%" height="345" src={data.collegeVideoURL === null?"":data.collegeVideoURL.youTubeUrl}></iframe>
              </Grid> : ""}
              <Grid id="contactSection" item xs={12} lg={8} ml="10px">
                <Contact data={data.collegeContact}/>
              </Grid>

              <Grid item xs={12} lg={8} mt="-8px" ml="10px">
                <Paper sx={{ borderBottom: "3px solid #d2d8dd" }}></Paper>
              </Grid>
              <Grid id="reviewSection" item xs={12} lg={8} ml="10px">
                <TenthPaper />
              </Grid>

              <Grid item xs={12} sx={{display: "flex", justifyContent: "center",alignItems: "center",mt: "35px",}} >
                <Box height="85%" width="65%" mt="10px">
                  <img alt="pic" src={mba} width="100%" height="100%" />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Footer/>
      </Container>
    </>
  );
  }
  if(collegeData.length === 0){
    return (<Loader/>)
  }

};

export default IndividualCollegeInfo;
