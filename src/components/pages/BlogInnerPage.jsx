import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
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
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ModalPage from '../Global/ModalPage';
import BASE_URL from '../constant';
const BlogInnerPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const param = useParams()
  const [blogApi, setBlogApi] = useState([]);
  const [streamsData, setStreams] = useState([]);
  const [blogApi2, setBlogApi2] = useState([])

  const [box, setBox] = useState(false)
  const fetchStream = () => { axios.get(`${BASE_URL}/api/stream`).then((res) => { setStreams(res.data.response) }).catch((err) => { console.log(err); }) }
  useEffect(() => { fetchStream() }, [])
  const getApiMain = () => {
    axios.get(`${BASE_URL}/api/blog`).then((res) => { setBlogApi2(res.data.response) }).catch((err) => { console.log(err) })
  }
  useEffect(() => {
    getApiMain();
  }, [])
  const getApi = () => {
    axios.get(`${BASE_URL}/api/blog`).then((res) => { setBlogApi(res.data.response.filter((fil) => { return fil._id == param.vid })) }).catch((err) => { console.log(err) })
  }
  useEffect(() => {

    getApi();
  }, [])


  const boxHandler = () => {
    setBox(prev => { return !prev });
  }
  console.log(blogApi2)
  return (
    <>
      <ModalPage open={open} setOpen={setOpen} />
      <Container maxWidth={"xl"} sx={{ bgcolor: "#f8f8f8" }}>
        <Header isBgColor={true} handleOpen={handleOpen} />
        <Grid container mb="50px" mt="80px" spacing={1.2}>
          <Grid item container xs={12} lg={8}>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
              <Box sx={{ width: '80%', mt: '5px', mb: "10px" }}>
                <img src={college} style={{ cursor: 'pointer', width: '100%', height: '100%' }} />
              </Box>
            </Grid>
            <Grid item xs={12}  >
              <Box height="500px">
                <img src={blogApi.length == 0 ? collegecartoon : `${BASE_URL}` + blogApi[0].image} height="100%" width="100%" />
              </Box>
            </Grid>

            <Grid item xs={12}  >
              <Paper sx={{ mt: "10px" }}>
                <Grid container xs={12} spacing={2} p="25px">
                  <Grid item xs={12} >
                    <Typography variant='h1' sx={{ fontSize: "28px" }} mb="10px">{blogApi.length == 0 ? "Please Wait......" : blogApi[0].title}</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", color: "#777" }}>
                      <Typography sx={{ display: "flex", alignItems: "center", mr: "15px", fontSize: "13px", color: "#999" }}><FolderOpenIcon sx={{ fontSize: "22px", mr: "5px" }} />{blogApi.length == 0 ? "Please Wait......" : blogApi[0].stream}</Typography>
                      <Typography sx={{ display: "flex", alignItems: "center", mr: "15px", fontSize: "13px", color: "#999" }}><CalendarTodayIcon sx={{ fontSize: "20px", mr: "5px" }} />{blogApi.length == 0 ? "Please Wait......" : blogApi[0].createdAt.slice(0, 10)}</Typography>
                      <Typography sx={{ display: "flex", alignItems: "center", mr: "15px", fontSize: "13px", color: "#999" }}><Person3OutlinedIcon sx={{ fontSize: "22px" }} />College Padho</Typography>
                      <Typography sx={{ display: "flex", alignItems: "center", mr: "15px", fontSize: "13px", color: "#999" }}><ChatBubbleOutlineOutlinedIcon sx={{ fontSize: "22px" }} />(0)Comments</Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sx={{ color: "#555", display: "flex" }} >
                    <Typography textAlign={"center"} sx={{ mr: "15px", fontSize: "4.2rem", bgcolor: "blue", width: "fit-content", height: "100px", color: "white" }}>{blogApi.length == 0 ? "Please Wait......" : blogApi[0].shortDescription[0]} </Typography>
                    <Typography sx={{ color: "#555", fontSize: '0.875rem', lineHeight: 1.6, fontFamily: '"Poppins", Helvetica, sans-serif' }}>{blogApi.length == 0 ? "Please Wait......" : blogApi[0].shortDescription.slice(1)} </Typography>
                  </Grid>
                  <Grid item xs={12} sx={{ color: "#555" }}>
                    <Typography variant='h1' sx={{ fontSize: '2.875rem', fontWeight: 900, fontFamily: '"Poppins", Helvetica, sans-serif', mb: "8px" }}>{blogApi.length == 0 ? "Please Wait......" : blogApi[0].mainTitle}</Typography>
                  </Grid>

                  {
                    blogApi.length == 0 ? "Please Wait......" : blogApi[0].content.map((ele) => {

                      return (
                        <Grid item container xs={12} >
                          <Grid item xs={12} >
                            <Typography variant='h2' sx={{ fontSize: '1.475rem', fontWeight: 600 }} >{ele.title}</Typography>
                          </Grid>

                          <Grid item xs={12}>
                            <Typography sx={{ fontSize: '0.875rem', color: "#555", fontFamily: '"Poppins", Helvetica, sans-serif', lineHeight: 1.8 }}>{ele.description}</Typography>
                          </Grid>

                        </Grid>
                      )
                    })

                  }

                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h5' borderBottom="1px solid #6c757d" pb="25px" sx={{ fontSize: "20px", mt: "20px" }}>Comments</Typography>
            </Grid>
            <Grid item xs={12} >
              <Box mb="15px" >
                <Typography variant='h5' mb="6px" sx={{ fontSize: "20px" }}>Leave a comment</Typography>
                <input style={{ height: "150px", width: "100%", bgcolor: "white", outline: "none" }} placeholder='Comment' />
              </Box>
              <Button variant='contained' sx={{ width: "150px", height: "50px" }} size='large'> Submit</Button>
            </Grid>

          </Grid >



          <Grid item lg={4} sx={{ ml: "10", display: { xs: "none", sm: "none", md: "none", lg: "block" } }}>

            <Grid item xs={10} sm={10} md={10} lg={10} sx={{ mt: '15px' }}>
              <Typography variant='body' fontWeight={600} sx={{ color: '#757575' }}>Title, Description, Category</Typography>
              <Box onClick={boxHandler} sx={{ bgcolor: 'white', padding: '1px', mt: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '0.3px solid #e0e0e0', borderRadius: '6px', boxShadow: box == true ? "0px 0px 4px 0px rgba(23,75,232,1)" : "" }}>
                <InputBase placeholder='Search...' />
                <Button variant='contained' color='primary' size='small' sx={{ margin: '4px 2px 4px 0px' }}>Search</Button>
              </Box>
              <Typography fontWeight={600} variant='body1' sx={{ mt: '25px', color: '#757575' }}>Latest post</Typography>
              <hr></hr>


              {blogApi2.slice(0, 4).map((item, index) => {
                return (
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: '15px', }}>
                    <Box id='rightFirstImg' sx={{ width: '125px', height: '100px', mr: '10px' }}>
                      <img width="100px" height="100px" src={blogApi.length == 0 ? collegecartoon : `${BASE_URL}` + item.image} />
                    </Box>
                    <Box>
                      <Box sx={{ display: "flex", color: 'gray', alignItems: "center", justifyContent: "left" }}>
                        <Typography font-weight={600} variant='body1' sx={{ mr: "8px", fontSize: "13px", color: "#999" }}><b>{item.stream}</b></Typography>
                        <Typography sx={{ fontSize: "13px", color: "#999" }}><b> - {item.createdAt.slice(0, 10)}</b></Typography>
                      </Box>
                      <Typography variant='body' sx={{ color: 'black', padding: '0px 0px 30px 0px', fontSize: "12px" }}>{item.shortDescription.slice(0, 70)} <span style={{ color: "blue", fontSize: "10px", cursor: "pointer" }}>...Read more</span></Typography>
                    </Box>
                  </Box>
                )
              })}




              <Box sx={{ mt: '25px' }}>
                <Typography variant='body1' fontWeight={600} sx={{ color: '#757575', }}>Categories</Typography>
              </Box>

              <hr></hr>
              {streamsData.map((item, index) => {
                return (<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '4px', color: '#757575' }}>
                  <Typography variant='body' fontWeight={600}>{item.parentStream}</Typography>
                  <Typography variant='body' fontWeight={600}>{`(1)`}</Typography>
                </Box>)

              })}
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </Container>
    </>
  );
}

export default BlogInnerPage;