import { Box } from '@mui/material'

const Infotag = ({pic}) => {
  return (
    <>
      <Box  sx={{alignItems:"center" ,justifyContent:"center" ,display:"flex",mt:"20px"}}>
    <img width="80%" src={pic} alt="tagbar" />
  </Box>
    </>

  )
}

export default Infotag