import { Box, Typography } from '@mui/material'
import './Master.css'
import SearchBarr from './SearchBarr'

const BannerArea = () => {
  return (
    <>
      <Box id="bannerArea">
        <Box height="100%">
          <Box sx={{ color: "white", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <Typography id="collegePadhoText" mt="-50px" variant='h6' fontWeight={800} fontSize="39px" lineHeight={1.5}>COLLEGE PADHO!</Typography>
            <marquee style={{fontWeight:'bolder'}} direction="left">
            Top colleges listed with us at College Padho, Search with your desired stream &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Explore top colleges in your desired stream listed on College Padho.
            </marquee>
            <Box sx={{ mt: "20px", height: "fit-content", width: "fit-content" }}>
              <SearchBarr />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default BannerArea