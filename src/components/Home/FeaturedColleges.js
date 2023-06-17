import { CardContent, CardMedia, Button, Box, Card, Typography, Grid, Container } from '@mui/material'
import { useState, useEffect } from 'react'
import BarLine from '../Global/BarLine'
import Slider from 'react-slick'
import './Master.css'
import { useNavigate } from 'react-router-dom'
import BASE_URL from '../constant'
import axios from 'axios'



const FeaturedColleges = () => {
  const navigate = useNavigate();
  const [cardApi, setCardApi] = useState([{}])
  const [courseApi, setCourseApi] = useState([])
  const fetchCollege = () => { axios.get(`${BASE_URL}/api/college`).then((res) => { setCardApi(res.data.responses.filter((ele) => { return ele.isPopular === true })) }).catch((err) => { console.log(err); }) }
  useEffect(() => fetchCollege(), [])
  const fetchCourse = () => { axios.get(`${BASE_URL}/api/course`).then((res) => { setCourseApi(res.data.response) }).catch((err) => { console.log(err); }) }
  useEffect(() => fetchCourse(), [])
  const [imageIndex, setImageIndex] = useState(1)
  const settings = {
    infinite: true,
    arrows: false,
    dots: cardApi.length > 4 ? true : false,
    initialSlide: 1,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => setImageIndex(next),
  }

  if (cardApi.length > 0) {
    return (
      <>
        <Container disableGutters maxWidth="xl">
          {cardApi.length > 2 ? <Box sx={{ bgcolor: " #EAEAEA;", pt: "50px", pb: "10px" }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <BarLine />
            </Box>
            <Box sx={{ mt: "20px", mb: "50px" }}>
              <Typography fontFamily=" poppins,Helvetica,sans-serif;" color="#333" textAlign="center" fontWeight={540} fontSize="1.875rem;">Featured colleges</Typography>
            </Box>

            {/* courousal box */}
            <Box id="carousal">
              <Slider {...settings} className='my-slider'>
                {cardApi.map((item, index) => {
                  return (
                    <div key={item._id} className={index === imageIndex ? "slide activeSlide" : "slide"}>
                      <Card onClick={() => navigate(`/college/${item._id}`)} sx={{ width: "340px" }}>
                        <CardMedia
                          id="imageBoxFeaturedClg"
                          sx={{ boxSizing: 'border-box', aspectRatio: '9/7' }}
                          image={`${BASE_URL}` + item.image} title="pic" />
                        <Typography id="readmoretext" fontWeight="700" fontSize="10px" sx={{ whiteSpace: "nowrap", borderRadius: "50px", p: "2px 8px", bgcolor: "white", color: "black", position: "absolute", top: 125, zIndex: 99, left: 135, textTransform: "unset" }}>Reade more</Typography>
                        <Typography fontWeight="700" fontSize="10px" sx={{ p: "2px 8px", bgcolor: "rgba(0,0,0,.6);", color: "white", position: "absolute", top: 35, zIndex: 99, left: 15 }}>COLLEGE</Typography>
                        <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "200px" }}>
                          <Typography variant='h1' sx={{ color: '#1565c0', m: '0px 0px 5px 0px', fontSize: "14px" }}><b>{item.collegeName}</b></Typography>
                          <Typography fontWeight={400} sx={{ m: '0px 0px 5px 0px', fontSize: "12px" }}>{item.location},{item.country}</Typography>
                          <Typography sx={{ fontSize: '10px', m: '0px 0px 5px 0px', color: "gray" }}>{item.shortDescription.length > 0 ? item.shortDescription.slice(0, 100) : ""}</Typography>
                          <Grid container lg={12} md={12} sm={12} xs={12} ml="0px">
                            {courseApi.filter((ele) => { return ele.cid === item._id }).map((course, index) => {
                              return (
                                <Grid item key={course._id} sx={{ height: "fit-content", mr: "1px", width: "fit-content", border: '1px solid #388e3c', padding: '1px 5px 1px 5px', whiteSpace: "wrap" }}>
                                  <Typography sx={{ color: '#388e3c', fontSize: '10px' }}>{course.courseName}</Typography>
                                </Grid>)
                            }).slice(0, 3)}
                          </Grid>


                          <Box ml="0px" mt="10px" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "40px" }}>
                            <Button variant='contained' sx={{ fontSize: "6px", width: "20px", height: "20px", color: "white" }} size="small">Apply Now</Button>
                            <Box sx={{ display: "flex" }}>
                              <Typography mr="10px" fontSize="10px">
                                Unreviewed <br /> 0 Reviews
                              </Typography>
                              <Box sx={{ borderRadius: "6px", p: "0px 10px", bgcolor: "green", color: "white", display: "flex", alignItems: "center" }}>
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

          </Box> : ""}
        </Container >
      </>
    )
  }

}

export default FeaturedColleges