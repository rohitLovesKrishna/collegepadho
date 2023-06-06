import {Snackbar,Grid,InputBase,FormControl,MenuItem,Select,Typography,Button} from '@mui/material';
import * as React from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import {PermContactCalendar,MailOutline,HeadsetMic,LocationOn} from '@mui/icons-material';
import MuiAlert from '@mui/material/Alert';
import './LandingPage.css';
import { useState } from 'react';
import BASE_URL from '../components/constant';
const contactFormData = [
    {
        id:0,
        type:"text",
        placeholder:"Full name",
        name:"name",
        icon:<PermContactCalendar sx={{color:'white'}}/>
    },
     {
        id:1,
        type:"email",
        placeholder:"Enter email",
        name:"email",
        icon:<MailOutline sx={{color:'white'}}/>
    },
     {
        id:2,
        type:"number",
        placeholder:"Phone number",
        name:"mobile",
        icon:<HeadsetMic sx={{color:'white'}}/>
    },
     {
        id:3,
        type:"text",
        placeholder:"City",
        name:"city",
        icon:<LocationOn sx={{color:'white'}}/>
        
    },
]
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const LandingPage = () => {
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [message,setMessage] = useState("success");
  const [sendingData,setSendingData] = useState(false);
  const [isDataRight,setIsDataRight] = useState(true);
  const handleSnackBar = () => {setOpenSnackBar(true);};
  const handleCloseSnackBar = (event, reason) => {if (reason === 'clickaway') {return;}setOpenSnackBar(false);};
    const[data, setData]= useState(["","","","",""]);
    const changeHandler=(e,index)=>{const newData = [...data];newData[index] = e.target.value;setData(newData)}
        const getApi=(e)=>{
         e.preventDefault();
      if(data[0] && data[1] && data[2].length === 10 && data[3] && data[4]){
        console.log(data)
        setSendingData(true)
        axios.post(`${BASE_URL}/api/leads`, {
          name:data[0],
          email:data[1],
          mobile:data[2],
          city:data[3],
          course:data[4]
        }).then((res)=>{
          setMessage("success")
          setIsDataRight(true)
          setSendingData(false);
          handleSnackBar();
        }).catch((err)=>{
          console.log(err);
          setSendingData(false);
          alert('something wrong')
        })
      }else{
  setMessage("error")
 handleSnackBar();
setIsDataRight(false)}}
  return (
    <>
          <Snackbar open={openSnackBar} autoHideDuration={3000} onClose={handleCloseSnackBar}>
      <Alert onClose={handleCloseSnackBar} severity={message} sx={{ width: '100%' }}>
         {isDataRight?'Thanks, we will reach you out soon!!':"Please, input data correctly!!"} 
        </Alert>
      </Snackbar>
    <div className="landing-page">
      <div className="overlay">
        <div className="content">
          <h1 >Welcome to College Padho</h1>
          <p>
Discover colleges and their diverse streams on our website. Find the perfect fit for your academic journey with detailed information on admission criteria, courses, and faculty. Make informed decisions and pave the way for a successful future in just a few clicks. Start exploring now!</p>
          <Typography variant='h4'>Enquiry Form</Typography>
          <form onSubmit={getApi} className="signup-form">
            {contactFormData.map((field,index)=>{
                return (<Grid key={index} item xs={12} sx={{border:'1px solid grey', display:'flex', justifyContent:'space-between', alignItems:'center', margin:'10px', padding:'8px', borderRadius:'7px'}}>
          <InputBase value={data[field.id]} onChange={(e)=>changeHandler(e,field.id)} id='okkk' type={field.type}  fullWidth sx={{color:'white',bgcolor:"transparent"}} placeholder={field.placeholder}  name={field.name} />
          {field.icon}
        </Grid>)
            })}
            
              <Grid item xs={12} sx={{padding:'8px', borderRadius:'7px'}}>
         <FormControl sx={{ minWidth: '100%' }} >
        <Select  sx={{color:'white',border:'1px solid grey'}} name='course' displayEmpty  value={data[4]}
          onChange={(e)=>changeHandler(e,4)}>
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
        <Button  variant='contained' type='submit' color='primary' sx={{width:'100%',mt:"15px"}} >Submit</Button>}
         </Grid> 
          </form>
        </div>
      </div>
      <footer>
        <div className="container">
          <p>&copy; 2023 collegePadho.com All rights reserved.</p>
        </div>
      </footer>
    </div>
        </>
  );
};

export default LandingPage;
