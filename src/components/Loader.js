import { Grid } from '@mui/material'
import loader from '../components/assets/education_loadig2.gif'
const Loader = () => {
  return (
    <Grid container sx={{justifyContent:"center",alignItems:"center"}}>
        <Grid item sx={{mt:{lg:0,md:0,sm:"40%",xs:'40%'}}}>
            <img width={'100%'} height={"100%"} src={loader} alt='loading'/>
        </Grid>
    </Grid>
  )
}

export default Loader