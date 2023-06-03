import { Box, Button, CssBaseline, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import NavBarTop from '../Global/NavBarTop';
import HeaderAdmin from '../Global/HeaderAdmin';
import { CSVLink } from "react-csv";
import SidebarAdmin from '../Global/SisebarAdmin'
import { ArrowCircleRightOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from '../../constant';


const drawerWidth = '280px'
const headers = [
  { label: "S.no.", key: "id" },
  { label: "Name", key: "name" },
  { label: "Date", key: "date" },
  { label: "Email", key: "email" },
  { label: "Phone", key: "phone" },
  { label: "City", key: "city" },
  { label: "Course", key: "course" },
  { label: "Applied for", key: "applied" },
];

const Leadspage = () => {
    const [data, setData] = useState([]);
    

    const getApi=()=>{
        axios.get(`${BASE_URL}/api/leads`).then((res)=>{
            console.log(res);
            setData(res.data.response);
        }).catch((err)=>{
            console.log(err);
            alert('something went wrong')
        })
    }

    useEffect(()=>{
        getApi();
    },[])

    return (
        <>
               <CssBaseline />
              {/* when screen size is small NavBar entry from top  */}
            <Box sx={{alignItems:"center",height:"80px",display:{xs:"flex",md:"none",lg:"none",sm:"flex"},justifyContent:"right",pr:"20px",bgcolor:" #1e1e2d",color:"white"}}>
                <NavBarTop/>
            </Box>
              {/* when screen size is lg and md */}
           <SidebarAdmin />
              {/* drawerWidth = '280px' */} 
            <Box sx={{ml:{lg:drawerWidth,md:drawerWidth}}}>
                <Box component="main" sx={{ bgcolor: "#f2f3f8", p: 3,width:"100%" }}>
                     <HeaderAdmin /> 
                       <Grid container>
          
           <Grid item container justifyContent="space-between" alignItems="center" mt="15px">
            <Grid item>
               <Button id="addnewuser_btnText" startIcon={<ArrowCircleRightOutlined/>} sx={{fontWeight:500,fontSize:"20px",color:"#212529",textTransform:"unset"}}> Leads</Button>
              <Button id="addnewuser_btnText2" sx={{fontWeight:500,fontSize:"20px",color:"#212529",textTransform:"unset"}}>Leads</Button>
            </Grid>
           </Grid>
           <Grid item container component={Paper} mt="20px">
             <Grid item lg={12} md={12} sm={12} xs={12}>
               <Box sx={{width:"100%",bgcolor:"#282a3c",color:"white",height:"40px",display:"flex",alignItems:"center"}}>
                 <Typography ml="10px" fontSize="18px"> Leads</Typography>
               </Box>
             </Grid>
 <Paper sx={{p:"20px",width:"100%",m:"20px"}} elevation={2} >
                <Grid container spacing={2}>
                    <Grid item container spacing={5}>
                        <Grid item xs={12} sm={4} p="10px" >
                            <Typography>Select Date Range</Typography>
                            <OutlinedInput type='date'  fullWidth></OutlinedInput>
                        </Grid>
                        <Grid item xs={12} md={4}  p="10px" 
                        >
                            <Typography color="#646c9a">select Stream</Typography>

                            <FormControl sx={{ width: "100%" }}>
                                <InputLabel id="mylabel" shrink={false}>None</InputLabel>
                                <Select labelId='mylabel'>
                                    <MenuItem value="None">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>

                        </Grid>
                        <Grid item xs={12} md={4}  p="10px">
                            <Typography color="#646c9a">select College</Typography>

                            <FormControl sx={{ width: "100%" }}>
                                <InputLabel id="mylabel" shrink={false}>None</InputLabel>
                                <Select labelId='mylabel'>
                                    <MenuItem value="None">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>

                        </Grid>
                        
                    </Grid>
                    <Grid item xs={12}>
                        <CSVLink data={data} filename={"leads.csv"} headers={headers}>
                                <Button variant="contained" size='small'>CSV Download</Button>
                        </CSVLink>
                     </Grid>
                     <Grid item xs={12} container sx={{width:"100%"}} >
                        <TableContainer sx={{width:"100%"}}>
                            <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Phone</TableCell>
                                    <TableCell>City</TableCell>
                                    <TableCell>Course</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((item, index)=>{
                                    return (
                                        <TableRow key={item.id}>
                                        <TableCell>{index+1}</TableCell>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.createdAt.slice(0,10)}</TableCell>
                                        <TableCell>{item.email}</TableCell>
                                        <TableCell>{item.mobile}</TableCell>
                                        <TableCell>{item.city}</TableCell>
                                        <TableCell>{item.course}</TableCell>
                                         </TableRow>
                                    )
                                })}
                            </TableBody>
                            </Table>
                        </TableContainer>
                     </Grid>
                       
                </Grid>
            </Paper>
         </Grid>
           </Grid>

              </Box>
            </Box>
        </>

    );
}

export default Leadspage;