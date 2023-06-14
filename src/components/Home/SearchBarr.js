import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import {InputAdornment} from '@mui/material';
import '../Home/Master.css'
import { Search } from '@mui/icons-material';
import { useState,useEffect } from 'react';
import BASE_URL from '../constant';
import axios from 'axios';

export default function SearchBarr() {

  const [category, setCategory] = React.useState('');
  const handleChange = (event) => {setCategory(event.target.value)};
      const [data, setData] = useState([])
    const fetchStreams = ()=>{
        axios.get(`${BASE_URL}/api/stream`).then((res)=>{setData(res.data.response)})
    }
    useEffect(()=>fetchStreams(),[])

  return (
    <form noValidate autoComplete="off" style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
   <Grid container style={{height:"fit-content",width:"100%",alignItems:"center",justifyContent:"center"}}>
     <Grid item>
  <TextField  InputProps={{disableUnderline:true,endAdornment:(<InputAdornment position='end'><Search/></InputAdornment>)}}  sx={{border:"none",p:"11.2px",borderRadius:"40px",bgcolor:"white"}} fullWidth focused={false}  type='text' id="searchInput" placeholder="Search..." variant="standard" />
     </Grid>
          
          
   </Grid>

    

     
    </form>
  );
}