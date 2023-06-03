import {CardContent,CardMedia, Button,Box, Card, Typography, Grid, Container } from '@mui/material'
import {useState,useEffect} from 'react'
import BarLine from '../Global/BarLine'
import Slider from 'react-slick'
import './Master.css'
import {  Explore } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import BASE_URL from '../constant'
import axios from 'axios'



const FeaturedColleges = () => {
const navigate =useNavigate();
const [cardApi,setCardApi] = useState([{}])
const [courseApi,setCourseApi] = useState([])
const fetchCollege=()=>{axios.get(`${BASE_URL}/api/college`).then((res)=>{setCardApi(res.data.responses.filter((ele)=>{return ele.isPopular === true}))}).catch((err)=>{console.log(err);})}
useEffect(()=>fetchCollege(),[])
 const fetchCourse=()=>{axios.get(`${BASE_URL}/api/course`).then((res)=>{setCourseApi(res.data.response)}).catch((err)=>{console.log(err);})}
 useEffect(()=>fetchCourse(),[])
 const [imageIndex,setImageIndex] = useState(0)
     const settings = {
        infinite:true,
        arrows:false,
        dots:true,
        lazyLoad:true,
        speed:300,
        slidesToShow:3,
        centerMode:true,
        centerPadding:0,
        beforeChange : (current,next)=>setImageIndex(next),
    }
    console.log(cardApi);
    if(cardApi.length > 0){
return (
    <>
    <Container disableGutters maxWidth="xl">
      {cardApi.length > 3?    <Box sx={{bgcolor:" #EAEAEA;",pt:"50px",pb:"10px"}}>
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
<BarLine/>
        </Box>
        <Box sx={{mt:"20px",mb:"50px"}}>
    <Typography fontFamily=" poppins,Helvetica,sans-serif;" color="#333" textAlign="center" fontWeight={540} fontSize="1.875rem;">Featured colleges</Typography>
</Box>

{/* courousal box */}
<Box id="carousal">
<Slider {...settings} className='my-slider'>
    {cardApi.map((item,index)=>{
        return (
            <div id='effect7' key={item._id}  className={index === imageIndex ? "slide activeSlide" : "slide"}>
           <Card onClick={()=>navigate(`/college/${item._id}`)}  sx={{width:"340px"}}>
      <CardMedia 
      id="imageBoxFeaturedClg"
        sx={{ height: 220 }}
        image={`${BASE_URL}`+item.image}
        title="pic"
      />
        <Typography id="readmoretext" fontWeight="700" fontSize="10px" sx={{borderRadius:"50px",p:"2px 8px",bgcolor:"white",color:"black",position:"absolute",top:125,zIndex:99,left:135,textTransform:"unset"}}>Reade more</Typography>
      <Typography fontWeight="700" fontSize="10px" sx={{p:"2px 8px",bgcolor:"rgba(0,0,0,.6);",color:"white",position:"absolute",top:35,zIndex:99,left:15}}>COLLEGE</Typography>
      <CardContent>
        <Typography color=" #004dda;" gutterBottom variant="h5" component="div">
          {item.collegeName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {item.shortDescription}
        </Typography>
        <Button  startIcon={<Explore/>} sx={{color:"#999;",textTransform:"unset"}}>Get directions</Button>
          <Grid container sx={{justifyContent:"space-evenly",alignItems:"center",}}>
    {courseApi.filter((ele)=>{return ele.cid === item._id}).map((course,index)=>{
         return ( <Grid item key={course._id} ml="0px" sx={{border:"1px solid green",width:"fit-content",p:"1px"}}>
             <Typography textAlign="center" fontWeight={600} fontSize="8px" sx={{color:"green",textTransform:"uppercase",alignItems:"center",justifyContent:"center"}}>
                             {course.courseName}
             </Typography>
         </Grid>)
        })}
          </Grid>

        <Box ml="0px" sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <Button variant='contained' sx={{fontSize:"7px",width:"20px",height:"20px"}} size="small">Apply Now</Button>
            <Box sx={{display:"flex"}}>
                <Typography mr="10px" fontSize="10px">
                    Unreviewed <br/> 0 Reviews
                </Typography>
        <Box sx={{borderRadius:"6px",p:"0px 10px",bgcolor:"green",color:"white",display:"flex",alignItems:"center"}}>
            0.0
        </Box>
            </Box>
        </Box>
      </CardContent>
    </Card>
            </div>
        )
    })}
</Slider>
</Box>
<Box sx={{mt:"20px",display:"flex",alignItems:"flex-end",justifyContent:"right",width:"90%"}}>
<Button   size='small' sx={{borderRadius:"100px",color:"white",p:"11px 40px",bgcolor:"#ff9800",textTransform:"unset","&:hover":{bgcolor:"#ff9800",color:"black"}}}>View all</Button>
</Box>
    </Box> : ""}
    </Container>
    </>
  )
    }
  
}

export default FeaturedColleges