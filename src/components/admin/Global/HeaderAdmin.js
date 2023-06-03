import * as React from 'react';
import { NearMe } from '@mui/icons-material';
import { Button, Avatar, Typography, Box, Grid, Paper} from '@mui/material';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function HideOnScroll(props) {const { children, window } = props;const trigger = useScrollTrigger({target: window ? window() : undefined,});return (<Slide appear={false} direction="down" in={!trigger}>{children}</Slide>);}

HideOnScroll.propTypes = {children: PropTypes.element.isRequired,window: PropTypes.func,};

const HeaderAdmin = () => {
 const navigate = useNavigate()
  return (
    <>
    <Grid container component={Paper}  sx={{alignItems:'center',justifyContent:"space-between",color:"black",bgcolor:"#ffffff", width: '100%',p:"10px"}}>
      <Grid item>
         <Button onClick={()=>navigate('/')} sx={{fontSize:"18px",textTransform:"unset"}} startIcon={<NearMe/>}>Website</Button>
      </Grid>
      <Grid item>
         <Box sx={{opacity:0.6,transition:"all 0.50s ease",cursor:"pointer",display:"flex",'&:hover':{opacity:1}}}>
        <Avatar />
        <Typography sx={{ color:"#2b303a" }} ml="10px">
          College Padho <br/> <span >Admin</span>
        </Typography>
        </Box>
      </Grid>
    </Grid>
    </>

  )
}

export default HeaderAdmin