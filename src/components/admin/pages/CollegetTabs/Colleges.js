import { Select, MenuItem, Typography, Box, Button, Grid, Paper, FormControl, InputLabel, TextField } from '@mui/material'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Add, Search } from '@mui/icons-material';
import { useState } from 'react';
import "../../AdminMaster.css"
import TableMain from '../../Global/Table';
import CssBaseline from '@mui/material/CssBaseline';
import SidebarAdmin from '../../Global/SisebarAdmin'
import NavBarTop from '../../Global/NavBarTop';
import HeaderAdmin from '../../Global/HeaderAdmin';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BASE_URL from '../../../constant';
import { useEffect } from 'react';


const drawerWidth = '280px'
const Colleges = () => {
  const navigatePath = "fo5n4ejplzppvs0y8d52u3bkuwvd0m6y57365a0tyub6p044fn7e6csupcqmwxq5ikuncw0bjrwbvltj0f9v2kdcijvvo2wlwqlh"
  const navigate = useNavigate();
  const [data, setData] = useState([])
  const [searchCollege, setSearchCollege] = useState("")
  const [dataFilter, setDataFilter] = useState([]);
  const [dropdown1Value, setDropdown1Value] = useState('');
  const [dropdown2Value, setDropdown2Value] = useState('');
  const [dropdown3Value, setDropdown3Value] = useState('');
  const [rows, setRows] = useState(10);
  const [users, setUsers] = useState([]);
  const handleDropdown1Change = (event) => { setDropdown1Value(event.target.value); };
  const handleDropdown2Change = (event) => { setDropdown2Value(event.target.value); };
  const handleDropdown3Change = (event) => { setDropdown3Value(event.target.value); };
  const handleFilterButtonClick = () => {// Handle filter button click
  };
  const changeRowsHandler = (e) => { setRows(e.target.value) }
  const fetchColleges = () => {
    axios.get(`${BASE_URL}/api/college`).then((res) => { setData(res.data.responses); setDataFilter(res.data.responses) }).catch((err) => { console.log(err); })
  }
  const fetchUsers = () => {
    axios.get(`${BASE_URL}/api/users`).then((res) => { setUsers(res.data.response) }).catch((err) => { console.log(err) })
  }
  useEffect(() => { fetchUsers() }, []);
  useEffect(() => {

    setDataFilter(data.filter((item) => {
      return item.collegeName.includes(searchCollege)
    }))

  }, [searchCollege]);
  useEffect(() => fetchColleges(), [])

  return (
    <>
      <CssBaseline />
      {/* when screen size is small NavBar entry from top  */}
      <Box sx={{ alignItems: "center", height: "80px", display: { xs: "flex", md: "none", lg: "none", sm: "flex" }, justifyContent: "right", pr: "20px", bgcolor: " #1e1e2d", color: "white" }}>
        <NavBarTop />
      </Box>

      {/* when screen size is lg and md */}
      <SidebarAdmin />
      {/* drawerWidth = '350px' */}
      <Box sx={{ ml: { lg: drawerWidth, md: drawerWidth } }}>
        <Box component="main" sx={{ bgcolor: "#f2f3f8", p: 3, width: "100%" }}>
          <HeaderAdmin />
          {/* pages starts */}
          <Grid container>

            <Grid item container justifyContent="space-between" alignItems="center" mt="15px">
              <Grid item>
                <Button id="addnewuser_btnText" startIcon={<ArrowCircleRightOutlinedIcon />} sx={{ fontWeight: 500, fontSize: "20px", color: "#212529", textTransform: "unset" }}>Colleges</Button>
                <Button id="addnewuser_btnText2" sx={{ fontWeight: 500, fontSize: "20px", color: "#212529", textTransform: "unset" }}>Colleges</Button>
              </Grid>
              <Grid item>
                {/* for large screen */}
                <Button onClick={() => { localStorage.removeItem('STEP_3'); localStorage.removeItem('STEP_2'); localStorage.removeItem('COLLEGE_ID'); navigate(`/admin/${navigatePath}`) }} id="addnewuser_btn" variant='contained' size='small' startIcon={<Add />} sx={{ bgcolor: "#5d78ff", borderRadius: "50px", textTransform: "unset" }}>Add new college</Button>
                {/* for smaller screen */}
                <Button onClick={() => { localStorage.removeItem('STEP_3'); localStorage.removeItem('STEP_2'); localStorage.removeItem('COLLEGE_ID'); navigate(`/admin/${navigatePath}`) }} id="addnewuser_btn2" size='small' variant='contained' sx={{ borderRadius: "30px" }} ><Add /></Button>
              </Grid>
            </Grid>

            <Grid item container component={Paper} mt="20px">
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box sx={{ width: "100%", bgcolor: "#282a3c", color: "white", height: "40px", display: "flex", alignItems: "center" }}>
                  <Typography ml="10px" fontSize="18px">All colleges</Typography>
                </Box>
              </Grid>

              <Paper sx={{ p: "20px", width: "100%", m: "20px" }} elevation={2} >
                <Grid item container justifyContent='space-evenly' alignItems="center" spacing={2}>
                  <Grid item lg={2} md={3} sm={12} xs={12}>
                    <FormControl sx={{ width: "100%" }}>
                      {dropdown1Value === "" ? <InputLabel shrink={false} sx={{ fontSize: "10px" }} id="mylabel">All status</InputLabel> : null}

                      <Select onClick={(event) => event.stopPropagation()} size='small' labelId='mylabel' sx={{ width: { lg: "120%", md: "100%" }, color: "black" }} value={dropdown1Value} onChange={handleDropdown1Change}>
                        <TextField fullWidth focused={false} autoFocus size='small' id="searchInputadmin" label="Search" variant="outlined" />
                        <MenuItem sx={{ fontSize: "10px" }} disabled value="">All status</MenuItem>
                        <MenuItem sx={{ fontSize: "10px" }} value="Pending">Pending</MenuItem>
                        <MenuItem sx={{ fontSize: "10px" }} value="Active">Active</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item lg={2} md={3} sm={12} xs={12}>
                    <FormControl sx={{ width: "100%" }}>
                      {dropdown2Value === "" ? <InputLabel shrink={false} sx={{ fontSize: "10px" }} id="mylabel">All users</InputLabel> : null}
                      <Select onClick={(event) => event.stopPropagation()} size='small' labelId='mylabel' sx={{ width: { lg: "120%", md: "100%" }, color: "black" }} value={dropdown2Value} onChange={handleDropdown2Change}>
                        <TextField fullWidth focused={false} autoFocus size='small' id="searchInputadmin" label="Search" variant="outlined" />
                        {users.map((item) => {
                          return (<MenuItem key={item._id} sx={{ fontSize: "10px" }} value={item.name}>{item.name}</MenuItem>)
                        })}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item lg={2} md={3} sm={12} xs={12}>
                    <FormControl sx={{ width: "100%" }}>
                      {dropdown2Value === "" ? <InputLabel shrink={false} sx={{ fontSize: "10px" }} id="mylabel">Verification status</InputLabel> : null}
                      <Select onClick={(event) => event.stopPropagation()} labelId='mylabel2' size='small' sx={{ width: { lg: "120%", md: "100%" }, color: "black" }} value={dropdown3Value} onChange={handleDropdown3Change}>
                        <TextField focused={false} fullWidth autoFocus size='small' id="searchInputadmin" label="Search" variant="outlined" />
                        <MenuItem sx={{ fontSize: "10px" }} disabled value="">Verification status</MenuItem>
                        <MenuItem sx={{ fontSize: "10px" }} value="Verified">Verified</MenuItem>
                        <MenuItem sx={{ fontSize: "10px" }} value="Non-Verified">Non-Verified</MenuItem>
                      </Select>
                    </FormControl  >
                  </Grid>
                  <Grid item lg={2} md={3} sm={12} xs={12}>
                    <Button startIcon={<Search />} sx={{ bgcolor: "#42A5F5 ", borderRadius: "50px", width: "100%" }} variant="contained" color="primary" onClick={handleFilterButtonClick}>
                      Filter
                    </Button>
                  </Grid>
                </Grid>
              </Paper>

              <Paper id="collegePagePaper" sx={{ p: "20px", width: "100%", m: "20px" }} elevation={2} >
                <Grid item container justifyContent='space-evenly' alignItems="center" spacing={2}>
                  <Grid item xs={12} lg={6} md={6} sm={6}  >
                    <Box sx={{ display: "flex", justifyContent: { sm: "left", md: "left", lg: "left", xs: "center" }, alignItems: "center" }}>
                      <Typography mr="5px" sx={{ fontSize: "13px", color: "#6c7293" }}>Show</Typography>
                      <div>
                        <select onChange={changeRowsHandler} style={{ border: "1px solid #ebedf2", padding: "4px 10px", outline: "none" }} name="ok" >
                          <option value={10}>10</option>
                          <option value={25}>25</option>
                          <option value={50}>50</option>
                          <option value={100}>100</option>
                        </select>
                      </div>

                      <Typography ml="5px" sx={{ fontSize: "13px", color: "#6c7293" }}>enteries</Typography>
                    </Box>

                  </Grid>
                  <Grid item xs={12} lg={6} md={6} sm={6}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: { sm: "right", md: "right", lg: "right", xs: "center" } }}>
                      <Typography sx={{ fontSize: "13px", color: "#6c7293" }} >Search:&nbsp;</Typography>
                      <TextField onChange={(e) => setSearchCollege(e.target.value)} value={searchCollege} focused={false} sx={{ border: "1px solid #ebedf2" }} size='small' id="searchInputadmin" label="Search" variant="outlined" />
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={12} md={12} sm={12}>
                    <TableMain dummyData={dataFilter} rows={rows} setRows={setRows} />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>

        </Box>
      </Box>
    </>
  )
}


export default Colleges