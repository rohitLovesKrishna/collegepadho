import { Box, Button, Grid, Typography, Container } from '@mui/material'
import BarLine from '../Global/BarLine'
import '../Home/Master.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BASE_URL from '../constant'
import axios from 'axios'


const PopularStream = () => {
  const navigate = useNavigate();
  const [courseLength, setCourseLength] = useState([])
  const [loadMore, setLoadMore] = useState({ btnDisplay: true, postDisplay: false })
  const viewAllHandler = (action) => { if (action === 'hide') { setLoadMore({ btnDisplay: true, postDisplay: false }) } else { setLoadMore({ btnDisplay: false, postDisplay: true }) } }
  const [data, setData] = useState([])
  const fetchStreams = () => {
    axios.get(`${BASE_URL}/api/stream`).then((res) => { setData(res.data.response) })
  }
  const fetchCourse = () => {
    axios.get(`${BASE_URL}/api/course`).then((res) => { return setCourseLength(res.data.response) }).catch((err) => { console.log(err); })
  }
  useEffect(() => fetchCourse(), [])
  useEffect(() => fetchStreams(), [])

  return (
    <Container disableGutters maxWidth={'lg'}>

      <Box sx={{ pt: "30px", mb: "45px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", pl: "10px" }}>
        <BarLine />
        <Box sx={{ mt: "20px", mb: "50px" }}>
          <Typography fontFamily=" poppins,Helvetica,sans-serif;" color="#333" textAlign="center" fontWeight={540} fontSize="1.875rem;">Popular stream</Typography>
          <Typography textAlign="center" fontWeight={300} fontSize="1.5rem" lineHeight="1.4" color=" #555;">The popular stream are progressively below.</Typography>
        </Box>
        <Grid container spacing={2} justifyContent="center" alignItems="center" >
          {/* dont forget to map this data */}
          {data.slice(0, data.length >= 9 ? 9 : data.length).map((item, _) => {
            return (<Grid id="effect7" key={item._id} item sx={{ mb: "10px", alignItems: "center", display: "flex", justifyContent: "center" }}>
              <Box onClick={() => navigate(`/filterStreams/${item.parentStream}`)} id="imageBoxPopularStream" >
                <img style={{ borderRadius: "5px" }} src={`${BASE_URL}` + item.image} alt="clg" />
                <Box id="iimageBoxPopularStreamText">
                  <Typography width="fit-content" mb="5px" fontWeight={600} lineHeight={1} fontSize=".6875rem" p="3px 5px 2px" sx={{ bgcolor: " #004dda", borderRadius: "10px" }}>{courseLength.filter((ele) => { return ele.stream === item.stream }).length} Listings</Typography>
                  <Typography sx={{ color: "#fff" }} fontSize="1.600rem">{item.parentStream}</Typography>
                </Box>
              </Box>
            </Grid>)
          })}

          {/* hiding postss */}
          {loadMore.postDisplay ? data.slice(9).map((item, _) => {
            return (<Grid id="effect7" key={item._id} item sx={{ mb: "10px", display: loadMore.postDisplay ? "block" : "none" }}>
              <Box onClick={() => navigate(`/filterStreams/${item.parentStream}`)} id="imageBoxPopularStream" >
                <img style={{ borderRadius: "5px" }} src={`${BASE_URL}` + item.image} alt="clg" />
                <Box id="iimageBoxPopularStreamText">
                  <Typography width="fit-content" mb="5px" fontWeight={600} lineHeight={1} fontSize=".6875rem" p="3px 5px 2px" sx={{ bgcolor: " #004dda" }}>{courseLength.filter((ele) => { return ele.stream === item.stream }).length} Listings</Typography>
                  <Typography sx={{ color: "#fff" }} fontSize="1.600rem">{item.parentStream}</Typography>
                </Box>
              </Box>
            </Grid>)
          })
            : ""}

        </Grid>
        <Box sx={{ mt: "20px", display: "flex", alignItems: "flex-end", justifyContent: "right", width: "81%" }}>
          <Button onClick={viewAllHandler} size='small' sx={{ display: loadMore.btnDisplay ? "block" : "none", borderRadius: "100px", color: "white", p: "11px 40px", bgcolor: "#ff9800", textTransform: "unset", "&:hover": { bgcolor: "#ff9800", color: "black" } }}>View all</Button>
        </Box>
        <Box sx={{ mt: "20px", display: "flex", alignItems: "flex-end", justifyContent: "center", width: "81%" }}>
          <Button onClick={() => viewAllHandler('hide')} size='small' sx={{ display: !loadMore.btnDisplay ? "block" : "none", borderRadius: "100px", color: "white", p: "11px 40px", bgcolor: "#004dda", textTransform: "unset", "&:hover": { bgcolor: " #ffc107", color: "black" } }}>Hide Posts</Button>
        </Box>

      </Box>
    </Container>
  )
}

export default PopularStream