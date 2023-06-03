import CssBaseline from "@mui/material/CssBaseline";
import SidebarAdmin from "../../Global/SisebarAdmin";
import NavBarTop from "../../Global/NavBarTop";
import HeaderAdmin from "../../Global/HeaderAdmin";
import { Box, Grid, Button, Paper, Typography, Divider } from "@mui/material";
import { ArrowCircleRightOutlined } from "@mui/icons-material";
import useAddNewLogic from "../../hooks/useAddNewLogic";
import ClgTabAmenities from "./ClgTabAmenities";
import ClgTabSEO from "./ClgTabSEO";
import ClgTabDescription from "./ClgTabDescription";
import CollegeTabSchedule from "./CollegeTabSchedule";
import ClgTabContact from "./ClgTabContact";
import ClgTabBasic from "./ClgTabBasic";
import ClgTabPlacement from "./ClgTabPlacement"
import ClgTabMedia from "./ClgTabMedia";
import ClgTabCourse from "./ClgTabCourse";
const drawerWidth = "280px";
const EditCollege = () => {
  const { selected, selectionHandler, data } = useAddNewLogic();
  const {Description,Placement, Course, Contact,Basic,Amenities,Media,SEO,Schedule,} = selected;

  return (
    <>
      <CssBaseline />
      {/* when screen size is small NavBar entry from top  */}
      <Box sx={{alignItems: "center",height: "80px",display: { xs: "flex", md: "none", lg: "none", sm: "flex" },justifyContent: "right",pr: "20px",bgcolor: " #1e1e2d",color: "white",}}><NavBarTop /></Box>
      {/* when screen size is lg and md */}
      <SidebarAdmin /> {/* drawerWidth = '350px' */}
      <Box sx={{ ml: { lg: drawerWidth, md: drawerWidth } }}>
        <Box component="main" sx={{ bgcolor: "#f2f3f8", p: 3, width: "100%" }}>
          <HeaderAdmin />

          {/* pages starts */}
          <Grid container>
            <Grid item container justifyContent="space-between" alignItems="center" mt="15px" >
              <Grid item>
                <Button
                  id="addnewuser_btnText"
                  startIcon={<ArrowCircleRightOutlined />}
                  sx={{ fontWeight: 500, fontSize: "20px", color: "#212529", textTransform: "unset", }}>Add New College</Button>
                <Button
                  id="addnewuser_btnText2"
                  sx={{fontWeight: 500,fontSize: "20px", color: "#212529", textTransform: "unset", }} >Add New College </Button>
              </Grid>
            </Grid>

            <Grid item container component={Paper} mt="20px">
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box sx={{ width: "100%", bgcolor: "#282a3c", color: "white",height: "40px",     display: "flex", alignItems: "center",}}>
                   
                  <Typography ml="10px" fontSize="18px">
                    All colleges
                  </Typography>
                </Box>
              </Grid>
              <Paper sx={{ p: "15px", width: "100%", m: "0px" }} elevation={2}>
                <Grid item container mb="20px">
                  <Box
                    sx={{ overflowX: "auto", width: "100%", display: "flex" }}
                  >
                    {data.map((item) => {
                      return (
                        <Grid key={item} item>
                          <Box  sx={{width: "100%", borderBottom: selected[item]  ? "2px solid blue"   : "none",   p: 2, display: "flex",color: selected[item] ? "blue" : "#373e4a",}}>
        <Typography  fontSize="12px" onClick={() => selectionHandler(item)}  sx={{fontWeight:selected[item] ?'900':'100',color:selected[item]?'green':'gray',  m: "0px 5px",  p: 0.2,  cursor: "pointer",   opacity: 1, "&:hover": { opacity: 0.6 }, }} > {item} </Typography>
    </Box>
          <Divider />
    </Grid>);})}
</Box>
                </Grid>

                {Basic && <ClgTabBasic selectionHandler={selectionHandler}/>}
                {Description && <ClgTabDescription selectionHandler={selectionHandler}/>}
                {Amenities && <ClgTabAmenities  selectionHandler={selectionHandler}/>}
                {Media &&<ClgTabMedia selectionHandler={selectionHandler}/>}
                {SEO && <ClgTabSEO selectionHandler={selectionHandler}/>}
                {Schedule && <CollegeTabSchedule selectionHandler={selectionHandler}/>}
                {Contact && <ClgTabContact selectionHandler={selectionHandler}/>}
                {Course &&<ClgTabCourse selectionHandler={selectionHandler}/>}
                {Placement && <ClgTabPlacement selectionHandler={selectionHandler}/>}
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default EditCollege;
