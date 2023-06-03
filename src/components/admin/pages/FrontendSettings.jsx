import CssBaseline from '@mui/material/CssBaseline';
import SidebarAdmin from '../Global/SisebarAdmin'
import NavBarTop from '../Global/NavBarTop';
import HeaderAdmin from '../Global/HeaderAdmin';
import { Box, Grid, Button, Typography, OutlinedInput, Paper, TextareaAutosize, Checkbox, } from '@mui/material'
import { ArrowCircleRightOutlined } from '@mui/icons-material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import logo from '../../assets/home_banner.jpg'
import nameLogo from '../../assets/dark_logo.png'
import logoSm from '../../assets/logo-sm.png'
import favicon from '../../assets/favicon.png'

const drawerWidth = '280px'
const FrontendSetting = () => {
    const [dataForm, setDataForm] = useState([{ Bannertitle: "" }, { Bannersubtitle: "" }, { Slogan: "" }, { Eucookienote: "" }, { Cookiepolicy: "" }, {Aboutus: "" }, {Termsandcondition: "" },
    {Privacypolicy: "" },{ Faq: "" },  { Facebooklink: "" },{ Twitterlink: "" }, { Linkedinlink: "" }, { Googlelink: "" }, { Instagramlink:"" }, { Pinterestlink: "" }]);
    console.log(dataForm)
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
                    <Grid container spacing={2}>

                        <Grid item container justifyContent="space-between" alignItems="center" mt="15px">
                            <Grid item>
                                <Button id="addnewuser_btnText" startIcon={<ArrowCircleRightOutlined />} sx={{ fontWeight: 500, fontSize: "20px", color: "#212529", textTransform: "unset" }}> Frontend settings</Button>
                                <Button id="addnewuser_btnText2" sx={{ fontWeight: 500, fontSize: "20px", color: "#212529", textTransform: "unset" }}>Add New User</Button>
                            </Grid>
                        </Grid>

                        {/* paste your component (code) here  */}
                        <Grid item xs={12} >
                            <Paper sx={{ overflow: "hidden" }}>
                                <Box sx={{ bgcolor: "#1e1e2d" }}>
                                    <Typography color="white" p="15px">Frontend Setting</Typography>
                                </Box>


                                <Grid container spacing={2} p="15px">
                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rem"  sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>Banner title</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6.5}>
                                        <OutlinedInput placeholder='College Padho' sx={{ height: "40px" }} fullWidth onChange={(e) => { const newList = [...dataForm]; newList[0].Bannertitle = e.target.value; setDataForm(newList) }} value={dataForm[0].Bannertitle} />
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>



                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rem" textAlign="right" sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>Banner sub title</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6.5}>
                                        <OutlinedInput placeholder='College Padho' sx={{ height: "40px" }} fullWidth onChange={(e) => { const newList = [...dataForm]; newList[1].Bannersubtitle = e.target.value; setDataForm(newList) }} value={dataForm[1].Bannersubtitle} />
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>



                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rem" textAlign="right" sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>Slogan</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6.5}>
                                        <OutlinedInput placeholder='College Padho' sx={{ height: "40px" }} fullWidth onChange={(e) => { const newList = [...dataForm]; newList[2].Slogan = e.target.value; setDataForm(newList) }} value={dataForm[2].Slogan} />
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>



                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rem" textAlign="right" sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>Eu cookie note</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={5}>
                                        <OutlinedInput placeholder='College Padho' sx={{ height: "40px" }} fullWidth onChange={(e) => { const newList = [...dataForm]; newList[3].Eucookienote = e.target.value; setDataForm(newList) }} value={dataForm[3].Eucookienote} />
                                    </Grid>
                                    <Grid item container xs={12} sm={12} md={3} lg={3} sx={{ display: "flex", alignItems: "center" }} >
                                        <Grid item sx={{ width: "25px" }} >
                                            <Checkbox defaultChecked size="small" sx={{ p: "0px", mr: "5px" }} />
                                        </Grid>
                                        <Grid item xs={9} md={12} >
                                            <Typography sx={{ color: "#646c9a", fontSize: "17px" }}>Active</Typography>
                                        </Grid>

                                    </Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>



                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rem"  sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"}  }}>Cookie policy</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6.5}>
                                        <TextareaAutosize minRows={10} style={{ width: "100%" }} onChange={(e) => { const newList = [...dataForm]; newList[4].Cookiepolicy = e.target.value; setDataForm(newList) }} value={dataForm[4].Cookiepolicy} />
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>




                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="17px"  sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>About us</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6.5}>
                                        <TextareaAutosize minRows={10} style={{ width: "100%" }} onChange={(e) => { const newList = [...dataForm]; newList[5].Aboutus = e.target.value; setDataForm(newList) }} value={dataForm[5].Aboutus} />
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>




                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rempx"  sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"}}}>Terms and condition</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6.5}>
                                        <TextareaAutosize minRows={10} style={{ width: "100%" }} onChange={(e) => { const newList = [...dataForm]; newList[6].Termsandcondition = e.target.value; setDataForm(newList) }} value={dataForm[6].Termsandcondition} />
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>




                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rem"  sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>Privacy policy</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6.5}>
                                        <TextareaAutosize minRows={10} style={{ width: "100%" }} onChange={(e) => { const newList = [...dataForm]; newList[7].Privacypolicy = e.target.value; setDataForm(newList) }} value={dataForm[7].Privacypolicy} />
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>



                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rem" textAlign="right" sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"}}}>Faq
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6.5}>
                                        <TextareaAutosize minRows={10} style={{ width: "100%" }} onChange={(e) => { const newList = [...dataForm]; newList[8].Faq = e.target.value; setDataForm(newList) }} value={dataForm[8].Faq} />
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>




                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rem" sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>Facebook link</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={5} display="flex" alignItems="center">
                                        <OutlinedInput placeholder='Write down facebook url' sx={{ height: "40px", borderRadius: "6px 0px 0px 6px" }} fullWidth onChange={(e) => { const newList = [...dataForm]; newList[9].Facebooklink= e.target.value; setDataForm(newList) }} value={dataForm[9].Facebooklink} /><FacebookOutlinedIcon sx={{ bgcolor: "#ebebeb", width: "45px", height: "40px", borderRadius: "0px 6px 6px 0px" }} />
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>


                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rem"  sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"}}}>Twitter link</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={5} display="flex" alignItems="center">
                                        <OutlinedInput placeholder='Write down twitter url' sx={{ height: "40px", borderRadius: "6px 0px 0px 6px" }} fullWidth onChange={(e) => { const newList = [...dataForm]; newList[10].Twitterlink= e.target.value; setDataForm(newList) }} value={dataForm[10].Twitterlink} /><TwitterIcon sx={{ bgcolor: "#ebebeb", width: "45px", height: "40px", borderRadius: "0px 6px 6px 0px" }} fontSize='small' />
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>


                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rem"  sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>Linkedin link</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={5} display="flex" alignItems="center">
                                        <OutlinedInput placeholder='Write down Linkedin url' sx={{ height: "40px", borderRadius: "6px 0px 0px 6px" }} fullWidth onChange={(e) => { const newList = [...dataForm]; newList[11].Linkedinlink= e.target.value; setDataForm(newList) }} value={dataForm[11]. Linkedinlink} /><LinkedInIcon sx={{ bgcolor: "#ebebeb", width: "45px", height: "40px", borderRadius: "0px 6px 6px 0px" }} fontSize='small' />
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>




                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rem"  sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>Google link</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={5} display="flex" alignItems="center">
                                        <OutlinedInput placeholder='Write down Google  url' sx={{ height: "40px", borderRadius: "6px 0px 0px 6px" }} fullWidth onChange={(e) => { const newList = [...dataForm]; newList[12].Googlelink= e.target.value; setDataForm(newList) }} value={dataForm[12].Googlelink} /><GoogleIcon sx={{ bgcolor: "#ebebeb", width: "45px", height: "40px", borderRadius: "0px 6px 6px 0px" }} fontSize='small' />
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>




                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a"  fontSize="1.2rem" sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>Instagram link</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={5} display="flex" alignItems="center">
                                        <OutlinedInput placeholder='Write down Instagram  url' sx={{ height: "40px", borderRadius: "6px 0px 0px 6px" }} fullWidth onChange={(e) => { const newList = [...dataForm]; newList[13].Instagramlink  = e.target.value; setDataForm(newList) }} value={dataForm[13].Instagramlink } /><InstagramIcon sx={{ bgcolor: "#ebebeb", width: "45px", height: "40px", borderRadius: "0px 6px 6px 0px" }} fontSize='small' />
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>



                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rem"  sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>Pinterest link</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={5} display="flex" alignItems="center">
                                        <OutlinedInput placeholder='Write down Pinterest url' sx={{ height: "40px", borderRadius: "6px 0px 0px 6px" }} fullWidth onChange={(e) => { const newList = [...dataForm]; newList[14].Pinterestlink = e.target.value; setDataForm(newList) }}  /><PinterestIcon sx={{ bgcolor: "#ebebeb", width: "45px", height: "40px", borderRadius: "0px 6px 6px 0px" }} fontSize='small' />
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>





                                    <Grid item xs={4} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} lg={3} sx={{display:"flex",justifyContent:"center"}}>
                                        <Button variant='contained' sx={{ bgcolor: "#42a5f5", borderRadius: "18px" }}>Update Frontend</Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>



                        {/* secondpaper */}
                        <Grid item container spacing={3}>
                        <Grid item xs={12} lg={4}>
                            <Paper sx={{ overflow: "hidden" }}>
                                <Box sx={{ bgcolor: "#1e1e2d" }}>
                                    <Typography color="white" p="15px">Update banner image ( 1400 X 950 )</Typography>
                                </Box>

                                    <Grid item container sx={{mt:"20px"}}>
                                        
                                        <Grid item xs={12} sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                                            <Box sx={{ border: "1px solid #ebedf2",height:"240px",bgcolor:"#E0E0E0",width:"260px"}}>
                                                <Button component={"label"} disableRipple sx={{height:"100%",width:"100%"}}><Box sx={{height:"100%",width:"100%"}}><img src={logo} height="160px" width="100%"  /></Box><input type='file' hidden={true} /></Button>
                                            </Box>
                                            <Box>
                                            <Button variant="outlined" sx={{ borderRadius: "20px", color: "black", border: "1px solid #ebedf2", mt: "8px" }} disableRipple  > Select Image</Button>
                                            </Box>
                                        </Grid>
                                        
                                        <Grid item xs={12} borderBottom="1px solid #ebedf2" mt="30px" ></Grid>
                                    </Grid>
                                    <Grid item container sx={{display:"flex",justifyContent:"center",alignItems:"center",p:"15px"}}>
                                        <Grid item xs={12} sm={12} md={2.6}>
                                        <Button variant='contained' sx={{ bgcolor: "#42a5f5", borderRadius: "18px" }} fullWidth>Upload</Button>
                                        </Grid>
                                    </Grid>
                            </Paper>
                            <Grid />
                        </Grid>

                        {/* thirdPaper */}

                        <Grid item xs={12} lg={4}>
                            <Paper sx={{ overflow: "hidden" }}>
                                <Box sx={{ bgcolor: "#1e1e2d" }}>
                                    <Typography color="white" p="15px">Update light logo ( 330 X 70 )</Typography>
                                </Box>

                                    <Grid item container sx={{mt:"20px"}}>
                                        
                                        <Grid item xs={12} sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                                            <Box sx={{ border: "1px solid #ebedf2",height:"240px",bgcolor:"#E0E0E0",width:"260px",backgroundImage:`url(nameLogo)`}}>
                                                <Button component={"label"} disableRipple sx={{height:"100%",width:"100%"}}><Box sx={{height:"100%"}}><img src={nameLogo} height="40px" width="100%"  /></Box>
                                                    <input type='file' hidden={true} /></Button>
                                            </Box>
                                            <Box>
                                            <Button variant="outlined" sx={{ borderRadius: "20px", color: "black", border: "1px solid #ebedf2", mt: "8px" }} disableRipple  > Select Image</Button>
                                            </Box>
                                        </Grid>
                                        
                                        <Grid item xs={12} borderBottom="1px solid #ebedf2" mt="30px" ></Grid>
                                    </Grid>
                                    <Grid item container sx={{display:"flex",justifyContent:"center",alignItems:"center",p:"15px"}}>
                                        <Grid item xs={12} sm={12} md={2.6}>
                                        <Button variant='contained' sx={{ bgcolor: "#42a5f5", borderRadius: "18px" }} fullWidth>Upload</Button>
                                        </Grid>
                                    </Grid>
                            </Paper>
                            <Grid />
                        </Grid>

                        {/* fourthPaper */}

                        <Grid item xs={12} lg={4}>
                            <Paper sx={{ overflow: "hidden" }}>
                                <Box sx={{ bgcolor: "#1e1e2d" }}>
                                    <Typography color="white" p="15px">Update dark logo ( 330 X 70 )</Typography>
                                </Box>

                                    <Grid item container sx={{mt:"20px"}}>
                                        
                                        <Grid item xs={12} sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                                            <Box sx={{ border: "1px solid #ebedf2",height:"240px",bgcolor:"#E0E0E0",width:"260px",backgroundImage:`url(nameLogo)`}}>
                                                <Button component={"label"} disableRipple sx={{height:"100%",width:"100%"}}><Box sx={{height:"100%"}}><img src={nameLogo} height="40px" width="100%"  /></Box>
                                                    <input type='file' hidden={true} /></Button>
                                            </Box>
                                            <Box>
                                            <Button variant="outlined" sx={{ borderRadius: "20px", color: "black", border: "1px solid #ebedf2", mt: "8px" }} disableRipple  > Select Image</Button>
                                            </Box>
                                        </Grid>
                                        
                                        <Grid item xs={12} borderBottom="1px solid #ebedf2" mt="30px" ></Grid>
                                    </Grid>
                                    <Grid item container sx={{display:"flex",justifyContent:"center",alignItems:"center",p:"15px"}}>
                                        <Grid item xs={12} sm={12} md={2.6}>
                                        <Button variant='contained' sx={{ bgcolor: "#42a5f5", borderRadius: "18px" }} fullWidth>Upload</Button>
                                        </Grid>
                                    </Grid>
                            </Paper>
                            <Grid />
                        </Grid>

                        <Grid item xs={12} lg={4}>
                            <Paper sx={{ overflow: "hidden" }}>
                                <Box sx={{ bgcolor: "#1e1e2d" }}>
                                    <Typography color="white" p="15px">Update small logo ( 49 X 58 )</Typography>
                                </Box>

                                    <Grid item container sx={{mt:"20px"}}>
                                        
                                        <Grid item xs={12} sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                                            <Box sx={{ border: "1px solid #ebedf2",height:"240px",bgcolor:"#E0E0E0",width:"260px",backgroundImage:`url(nameLogo)`}}>
                                                <Button component={"label"} disableRipple sx={{height:"100%",width:"100%"}}><Box sx={{height:"100%"}}><img src={logoSm} height="170px" width="100%"  /></Box>
                                                    <input type='file' hidden={true} /></Button>
                                            </Box>
                                            <Box>
                                            <Button variant="outlined" sx={{ borderRadius: "20px", color: "black", border: "1px solid #ebedf2", mt: "8px" }} disableRipple  > Select Image</Button>
                                            </Box>
                                        </Grid>
                                        
                                        <Grid item xs={12} borderBottom="1px solid #ebedf2" mt="30px" ></Grid>
                                    </Grid>
                                    <Grid item container sx={{display:"flex",justifyContent:"center",alignItems:"center",p:"15px"}}>
                                        <Grid item xs={12} sm={12} md={2.6}>
                                        <Button variant='contained' sx={{ bgcolor: "#42a5f5", borderRadius: "18px" }} fullWidth>Upload</Button>
                                        </Grid>
                                    </Grid>
                            </Paper>
                            <Grid />
                        </Grid>

                        <Grid item xs={12} lg={4}>
                            <Paper sx={{ overflow: "hidden" }}>
                                <Box sx={{ bgcolor: "#1e1e2d" }}>
                                    <Typography color="white" p="15px">Update favicon ( 90 X 90 )</Typography>
                                </Box>

                                    <Grid item container sx={{mt:"20px"}}>
                                        
                                        <Grid item xs={12} sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                                            <Box sx={{ border: "1px solid #ebedf2",height:"240px",bgcolor:"#E0E0E0",width:"260px",backgroundImage:`url(nameLogo)`}}>
                                                <Button component={"label"} disableRipple sx={{height:"100%",width:"100%"}}><Box sx={{height:"100%"}}><img src={favicon} height="170px" width="100%"  /></Box>
                                                    <input type='file' hidden={true} /></Button>
                                            </Box>
                                            <Box>
                                            <Button variant="outlined" sx={{ borderRadius: "20px", color: "black", border: "1px solid #ebedf2", mt: "8px" }} disableRipple  > Select Image</Button>
                                            </Box>
                                        </Grid>
                                        
                                        <Grid item xs={12} borderBottom="1px solid #ebedf2" mt="30px" ></Grid>
                                    </Grid>
                                    <Grid item container sx={{display:"flex",justifyContent:"center",alignItems:"center",p:"15px"}}>
                                        <Grid item xs={12} sm={12} md={2.6}>
                                        <Button variant='contained' sx={{ bgcolor: "#42a5f5", borderRadius: "18px" }} fullWidth>Upload</Button>
                                        </Grid>
                                    </Grid>
                            </Paper>
                            <Grid />
                        </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default FrontendSetting;