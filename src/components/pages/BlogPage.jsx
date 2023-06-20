import React, { useState } from 'react'
import { Box, Grid, Typography, Button } from '@mui/material';
// import blogapi from './BlogAPi';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import InputBase from '@mui/material/InputBase';
import college from '../assets/college.jpg';
import './FilterColleges.css'
import './BlogPage.css';
import Header from '../Global/Header';
import tag from '../assets/tag.jpg'
import Footer from '../Global/Footer';
import Infotag from '../Home/Infotag';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import Loader from '../Loader';
import BASE_URL from '../constant';
import ModalPage from '../Global/ModalPage';

const BlogPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [streamsData, setStreams] = useState([]);
  // useEffect(() => {
  //   setTimeout(() => {
  //     handleOpen()
  //   }, 3000)
  // }, [])
  const navigate = useNavigate()
  const [blogApi, setBlogApi] = useState([])
  const [box, setBox] = useState(false)
  const fetchStream = () => { axios.get(`${BASE_URL}/api/stream`).then((res) => { setStreams(res.data.response) }).catch((err) => { console.log(err); }) }
  useEffect(() => { fetchStream() }, [])
  const boxHandler = () => {
    setBox(prev => { return !prev });
  }
  const getApi = () => {
    axios.get(`${BASE_URL}/api/blog`).then((res) => { setBlogApi(res.data.response) }).catch((err) => { console.log(err) })
  }
  useEffect(() => {
    getApi();
  }, [])
  if (blogApi.length > 0) {

    return (
      <>
        <ModalPage open={open} setOpen={setOpen} />
        <Header isBgColor={true} handleOpen={handleOpen} />

        <Grid container sx={{ backgroundColor: '#f8f8f8', mb: "20px" }} >
          <Grid item xs={12} sx={{ mt: "100px", display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
            <Box sx={{ width: '53.4%', mt: '5px' }}>
              <img src={college} alt='pic' style={{ cursor: 'pointer', width: '100%', height: '100%' }} />
            </Box>
          </Grid>
          <Grid container xs={12} sm={12} md={8.5} lg={8.5} sx={{ display: 'flex', justifyContent: "center", alignItems: 'flex-start', mt: '30px' }}>

            {
              blogApi.map((ele) => {
                return (
                  <>
                    <Grid key={ele._id} mr={"30px"} onClick={() => navigate(`/home/posts/${ele._id}`)} item xs={10} sm={4.5} md={4.5} lg={4.5} sx={{ height: "440px", mb: "20px", backgroundColor: 'white', boxShadow: '0px 2px 9px 0px rgba(0,0,0,0.75)', borderRadius: '7px', display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                      <Box id='clgimg'>
                        <img src={`${BASE_URL}` + ele.image} alt='pic' width='100%' height='200px' style={{ boxSizing: 'border-box', borderRadius: '7px' }} />

                      </Box>

                      <Box sx={{ margin: '10px', display: "flex", flexDirection: "column", justifyContent: "space-between", height: "50%" }}>
                        <Box sx={{ display: "flex", color: 'gray', alignItems: "center", justifyContent: "left" }}>
                          <Typography font-weight={600} variant='body1' sx={{ mr: "8px", fontSize: "13px", color: "#999" }}><b>{ele.stream}</b></Typography>
                          <Typography sx={{ fontSize: "13px", color: "#999" }}><b> - {ele.createdAt.slice(0, 10)}</b></Typography>
                        </Box>
                        <Box sx={{ height: "100%" }}>
                          <Typography variant='h1' sx={{ cursor: "pointer", '&:hover': { color: " #004dda;" }, fontSize: "18px", fontWeight: 500 }} >{ele.title}</Typography>
                          <Typography variant='body' sx={{ color: 'gray', padding: '0px 0px 30px 0px', fontSize: "12px" }}>{ele.shortDescription.slice(0, 200)} <span style={{ color: "blue", fontSize: "10px", cursor: "pointer" }}>...Read more</span></Typography>

                        </Box>
                      </Box>


                      <Box sx={{ width: '100%', backgroundColor: 'white', height: '50px', mt: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid gray' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', ml: "10px" }}>
                          <PersonIcon size='small' sx={{ color: 'gray', mr: '8px' }} />
                          <Typography sx={{ color: 'gray', fontSize: "10px" }}>College Padho</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mr: "10px" }}>

                          <ChatBubbleOutlineIcon size='small' sx={{ color: 'gray', fontSize: "18px" }} />
                          <Typography fontWeight={600} sx={{ color: 'gray', ml: '7px', fontSize: "18px" }}>0</Typography>
                        </Box>
                      </Box>

                    </Grid>
                  </>
                )
              })
            }


          </Grid>
          <Grid item container id='rightGrid' xs={12} sm={12} md={3.5} lg={3.5} sx={{ mt: '30px', }}>
            <Grid item xs={10} sm={10} md={10} lg={10} sx={{ mt: '15px' }}>
              <Typography variant='body' fontWeight={600} sx={{ color: '#757575' }}>Title, Description, Category</Typography>
              <Box onClick={boxHandler} sx={{ bgcolor: 'white', padding: '1px', mt: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '0.3px solid #e0e0e0', borderRadius: '6px', boxShadow: box === true ? "0px 0px 4px 0px rgba(23,75,232,1)" : "" }}>
                <InputBase placeholder='Search...' />
                <Button variant='contained' color='primary' size='small' sx={{ margin: '4px 2px 4px 0px' }}>Search</Button>
              </Box>
              <Typography fontWeight={600} variant='body1' sx={{ mt: '25px', color: '#757575' }}>Latest post</Typography>
              <hr></hr>


              {blogApi.slice(0, 4).map((item, index) => {
                return (
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: '15px', }}>
                    <Box id='rightFirstImg' sx={{ width: '125px', height: '100px', mr: '10px' }}>
                      <img width="100px" alt='pic' height="100px" src={`${BASE_URL}` + item.image} />
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
                  <Typography variant='body' fontWeight={600}>{(Math.floor(Math.random() * 100))}</Typography>
                </Box>)

              })}


            </Grid>


          </Grid>

        </Grid>
        <Box sx={{ mt: "70px", mb: "90px" }}>
          <Infotag pic={tag} />
        </Box>
        <Footer />
      </>
    )
  }
  if (blogApi.length === 0) {
    return (<Loader />)
  }

}

export default BlogPage;