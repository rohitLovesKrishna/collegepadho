import TextField from '@mui/material/TextField';
import { Grid, Typography, Box, Paper, Button } from '@mui/material'
import BluePrint from '../Global/BluePrint'
import  {  useState } from 'react'

const MapSettings = () => {

    const[data, setData] = useState({
        first:'', 
        second:'',
        third:'', 
        forth:'',
        fifth:'' }
    )
const changeHandler=(e)=>{
    const {name, value} = e.target;
    setData({...data, [name]: value})
}

  return (
    <> 
    <BluePrint page='Map settings'>
    <Grid container sx={{  backgroundColor:'#f2f4f8',display:'flex', justifyContent:'space-around', padding:'10px' }}>
        <Grid item xs={12} sx={12} md={12} lg={8} >
        <Paper>
            <Box sx={{backgroundColor:'rgb(40, 42, 60)', padding:'10px'}}>
                <Typography sx={{color:'white'}}>Map settings</Typography>
            </Box>

            <Box sx={{display:'flex', justifyContent:'space-evenly', alignItems:'flex-start', padding:'10px', flexDirection:{lg:'row' , md:'row', sm:'column', xs:'column'}}}>
                <Typography sx={{mr:'9px', color:'#646c9a', fontSize:'15px'}}>Map access token</Typography>
               <TextField  onChange={changeHandler} name='first' value={data.first}  placeholder='Pk.xxxxxxxxxxx' size='small' sx={{width:{lg:'70%', md:'77%', sm:'100%', xs:'100%'} , marginLeft:{lg:'10px', md:'10px', sm:'0px', xs:'0px'}}}/>
                  </Box>

                   <Box sx={{display:'flex', justifyContent:'space-evenly', alignItems:'flex-start', padding:'9px', flexDirection:{lg:'row' , md:'row', sm:'column', xs:'column'}}}>
                <Typography sx={{mr:'9px', color:'#646c9a', fontSize:'15px'}}>Default location <br></br> (Latitude, Longitude)</Typography>
               <TextField onChange={changeHandler} name='second' value={data.second}   placeholder='28.4593511,77.4939792' size='small' sx={{width:{lg:'70%', md:'77%', sm:'100%', xs:'100%'} ,marginLeft:{lg:'-12px', md:'-12px', sm:'0px', xs:'0px'}}}/>
                  </Box>

                    <Box sx={{display:'flex', justifyContent:'space-evenly', alignItems:'flex-start', padding:'10px', flexDirection:{lg:'row' , md:'row', sm:'column', xs:'column'}}}>
                <Typography sx={{mr:'9px', color:'#646c9a', fontSize:'15px'}}>Max zoom level</Typography>
               <TextField onChange={changeHandler} name='third' value={data.third} type='number' size='small' sx={{width:{lg:'70%', md:'77%', sm:'100%', xs:'100%'} ,marginLeft:{lg:'20px', md:'20px', sm:'0px', xs:'0px'}}}/>
                  </Box>

                        <Box sx={{display:'flex', justifyContent:'space-evenly', alignItems:'flex-start', padding:'9px', flexDirection:{lg:'row' , md:'row', sm:'column', xs:'column'}}}>
                <Typography sx={{mr:'9px', color:'#646c9a', fontSize:'15px'}}>Min zoom level on the <br></br>listings page</Typography>
               <TextField onChange={changeHandler} name='forth' value={data.forth} type='number' size='small' sx={{width:{lg:'70%', md:'77%', sm:'100%', xs:'100%'} ,marginLeft:{lg:'-23px', md:'-23px', sm:'0px', xs:'0px'}}}/>
                  </Box>
                  

                    <Box sx={{display:'flex', justifyContent:'space-evenly', alignItems:'flex-start', padding:'9px', flexDirection:{lg:'row' , md:'row', sm:'column', xs:'column'}}}>
                <Typography sx={{mr:'9px', color:'#646c9a', fontSize:'15px'}}>Min zoom level on<br></br> the directory page</Typography>
               <TextField onChange={changeHandler} name='fifth' value={data.fifth} type='number' size='small' sx={{width:{lg:'70%', md:'77%', sm:'100%', xs:'100%'} ,marginLeft:{lg:'-2px', md:'-2px', sm:'0px', xs:'0px'}}}/>
                  </Box>

                  <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', mt:'10px', padding:'10px 0px 20px 0px'}}>
                   <Button variant='contained' color='success' >Update map setting</Button>
                  </Box>

       </Paper> 
        </Grid>


        <Grid item xs={12} sm={12} md={12} lg={3} sx={{marginTop:{lg:'0px', md:'20px ', sm:'20px ', xs:'20px'}}} >
            <Paper sx={{ padding:'10px', backgroundColor:'#a6e8f3'}}>
            <Typography sx={{color:'#646c9a'}}>How do i get a map access token?</Typography>
            <Box sx={{ ml:'20px', mr:'20px'}}>
                <Typography sx={{color:'#646c9a', fontSize:'12px'}}><span style={{fontSize:'40px', fontWeight:'600'}}>.</span> First create an account in the <span sx={{fontSize:'40px'}}>Mapbox</span> , You will get an access token. Copy the accesstoken and paste here.</Typography>
                <Typography sx={{color:'#646c9a', fontWeight:'600'}} ><span style={{fontSize:'40px'}}>.</span>  Click here to sign up in Mapbox.</Typography>          
            </Box>
          </Paper>
        </Grid>

    </Grid>
    </BluePrint>
    </>
  )
}

export default MapSettings