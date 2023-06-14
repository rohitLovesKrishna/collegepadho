import CssBaseline from '@mui/material/CssBaseline';
import SidebarAdmin from '../Global/SisebarAdmin'
import NavBarTop from '../Global/NavBarTop';
import HeaderAdmin from '../Global/HeaderAdmin';
import { Box, Grid, Button, Typography, OutlinedInput, Paper, TextareaAutosize, FormControl, Select, TextField, MenuItem, } from '@mui/material'
import { ArrowCircleRightOutlined } from '@mui/icons-material';
import { useState } from 'react';


const drawerWidth = '280px'
const SystemSetting = () => {
  

    const [select, setSelect] = useState({
        WebsiteTitle:"",
        systemTitle:"",
        MetaDescription:"",
        SystemEmail:"",
        Address:"",
        FooterLink:"",
        FooterText:"",
        select1:"",
        select2:"",
        select3:""
    })

    const handleCollector=(e)=>{
        const {name, value}=e.target
        setSelect({...select,[name]:value})
    }

    console.log(select)
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
                    <Grid container spacing={2} >

                        <Grid item container justifyContent="space-between" alignItems="center" mt="15px">
                            <Grid item>
                                <Button id="addnewuser_btnText" startIcon={<ArrowCircleRightOutlined />} sx={{ fontWeight: 500, fontSize: "20px", color: "#212529", textTransform: "unset" }}> System settings</Button>
                                <Button id="addnewuser_btnText2" sx={{ fontWeight: 500, fontSize: "20px", color: "#212529", textTransform: "unset" }}>System settings</Button>
                            </Grid>
                        </Grid>

                        {/* paste your component (code) here  */}
                        <Grid item xs={12} lg={8} >
                            <Paper sx={{ overflow: "hidden" }}>
                                <Box sx={{ bgcolor: "#1e1e2d" }}>
                                    <Typography color="white" p="15px">System settings</Typography>
                                </Box>


                                <Grid container spacing={2} p="15px">
                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rem"  sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"}  }}>Website title</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6.5}>
                                        <OutlinedInput sx={{ height: "40px" }} fullWidth name="WebsiteTitle" value={select.WebsiteTitle} onChange={handleCollector}  />
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>



                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rem"   sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>System title</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6.5}>
                                        <OutlinedInput sx={{ height: "40px" }} fullWidth  name="systemTitle" value={select.systemTitle} onChange={handleCollector}/>
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>



                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rem"  sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>Meta keyword</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6.5}>
                                        <TextareaAutosize minRows={10} style={{ width: "100%" }}/>
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>



                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rem" sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>Meta description</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6.5}>
                                        <TextareaAutosize minRows={10} style={{ width: "100%" }}  name="MetaDescription" value={select.MetaDescription} onChange={handleCollector} />
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>



                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rem" sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>System email</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6.5}>
                                        <OutlinedInput sx={{ height: "40px" }} fullWidth  name="SystemEmail" value={select.SystemEmail} onChange={handleCollector}/>
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>



                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rem" sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"}}}>Address</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6.5}>
                                        <TextareaAutosize minRows={10} style={{ width: "100%" }} name="Address" value={select.Address} onChange={handleCollector} />
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>


                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rem"  sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>Phone</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6.5}>
                                        <OutlinedInput sx={{ height: "40px" }} fullWidth name="Phone" value={select.Phone} onChange={handleCollector} />
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>




                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rem" sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>Country</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6.5}>

                                        <FormControl fullWidth size='small'>

                                            <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }}
                                                value={select.select1}
                                                onChange={(e) => { const newfile={...select};newfile.select1=e.target.value;setSelect(newfile)}}
                                            >
                                                <TextField placeholder='Search here' size='small' fullWidth />
                                                <MenuItem value="" disabled>India</MenuItem>
                                                <MenuItem value="xyz" >xyz</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>


                                     
                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="17px" textAlign="right" sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>Timezone</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6.5}>

                                        <FormControl fullWidth size='small'>

                                            <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }}
                                                value={select.select2}
                                                onChange={(e) => {const newfile={...select};newfile.select2=e.target.value;setSelect(newfile) }}
                                            >
                                                <TextField placeholder='Search here' size='small' fullWidth />
                                                <MenuItem value="" disabled>Asia/Kolkata</MenuItem>
                                                <MenuItem value="xyz" >xyz</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>


                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="1.2rem" sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>System language</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6.5}>

                                        <FormControl fullWidth size='small'>

                                            <Select displayEmpty 
                                                value={select.select3}
                                                onChange={(e) => { const newfile={...select};newfile.select3=e.target.value;setSelect(newfile)}}
                                            >
                                                <TextField placeholder='Search here' size='small' fullWidth />
                                                <MenuItem value="" disabled>English</MenuItem>
                                                <MenuItem value="xyz" >xyz</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>


                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="17px" textAlign="right" sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>Footer text</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6.5}>
                                        <OutlinedInput sx={{ height: "40px" }} fullWidth name="FooterText" value={select.FooterText} onChange={handleCollector}/>
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>


                                    <Grid item xs={12} sm={12} md={4} >
                                        <Typography color="#646c9a" fontSize="17px" textAlign="right" sx={{ mt: "5px", mr: "30px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>Footer link</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6.5}>
                                        <OutlinedInput sx={{ height: "40px" }} fullWidth name="FooterLink" value={select.FooterLink} onChange={handleCollector}/>
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                    <Grid item xs={12} sx={{ borderBottom: "1px solid  #ebedf2" }}></Grid>




                                    
                                    <Grid item xs={12} sx={{display:"flex",justifyContent:"center"}}>
                                        <Button variant='contained' sx={{ bgcolor: "#42a5f5", borderRadius: "18px" }}>save</Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                       


                       <Grid item xs={12} lg={4}>
                      
                            <Paper sx={{ overflow: "hidden" }}>
                                <Box sx={{ bgcolor: "#1e1e2d" }}>
                                    <Typography color="white" p="15px">Update product</Typography>
                                </Box>

                                    <Grid item container sx={{mt:"20px"}}>
                                        
                                        <Grid item xs={3}>
                                            <Typography sx={{color:"#646c9a"}} align='center'>File</Typography>
                                        </Grid>
                                        
                                        <Grid item xs={6} sx={{bgcolor:"#5d78ff"}}>
                                       
                                                <Button component={"label"} disableRipple sx={{height:"100%",width:"100%"}}>
                                                    <input type='file'/></Button>
                                        </Grid>
                                        
                                        <Grid item xs={12} borderBottom="1px solid #ebedf2" mt="30px"></Grid>
                                    </Grid>
                                    <Grid item xs={12} sx={{display:"flex",justifyContent:"center",alignItems:"center",p:"15px"}}>
                                        
                                        <Button variant='contained' sx={{ bgcolor: "#42a5f5", borderRadius: "18px",fontSize:"12px"}} size="small">Update product</Button>
                                        
                                    </Grid>
                            </Paper>
                            <Grid />
                        
                       </Grid>




                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default SystemSetting;