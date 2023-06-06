import {Button,FormControl,FormControlLabel, Grid,IconButton,OutlinedInput,Paper, Radio, RadioGroup,Typography,} from "@mui/material";
import React, { useState,useEffect } from "react";
import thumbNail from "../../../assets/thumbnail.png";
import PlacementInnerForm from "./PlacementInnerForm";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from "axios";
import BASE_URL from "../../../constant";
import SendDataBtn from "../../Global/SendDataBtn";
import { useNavigate, useParams } from "react-router-dom";


// in edit secrtion use param.id instead of cid 

const ClgTabPlacement = () => {
  const param = useParams()
  const [isData,setIsData] = useState(false)
  const [isDataReceived,setIsDataReceived] = useState([])
  const navigate = useNavigate();
  const [collegeLogos,setCollegeLogos]  = useState([])
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(thumbNail);
  const [isCourse,setIsCourse] = useState("Without info");
  useEffect(() => {if (selectedImage) {setImageUrl(URL.createObjectURL(selectedImage));}}, [selectedImage]);
  const sendRecruiterToServer=()=>{if(selectedImage){const formdata = new FormData();formdata.append('myFile',selectedImage);formdata.append('cid',param.id);axios.post(`${BASE_URL}/api/recruiters`,formdata).then((res)=>{alert('Logo uploaded successfully');setImageUrl(thumbNail)}).catch((err)=>{console.log(err);})}else{alert("Please upload image")}}
  const fetchMedia = ()=>{axios.get(`${BASE_URL}/api/collegeinfo/${param.id}`).then((res)=>{setIsData(true);setCollegeLogos(res.data.response.collegeRecruitersImage);setIsDataReceived(res.data.response.collegePlacement);}).catch((err)=>{console.log(err);})}
  useEffect(()=>fetchMedia(),[param.id]);

const dataToServer=(e)=>{
  e.preventDefault()
  
  // axios.post(`${BASE_URL}/api/placementinfo`,{
  //   course:dataForm[0].placementcourse,batch:dataForm[1].placementyear,
  //   numberOfCompaniesVisited:dataForm[2].companyvisited,
  //   numberOfStudentsPlaced:dataForm[3].studentsplaced,
  //   minSalary:dataForm[4].minsalary,maxSalary:dataForm[5].maxsalary,
  //   averageSalary:dataForm[6].avgsalary,
  //   cid:JSON.parse(collegeId)
  // }).then((res)=>{alert('Data sent successfully');}).catch((err)=>{console.log(err);})
}

const deleteImageHandler = (e,id)=>{
console.log(id)
}

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
{/* all logos here */}
{isData?<Grid container spacing={2} justifyContent={"center"} mt={"20px"}>
  <Grid item xs={12}><Typography textAlign={'center'}><u>Uploaded Logos</u><span style={{color:"red"}}> (click on delete icon to delete)
    </span></Typography></Grid>
  {collegeLogos.map((item)=>{
    return (<Grid key={item._id} item sx={{position:"relative"}}> 
      <img width={"120px"} height={"100px"} src={`${BASE_URL}`+item.image} alt="pic" />
      <IconButton onClick={(e)=>deleteImageHandler(e,item._id)} sx={{color:"red",position:'absolute',right:"60px"}}>
      <DeleteOutlineIcon  sx={{color:"red",position:'absolute',top:"40px",fontSize:"30px"}}/>
      </IconButton>
    </Grid>)
  })}
</Grid>:<Typography mt={"20px"}>Loading...</Typography>}


<Grid item xs={12} borderBottom="1px solid #ebedf2" mt="30px"></Grid>
<Grid item xs={3} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" },}}></Grid>
 <Grid item sx={{width:"100%"}}>
   <FormControl sx={{width:"100%",alignItems:"center",justifyContent:"center",display:'flex'}}>
      <RadioGroup aria-labelledby="demo-radio-buttons-group-label" onChange={(e)=>setIsCourse(e.target.value)} defaultValue="Without info" name="radio-buttons-group">
        <FormControlLabel sx={{color:"#646c9a"}}  value="Without info" control={<Radio  size='small'/>} label="No placement info" />
        <FormControlLabel sx={{color:"#646c9a"}} value="With info" control={<Radio  size='small'/>} label="College has placement info" />
      </RadioGroup>
    </FormControl>
     </Grid>
{/* single form entry */}
              {isCourse === "With info"?<PlacementInnerForm totalPlacements={isDataReceived.length} />:""}
{/* single form entry end */}
  

{/* mapped forms if data available */}
 {isCourse === "With info" && isDataReceived.length > 0? 
 
 isDataReceived.map((item,index)=>{
  return (<form key={item._id} onSubmit={dataToServer}>

      <Grid item container spacing={2} sx={{ justifyContent: "center", alignItems: "center" }} >
          <Typography m="20px" sx={{color:"green",fontSize:"30px",fontWeight:"800"}}><u>Filled Placement {index+1} </u></Typography>
            <Grid item xs={12}>
              <Typography sx={{fontSize:"13px"}}>Add Course</Typography>
             
            </Grid>
            <Grid item xs={12}>
              <Typography color="#646c9a" sx={{fontSize:"17px",mb:"4px"}}>Course name</Typography>
              <OutlinedInput onChange={(e)=>{const newList =[...isDataReceived];newList[index].course = e.target.value;setIsDataReceived(newList)}}  value={item.course} required sx={{height:"40px"}} fullWidth name='Course name' ></OutlinedInput>
            </Grid>
            <Grid item xs={12} color="#646c9a">
            <Typography color="#646c9a" sx={{fontSize:"17px",mb:"4px"}}>Batch / year</Typography>
            <OutlinedInput onChange={(e)=>{const newList =[...isDataReceived];newList[index].batch = e.target.value;setIsDataReceived(newList)}}  value={item.batch} required sx={{height:"40px"}} fullWidth ></OutlinedInput>
            </Grid>
            
            <Grid item xs={12}>
            <Typography color="#646c9a" sx={{fontSize:"17px",mb:"4px"}}>Number of companies visited</Typography>
              <OutlinedInput onChange={(e)=>{const newList =[...isDataReceived];newList[index].numberOfCompaniesVisited = e.target.value;setIsDataReceived(newList)}}  value={item.numberOfCompaniesVisited} required sx={{height:"40px"}} fullWidth ></OutlinedInput>
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
            <Typography xs={12} color="#646c9a" sx={{fontSize:"17px",mb:"4px"}}>Number of students placed</Typography>
            <OutlinedInput onChange={(e)=>{const newList =[...isDataReceived];newList[index].numberOfStudentsPlaced = e.target.value;setIsDataReceived(newList)}}  value={item.numberOfStudentsPlaced} required sx={{height:"40px"}} fullWidth ></OutlinedInput>
            </Grid>

            <Grid item xs={12}>
            <Typography item xs={12} color="#646c9a" sx={{fontSize:"17px",mb:"4px"}}>Minimum salary</Typography>
              <OutlinedInput onChange={(e)=>{const newList =[...isDataReceived];newList[index].minSalary = e.target.value;setIsDataReceived(newList)}}  value={item.minSalary} required sx={{height:"40px"}} fullWidth ></OutlinedInput>
            </Grid>

            <Grid item xs={12}>
            <Typography xs={12} color="#646c9a" sx={{fontSize:"17px",mb:"4px"}}>Maximum salary</Typography>
              <OutlinedInput onChange={(e)=>{const newList =[...isDataReceived];newList[index].maxSalary = e.target.value;setIsDataReceived(newList)}}  value={item.maxSalary} required sx={{height:"40px"}} fullWidth  ></OutlinedInput>
            </Grid>
            <Grid item xs={12}>
            <Typography xs={12} color="#646c9a" sx={{fontSize:"17px",mb:"4px"}}>Average salary</Typography>
              <OutlinedInput onChange={(e)=>{const newList =[...isDataReceived];newList[index].averageSalary = e.target.value;setIsDataReceived(newList)}}  value={item.averageSalary}  required sx={{height:"40px"}} fullWidth  ></OutlinedInput>
            </Grid>
           
            <Grid item xs={12} md={12} lg={12}>
            <Typography xs={12} color="#646c9a" sx={{fontSize:"17px",mb:"4px"}}>Placement report pdf <span style={{fontSize:"13px"}}>If available</span></Typography>
            <input type='file'/>
            </Grid>

          </Grid> 
  
          <Grid item container>
    <SendDataBtn type="Send" disabled={!true} >Send Data</SendDataBtn>
          </Grid>
   </form>)
 }) :""}

{/* mapped dforms ended */}


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