import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../../constant';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        College Padho
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#ff9800',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#ff9800',
    },
  },
});

export default function LogInPage() {
    const navigate = useNavigate();
    const [data,setData]= React.useState({
        email:'',
        password:'',
    })
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    axios.post(BASE_URL+'/api/verifyuser',data).then(async (res)=>{
        console.log(res);
        if(res.data.message=="User Verified Successfully"){
            const isValid = await localStorage.getItem('IS_VALID');
            if(isValid==null || isValid==undefined || isValid=='undefined' || isValid=='null'){
                await localStorage.setItem('IS_VALID',JSON.stringify(1));
                navigate('/admin');
            }
            if(isValid==0){
                await localStorage.setItem('IS_VALID',JSON.stringify(1));
                navigate('/admin');
            }
            if(isValid==1){
                await localStorage.setItem('IS_VALID',JSON.stringify(1));
                navigate('/admin');
            }
            // await localStorage.setItem('IS_VALID',JSON.stringify(1));

        }
        else{
            alert(res.data.message);
    }
    }).catch((err)=>{
      console.log(err);
      alert('Something Went Wrong');
    });
  };

  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={(e)=>{setData({...data,email:e.target.value})}}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e)=>{setData({...data,password:e.target.value})}}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" sx={{color:'black'}}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <span onClick={()=>{navigate('/admin/register')}}>
                  {"Don't have an account? Sign Up"}
                </span>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}