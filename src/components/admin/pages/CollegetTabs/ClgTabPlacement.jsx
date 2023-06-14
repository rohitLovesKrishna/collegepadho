import {Button,FormControl,FormControlLabel, Grid,Paper, Radio, RadioGroup,Typography,} from "@mui/material";
import React, { useState,useEffect } from "react";
import thumbNail from "../../../assets/thumbnail.png";
import PlacementInner from "./PlacementInner";
import axios from "axios";
import BASE_URL from "../../../constant";
import SendDataBtn from "../../Global/SendDataBtn";
import { useNavigate } from "react-router-dom";

const ClgTabPlacement = () => {
  const navigate = useNavigate();
  const collegeId=localStorage.getItem('COLLEGE_ID')
  const [selectedImage, setSelectedImage] = useState(null);
const [imageUrl, setImageUrl] = useState(thumbNail);
  const [isCourse,setIsCourse] = useState("Without info");
useEffect(() => {if (selectedImage) {setImageUrl(URL.createObjectURL(selectedImage));}}, [selectedImage]);
const sendRecruiterToServer=()=>{if(selectedImage){const formdata = new FormData();formdata.append('myFile',selectedImage);formdata.append('cid',JSON.parse(collegeId));axios.post(`${BASE_URL}/api/recruiters`,formdata).then((res)=>{alert('Logo uploaded successfully');setImageUrl(thumbNail)}).catch((err)=>{console.log(err);})}else{alert("Please upload image")}}


  return (
    <>
     <Grid item container sx={{ justifyContent: "center", alignItems: "center",display:"flex" }} spacing={2} >
      <Paper  sx={{p:"10px",ml:"12px" }} >
        <Grid item container sx={{p:"15px", justifyContent: "center", alignItems: "center" }} spacing={2}>
          <Grid item xs={12} md={3}>
            <Typography color="#646c9a" align="right" mr="30px">
              Recruiters list (200X 200)
            </Typography>
          </Grid>
          <Grid item container sx={{width:"100%",justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}} spacing={2}>
            <Grid item sx={{ border: "1px solid #ebedf2" }} >
              <Button component={"label"} disableRipple>
                <img src={imageUrl} alt="pic" height="220px" width="220px" />
                <input onChange={e => setSelectedImage(e.target.files[0])} type="file" hidden={true} />
              </Button>
            </Grid>

          <Grid item xs={6}>
       <Button onClick={sendRecruiterToServer} sx={{textTransform:"unset"}} variant='contained' size='small' >Upload Now</Button> 
            </Grid>
          </Grid>
          <Grid item xs={12} borderBottom="1px solid #ebedf2" mt="30px"></Grid>
          <Grid item xs={3} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" },}}>  
        </Grid>
 <Grid item sx={{width:"100%"}}>
   <FormControl sx={{width:"100%",alignItems:"center",justifyContent:"center",display:'flex'}}>
      <RadioGroup aria-labelledby="demo-radio-buttons-group-label" onChange={(e)=>setIsCourse(e.target.value)} defaultValue="Without info" name="radio-buttons-group">
        <FormControlLabel sx={{color:"#646c9a"}}  value="Without info" control={<Radio  size='small'/>} label="No placement info" />
        <FormControlLabel sx={{color:"#646c9a"}} value="With info" control={<Radio  size='small'/>} label="College has placement info" />
      </RadioGroup>
    </FormControl>
     </Grid>
             {/* single form entry */}
              {isCourse === "With info"?<PlacementInner/>:""}
              {/* single form entry end */}
  
        </Grid>
      </Paper>

</Grid>
<Grid item container>
     <SendDataBtn sx={{bgcolor:"red"}} onClick={()=>{
      const ok = window.confirm("Are you sure ?","");
      if(ok){
  localStorage.removeItem("STEP_2");localStorage.removeItem("STEP_3");localStorage.removeItem("STEP_4");localStorage.removeItem("STEP_5");localStorage.removeItem("STEP_6");localStorage.removeItem("STEP_7");localStorage.removeItem("COLLEGE_ID");navigate('/admin/allcolleges')
      }
    }} type="Next" disabled={true} >Finish(PLEASE LOOK ALL FIELDS BEFORE SUBMIT)</SendDataBtn>
    </Grid>
    </>
  );
};

export default ClgTabPlacement;