import Header from '../Global/Header'
import Infotag from "../Home/Infotag"
import tagMba from '../assets/tagmba.jpg'
import Footer from "../Global/Footer"
import BarLine from '../Global/BarLine'
import tag from '../assets/tag.jpg'
import {Box,Typography,Grid,Divider} from '@mui/material'
import axios from 'axios'
import BASE_URL from '../constant'
import { useEffect,useState } from 'react'
import ModalPage from '../Global/ModalPage'
const Stream = () => {
const [open , setOpen] = useState(false);
const handleOpen = () =>setOpen(true);
useEffect(()=>{
  setTimeout(()=>{
handleOpen()
  },3000)
},[])
const [stream,setStream] = useState([])
const [courseLength,setCourseLength] = useState([])
const fetchStream = ()=>{
   axios.get(`${BASE_URL}/api/stream`).then((res)=>{return setStream(res.data.response)}).catch((err)=>{console.log(err);})
}
useEffect(()=>fetchStream(),[])

const fetchCourse = ()=>{
   axios.get(`${BASE_URL}/api/course`).then((res)=>{return setCourseLength(res.data.response)}).catch((err)=>{console.log(err);})
}
useEffect(()=>fetchCourse(),[])
console.log(courseLength);
  return (
  <>
     <ModalPage open={open} setOpen={setOpen}/>
  <Header isBgColor={true} handleOpen={handleOpen}/>
  <Box sx={{mt:"70px",mb:"90px"}}>
  <Infotag pic={tag}/>
  </Box>
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
<BarLine/>
        </Box>
        <Box sx={{mt:"20px",mb:"50px"}}>
    <Typography fontFamily=" poppins,Helvetica,sans-serif;" color="#333" textAlign="center" fontWeight={540} fontSize="1.875rem;">Popular Stream</Typography>
</Box>
{/* data area */}

<Grid container  spacing={4} justifyContent="center" alignItems="center" padding="0px 80px">
   
{stream.map((item)=>{
   return (  <Grid key={item._id} item lg={4} xs={12} md={6}>
       <Box sx={{ p:"20px",bgcolor:"#3f4277",borderRadius:"5px",textAlign:"center",color:"#fff"}}>
        <Typography fontSize="20px" fontWeight={700} sx={{transition:"all .3s ease-in-out"}}>{item.stream} ({courseLength.filter((ele)=>{return ele.stream === item.stream}).length}) </Typography>
       </Box>
    </Grid>
)
})}


</Grid>
    <Box sx={{mb:"40px",mt:"30px"}}>
<Infotag pic={tagMba}/>
    </Box>
    <Divider/>
<Footer/>
  </>
  )
}

export default Stream