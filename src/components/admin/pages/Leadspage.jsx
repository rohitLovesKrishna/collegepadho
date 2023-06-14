import { Box, Button, CssBaseline, FormControl, Grid, MenuItem, OutlinedInput, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import NavBarTop from '../Global/NavBarTop';
import HeaderAdmin from '../Global/HeaderAdmin';
import { CSVLink } from "react-csv";
import SidebarAdmin from '../Global/SisebarAdmin'
import { ArrowCircleRightOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../AdminMaster.css'
import BASE_URL from '../../constant';
import Loader from '../../Loader';

const SelectComponent = (props)=>{return( <><Grid mb={2} item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2} ><Grid item><Typography mr="12px" fontSize="12px" color="#646c9a">{props.label}</Typography></Grid><Grid item lg={12} md={12} sm={12} xs={12}>  <FormControl sx={{ width: "100%" }}> <Select  displayEmpty  style={{fontSize:"10px"}} renderValue={(selected) => {if (selected.length === 0) {return <em>{props.placeholder}</em>;}return props.value}} value={props.value}  onChange={(e)=>{props.onChange(e,props.in)}} onClick={(event) => event.stopPropagation()} size="small" id="mylabel"  labelId="mylabel" sx={{ width: { lg: "100%", md: "100%" }, color: "black" }}>  <MenuItem sx={{ fontSize: "10px" }} disabled value=""> {props.label}</MenuItem>{props.listItems.map((item)=>{return (<MenuItem key={item} sx={{ fontSize: "10px" }} value={item}>{item}</MenuItem>)})}</Select></FormControl></Grid></Grid></>)}
const drawerWidth = '280px'
const headers = [{ label: "User id", key: "_id" },{ label: "Name", key: "name" },{ label: "Source", key: "source" },{ label: "Date", key: "createdAt" },{ label: "Email", key: "email" },{ label: "Phone", key: "mobile" },{ label: "City", key: "city" }, { label: "Course", key: "course" }];

const Leadspage = () => {
const [dateRange,setDateRange] = useState({from:"",to:""})
const [textField2,setTextField2] = useState("")
const [dataToDownload,setDataToDownload] = useState([]);
const [textField,setTextField] = useState("")
const [data, setData] = useState([]);  
const getApi=()=>{ axios.get(`${BASE_URL}/api/leads`).then((res)=>{ setData(res.data.response.reverse());}).catch((err)=>{console.log(err);alert('something went wrong')}) }
useEffect(()=>{getApi();},[])

const dataToDownloadFetch = async ()=>{
const filteredData = await data.map((item)=>{return {...item,createdAt:item.createdAt.slice(0,10)}}).filter((item)=>{
    const itemDate = new Date(item.createdAt);
    return itemDate >= new Date(dateRange.from) && itemDate <= new Date(dateRange.to);
})
setDataToDownload(filteredData)
}


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
                        <Grid item xs={12} sm={12} md={4} lg={4} p="10px" >
                            <Typography>Select Date Range</Typography>
                            <OutlinedInput type='date' value={dateRange.from} onChange={(e)=>setDateRange((prev)=>{return {...prev,from:e.target.value}})}  fullWidth></OutlinedInput>
                            <OutlinedInput type='date' value={dateRange.to} onChange={(e)=>setDateRange((prev)=>{return {...prev,to:e.target.value}})} fullWidth></OutlinedInput>
                        </Grid>
                        <Grid item xs={12} md={4}  p="10px" >
                             <SelectComponent   onChange={(e)=>setTextField2(e.target.value)} value={textField2} label="Select Stream" placeholder="Select Stream" listItems={["Ok","ok2"]}/> 
                        </Grid>
                        <Grid item xs={12} md={4}  p="10px">
                            <SelectComponent   onChange={(e)=>setTextField(e.target.value)} value={textField} label="Select College" placeholder="Select College" listItems={["Ok","ok2"]}/>
                        </Grid>
                        
                    </Grid>
                    <Grid item xs={12}>
                       
                        <CSVLink data={dataToDownload} filename={"leads.csv"} headers={headers}>
                            <Button onClick={dataToDownloadFetch} variant="contained" size='small'>CSV Download</Button>
                        </CSVLink>
                     </Grid>
                     {data.length > 0 ?
                     <Grid item xs={12} container>
                    <Typography>Total Leads : {data.length}</Typography>
                    <div className='unique'>
                        <TableContainer>
                            <Table>
                            <TableHead>
                                <TableRow sx={{bgcolor:"#868aa7",whiteSpace:'nowrap'}}>
                                    <TableCell align='center'>#</TableCell>
                                    <TableCell align='center'>Name</TableCell>
                                    <TableCell align='center'>Lead Source</TableCell>
                                    <TableCell align='center'>Date</TableCell>
                                    <TableCell align='center'>Email</TableCell>
                                    <TableCell align='center'>Phone</TableCell>
                                    <TableCell align='center'>City</TableCell>
                                    <TableCell align='center'>Course</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((item, index)=>{
                                    return (
                                        <TableRow key={item._id} sx={{whiteSpace:'nowrap'}}>
                                        <TableCell align='center'>{index+1}</TableCell>
                                        <TableCell align='center'>{item.name}</TableCell>
                                         <TableCell align='center'>{item.source}</TableCell>
                                        <TableCell align='center'>{item.createdAt.slice(0,10)}</TableCell>
                                        <TableCell align='center'>{item.email}</TableCell>
                                        <TableCell align='center'>{item.mobile}</TableCell>
                                        <TableCell align='center'>{item.city}</TableCell>
                                        <TableCell align='center'>{item.course}</TableCell>
                                         </TableRow>
                                    )
                                })}
                            </TableBody>
                            </Table>
                        </TableContainer>
                        </div>
                     </Grid>
                   :<div style={{marginTop:"-200px"}}><Loader/></div>}

                       
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