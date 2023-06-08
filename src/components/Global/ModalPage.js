import { Button, Grid, InputBase, Modal, Typography } from '@mui/material'
import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Select from '@mui/material/Select';
import axios from 'axios';
import BASE_URL from '../constant';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const ModalPage = ({open,setOpen}) => {
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [isDataRight,setIsDataRight] = useState(true)
    const [message,setMessage] = useState("success");
    const handleClose = ()=> setOpen(false);
    const[data, setData]= useState({name:'',email:'',mobile:'',city:'',course:''});
    const [sendingData,setSendingData] = useState(false);
    const changeHandler=(e)=>{const {name, value}= e.target;setData({...data,[name]:value})}
  const handleSnackBar = () => {setOpenSnackBar(true);};
  const handleCloseSnackBar = (event, reason) => {if (reason === 'clickaway') {return;}setOpenSnackBar(false);};
    const getApi=()=>{
      if(data.name && data.email && data.mobile.length === 10 && data.city && data.course){
 setSendingData(true)
        axios.post(`${BASE_URL}/api/leads`, {
          name:data.name,
          email:data.email,
          mobile:data.mobile,
          city:data.city,
          course:data.course,
          source:"Website"
        }).then((res)=>{
          console.log(res)
          setMessage("success")
          setIsDataRight(true)
          setSendingData(false);
          setTimeout(()=>{ handleClose();},1000)
          handleSnackBar();
        }).catch((err)=>{
          console.log(err);
          alert('something wrong')
        })
      }else{
  setMessage("error")
 handleSnackBar();
setIsDataRight(false)
      }
     

    }

  return (
    <>
    
      <Snackbar open={openSnackBar} autoHideDuration={3000} onClose={handleCloseSnackBar}>
      <Alert onClose={handleCloseSnackBar} severity={message} sx={{ width: '100%' }}>
         {isDataRight?'Thanks, we will reach you out soon!!':"Please, input data correctly!!"} 
        </Alert>
      </Snackbar>
    <Modal open={open} onClose={handleClose} > 

      <Grid  container id="okk" sx={{outline:"none",backgroundColor:'white',  margin:'60px auto',height:"80%", borderRadius:'7px',width:{lg:'51%' , md:'70%', sm:'80%', xs:'85%'}}}>
        <Grid container id="okk2" sx={{outline:"none",backgroundColor:'white',  margin:'0px auto', height:"100%",borderRadius:'7px',width:{lg:'100%' , md:'100%', sm:'100%', xs:'100%'}}}>
        <Grid item xs={12} sx={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'15px'}}>
        <Typography sx={{fontSize:'20px', fontWeight:'500',color:"white"}}>Apply Now</Typography>
         <CancelOutlinedIcon sx={{color:'crimson', fontSize:'30px', cursor:'pointer'}}  onClick={handleClose}/>
        </Grid>
     
   
        <Grid item xs={12} sx={{border:'1px solid grey', display:'flex', justifyContent:'space-between', alignItems:'center', margin:'10px', padding:'8px', borderRadius:'7px'}}>
          <InputBase id='okkk' required fullWidth sx={{color:'white',bgcolor:"transparent"}} placeholder='Name' onChange={changeHandler} name='name' value={data.name}/>
          <PermIdentityIcon sx={{color:'white'}}/>
        </Grid>

           <Grid item xs={12} sx={{border:'1px solid grey', display:'flex', justifyContent:'space-between', alignItems:'center', margin:'10px', padding:'8px', borderRadius:'7px'}}>
          <InputBase id='okkk' required type='email' fullWidth   sx={{color:'white',bgcolor:"transparent"}} placeholder='Email'onChange={changeHandler} name='email' value={data.email}/>
          <MailOutlineIcon sx={{color:'white'}}/>
        </Grid>

           <Grid item xs={12} sx={{border:'1px solid grey', display:'flex', justifyContent:'space-between', alignItems:'center', margin:'10px', padding:'8px', borderRadius:'7px'}}>
          <InputBase id='okkk' required type='number' fullWidth   sx={{color:'white',bgcolor:"transparent"}} placeholder='Mobile No.'onChange={changeHandler} name='mobile' value={data.mobile}/>
          <HeadsetMicIcon sx={{color:'white'}}/>
        </Grid>

           <Grid item xs={12} sx={{border:'1px solid grey', display:'flex', justifyContent:'space-between', alignItems:'center', margin:'10px', padding:'8px', borderRadius:'7px'}}>
          <InputBase id='okkk' required fullWidth   sx={{color:'white',bgcolor:"transparent"}} placeholder='City'onChange={changeHandler} name='city' value={data.city}/>
          <LocationOnIcon sx={{color:'white'}}/>
        </Grid>
        

          <Grid item xs={12} sx={{padding:'8px', borderRadius:'7px'}}>
         <FormControl sx={{ minWidth: '100%' }} >
        <Select required sx={{color:'white'}}
        name='course'
          value={data.course}
          onChange={changeHandler}
          displayEmpty
         
        >
          <MenuItem value="">
            <em>Select Course</em>
          </MenuItem>
          <MenuItem value={'PGDM'}>PGDM</MenuItem>
          <MenuItem value={'MBA'}>MBA</MenuItem>
          <MenuItem value={'B.Tech'}>B.Tech</MenuItem>
          <MenuItem value={'D.Pharma'}>D.Pharma</MenuItem>
          <MenuItem value={'B.Pharma'}>B.Pharma</MenuItem>
          <MenuItem value={'BCA'}>BCA</MenuItem>
          <MenuItem value={'MCA'}>MCA</MenuItem>
          <MenuItem value={'Bachelor of Dental surgery'}>Bachelor of Dental surgery</MenuItem>
          <MenuItem value={'BBA'}>BBA</MenuItem>
          <MenuItem value={'B.Ed'}>B.Ed</MenuItem>
          <MenuItem value={'BALLB'}>BALLB</MenuItem>
        </Select>
      
      </FormControl>
      </Grid>
          <Grid item xs={12} sx={{ margin:'10px', padding:'0px 0px 20px 0px', borderRadius:'7px', }}>
        {sendingData?
        <Grid container justifyContent={"center"}>
        <CircularProgress />
        </Grid>
        :
        <Button  variant='contained'onClick={getApi} color='primary' sx={{width:'100%',mt:"15px"}} >Submit</Button>}
         </Grid> 

        </Grid>
        
      </Grid>

    </Modal>
 
    </>
  )
}

export default ModalPage