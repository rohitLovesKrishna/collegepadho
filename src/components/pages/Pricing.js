import Header from '../Global/Header'
import Infotag from "../Home/Infotag"
import tagMba from '../assets/tagmba.jpg'
import Footer from "../Global/Footer"
import BarLine from '../Global/BarLine'
import tag from '../assets/tag.jpg'
import {Box,Typography,Divider} from '@mui/material'
import ModalPage from '../Global/ModalPage'
import { useState } from 'react'
const Pricing = () => {
  const [open , setOpen] = useState(false);
const handleOpen = () =>setOpen(true);
  return (
  <>
   <ModalPage open={open} setOpen={setOpen}/>
  <Header isBgColor={true}  handleOpen={handleOpen}/>
  <Box sx={{mt:"70px",mb:"90px"}}>
  <Infotag pic={tag}/>
  </Box>
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
<BarLine/>
        </Box>
    <Box sx={{mt:"20px",mb:"50px"}}>
    <Typography fontFamily=" poppins,Helvetica,sans-serif;" color="#333" textAlign="center" fontWeight={540} fontSize="1.875rem;">Price packages</Typography>
    <Typography textAlign="center" fontWeight={300} fontSize="1.5rem" lineHeight="1.4" color=" #555;">Choose the best package that suits you.</Typography>
</Box>
{/* data area */}

    <Box sx={{mb:"40px",mt:"30px"}}>
<Infotag pic={tagMba}/>
    </Box>
    <Divider/>
<Footer/>
  </>
  )
}

export default Pricing