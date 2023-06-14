import React from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Grid, Typography, Box, Paper, Button, Divider, OutlinedInput } from '@mui/material';
import Select from '@mui/material/Select';
import BluePrint from '../Global/BluePrint';

const firstApi = ["Select system curreny", "ALL", "USD", "AFN", "ARS", "AWG","AUD", "AZN", "BSD", "BYR", "EUR", "BZD", "BMD", "BOB", "BAM", "BWP", "BGN", "BRL", "GBP", "BND", "KHR", "CAD", "KYD", "CLP", "CNY"]


const PaymentSetting = () => {
  return (
   <>
   <BluePrint page='Payment settings'>

    <Grid container sx={{  backgroundColor:'#f2f4f8',display:'flex', justifyContent:'space-around', padding:'10px' }}>
        <Grid item xs={12} sx={12} md={12} lg={8} >
        <Paper>
            <Box sx={{backgroundColor:'rgb(40, 42, 60)', padding:'10px'}}>
                <Typography sx={{color:'white'}}>System currency settings</Typography>
            </Box>

            <Box sx={{display:'flex', justifyContent:'space-evenly', alignItems:'flex-start', padding:'10px', flexDirection:{lg:'row' , md:'row', sm:'column', xs:'column'}}}>
                <Typography sx={{mr:'9px', color:'#646c9a', fontSize:'15px'}}>System currency</Typography>
               <FormControl sx={{width:{lg:'70%' , md:'77%', sm:'100%', xs:'100%'}}} size='small'>
                       <InputLabel >INR</InputLabel>
                              <Select
                               label="INR"
                         
                             >      
                                     <TextField placeholder='Search here' size='small' fullWidth/>
                                     {
                                     firstApi.map((ele)=>{
                                        return(
                                            <>
                                            <MenuItem >{ele}</MenuItem>
                                   
                                            </>
                                        )
                                     })   
                                     }
                                    
                               </Select>
                          </FormControl>
                  </Box>
                  <Divider></Divider>

                   <Box sx={{display:'flex', justifyContent:'space-evenly', alignItems:'flex-start', padding:'10px', flexDirection:{lg:'row' , md:'row', sm:'column', xs:'column'}}}>
                <Typography sx={{mr:'9px', color:'#646c9a', fontSize:'15px'}}>System currency</Typography>
               <FormControl sx={{width:{lg:'70%' , md:'77%', sm:'100%', xs:'100%'} }} size='small'>
                       <InputLabel >Left</InputLabel>
                              <Select
                               label="Left"
                             >      
                                     <TextField placeholder='Search here' size='small' fullWidth/>
                                   <MenuItem >Left</MenuItem>    
                                   <MenuItem >Right</MenuItem>  
                                   <MenuItem >Left with space</MenuItem>  
                                   <MenuItem >Right with space</MenuItem>  
                               </Select>
                          </FormControl>
                  </Box>
                    <Divider></Divider>
                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center',padding:'15px'}}>
                        <Button variant='contained' color='primary' size='small' sx={{borderRadius:'15px'}}>Update system currency</Button>
                    </Box>

                

       </Paper> 
        </Grid>


        <Grid item xs={12} sm={12} md={12} lg={3} sx={{marginTop:{lg:'0px', md:'20px ', sm:'20px ', xs:'20px'}}} >
            <Paper sx={{ padding:'10px', backgroundColor:'#a6e8f3'}}>
            <Typography sx={{color:'#646c9a'}}>Heads up!</Typography>
            <Box sx={{ ml:'20px', mr:'20px'}}>
                <Typography sx={{color:'#646c9a', fontSize:'12px'}}>Please make sure that "System currency", "Paypal currency" and "Stripe currency" Are same.</Typography>
                {/* <Typography sx={{color:'#646c9a', fontWeight:'600'}} ><span style={{fontSize:'40px'}}>.</span>  Click here to sign up in Mapbox.</Typography>           */}
            </Box>
          </Paper>
        </Grid>

        <Grid item container xs={12} sx={{padding:{lg:'10px 0px 0px 25px ', md:'0px', sm:'0px', xs:'0px'}}}>
            <Grid item  xs={12} sm={12} md={12}  lg={8.2}  sx={{marginTop:{lg:'10px', md:'20px', sm:'20px', xs:'20px'}}}>
                <Paper>
                <Box sx={{backgroundColor:'rgb(40, 42, 60)', padding:'10px'}}>
                <Typography sx={{color:'white'}}>Setup paypal settings</Typography>
            </Box>

                    <Box sx={{display:'flex', justifyContent:'space-evenly', alignItems:'flex-start', padding:'10px', flexDirection:{lg:'row' , md:'row', sm:'column', xs:'column'}}}>
                <Typography sx={{mr:'9px', color:'#646c9a', fontSize:'15px'}}>System currency</Typography>
               <FormControl sx={{width:{lg:'70%' , md:'77%', sm:'100%', xs:'100%'} }} size='small'>
                       <InputLabel >Yes</InputLabel>
                              <Select
                               label="Yes"
                             >      
                                     <TextField placeholder='Search here' size='small' fullWidth/>
                                   <MenuItem >Yes</MenuItem>    
                                   <MenuItem >No</MenuItem>  
                               
                               </Select>
                          </FormControl>
                  </Box>
                  <Divider></Divider>

                   <Box sx={{display:'flex', justifyContent:'space-evenly', alignItems:'flex-start', padding:'10px', flexDirection:{lg:'row' , md:'row', sm:'column', xs:'column'}}}>
                <Typography sx={{mr:'9px', color:'#646c9a', fontSize:'15px'}}>System currency</Typography>
               <FormControl sx={{width:{lg:'70%' , md:'77%', sm:'100%', xs:'100%'} }} size='small'>
                       <InputLabel >Sandbox</InputLabel>
                              <Select
                               label="Sandbox"
                             >      
                                     <TextField placeholder='Search here' size='small' fullWidth/>
                                   <MenuItem >Sandbox</MenuItem>    
                                   <MenuItem >Production</MenuItem>  
                               
                               </Select>
                          </FormControl>
                  </Box>
                  <Divider></Divider>

                    <Box sx={{display:'flex', justifyContent:'space-evenly', alignItems:'flex-start', padding:'10px', flexDirection:{lg:'row' , md:'row', sm:'column', xs:'column'}}}>
                <Typography sx={{mr:'9px', color:'#646c9a', fontSize:'15px'}}>Paypal currency</Typography>
               <FormControl sx={{width:{lg:'70%' , md:'77%', sm:'100%', xs:'100%'}}} size='small'>
                       <InputLabel >INR</InputLabel>
                              <Select
                               label="INR"
                         
                             >      
                                     <TextField placeholder='Search here' size='small' fullWidth/>
                                     {
                                     firstApi.map((ele)=>{
                                        return(
                                            <>
                                            <MenuItem >{ele}</MenuItem>
                                   
                                            </>
                                        )
                                     })   
                                     }
                                    
                               </Select>
                          </FormControl>
                  </Box>
                  <Divider></Divider>
                  
                   <Box sx={{display:'flex', justifyContent:'space-evenly', alignItems:'flex-start', padding:'10px', flexDirection:{lg:'row' , md:'row', sm:'column', xs:'column'}}}>
                <Typography sx={{mr:'9px', color:'#646c9a', fontSize:'15px'}}>Client id (Sandbox)</Typography>
                <TextField placeholder='Sandbox client id' sx={{mr:{lg:'10px', md:'10px'} ,width:{lg:'70%' , md:'78%', sm:'100%', xs:'100%'} }} size='small'/>
                  </Box>
                  <Divider></Divider>
                   <Box sx={{display:'flex', justifyContent:'space-evenly', alignItems:'flex-start', padding:'10px', flexDirection:{lg:'row' , md:'row', sm:'column', xs:'column'}}}>
                <Typography sx={{mr:'9px', color:'#646c9a', fontSize:'15px'}}>Client id (Production)</Typography>
                <TextField placeholder='Sandbox client id' sx={{mr:{lg:'15px', md:'15px'} ,width:{lg:'70%' , md:'78%', sm:'100%', xs:'100%'}}} size='small'/>
                  </Box>
                  <Divider></Divider>
                  <Box sx={{display:'flex', justifyContent:'center', alignItems:'center',padding:'15px'}}>
                        <Button variant='contained' color='primary' size='small' sx={{borderRadius:'15px'}}>Update paypal key</Button>
                    </Box>
                  <Divider></Divider>
                  

                  </Paper>
                
            </Grid>


         <Grid item  xs={12} sm={12} md={12}  lg={8.2}  sx={{marginTop:{lg:'20px', md:'20px', sm:'20px', xs:'20px'}}}>
                <Paper>
                <Box sx={{backgroundColor:'rgb(40, 42, 60)', padding:'10px'}}>
                <Typography sx={{color:'white'}}>Setup stripe settings</Typography>
            </Box>

                    <Box sx={{display:'flex', justifyContent:'space-evenly', alignItems:'flex-start', padding:'10px', flexDirection:{lg:'row' , md:'row', sm:'column', xs:'column'}}}>
                <Typography sx={{color:'#646c9a', fontSize:'15px'}}>Active</Typography>
               <FormControl sx={{  width:{lg:'70%' , md:'77%', sm:'100%', xs:'100%'}}} size='small'>
                       <InputLabel >Yes</InputLabel>
                              <Select
                               label="Yes"
                             >      
                                     <TextField placeholder='Search here' size='small' fullWidth/>
                                   <MenuItem >Yes</MenuItem>    
                                   <MenuItem >No</MenuItem>  
                               
                               </Select>
                          </FormControl>
                  </Box>
                  <Divider></Divider>

                   <Box sx={{display:'flex', justifyContent:'space-evenly', alignItems:'flex-start', padding:'10px', flexDirection:{lg:'row' , md:'row', sm:'column', xs:'column'}}}>
                <Typography sx={{mr:'10px' ,color:'#646c9a', fontSize:'15px'}}>Test mode</Typography>
               <FormControl sx={{mr:'20px',width:{lg:'70%' , md:'77%', sm:'100%', xs:'100%'} }} size='small'>
                       <InputLabel >On</InputLabel>
                              <Select
                               label="On"
                             >      
                                     <TextField placeholder='Search here' size='small' fullWidth/>
                                   <MenuItem >On</MenuItem>    
                                   <MenuItem >Off</MenuItem>  
                               
                               </Select>
                          </FormControl>
                  </Box>
                  <Divider></Divider>

                    <Box sx={{display:'flex', justifyContent:'space-evenly', alignItems:'flex-start', padding:'10px', flexDirection:{lg:'row' , md:'row', sm:'column', xs:'column'}}}>
                <Typography sx={{ color:'#646c9a', fontSize:'15px'}}>Stripe currency</Typography>
               <FormControl sx={{ mr:'30px',width:{lg:'70%' , md:'77%', sm:'100%', xs:'100%'} }} size='small'>
                       <InputLabel >INR</InputLabel>
                              <Select
                               label="INR"
                         
                             >      
                                     <TextField placeholder='Search here' size='small' fullWidth/>
                                     {
                                     firstApi.map((ele)=>{
                                        return(
                                            <>
                                            <MenuItem >{ele}</MenuItem>
                                   
                                            </>
                                        )
                                     })   
                                     }
                                    
                               </Select>
                          </FormControl>
                  </Box>
                  <Divider></Divider>
                  
                   <Box sx={{display:'flex', justifyContent:'space-evenly', alignItems:'flex-start', padding:'10px', flexDirection:{lg:'row' , md:'row', sm:'column', xs:'column'}}}>
                <Typography sx={{color:'#646c9a', fontSize:'15px'}}>Test secret key</Typography>
                <OutlinedInput placeholder='Sandbox client id' sx={{mr:'28px' , width:{lg:'70%' , md:'77%', sm:'100%', xs:'100%'} }} size='small'/>
                  </Box>
                  <Divider></Divider>

                   <Box sx={{display:'flex', justifyContent:'space-evenly', alignItems:'flex-start', padding:'10px', flexDirection:{lg:'row' , md:'row', sm:'column', xs:'column'}}}>
                <Typography sx={{ color:'#646c9a', fontSize:'15px'}}>Test public key</Typography>
                <OutlinedInput placeholder='Sandbox client id' sx={{ mr:'28px', width:{lg:'70%' , md:'77%', sm:'100%', xs:'100%'} }} size='small'/>
                  </Box>
                  <Divider> </Divider>

                  <Box sx={{display:'flex', justifyContent:'space-evenly', alignItems:'flex-start', padding:'10px', flexDirection:{lg:'row' , md:'row', sm:'column', xs:'column'}}}>
                <Typography sx={{ color:'#646c9a', fontSize:'15px'}}>Live secret key</Typography>
                <OutlinedInput placeholder='Sandbox client id' sx={{ mr:'28px', width:{lg:'70%' , md:'77%', sm:'100%', xs:'100%'} }} size='small'/>
                  </Box>
                   <Divider> </Divider>

                  <Box sx={{display:'flex', justifyContent:'space-evenly', alignItems:'flex-start', padding:'10px', flexDirection:{lg:'row' , md:'row', sm:'column', xs:'column'}}}>
                <Typography sx={{ color:'#646c9a', fontSize:'15px'}}>Live public key</Typography>
                <OutlinedInput placeholder='Sandbox client id' sx={{mr:'28px', width:{lg:'70%' , md:'77%', sm:'100%', xs:'100%'} }} size='small'/>
                  </Box>
                  <Divider></Divider>
                  <Box sx={{display:'flex', justifyContent:'center', alignItems:'center',padding:'15px'}}>
                        <Button variant='contained' color='primary' size='small' sx={{borderRadius:'15px'}}>Update stripe key</Button>
                    </Box>
                  <Divider></Divider>
                  

                  </Paper>
                
            </Grid>

        </Grid>
    </Grid>
    </BluePrint>
   </>
  )
}

export default PaymentSetting;