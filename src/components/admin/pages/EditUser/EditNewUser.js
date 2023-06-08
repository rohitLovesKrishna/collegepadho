import CssBaseline from '@mui/material/CssBaseline';
import SidebarAdmin from '../../Global/SisebarAdmin';
import NavBarTop from '../../Global/NavBarTop';
import HeaderAdmin from '../../Global/HeaderAdmin';
import { Box, Grid, Button, Typography, OutlinedInput, Paper, TextareaAutosize, } from '@mui/material'
import { ArrowCircleRightOutlined } from '@mui/icons-material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import user from '../../../assets/user.jpeg'
import { useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from '../../../constant';
import { useParams } from 'react-router-dom';

const drawerWidth = '280px'
const EditNewUser = () => {
    const param = useParams();
    const [isData,setIsData] = useState([]);
    const [dataForm, setDataForm] = useState([{ Name: "" }, { Email: "" }, { Password: "" }, { Address: "" }, { Phone: "" }, { Website: "" }, { About: "" }, { Facebooklink: "" }, { Twitterlink: "" }, { Linkedinlink: "" }]);
    const fetchUsers = ()=>{
        axios.get(`${BASE_URL}/api/users`).then((res)=>{setIsData(res.data.response.filter((user)=>{return user._id === param.id}))}).catch((err)=>{console.log(err)});
    }
    useEffect(()=>fetchUsers(),[]);
    useEffect(()=>{if(isData.length > 0){setDataForm([{ Name:isData[0].name }, { Email: isData[0].email  }, { Password: isData[0].password }, { Address: isData[0].address }, { Phone: isData[0].phone  }, { Website:"" }, { About: "" }, { Facebooklink: "" }, { Twitterlink: "" }, { Linkedinlink: "" }])}},[isData]);

    return (
        <>

            <CssBaseline />
            {/* when screen size is small NavBar entry from top  */}
            <Box sx={{ alignItems: "center", height: "80px", display: { xs: "flex", md: "none", lg: "none", sm: "flex" }, justifyContent: "right", pr: "20px", bgcolor: " #1e1e2d", color: "white" }}>
                <NavBarTop />
            </Box>

            {/* when screen size is lg and md */}
            <SidebarAdmin />
            <Box sx={{ ml: { lg: drawerWidth, md: drawerWidth } }}>
                <Box component="main" sx={{ bgcolor: "#f2f3f8", p: 3, width: "100%" }}>
                    <HeaderAdmin />

                    {/* pages starts */}
                    <Grid container>

                        <Grid item container justifyContent="space-between" alignItems="center" mt="15px">
                            <Grid item>
                                <Button id="addnewuser_btnText" startIcon={<ArrowCircleRightOutlined />} sx={{ fontWeight: 500, fontSize: "20px", color: "#212529", textTransform: "unset" }}>Add New User</Button>
                                <Button id="addnewuser_btnText2" sx={{ fontWeight: 500, fontSize: "20px", color: "#212529", textTransform: "unset" }}>Add New User</Button>
                            </Grid>
                        </Grid>

                        {/* paste your component (code) here  */}
                        <Grid item xs={12} >
                            <Paper sx={{ overflow: "hidden" }}>
                                <Box sx={{ bgcolor: "#1e1e2d" }}>
                                    <Typography color="white" p="15px">User add form</Typography>
                                </Box>
                                <Grid container spacing={2} p="15px">
                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rem"  sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>Name</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6.5}>
                                        <OutlinedInput placeholder='name' sx={{ height: "40px" }} fullWidth onChange={(e) => { const newList = [...dataForm]; newList[0].Name = e.target.value; setDataForm(newList) }} value={dataForm[0].Name} />
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>

                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rem" sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>Email</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6.5}>
                                        <OutlinedInput placeholder='Email' sx={{ height: "40px" }} fullWidth onChange={(e) => { const newList = [...dataForm]; newList[1].Email = e.target.value; setDataForm(newList) }} value={dataForm[1].Email} />
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>

                                    <Grid item xs={12} sm={12} md={4} lg={4}>
                                        <Typography color="#646c9a" fontSize="1.2rem"  sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>Password</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6.5}>
                                        <OutlinedInput placeholder='Password' sx={{ height: "40px" }} fullWidth onChange={(e) => { const newList = [...dataForm]; newList[2].Password = e.target.value; setDataForm(newList) }} value={dataForm[2].Password} />
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>

                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rem" sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>Address</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6.5}>
                                        <TextareaAutosize minRows={10} style={{ width: "100%" }} onChange={(e) => { const newList = [...dataForm]; newList[3].Address = e.target.value; setDataForm(newList) }} value={dataForm[3].Address} />
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>

                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rem"  sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>Phone</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6.5}>
                                        <OutlinedInput placeholder='Phone' sx={{ height: "40px" }} fullWidth onChange={(e) => { const newList = [...dataForm]; newList[4].Phone = e.target.value; setDataForm(newList) }} value={dataForm[4].Phone} />
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>


                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rem"  sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>Website</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6.5}>
                                        <OutlinedInput placeholder='Website' sx={{ height: "40px" }} fullWidth onChange={(e) => { const newList = [...dataForm]; newList[5].Website = e.target.value; setDataForm(newList) }} value={dataForm[5].Website} />
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>



                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rem"  sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>About</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6.5}>
                                        <TextareaAutosize minRows={10} style={{ width: "100%" }} onChange={(e) => { const newList = [...dataForm]; newList[6].About = e.target.value; setDataForm(newList) }} value={dataForm[6].About} />
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>



                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rem"  sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>Facebook link</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={5} display="flex" alignItems="center">
                                        <OutlinedInput placeholder='Write down facebook url' sx={{ height: "40px", borderRadius: "6px 0px 0px 6px" }} fullWidth onChange={(e) => { const newList = [...dataForm]; newList[7].Facebooklink = e.target.value; setDataForm(newList) }} value={dataForm[7].Facebooklink} /><FacebookOutlinedIcon sx={{ bgcolor: "#ebebeb", width: "45px", height: "40px", borderRadius: "0px 6px 6px 0px" }} />
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>


                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rem"  sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>Twitter link</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={5} display="flex" alignItems="center">
                                        <OutlinedInput placeholder='Write down twitter url' sx={{ height: "40px", borderRadius: "6px 0px 0px 6px" }} fullWidth onChange={(e) => { const newList = [...dataForm]; newList[8].Twitterlink = e.target.value; setDataForm(newList) }} value={dataForm[8].Twitterlink} /><TwitterIcon sx={{ bgcolor: "#ebebeb", width: "45px", height: "40px", borderRadius: "0px 6px 6px 0px" }} fontSize='small' />
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>


                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rem"  sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>Linkedin link</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={5} display="flex" alignItems="center">
                                        <OutlinedInput placeholder='Write down Linkedin url' sx={{ height: "40px", borderRadius: "6px 0px 0px 6px" }} fullWidth onChange={(e) => { const newList = [...dataForm]; newList[9].Linkedinlink = e.target.value; setDataForm(newList) }} value={dataForm[9].Linkedinlink} /><LinkedInIcon sx={{ bgcolor: "#ebebeb", width: "45px", height: "40px", borderRadius: "0px 6px 6px 0px" }} fontSize='small' />
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>


                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rem"  sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>User image</Typography>
                                    </Grid>
                                    <Grid item xs={10} md={3} sx={{ margin: { xs: "auto", sm: "auto" } }}>
                                        <Box sx={{ border: "1px solid #ebedf2", width: "100%" }}>
                                            <Button component={"label"} disableRipple fullWidth><img src={user} alt='pic' height="220px" width="100%" /><input type='file' hidden={true} /></Button>
                                        </Box>
                                        <Button variant="outlined" sx={{ borderRadius: "20px", color: "black", border: "1px solid #ebedf2", mt: "8px" }} disableRipple  > Select Image</Button>
                                    </Grid>
                                    <Grid item xs={5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>

                                    <Grid item xs={4} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sm={12} md={4} lg={3} sx={{display:"flex",justifyContent:{xs:"center",sm:"center"}}}>
                                        <Button variant='contained' sx={{ bgcolor: "#42a5f5", borderRadius: "18px" }}>Add user</Button>
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

export default EditNewUser;