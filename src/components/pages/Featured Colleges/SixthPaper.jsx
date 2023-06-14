import React from 'react';
import { Grid, Paper, IconButton } from "@mui/material";

import './mainStyle.css'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import BASE_URL from '../../constant';


const Recruiters = ({data}) => {

    if(data.length > 0){
    return (
        <>
            <Paper sx={{p:"10px"}} > 
                <Grid container spacing={1} m="auto" p="7px">
                    {data.map((item,index)=>{
                        return  <Grid key={item+index} item xs={12} md={6} lg={4} sm={4} position="relative" sx={{display:"flex", alignItems:"center",justifyContent:"center"}}>
                        <div className='hoverImg'  style={{height:"130px",width:"170px"}}>
                            <img src={`${BASE_URL}`+item.image} alt="pic" height="100%" width="100%" />
                            <IconButton className='overLay' sx={{position:"absolute",left:"52px",top:"34px"}}>
                              <ControlPointIcon sx={{fontSize:"2.9rem",color:"orange"}}/>
                            </IconButton>
                        </div>     
                    </Grid>
                    })}
                </Grid>
            </Paper>
        </>
    );
    }

}

export default Recruiters;
